[CmdletBinding()]
param (
	[Parameter(mandatory=$true)][string]$output
)

# Invoke with:
# powershell -ExecutionPolicy Bypass -File handlers-list.ps1 -output handlers.json
# Probably needs an user account with privileged access

# Make-Json expects hashtables and arrays as container data types
# and anything with a working ToString method as values.
function Make-Json {
[CmdletBinding()]
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
		$data = [regex]::Replace($data.ToString(), '(?<!\\)\\', '\\')
		$data = [regex]::Replace($data, '(?<!\\)"', '\"')
		'"' + $data + '"'
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
		"[$($jsona -join ",`n")]".ToLower()
	} else {
		$jsona.ToLower()
	}
}}

function Check-Command($cmdname) {
	return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Now, let's enumerate the registy. First, add HKCR
New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
Push-Location
Set-Location HKCR:\

# Let's enumeration!
$handlers = @{}
Get-ChildItem HKCR:\ -ErrorAction SilentlyContinue |
Where-Object {$_.GetValueNames() | Where-Object {$_ -eq "URL Protocol"}} |
foreach {
	$ext = $_.PsPath.Split("\")[2]
	if(!$handlers.contains($ext)) {
		$handlers.item($ext) = @{"apps"=@()}
	}
	$extapp = @{"registrykey"=$_.Name}

	$values = Get-ItemProperty $_
	$shellopen = Get-ItemProperty "$($_)\Shell\Open\Command" -ErrorAction SilentlyContinue
	if ($shellopen) {
		$shellopen = $shellopen | Select-Object -ExpandProperty '(Default)' -ErrorAction SilentlyContinue
		if ($shellopen) {
			$shellopen = $shellopen -replace "`n","" -replace "`r",""
			$shellopen = $shellopen.split("\")[-1]
			$shellopen = $shellopen.split(" ")[0]
			$shellopen = $shellopen.split('"')[0]
			$extapp.item("path") = $shellopen
		}
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


Pop-Location
Make-Json $handlers | out-file $output
