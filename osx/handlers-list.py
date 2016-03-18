import os
import re

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

for line in dump.readlines():
  for rexp in rexps:
    m = rexp.match(line)
    if m:
      print m.group(1) + ": " + m.group(2)

dump.close()
