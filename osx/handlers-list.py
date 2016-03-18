import os

dump = os.popen("/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump")

# bundle  id:            53140
#         path:          /Applications/Firefox.app
#         name:          Firefox

for line in dump.readlines():
  print line
