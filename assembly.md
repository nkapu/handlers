# Discover and Hack URL handlers [![CircleCI](https://circleci.com/gh/ouspg/urlhandlers.svg?style=shield)](https://circleci.com/gh/ouspg/urlhandlers)

URL handlers are the bits in the front of the URLs (e.g. http:, https:, ftp:, skype:). They add things a web page can do to you and your device. Surprising applications have a nasty habit to register these without asking.

---

## Try it out on the web

Check out http://hack.urlhandlers.info, it gives you a JavaScript based exploration and testing interface with limited functionality (only canned urlhandler information is available).

---

## Try it out locally

If you plan to dig deeper you can use these tools locally. A quick start to get more out of this on OSX:

```shell
git clone https://github.com/ouspg/urlhandlers.git
cd handlers/web
../osx/handlers-list.py > handlers.json
python -m SimpleHTTPServer 8080
```

---

## Tools

This repository collects discovery, testing and instrumentation
tooling for research in URL handlers.

![Minimal Viable Product](https://raw.githubusercontent.com/ouspg/urlhandlers/master/doc/mvp-scaled.png)
