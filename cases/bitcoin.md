# bitcoin: URL handler dissected for the Bitcoin-Qt

We collected the `bitcoin:` URL handler example presets and reviewed
Bitcoin-Qt code for the URL handler.

[Bitcoin Improvement Proposal 21: the URI Scheme](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)
was used as the starting point.

The code was retrieved for the review with
`git clone https://github.com/bitcoin/bitcoin.git --depth=1` on
2nd of July 2016.

No obviously dangerous behavior was found in a quick review of
the normal bitcoin URLs. However URL handler appears to have
a separate *fetch url* mode which causes Bitcoin-Qt to fetch
the URL given as a parameter in the original URL. This
*fetch url* behaviour should be investigated further.

## Presets

Sample URLs for the example presets can be collected directly from the
test vectors in the Bitcoin-Qt code.

```sh
$ grep setUrl src/qt/test/uritests.cpp  | cut -d\" -f2
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?req-dontexist=
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?dontexist=
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?label=Wikipedia Example Address
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=0.001
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=1.001
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=100&label=Wikipedia Example
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?message=Wikipedia Example Address
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?req-message=Wikipedia Example Address
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=1,000&label=Wikipedia Example
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=1,000.0&label=Wikipedia Example
```

## Code review

### Normal bitcoin URL

The actual URL parsing takes place in the `parseBitcoinURI()` function in the
`src/qt/guiutil.cpp` source file.

The parser removed an option trailing `/` from the URL "path" part and
takes the remaining value as the Bitcoin address. Then query string is parsed
and values for the `amount`, `label` and `message` attributes are recorded.
Attributes may have an optional `req-` prefix in their names. The amount is parsed
using `BitcoinUnits::parse()` function.

Apparently the actual URL handler is in the `PaymentServer::handleURIOrFile()`
function in the `src/qt/paymentserver.cpp` source file. In typical case this
function parses the given URL and uses `CBitcoinAddress address()` for
the `src/base58.cpp` source file to parse and validate the given bitcoin address.

There seems to be no or very little control over the final amount or the address
beyond the valid quite restricted values. There is full control over the label
and message values but they seem to be consistently escaped with `GUIUtil::HtmlEscape()`
when used in the dangerous places.

### Bitcoin URL with the r-attribute

The URL handler `PaymentServer::handleURIOrFile()` function in the `src/qt/paymentserver.cpp`
source file has a special treatment for `bitcoin:` URLs with `r`-attribute.

With `if (uri.hasQueryItem("r")) // payment request URI` a completely different
code path is invoked, involving fetching the URL given as a value to the r-attribute.

A sample request made by the Bitcoin-Qt when invoked this way is given below.

```
GET / HTTP/1.1
User-Agent: Satoshi
Accept: application/bitcoin-paymentrequest
Connection: Keep-Alive
Accept-Encoding: gzip, deflate
Accept-Language: en-US,*
Host: localhost:8888
```

This behavior should be investigated further.
