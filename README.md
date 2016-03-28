# handlers - discover, test and instrument URL handlers

URL handlers are are those nice bits in the front of the URL (e.g. http:, https:, ftp:, skype:) that greatly expand the things a web page can do to you and your device. Many surprising applications have a nasty habit to register these for you without asking any questions.

## Try it out on the web

Check out http://hack.urlhandlers.io, it gives you a JavaScript based exploration and testing interface with limited functionality (only canned urlhandler information is available).

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
```

### Publishing to the GitHub pages (limited functionality)

Publish web-substree based on instructions from https://gist.github.com/cobyism/4730490:

```shell
git subtree push --prefix web origin gh-pages
```
... and go to http://<USERNAME>.github.io/<REPOSITORY>.
