#!/usr/bin/python

import os
import re

from optparse import OptionParser

parser = OptionParser()
parser.add_option("-F", "--full-path", action="store_true",
                  dest="fullpath", default=False,
                  help="Include full path of the Application instead of the last component.")
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

handlers = {}

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
            if options.fullpath:
                path = value
            else:
                path = os.path.basename(os.path.normpath(value))

        if key == "flags":
            rawflags = value

        if key == "bindings":
            for binding in [x for x in value.split(",") if x]:
                id = binding.lstrip()
                flags = [x for x in rawflags.split(" ") if x]
                if (not options.all) and ("url-type" not in flags):
                    continue

                application = {}
                application['name'] = name
                application['path'] = path
                application['flags'] = flags
                if id not in handlers:
                    handlers[id] = {}
                if 'apps' not in handlers[id]:
                    handlers[id]['apps'] = []
                handlers[id]['apps'].append(application)

dump.close()

if options.pretty:
    import pprint
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(handlers)
else:
    import json
    print(json.dumps(handlers, indent=4))
