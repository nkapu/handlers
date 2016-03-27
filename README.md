# handlers

Tooling to discover, test and instrument URL handlers.

## Discovery

## Testing

* As direct as possible
  * https://developer.apple.com/library/mac/documentation/Carbon/Reference/LaunchServicesReference/#//apple_ref/c/func/LSOpenURLsWithRole
* Open
* Safari / Other browsers
 * HTML file with direct invocation
 * HTML redirects

##  Instrumentation

# Try it out
```shell
cd web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```
