# URL handlers - Disobey 2017 presentation

## Using

Can be viewed [on the web](http://hack.urlhandlers.info/disobey/).

Can also be used locally by running a web server.

```console
npm install
npm start
```

And connecting the browser to <http://localhost:8080/disobey/>.

## Publishing on the Github Pages

```console
git subtree push --prefix web origin gh-pages
```

## Setting

* Target is <https://disobey.fi>

## Content

* Kickoff
  * Autumn 2015 (Aug)
  * 2015-09 URL handlers collab founded
  * Turmio hacks terminals, learned to launch them from the
    web and asked 'Is it safe?'
* Hobby phase I
  * Spring 2016
  * Manual (a bit unsystematic) testing by turmio and nkapu
  * A lot of vectors (handlers, "browsers", injection vectors)
  * 2016-03 URL handlers repository founded
  * Started a web UI to help systematic testing
  * Started collecting prior art
* Work phase I
  * Summer 2016
  * Enter OUSPG Open
  * Couple of work weeks sponsored by Google @OUSPG
  * Demos (on videos):
    * X-Mas tree launch spree
    * Ad carrousel
    * Kernel Crash
  * Assembly 2016 presentation
* Hobby Phase II
  * Autumn 2016
  * Enter Google Functions Beta for vector backend
  * Fixes by Apple
  * Winter 2017
  * Disobey 2017 presentation

## Dtrace

* x-man-page://security

<!-- markdownlint-disable MD013 -->

```console
valhalla:osx nkapu$ sudo ./execve.d
2017 Jan  8 15:06:41 execve bash[33604] -> /usr/bin/open 'open' 'x-man-page://security' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:41 execve open[33604] [syscall return] 'open' 'x-man-page://security' '' '' '' '' '' '' '' '' '' ''
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fdf49687b90) in action #7 at DIF offset 36
2017 Jan  8 15:06:42 execve login[33605] [syscall return] 'login' '-pfq' 'nkapu' '/usr/bin/man' '-P' 'ul' 'security' '' '' '' '' ''
2017 Jan  8 15:06:42 execve login[33606] -> /usr/bin/man '-man' '-P' 'ul' 'security' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:42 execve man[33606] [syscall return] '-man' '-P' 'ul' 'security' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:42 execve sh[33609] -> /usr/bin/tbl '/usr/bin/tbl' '/usr/share/man/man1/security.1' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:42 execve tbl[33609] [syscall return] '/usr/bin/tbl' '/usr/share/man/man1/security.1' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:42 execve sh[33610] -> /usr/bin/groff '/usr/bin/groff' '-Wall' '-mtty-char' '-Tascii' '-mandoc' '-c' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve groff[33610] [syscall return] '/usr/bin/groff' '-Wall' '-mtty-char' '-Tascii' '-mandoc' '-c' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve sh[33612] -> /usr/bin/ul 'ul' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve ul[33612] [syscall return] 'ul' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve groff[33613] -> /usr/bin/troff 'troff' '-Wall' '-mtty-char' '-mandoc' '-c' '-Tascii' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve troff[33613] [syscall return] 'troff' '-Wall' '-mtty-char' '-mandoc' '-c' '-Tascii' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve groff[33614] -> /usr/bin/grotty 'grotty' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:06:43 execve grotty[33614] [syscall return] 'grotty' '' '' '' '' '' '' '' '' '' '' ''
```

<!-- markdownlint-enable MD013 -->

* x-man-page://security;type=a

<!-- markdownlint-disable MD013 -->

```console
valhalla:osx nkapu$ sudo ./execve.d
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fe460701040) in action #7 at DIF offset 36
2017 Jan  8 15:28:50 execve open[33923] [syscall return] 'open' 'x-man-page:///security;type=a' '' '' '' '' '' '' '' '' '' ''
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fdf4b96eac0) in action #7 at DIF offset 36
2017 Jan  8 15:28:51 execve login[33924] [syscall return] 'login' '-pfq' 'nkapu' '/usr/bin/man' '-P' 'cat' '-k' 'security' '' '' '' ''
2017 Jan  8 15:28:51 execve login[33925] -> /usr/bin/man '-man' '-P' 'cat' '-k' 'security' '' '' '' '' '' '' ''
2017 Jan  8 15:28:51 execve man[33925] [syscall return] '-man' '-P' 'cat' '-k' 'security' '' '' '' '' '' '' ''
2017 Jan  8 15:28:51 execve sh[33926] -> /usr/bin/apropos '/usr/bin/apropos' 'security' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:51 execve sh[33926] [syscall return] '/bin/sh' '/usr/bin/apropos' 'security' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:51 execve sh[33927] -> /usr/bin/basename 'basename' '/usr/bin/apropos' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:51 execve basename[33927] [syscall return] 'basename' '/usr/bin/apropos' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve sh[33929] -> /usr/bin/man 'man' '--path' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve man[33929] [syscall return] 'man' '--path' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve sh[33930] -> /usr/bin/tr 'tr' ':' '\040' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve tr[33930] [syscall return] 'tr' ':' '\040' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve sh[33933] -> /usr/bin/grep 'grep' '-i' 'security' '/usr/share/man/whatis' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve grep[33933] [syscall return] 'grep' '-i' 'security' '/usr/share/man/whatis' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve sh[33934] -> /bin/cat 'cat' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve cat[33934] [syscall return] 'cat' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve sh[33935] -> /usr/bin/grep 'grep' '-i' 'security' '/usr/local/share/man/whatis' '' '' '' '' '' '' '' ''
2017 Jan  8 15:28:52 execve grep[33935] [syscall return] 'grep' '-i' 'security' '/usr/local/share/man/whatis' '' '' '' '' '' '' '' ''
```

<!-- markdownlint-enable MD013 -->

## Browser comic part 1

* Browser: q?
* Server -> Browser: img src="Danger://
* Browser: Thou shalt not pass!

## Browser comic part 2

* Browser: q?
* Server -> Browser: src="http://bouncer/fuu"
* Browser -> Bouncer: q?
* Bouncer -> Browser: redirect to "Danger://"
* Browser: "Ah ok, here goes!"
