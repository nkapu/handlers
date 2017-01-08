<!-- markdownlint-disable MD026 MD041 -->

.center[

# Making of [urlhandlers://](#start)

## Press space to proceed

## Or go directly to the [Project Repo](https://github.com/ouspg/urlhandlers)

]

---

name: start

## Autumn 2015 - Spark

* Turmio hacks terminals :)
  * Learns to launch them automagically from the web
  * [x-man-page:///security](x-man-page:///security)
  * [x-man-page:///security;type=a](x-man-page:///security;type=a)
  * Asks aloud 'Is it safe?'

.right[![Man security](img/manpages.png)]

---

## Spoils of the man pages

* We wrote [a DTrace script for `execve` on OSX](https://github.com/ouspg/urlhandlers/blob/master/osx/execve.d)

<!-- markdownlint-disable MD013 -->

```console
'login' '-pfq' 'nkapu' '/usr/bin/man' '-P' 'cat' '-k' 'security'
sh[33926] -> /usr/bin/apropos '/usr/bin/apropos' 'security'
sh[33927] -> /usr/bin/basename 'basename' '/usr/bin/apropos'
sh[33929] -> /usr/bin/man 'man' '--path'
sh[33930] -> /usr/bin/tr 'tr' ':' '\040'
sh[33933] -> /usr/bin/grep 'grep' '-i' 'security' '/usr/share/man/whatis'
sh[33934] -> /bin/cat 'cat'
sh[33935] -> /usr/bin/grep 'grep' '-i' 'security' '/usr/local/share/man/whatis'
```

<!-- markdownlint-enable MD013 -->

* We wrote [an analysis in the Project Repo](https://github.com/ouspg/urlhandlers/blob/master/cases/x-man-page.md)

* To us it appears to be .red[**safe by accident**]
  from shell meta-character injection ... for now ... with our skills!

---

## Winter 2015-2016 - Happy hacking

* Occasional random hacking
* A bit of work shopping with [Kapsi Ry](https://www.kapsi.fi) activists
* A private Wiki for the "project" collaboration
* It became apparent that there were
  * Plenty of URL handlers that launch **out of the browser behavior**
  * Even more handler specific query parameters
  * A bunch browsers (browsers, electron apps, chat clients, ...)
  * Many injection vectors (web, email, document, direct, **redirect**, ...)
  * -> Too many combinations to cover and behaviors to analyze

.right[![Handlers to Devices](img/devices.png)]

---

## Logic of the denial

Some browsers whitelist autolaunch, blacklist deny, sometimes prompt
and sometimes don't when you try to active URL handlers. Safari used
to launch them all.

### Thumbs up for the paranoid browser

1. Browser -> Server: q?
1. Server -> Browser: Check this out, `img src="danger://"`
1. Browser: Yikes, **Thou shalt not pass!**

### ... we just wish it was smart as well!

1. Browser -> Server: q?
1. Server -> Browser: Check this out, `img src="<http://bouncer/fuu>"`
1. Browser -> Bouncer: q?
1. Bouncer -> Browser: You should redirect to `danger://`
1. Browser: **Ah ok, here goes!**