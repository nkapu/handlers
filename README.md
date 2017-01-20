# Discover and Hack URL handlers

[![CircleCI](https://circleci.com/gh/ouspg/urlhandlers.svg?style=shield)](https://circleci.com/gh/ouspg/urlhandlers)
[![dependencies Status](https://david-dm.org/ouspg/urlhandlers/status.svg)](https://david-dm.org/ouspg/urlhandlers)
[![devDependency Status](https://david-dm.org/ouspg/urlhandlers/dev-status.svg)](https://david-dm.org/ouspg/urlhandlers#info=devDependencies)

URL handlers are the bits in the front of the URLs (e.g. http:, https:,
ftp:, skype:). They add things a web page can do to you and your device.
Surprising applications have a nasty habit to register these without asking.
Learn more from our [videos](https://www.youtube.com/playlist?list=PL1fscFAejNoCk_iEHN9Urvl7SSB2xG-AR)
or [presentation](http://hack.urlhandlers.info/assembly/).

[![Christmas Time with URL handlers](https://img.youtube.com/vi/Z9IG9ZD3PNI/0.jpg)](https://www.youtube.com/watch?v=Z9IG9ZD3PNI)

## Try it out on the web

Check out the [http://hack.urlhandlers.info](http://hack.urlhandlers.info),
it gives you a prototype of a JavaScript based exploration and testing
interface with limited functionality (only canned URL handler
  information is available).

## Try it out locally

If you plan to dig deeper you can use these tools locally. A quick start to
get more out of this on OSX:

```shell
git clone https://github.com/ouspg/urlhandlers.git
cd handlers/web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```

## Tools

This repository collects discovery, testing and instrumentation
tooling for research in URL handlers.

![Minimal Viable Product](https://raw.githubusercontent.com/ouspg/urlhandlers/master/doc/mvp-scaled.png)

### Discovery

* OSX: [Python based discovery tool](osx/handlers-list.py)
* Windows: Windows Powershell Script prototype [WIP]

### Testing

* [Launcher](osx/open.swift) for the [OSX Launch Services](https://developer.apple.com/library/mac/documentation/Carbon/Reference/LaunchServicesReference/#//apple_ref/c/func/LSOpenURLsWithRole)
* OSX `open` CLI tool
* Online JavaScript based [testing UI for the Browsers](http://hack.urlhandlers.info)
* HTML file with direct invocation (e.g. iframe)
* HTML redirects

### Instrumentation

* [execve monitoring DTrace-script](osx/execve.d) (tested on OSX)

## Contibute

See [contribution and development documentation](CONTRIBUTING.md).

## References

* [handleOpenURL - Shared Interapp Communication!](http://handleopenurl.com/)
* [IPhone URL Schemes](http://wiki.akosma.com/IPhone_URL_Schemes)
* [lsregister: How Files Are Handled in Mac OS X](http://krypted.com/mac-security/lsregister-associating-file-types-in-mac-os-x/)
