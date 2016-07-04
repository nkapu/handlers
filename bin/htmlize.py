import cgi
import sys
import json


def write(lines, stream):
    for line in lines:
        stream.write(line + "\n")


def heading(scheme):
    return "<h2>{scheme}</h2>".format(
        scheme=cgi.escape(scheme)
    )


def iframe(src):
    return "<iframe src=\"{src}\"></iframe>".format(
        src=cgi.escape(src, quote=True)
    )


def itemize(data):
    for scheme, info in data.items():
        values = []

        values.append(scheme)
        for preset in info.get("presets", []):
            value = preset.get("value", None)
            if not value:
                continue
            values.append(value)

        yield scheme, values


def html_lines(datas):
    yield "<!doctype>"
    yield "<html>"
    yield "  <head>"
    yield "  </head>"
    yield "  <body>"

    for data in datas:
        for scheme, srcs in itemize(data):
            yield "    " + heading(scheme)

            for src in srcs:
                yield "    " + iframe(src)

    yield "  </body>"
    yield "</html>"


def read_json_file(filename):
    with open(filename, "rb") as jsonfile:
        return json.load(jsonfile)


def main():
    from optparse import OptionParser

    usage = "usage: %prog [options] [JSONFILE ...]"
    parser = OptionParser(usage)

    options, args = parser.parse_args()

    datas = map(read_json_file, args)
    write(html_lines(datas), sys.stdout)


if __name__ == "__main__":
    main()
