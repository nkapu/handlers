# handlers - discover and test URL handlers

URL handlers are are those nice bits in the front of the URL (e.g. http:, https:, ftp:, skype:) that greatly expand the things a web page can do to you and your device. Many surprising applications have a nasty habit to register these for you without asking any questions.

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

Bundling:

```shell
node_modules/.bin/jspm bundle handlers --inject
```

Unbundling (back to the drawing board):

```shell
jspm unbundle
```

https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md

### Publishing to the GitHub pages (limited functionality)

Publish web-substree based on instructions from https://gist.github.com/cobyism/4730490:

```shell
git subtree push --prefix web origin gh-pages
```
... and go to http://<USERNAME>.github.io/<REPOSITORY>.
