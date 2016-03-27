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

# Try it out locally
```shell
cd web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```
# Publish to to GitHub pages (limited functionaly)

Publish web-substree based on instructions from https://gist.github.com/cobyism/4730490:

```shell
git subtree push --prefix web origin gh-pages
```
... and go to http://<USERNAME>.github.io/<REPOSITORY>.
