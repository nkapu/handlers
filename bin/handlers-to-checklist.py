#!/usr/bin/python

import json


def read_json_file(filename):
    with open(filename, "rb") as jsonfile:
        return json.load(jsonfile)


def main():
    from optparse import OptionParser

    usage = "usage: %prog [options] [JSONFILE ...]"
    parser = OptionParser(usage)

    options, args = parser.parse_args()

    results = map(read_json_file, args)

    for handlers in results:
        for handler in sorted(handlers.keys()):
            print " * [ ] " + handler

if __name__ == "__main__":
    main()
