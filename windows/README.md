## Enumerate URL handlers on Windows

A powershell script for Windows, tested on Windows 7, 8.1, 10 and Server 2008. The ExecutionPolicy bypass might be needed, as the PowerShell script is not signed.

```shell
powershell -ExecutionPolicy Bypass -File handlers-list.ps1 -output handlers.json
```
