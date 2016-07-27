# Contributing

## Contributing to the crowdsourced handler info

```shell
git clone https://github.com/ouspg/urlhandlers.git
cd urlhandlers/web
../osx/handlers-list.py > handlers.json
cp db/handlerinfo.json db/handlerinfo.json.orig
../bin/handlers-merge.py db/handlerinfo.json.orig db/handlerpresets.json \
  db/handlerurls.json handlers.json > db/handlerinfo.json
git commit -a
git push
```

## Developing

### Setting up local development tools (OSX)

```shell
sudo easy_install pip
sudo pip install flake8
sudo pip install tox
# Install Node.js from https://nodejs.org/en/download/ and then
cd <projectdir>
npm install
node_modules/.bin/jspm install
```

We use [JSPM](http://jspm.io/docs/getting-started.html) for the
front/client-side JavaScript dependency bundling.

Optionally install [Atom](http://atom.io) and then these Atom packages:

```shell
apm install linter
apm install linter-flake8
apm install linter-htmlhint
apm install linter-jsonlint
apm install linter-eslint
apm install linter-node-markdownlint
```

### Building

Bundling JavaScript dependencies:

```shell
$(npm bin)/jspm bundle handlers --inject
```

Unbundling (back to the drawing board):

```shell
$(npm bin)/jspm unbundle
```

Adapted from the [JSPM CLI Production Workflows](https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md)
documentation.

### Debugging

Random example of debugging the JavaScript modules from the console:

```javascript
SystemJS.import('./browserinfo').then(function(_) {
  console.log(_.browserinfo.shortinfo());
});
```

### Publishing to the GitHub pages (limited functionality)

Build a stand-alone JavaScript bundle and publish web-substree based on
[Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)
instructions:

```shell
$(npm bin)/jspm bundle-sfx handlers web/bundle-sfx.js
# modify index.html to load bundle-sfx.js (only)
git commit -a
git push
git subtree push --prefix web origin gh-pages
```

<!-- markdownlint-disable MD033 MD034 -->

... and go to http://<USERNAME>.github.io/<REPOSITORY>.

<!-- markdownlint-enable MD033 MD034-->
