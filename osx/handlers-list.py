#!/usr/bin/python

import os
import re

from optparse import OptionParser

parser = OptionParser()
parser.add_option("-p", "--pretty", action="store_true",
                  dest="pretty", default=False,
                  help="Display pretty printed output instead of JSON.")
parser.add_option("-a", "--all", action="store_true",
                  dest="all", default=False,
                  help="Include all handlers, not just URL handlers.")

(options, args) = parser.parse_args()

dump = os.popen("/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump")

# bundle  id:            53140
#         path:          /Applications/Firefox.app
#         name:          Firefox
# ...
#         claim   id:            36428
#                 name:          file URL
#                 rank:          Default
#                 reqCaps:
#                 roles:         Viewer
#                 flags:         url-type
#                 icon:
#                 bindings:      file:

rexps = [
    re.compile('^\s*(bundle)\s*id:\s*(\d*)'),
    re.compile('^\s*(path):\s*(.*)'),
    re.compile('^\s*(name):\s*(.*)'),
    re.compile('^\s*(claim)\s*id:\s*(\d*)'),
    re.compile('^\s*(flags):\s*(.*)'),
    re.compile('^\s*(bindings):\s*(.*)')
]

handlers = []

bundle = ""
appname = ""
apppath = ""

for line in dump.readlines():
    for rexp in rexps:
        m = rexp.match(line)
        if not m:
            continue

        key = m.group(1)
        value = m.group(2)

        if key == "bundle":
            if bundle != value:
                bundle = value
                name = ""
                path = ""

        if key == "name" and not name:
            name = value

        if key == "path" and not path:
            path = value

        if key == "flags":
            flags = value

        if key == "bindings":
            for binding in [x for x in value.split(",") if x]:
                handler = {}
                id = binding.lstrip()
                handler['handler'] = id
                handler['name'] = name
                handler['path'] = path
                handler['flags'] = [x for x in flags.split(" ") if x]
                handlers.append(handler)

dump.close()

if options.all:
    urlhandlers = handlers
else:
    # filter down to url handlers
    urlhandlers = [h for h in handlers if "url-type" in h['flags']]

if options.pretty:
    import pprint
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(urlhandlers)
else:
    import json
    print(json.dumps(urlhandlers, indent=4))
