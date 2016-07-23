param (
	[Parameter(mandatory=$true)][string]$filename
)

# Invoke with:
# powershell -ExecutionPolicy Bypass -File handlers-list.ps1 -output handlers.json
# Probably needs an user account with privileged access

# JSON helper functions for Powershell 2 users (Windows 7)
add-type -assemblyName System.ServiceModel.Web

function Read-Stream {
PARAM(
   [Parameter(Position=0,ValueFromPipeline=$true)]$Stream
)
process {
   $bytes = $Stream.ToArray()
   [System.Text.Encoding]::UTF8.GetString($bytes,0,$bytes.Length)
}}

# Make-Json expects hashtables and arrays as container data types
# and anything serializable as values
function Make-Json {
Param(
	[Parameter(ValueFromPipeline=$true)][HashTable]$InputObject,
	[Parameter(Mandatory=$false)]$tab
)
begin {
   $ser = @{}
   $jsona = @()
}
process {
	function serialize($data) {
		$type = $data.GetType()
		if(!$Ser.ContainsKey($Type)) {
			$Ser.($Type) = New-Object System.Runtime.Serialization.Json.DataContractJsonSerializer $type
		}
		$stream = New-Object System.IO.MemoryStream
		$Ser.($Type).WriteObject($stream, $data)
		(Read-Stream $stream)
	}
	function handle_array($val) {
		$out = ""
		$tab += 1
		$nexttab += 1
		foreach ($member in $val) {
			if ($member -is [System.Collections.Hashtable]) {
				$out += Make-Json $member $nexttab
			} elseif ($member -is [System.Array]) {
				$out += "`t" * $tab + "[`n" + (handle_array($member))
			} else {
				$out += "`t" * $tab + (serialize $member) + ",`n"
			}
		}
		$tab -= 1
		$nexttab -= 1
		$out += "`n" + "`t" * $tab + "]"
		$out
	}
		
	if(!$tab) {
		$tab = 1
		$starttab = 0
	} else {
		$starttab = $tab - 1
	}
	$nexttab = $tab + 1
	$jsoni =
	foreach($input in $InputObject.GetEnumerator() | Where { $_.Value } ) {
		$val = $input.Value
		if($val -is [System.Collections.Hashtable]) {
			"`t" * $tab + '"'+$input.Key+'": ' + "`n" + (Make-Json $input.Value $nexttab)
		} elseif($val -is [System.Array]) {
			"`t" * $tab + '"'+$input.Key+'": [' + "`n" + (handle_array($val))
		} else {
			"`t" * $tab + '"'+$input.Key+'": ' + (serialize $val)
		}
	}

	$jsona += "`t" * $starttab + "{`n" +($jsoni -join ",`n")+ "`n" + "`t" * $starttab + "}"
}
end {
	if($jsona.Count -gt 1) {
		"[$($jsona -join ",`n")]"
	} else {
		$jsona
	}
}}

function Check-Command($cmdname) {
	return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Now, let's enumerate the registy. First, add HKCR
New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
push-location
set-location HKCR:\

# Let's enumeration!
$handlers = @{}
Get-ChildItem HKCR:\ -ErrorAction SilentlyContinue |
Where-Object {$_.GetValueNames() | Where-Object {$_ -eq "URL Protocol"}} |
foreach {
	$ext = $_.PsPath.Split("\")[2]
	if(!$handlers.contains($ext)) {
		$handlers.item($ext) = @{"apps"=@{}}
	}
	$extapp = @{"registrykey"=$_.Name}

	$values = Get-ItemProperty $_
	$shellopen = Get-ItemProperty "$($_)\Shell\Open\Command" -ErrorAction SilentlyContinue
	if ($shellopen) {
		$shellopen = $shellopen | Select-Object -ExpandProperty '(Default)'
		$extapp.item("path") = $shellopen -replace "`n","" -replace "`r",""
	}
	$descr = $values | Select-Object -ExpandProperty '(Default)' -ErrorAction SilentlyContinue
	if ($descr) {
		$extapp.item("name") = $descr -replace "`n","" -replace "`r",""
	}
	$name = $values | Select-Object -ExpandProperty FriendlyTypeName -ErrorAction SilentlyContinue
	if ($name) {
		$extapp.item("friendlytypename") = $name -replace "`n","" -replace "`r",""
	}
	$handlers.item($ext).item("apps") += $extapp
}

pop-location

if (Check-Command -cmdname "ConvertTo-Json") {
	ConvertTo-Json $handlers | out-file $filename
} else {
	Make-Json $handlers | out-file $filename
}
