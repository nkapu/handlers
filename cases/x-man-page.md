# x-man-page: URL handler studied for the OSX Terminal.app

We studied the behaviour of the `x-man-page` URL hander on the OSX.
By default this URL scheme is registered to `Terminal.app`.

We found out two distinct ways to use this URL handler to search for
and display manual pages. Since external programs are launched with
arguments parsed from the given URL, ability to affect the behaviour
of these programs via those arguments should be studied.

## URL format

`strings` command can be used to discover two potential format variants
for this URL scheme.

```sh
$ strings /Applications/Utilities/Terminal.app/Contents/MacOS/Terminal | grep x-man-page:
x-man-page://%@/%@
x-man-page:///%@;type=a
```

For testing the two variant launch [`execve()` instrumentation](../osx/execve.d):

```sh
sudo osx/execve.d
```

This terminal will start tracing all `execve()`-syscalls with the DTrace-facility.

### Normal variant

Launch the URL handler:

```sh
open "x-man-page://mysection/mypage"
```

Observe the instrumentation:

<!-- markdownlint-disable MD013 -->

```console
2016 Jul 11 03:25:59 execve bash[22433] -> /usr/bin/open 'open' 'x-man-page://mysection/mypage' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:25:59 execve open[22433] [syscall return] 'open' 'x-man-page://mysection/mypage' '' '' '' '' '' '' '' '' '' ''
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fdeed486990) in action #7 at DIF offset 36
2016 Jul 11 03:26:00 execve login[22434] [syscall return] 'login' '-pfq' 'fenris' '/usr/bin/man' '-P' 'ul' '-S' 'mysection' 'mypage' '' '' ''
2016 Jul 11 03:26:01 execve login[22435] -> /usr/bin/man '-man' '-P' 'ul' '-S' 'mysection' 'mypage' '' '' '' '' '' ''
2016 Jul 11 03:26:01 execve man[22435] [syscall return] '-man' '-P' 'ul' '-S' 'mysection' 'mypage' '' '' '' '' '' ''
```

<!-- markdownlint-enable MD013 -->

### Apropos variant

Launch the URL handler:

```sh
open "x-man-page://mysection/pattern;type=a"
```

Observe the instrumentation:

<!-- markdownlint-disable MD013 -->

```console
2016 Jul 11 03:31:18 execve bash[22487] -> /usr/bin/open 'open' 'x-man-page://mysection/pattern;type=a' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:18 execve open[22487] [syscall return] 'open' 'x-man-page://mysection/pattern;type=a' '' '' '' '' '' '' '' '' '' ''
dtrace: error on enabled probe ID 2 (ID 268: syscall::execve:entry): invalid address (0x7fdeea795f10) in action #7 at DIF offset 36
2016 Jul 11 03:31:19 execve login[22488] [syscall return] 'login' '-pfq' 'fenris' '/usr/bin/man' '-P' 'cat' '-k' '-S' 'mysection' 'pattern' '' ''
2016 Jul 11 03:31:20 execve login[22489] -> /usr/bin/man '-man' '-P' 'cat' '-k' '-S' 'mysection' 'pattern' '' '' '' '' ''
2016 Jul 11 03:31:20 execve man[22489] [syscall return] '-man' '-P' 'cat' '-k' '-S' 'mysection' 'pattern' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22490] -> /usr/bin/apropos '/usr/bin/apropos' 'pattern' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22490] [syscall return] '/bin/sh' '/usr/bin/apropos' 'pattern' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22491] -> /usr/bin/basename 'basename' '/usr/bin/apropos' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve basename[22491] [syscall return] 'basename' '/usr/bin/apropos' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22493] -> /usr/bin/man 'man' '--path' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve man[22493] [syscall return] 'man' '--path' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22494] -> /usr/bin/tr 'tr' ':' '\040' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve tr[22494] [syscall return] 'tr' ':' '\040' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22497] -> /usr/bin/grep 'grep' '-i' 'pattern' '/usr/share/man/whatis' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve grep[22497] [syscall return] 'grep' '-i' 'pattern' '/usr/share/man/whatis' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22498] -> /bin/cat 'cat' '' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve cat[22498] [syscall return] 'cat' '' '' '' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve sh[22499] -> /usr/bin/grep 'grep' '-i' 'pattern' '/usr/local/share/man/whatis' '' '' '' '' '' '' '' ''
2016 Jul 11 03:31:20 execve grep[22499] [syscall return] 'grep' '-i' 'pattern' '/usr/local/share/man/whatis' '' '' '' '' '' '' '' ''
```

<!-- markdownlint-disable MD013 -->
