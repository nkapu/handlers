#!/usr/bin/python

import json
import heapq

from optparse import OptionParser

usage = "usage: %prog [options] JSONFILE1 JSONFILE2 [JSONFILEn ...]"
parser = OptionParser(usage)
parser.add_option("-p", "--pretty", action="store_true",
                  dest="pretty", default=False,
                  help="Display pretty printed output instead of JSON.")

(options, args) = parser.parse_args()

# original code of merge() received from a kind anonymous coder with MIT license


def merge(left, right):
    """
    Merge equal values, make them multivalues otherwise.

    >>> merge(1, 1)
    1
    >>> merge(1, 2)
    [1, 2]

    Values of different types are considered unmergeable.

    >>> merge(None, 1)
    [None, 1]
    >>> merge([1, 2], 3)
    [[1, 2], 3]

    Dicts are deeply merged per key.

    >>> merge({"a": 1}, {"a": 1})
    {'a': 1}
    >>> sorted(merge({"a": 1}, {"b": 1}).items())
    [('a', 1), ('b', 1)]
    >>> merge({"a": 1}, {"a": 2})
    {'a': [1, 2]}
    >>> merge({"a": {"b": 1}}, {"a": {"b": 2}})
    {'a': {'b': [1, 2]}}

    Lists are um yeah.

    >>> merge([1, 2], [1, 3])
    [1, 2, 3]
    >>> merge([[1, 2], [1, 3]], [[0, 1], [1, 2]])
    [[0, 1], [1, 2], [1, 3]]
    >>> merge([{"a": 1}], [{"a": 1}])
    [{'a': 1}]
    >>> merge([{"a": 1}], [{"a": 2}])
    [{'a': 1}, {'a': 2}]
    """

    if type(left) != type(right):
        return [left, right]

    if isinstance(left, dict):
        result = {}
        for key in set(left) | set(right):
            if key not in left:
                result[key] = right[key]
            elif key not in right:
                result[key] = left[key]
            else:
                result[key] = merge(left[key], right[key])
        return result

    if isinstance(left, list):
        result = []
        for value in heapq.merge(sorted(left), sorted(right)):
            if result and result[-1] == value:
                continue
            result.append(value)
        return result

    return left if left == right else [left, right]


def clean_spaces(string):
    r"""
    Return the string with the trailing whitespace (excluding line separators)
    from each line removed, as well all trailing whitespace (including line
    separators) removed from the whole string.

    >>> clean_spaces("1 \n2\t\n3  \n")
    '1\n2\n3'

    Lines are normalized to end with LF.

    >>> clean_spaces("1\n2\r3\r\n4")
    '1\n2\n3\n4'
    """

    lines = string.rstrip().splitlines()
    return "\n".join(line.rstrip() for line in lines)


currentdict = {}

for arg in args:
    with open(arg) as jsonfile:
        if not currentdict:
            currentdict = json.load(jsonfile)
            continue

        nextdict = json.load(jsonfile)
        currentdict = merge(currentdict, nextdict)

if options.pretty:
    import pprint
    pp = pprint.PrettyPrinter(indent=4)
    output = pp.pformat(currentdict)
else:
    import json
    output = json.dumps(currentdict, indent=4, sort_keys=True)
print clean_spaces(output)
