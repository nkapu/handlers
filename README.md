# Discover and Hack URL handlers

URL handlers are the bits in the front of the URLs (e.g. http:, https:, ftp:, skype:). They add things a web page can do to you and your device. Surprising applications have a nasty habit to register these without asking.

---

## Try it out on the web

Check out http://hack.urlhandlers.info, it gives you a JavaScript based exploration and testing interface with limited functionality (only canned urlhandler information is available).

---

## Try it out locally

If you plan to dig deeper you can use these tools locally. A quick start to get more out of this on OSX:

```shell
git clone https://github.com/nkapu/handlers.git
cd handlers/web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```

---

## Tools

This repository collects discovery, testing and instrumentation
tooling for research in URL handlers.

![Minimal Viable Product](https://raw.githubusercontent.com/nkapu/handlers/master/doc/mvp-scaled.png)

---

### Discovery

 * OSX: [Python based discovery tool](osx/handlers-list.py)
 * Windows: Windows Powershell Script prototype [WIP]

---

### Testing

 * [Launcher](osx/open.swift) for the [OSX Launch Services](https://developer.apple.com/library/mac/documentation/Carbon/Reference/LaunchServicesReference/#//apple_ref/c/func/LSOpenURLsWithRole)
 * OSX `open` CLI tool
 * Online JavaScript based [testing UI for the Browsers](http://hack.urlhandlers.info)
  * HTML file with direct invocation (e.g. iframe)
  * HTML redirects

---

### Instrumentation

[WIP]

---

## Developing

### Setting up local development tools (OSX)

```shell
sudo easy_install pip
sudo pip install flake8
# Install Node.js from https://nodejs.org/en/download/ and then
cd <projectdir>
npm install
node_modules/.bin/jspm install
```

We use [JSPM](http://jspm.io/docs/getting-started.html) for the front/client-side JavaScript dependency bundling.

Optionally install [Atom](http://atom.io) and then these Atom packages:

```shell
apm install linter
apm install linter-flake8
apm install linter-htmlhint
apm install linter-jsonlint
apm install linter-eslint
```

---

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

---

### Debugging

Random example of debugging the JavaScript modules from the console:

```javascript
SystemJS.import('./browserinfo').then(function(_) {     
  console.log(_.browserinfo.shortinfo());
});
```

---

### Contributing to the "crowd sourced" handler info

```shell
cd web
../osx/handlers-list.py > handlers.json
cp db/handlerinfo.json db/handlerinfo.json.orig
../bin/handlers-merge.py db/handlerinfo.json.orig db/handlerpresets.json db/handlerurls.json handlers.json > db/handlerinfo.json
git commit -a
git push
```

---

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

---

## Plans for a crowd sourced vulnerability research experiment

 1. Good (green) and Bad (red) URL distribution experiment
  * Good URL has a good cert and should work
  * Bad URL has a bad cert and should not working
  * Both point to a back end that asks if you had to accept anything to get there
  * Dashboard for green vs. red and answer `n/a or yes or no`
  * End game is to find out as many user agents as possible and as a side
  product find out if any of them potentially accept the bad cert
 1. Click through *my list of interesting URLs* experiment
  * List of presets
  * some feedback mechanism?
  * ...
 1. Load the X-mas tree of embedded URLs page
  * Instagram or Tweet the resulting screenshots or videos of what happens
  * ...
