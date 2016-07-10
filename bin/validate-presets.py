#!/usr/bin/python

import json
import sys


def validate_presets_file(presets_file):
    erred = 0
    with open(presets_file) as jsonfile:
        presets_dict = json.load(jsonfile)
    for (handler, value) in validate_presets(presets_dict):
        print "ERROR: \"{0}\" handler with \"{1}\" value".format(handler, value)
        erred += 1

    return erred


def validate_presets(presets_dict):
    """
    >>> presets = {u'handler:': {u'presets':
    ...     [{u'description': u'description', u'value': u'handler://valid'}]}}
    >>> validate_presets(presets)
    []
    >>> presets = {u'handler:': {u'presets':
    ...     [{u'description': u'description', u'value': u'error://invalid'}]}}
    >>> validate_presets(presets)
    [(u'handler:', u'error://invalid')]
    """
    error_list = []
    for handler in presets_dict.iterkeys():
        for entry in presets_dict.get(handler).get("presets"):
            value = entry.get("value")

            if not value.startswith(handler):
                error_list.append((handler, value))
    return error_list


if __name__ == '__main__':
    args = sys.argv[1:]
    try:
        if validate_presets_file(*args):
            sys.exit(2)
    except TypeError:
        print "{0} <handlerpresets.json>".format(sys.argv[0])
        sys.exit(1)
