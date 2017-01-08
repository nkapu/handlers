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

```
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

* open x-man-page://security;type=a

```
valhalla:osx nkapu$ sudo ./execve.d
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fe460412f20) in action #7 at DIF offset 36
2017 Jan  8 15:15:35 execve open[33687] [syscall return] 'open' 'x-man-page://security' '' '' '' '' '' '' '' '' '' ''
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fdf4b9b6600) in action #7 at DIF offset 36
2017 Jan  8 15:15:36 execve login[33688] [syscall return] 'login' '-pfq' 'nkapu' '/usr/bin/man' '-P' 'ul' 'security' '' '' '' '' ''
2017 Jan  8 15:15:36 execve login[33689] -> /usr/bin/man '-man' '-P' 'ul' 'security' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:36 execve man[33689] [syscall return] '-man' '-P' 'ul' 'security' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve sh[33692] -> /usr/bin/tbl '/usr/bin/tbl' '/usr/share/man/man1/security.1' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve tbl[33692] [syscall return] '/usr/bin/tbl' '/usr/share/man/man1/security.1' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve sh[33693] -> /usr/bin/groff '/usr/bin/groff' '-Wall' '-mtty-char' '-Tascii' '-mandoc' '-c' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve groff[33693] [syscall return] '/usr/bin/groff' '-Wall' '-mtty-char' '-Tascii' '-mandoc' '-c' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve sh[33695] -> /usr/bin/ul 'ul' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve ul[33695] [syscall return] 'ul' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve groff[33696] -> /usr/bin/troff 'troff' '-Wall' '-mtty-char' '-mandoc' '-c' '-Tascii' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve troff[33696] [syscall return] 'troff' '-Wall' '-mtty-char' '-mandoc' '-c' '-Tascii' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve groff[33697] -> /usr/bin/grotty 'grotty' '' '' '' '' '' '' '' '' '' '' ''
2017 Jan  8 15:15:37 execve grotty[33697] [syscall return] 'grotty' '' '' '' '' '' '' '' '' '' '' ''
```
