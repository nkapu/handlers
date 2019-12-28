import os

from gi.repository import Gio
from gi.repository.GConf import Client

from optparse import OptionParser

GCONF_URL_HANDLERS = '/desktop/gnome/url-handlers'

parser = OptionParser()
parser.add_option("-F", "--full-path", action="store_true",
                  dest="fullpath", default=False,
                  help="Include full path of the Application instead of the " +
                  "last component.")
parser.add_option("-p", "--pretty", action="store_true",
                  dest="pretty", default=False,
                  help="Display pretty printed output instead of JSON.")
parser.add_option("-a", "--all", action="store_true",
                  dest="all", default=False,
                  help="Include all handlers, not just URL handlers.")

(options, args) = parser.parse_args()

deskapp = Gio.DesktopAppInfo()
apps = deskapp.get_all()

handlers = dict()

for app in apps:
    schemes = app.get_supported_types() 
    if not options.all:
        schemes = ['{}:'.format(x) for x in schemes if 'x-scheme-handler' in x]
    schemes = [x.replace('x-scheme-handler/', '') for x in schemes]
    if not schemes:
        continue
    for scheme in schemes:
        handler = handlers.setdefault(scheme, dict())
        handlerapp = handler.setdefault('apps', list())
        path = app.get_executable()
        if not options.fullpath:
            path = os.path.basename(path)
        handlerapp.append({'name': app.get_name(), 'path': path})

gclient = Client.get_default()

for gdir in gclient.all_dirs(GCONF_URL_HANDLERS):
    scheme = os.path.basename(gdir)

    handler = handlers.setdefault('{}:'.format(scheme), dict())
    handlerapp = handler.setdefault('apps', list())

    app = {}

    for entry in gclient.all_entries(gdir):
        key = os.path.basename(entry.key)
        val = entry.value.to_string()
        if key == 'command':
            app['path'] = os.path.basename(val.split()[0])
        elif val == 'true':
            app.setdefault('flags', list()).append(key)

    handlerapp.append(app)

if options.pretty:
    import pprint
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(handlers)
else:
    import json
    print(json.dumps(handlers, indent=4, sort_keys=True))
