#!/usr/bin/python

import json
import sys


def validate_presets(presets_file):
    with open(presets_file) as jsonfile:
        presets_dict = json.load(jsonfile)

    for handler in presets_dict.iterkeys():
        for entry in presets_dict.get(handler).get("presets"):
            value = entry.get("value")

            if not value.startswith(handler):
                print "ERROR: \"{0}\" handler with \"{1}\" value".format(handler, value)


if __name__ == '__main__':
    args = sys.argv[1:]
    try:
        validate_presets(*args)
    except TypeError:
        print "{0} <handlerpresets.json>".format(sys.argv[0])
        sys.exit(1)
