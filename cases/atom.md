# atom:// URL hander(s) dissected

[Atom][1] has two distinct handlers for the atom:// URLs depending on the context. The internal resource handler and the external openURl event handler are reviewed below. Even tho the external handler was interesting we did not find the implementation to be outright dangerous in Atom 1.7.2 running on OSX. We documented the our findings to help others to do further analysis.

## Internal resource handlers

Internal resource handler is implemented in the [atom-protocol-handler.coffee][2]. It handles internal references to resouces from atom code and packages. e.g. from the following package stylesheet:

```css
.close-icon {
     background-image: url("atom://<relativepath>/close.png");
}
```

In the version 1.7.2 the internal resource handler extracts the relative path from the given URL (with a bit suspicious `substr(7)` magic. Then it searches for the given relative path from the `dev/packages` (if in development mode) and `packages` in the Atom home directory (`~/.atom`) and `node_modules` in the resource directory. If the path is found to exist then the callback is activated.

We ignore this handler code since it appears not to be invocable externally.

## openURL handler

The external openURL event (e.g. launching atom:// URL from the browser) is handled by the `openUrl()` function in the [atom-application.coffee][3].

The handler takes the host part of the URL as the package name and then checks if the package name is present in the list of the packages discovered by the `getAvailablePackageMetadata()` function in [package-manager.coffee][4]. Packages are discovered from from the `dev/packages` (if in development mode) and `packages` in the Atom home directory (`~/.atom`) and `node_modules` in the resource directory.

This is a safer approach than what the internal resource handler uses both due to sensible "comparison against discover only" -approach in the code and by the fact that only the host part of the URL is used for the package name.

```javascript
> require("url").parse("atom://a~b/test").host
"a"
```

If the package name from the URL is found from the list of discovered package and the package has value for the `urlMain` key in its metadata in `package.json` then the code pointed by the value is called. For example the following `package.json` for the given package would lead to execution of `<packagedir>/lib/kek.js`.

```
{
  "urlMain": "./lib/kek"
}
```

By itself this is not a problem since if the attacker would be able to install a malicious package the he could use the package itself for
the attack directly and the external `atom://` URLs would merely provide one command and control channel.

However there is a small twist. The `openUrl()` function uses `resolvePackagePath()` of the package manager to actually construct the path to the code to be executed. For some reason that function also includes the current working directory as the first place where the package is sought from. This dubious behaviour has already been discussed as a bug in the [atom issue #10982][5].

This means that if there is a directory in the Atom's current working directory with same name as a legit installed package then the code pointed by legit package's `urlMain` is executed from that (wrong) directory. Fortunately at least on the OSX the Atom's current working directory seems to be the root directory (`/`). You can find out the current working directory by opening the Atom inspector console (ALT + CMD + i) and running:

```javascript
> require("process").cwd()
"/"
```

This appears to limit the possible attack to following preconditions:

1. Attacker code has to be placed into a directory directly under the root directory (e.g. `/tmp`) via social engineering or some other bug.
1. User has installed a legit package with the name of that directory (i.e. `tmp` package) and that package has `urlMain` defined in its metadata.
1. User visits external content that has an embedded link of `atom://tmp/something` with a browser that allows launching those links (preferrably without user interaction).

Only under these conditions the attacker's code gets executed.

## Further study

Current working directory should be checked on the other platforms that Atom runs on.

Furthermore the potential `urlMain` handlers of individual packages should be checked to be safe when invoked. A sample `urlMain` handler for a package looks like:

```javascript
var url = require("url");

module.exports = function() {
    var urlToOpen = JSON.parse(decodeURIComponent(location.hash.substr(1))).urlToOpen;
    alert(url.parse(urlToOpen).pathname.substr(1));
    window.close();
};
```

We should ensure that no unsafe action is taken based on the passed url by any of the Atom packages.

[1]: http://atom.io "Atom - A hackable text editor for the 21st Century"
[2]: https://github.com/atom/atom/blob/master/src/browser/atom-protocol-handler.coffee
[3]: https://github.com/atom/atom/blob/master/src/browser/atom-application.coffee
[4]: https://github.com/atom/atom/blob/master/src/package-manager.coffee
[5]: https://github.com/atom/atom/issues/10982 "Atom bug #10982"
