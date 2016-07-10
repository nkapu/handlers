tell application "Contacts"
	repeat with peeps in people
		log ("name: " & name of peeps)
		log ("addressbook://" & id of peeps)
	end repeat
end tell
