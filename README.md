# Discover and Hack URL handlers

URL handlers are the bits in the front of the URLs (e.g. http:, https:, ftp:, skype:). They add things a web page can do to you and your device. Surprising applications have a nasty habit to register these without asking.

## Try it out on the web

Check out http://hack.urlhandlers.info, it gives you a JavaScript based exploration and testing interface with limited functionality (only canned urlhandler information is available).

## Try it out locally

If you plan to dig deeper you can you can use these tools locally. A quick start to get more out of this on OSX:

```shell
git clone https://github.com/nkapu/handlers.git
cd web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```

## Tools

WIP

### Discovery

### Testing

* As direct as possible
  * https://developer.apple.com/library/mac/documentation/Carbon/Reference/LaunchServicesReference/#//apple_ref/c/func/LSOpenURLsWithRole
* Open
* Safari / Other browsers
 * HTML file with direct invocation
 * HTML redirects

### Instrumentation

## Developing

### Setting up local development tools (OSX)

```shell
sudo easy_install pip
sudo pip install flake8
# Install Node.js from https://nodejs.org/en/download/ and then
cd <projectdir>
npm install
node_modules/.bin/jspm install
# optionally install Atom from atom.io and then these Atom packages
apm install linter
apm install linter-flake8
apm install linter-htmlhint
apm install linter-jsonlint
apm install linter-eslint
```
We use JSPM for the front/client-side JavaScript dependency bundling (see http://jspm.io/docs/getting-started.html).

### Building

Bundling JavaScript dependencies:

```shell
$(npm bin)/jspm bundle handlers --inject
```

Unbundling (back to the drawing board):

```shell
$(npm bin)/jspm unbundle
```

https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md

### Debugging

Random example of debugging the JavaScript modules from the console:

```javascript
SystemJS.import('./browserinfo').then(function(_) {     
  console.log(_.browserinfo.shortinfo());
});
```

### Contributing to the "crowd sourced" handler info

```shell
cd web
../osx/handlers-list.py > handlers.json
cp handlerinfo.json handlerinfo.json.orig
../bin/handlers-merge.py handlerinfo.json.orig handlers.json > handerinfo.json
git commit -a
git push
```

### Publishing to the GitHub pages (limited functionality)

Build a stand-alone JavaScript bundle and publish web-substree based on
instructions from https://gist.github.com/cobyism/4730490:

```shell
$(npm bin)/jspm bundle-sfx handlers web/bundle-sfx.js
# modify index.html to load bundle-sfx.js (only)
git commit -a
git push
git subtree push --prefix web origin gh-pages
```
... and go to http://<USERNAME>.github.io/<REPOSITORY>.
