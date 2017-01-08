<!-- markdownlint-disable MD026 MD041 -->

.center[

# Making of [urlhandlers://](#start)

## Press space to proceed

## Or go directly to the [Project Repo](https://github.com/ouspg/urlhandlers)

]

---

name: start

## September 2015 - Spark

* Turmio hacks terminals :)
  * Learns to launch them automagically from the web
  * [x-man-page:///security](x-man-page:///security)
  * [x-man-page:///security;type=a](x-man-page:///security;type=a)
  * Asks aloud 'Is it safe?'

.right[![Man security](img/manpages.png)]

---

## Spoils of man pages

* We wrote [a DTrace script for ``execve`` on OSX](https://github.com/ouspg/urlhandlers/blob/master/osx/execve.d)

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

* To us it appears to be .red.bold[safe by accident]
  from shell meta-character injection ... for now ... with our skills!
