!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function() { return { setters: [], execute: function() {} } });

$__System.registerDynamic("3", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    }(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
      "use strict";
      var arr = [];
      var document = window.document;
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var concat = arr.concat;
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      function DOMEval(code, doc) {
        doc = doc || document;
        var script = doc.createElement("script");
        script.text = code;
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      var version = "3.0.0",
          jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
          },
          rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          rmsPrefix = /^-ms-/,
          rdashAlpha = /-([a-z])/g,
          fcamelCase = function(all, letter) {
            return letter.toUpperCase();
          };
      jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
        },
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(i) {
          var len = this.length,
              j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              src = target[name];
              copy = options[name];
              if (target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && jQuery.isArray(src) ? src : [];
                } else {
                  clone = src && jQuery.isPlainObject(src) ? src : {};
                }
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== undefined) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
          return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
          return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        },
        isPlainObject: function(obj) {
          var proto,
              Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        type: function(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
          DOMEval(code);
        },
        camelCase: function(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback) {
          var length,
              i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        trim: function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
          var ret = results || [];
          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
            } else {
              push.call(ret, arr);
            }
          }
          return ret;
        },
        inArray: function(elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
          var len = +second.length,
              j = 0,
              i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        map: function(elems, callback, arg) {
          var length,
              value,
              i = 0,
              ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
          var tmp,
              args,
              proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!jQuery.isFunction(fn)) {
            return undefined;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        },
        now: Date.now,
        support: support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
      }
      var Sizzle = (function(window) {
        var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,
            setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            rbuggyMatches,
            matches,
            contains,
            expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function(a, b) {
              if (a === b) {
                hasDuplicate = true;
              }
              return 0;
            },
            hasOwn = ({}).hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            indexOf = function(list, elem) {
              var i = 0,
                  len = list.length;
              for (; i < len; i++) {
                if (list[i] === elem) {
                  return i;
                }
              }
              return -1;
            },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            whitespace = "[\\x20\\t\\r\\n\\f]",
            identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
            rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
              "ID": new RegExp("^#(" + identifier + ")"),
              "CLASS": new RegExp("^\\.(" + identifier + ")"),
              "TAG": new RegExp("^(" + identifier + "|[*])"),
              "ATTR": new RegExp("^" + attributes),
              "PSEUDO": new RegExp("^" + pseudos),
              "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
              "bool": new RegExp("^(?:" + booleans + ")$", "i"),
              "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function(_, escaped, escapedWhitespace) {
              var high = "0x" + escaped - 0x10000;
              return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
            },
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            fcssescape = function(ch, asCodePoint) {
              if (asCodePoint) {
                if (ch === "\0") {
                  return "\uFFFD";
                }
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
              }
              return "\\" + ch;
            },
            unloadHandler = function() {
              setDocument();
            },
            disabledAncestor = addCombinator(function(elem) {
              return elem.disabled === true;
            }, {
              dir: "parentNode",
              next: "legend"
            });
        try {
          push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push = {apply: arr.length ? function(target, els) {
              push_native.apply(target, slice.call(els));
            } : function(target, els) {
              var j = target.length,
                  i = 0;
              while ((target[j++] = els[i++])) {}
              target.length = j - 1;
            }};
        }
        function Sizzle(selector, context, results, seed) {
          var m,
              i,
              elem,
              nid,
              match,
              groups,
              newSelector,
              newContext = context && context.ownerDocument,
              nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
              setDocument(context);
            }
            context = context || document;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                if ((m = match[1])) {
                  if (nodeType === 9) {
                    if ((elem = context.getElementById(m))) {
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                  push.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                if (nodeType !== 1) {
                  newContext = context;
                  newSelector = selector;
                } else if (context.nodeName.toLowerCase() !== "object") {
                  if ((nid = context.getAttribute("id"))) {
                    nid = nid.replace(rcssescape, fcssescape);
                  } else {
                    context.setAttribute("id", (nid = expando));
                  }
                  groups = tokenize(selector);
                  i = groups.length;
                  while (i--) {
                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                  }
                  newSelector = groups.join(",");
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                }
                if (newSelector) {
                  try {
                    push.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {} finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return (cache[key + " "] = value);
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function addHandle(attrs, handler) {
          var arr = attrs.split("|"),
              i = arr.length;
          while (i--) {
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        function siblingCheck(a, b) {
          var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
          if (diff) {
            return diff;
          }
          if (cur) {
            while ((cur = cur.nextSibling)) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            return "label" in elem && elem.disabled === disabled || "form" in elem && elem.disabled === disabled || "form" in elem && elem.disabled === false && (elem.isDisabled === disabled || elem.isDisabled !== !disabled && ("label" in elem || !disabledAncestor(elem)) !== disabled);
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches) {
              var j,
                  matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length;
              while (i--) {
                if (seed[(j = matchIndexes[i])]) {
                  seed[j] = !(matches[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
          var documentElement = elem && (elem.ownerDocument || elem).documentElement;
          return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
          var hasCompare,
              subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
          }
          document = doc;
          docElem = document.documentElement;
          documentIsHTML = !isXML(document);
          if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false);
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          support.attributes = assert(function(el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          support.getElementsByTagName = assert(function(el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
          });
          support.getElementsByClassName = rnative.test(document.getElementsByClassName);
          support.getById = assert(function(el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || !document.getElementsByName(expando).length;
          });
          if (support.getById) {
            Expr.find["ID"] = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var m = context.getElementById(id);
                return m ? [m] : [];
              }
            };
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
          } else {
            delete Expr.find["ID"];
            Expr.filter["ID"] = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node && node.value === attrId;
              };
            };
          }
          Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else if (support.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function(tag, context) {
            var elem,
                tmp = [],
                i = 0,
                results = context.getElementsByTagName(tag);
            if (tag === "*") {
              while ((elem = results[i++])) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          };
          Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyMatches = [];
          rbuggyQSA = [];
          if ((support.qsa = rnative.test(document.querySelectorAll))) {
            assert(function(el) {
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
              }
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
            });
            assert(function(el) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
              var input = document.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              }
              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              docElem.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }
          if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
            assert(function(el) {
              support.disconnectedMatch = matches.call(el, "*");
              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          hasCompare = rnative.test(docElem.compareDocumentPosition);
          contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a,
                bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function(a, b) {
            if (b) {
              while ((b = b.parentNode)) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };
          sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
              if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
            }
            return compare & 4 ? -1 : 1;
          } : function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var cur,
                i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [a],
                bp = [b];
            if (!aup || !bup) {
              return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            while ((cur = cur.parentNode)) {
              ap.unshift(cur);
            }
            cur = b;
            while ((cur = cur.parentNode)) {
              bp.unshift(cur);
            }
            while (ap[i] === bp[i]) {
              i++;
            }
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
          };
          return document;
        };
        Sizzle.matches = function(expr, elements) {
          return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
          if ((elem.ownerDocument || elem) !== document) {
            setDocument(elem);
          }
          expr = expr.replace(rattributeQuotes, "='$1']");
          if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {}
          }
          return Sizzle(expr, document, null, [elem]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
          if ((context.ownerDocument || context) !== document) {
            setDocument(context);
          }
          return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) !== document) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()],
              val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
          return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.escape = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
          var elem,
              duplicates = [],
              j = 0,
              i = 0;
          hasDuplicate = !support.detectDuplicates;
          sortInput = !support.sortStable && results.slice(0);
          results.sort(sortOrder);
          if (hasDuplicate) {
            while ((elem = results[i++])) {
              if (elem === results[i]) {
                j = duplicates.push(i);
              }
            }
            while (j--) {
              results.splice(duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        getText = Sizzle.getText = function(elem) {
          var node,
              ret = "",
              i = 0,
              nodeType = elem.nodeType;
          if (!nodeType) {
            while ((node = elem[i++])) {
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        };
        Expr = Sizzle.selectors = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true
            },
            " ": {dir: "parentNode"},
            "+": {
              dir: "previousSibling",
              first: true
            },
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            "ATTR": function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            "CHILD": function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  Sizzle.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +((match[7] + match[8]) || match[3] === "odd");
              } else if (match[3]) {
                Sizzle.error(match[0]);
              }
              return match;
            },
            "PSEUDO": function(match) {
              var excess,
                  unquoted = !match[6] && match[2];
              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            "TAG": function(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            "CLASS": function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            "ATTR": function(name, operator, check) {
              return function(elem) {
                var result = Sizzle.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            "CHILD": function(type, what, argument, first, last) {
              var simple = type.slice(0, 3) !== "nth",
                  forward = type.slice(-4) !== "last",
                  ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, context, xml) {
                var cache,
                    uniqueCache,
                    outerCache,
                    node,
                    nodeIndex,
                    start,
                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                    parent = elem.parentNode,
                    name = ofType && elem.nodeName.toLowerCase(),
                    useCache = !xml && !ofType,
                    diff = false;
                if (parent) {
                  if (simple) {
                    while (dir) {
                      node = elem;
                      while ((node = node[dir])) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || (diff % first === 0 && diff / first >= 0);
                }
              };
            },
            "PSEUDO": function(pseudo, argument) {
              var args,
                  fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                  var idx,
                      matched = fn(seed, argument),
                      i = matched.length;
                  while (i--) {
                    idx = indexOf(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            "not": markFunction(function(selector) {
              var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                var elem,
                    unmatched = matcher(seed, null, xml, []),
                    i = seed.length;
                while (i--) {
                  if ((elem = unmatched[i])) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              }) : function(elem, context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            "has": markFunction(function(selector) {
              return function(elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            "contains": markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
              };
            }),
            "lang": markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                Sizzle.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            "target": function(elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            "root": function(elem) {
              return elem === docElem;
            },
            "focus": function(elem) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),
            "checked": function(elem) {
              var nodeName = elem.nodeName.toLowerCase();
              return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
            },
            "selected": function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            "empty": function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            "parent": function(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            "header": function(elem) {
              return rheader.test(elem.nodeName);
            },
            "input": function(elem) {
              return rinputs.test(elem.nodeName);
            },
            "button": function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            "text": function(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            "first": createPositionalPseudo(function() {
              return [0];
            }),
            "last": createPositionalPseudo(function(matchIndexes, length) {
              return [length - 1];
            }),
            "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            "even": createPositionalPseudo(function(matchIndexes, length) {
              var i = 0;
              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            "odd": createPositionalPseudo(function(matchIndexes, length) {
              var i = 1;
              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument;
              for (; --i >= 0; ) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            }),
            "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument;
              for (; ++i < length; ) {
                matchIndexes.push(i);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
          submit: true,
          reset: true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
          var matched,
              match,
              tokens,
              type,
              soFar,
              groups,
              preFilters,
              cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push((tokens = []));
            }
            matched = false;
            if ((match = rcombinators.exec(soFar))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: match[0].replace(rtrim, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
          var i = 0,
              len = tokens.length,
              selector = "";
          for (; i < len; i++) {
            selector += tokens[i].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === "parentNode",
              doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
          } : function(elem, context, xml) {
            var oldCache,
                uniqueCache,
                outerCache,
                newCache = [dirruns, doneName];
            if (xml) {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return (newCache[2] = oldCache[2]);
                  } else {
                    uniqueCache[key] = newCache;
                    if ((newCache[2] = matcher(elem, context, xml))) {
                      return true;
                    }
                  }
                }
              }
            }
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i = matchers.length;
            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i = 0,
              len = contexts.length;
          for (; i < len; i++) {
            Sizzle(selector, contexts[i], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;
          for (; i < len; i++) {
            if ((elem = unmatched[i])) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp,
                i,
                elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i = temp.length;
              while (i--) {
                if ((elem = temp[i])) {
                  matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i = matcherOut.length;
                  while (i--) {
                    if ((elem = matcherOut[i])) {
                      temp.push((matcherIn[i] = elem));
                    }
                  }
                  postFinder(null, (matcherOut = []), temp, xml);
                }
                i = matcherOut.length;
                while (i--) {
                  if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext,
              matcher,
              j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,
              matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, true),
              matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
              }, implicitRelative, true),
              matchers = [function(elem, context, xml) {
                var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
              }];
          for (; i < len; i++) {
            if ((matcher = Expr.relative[tokens[i].type])) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
              if (matcher[expando]) {
                j = ++i;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function(seed, context, xml, results, outermost) {
                var elem,
                    j,
                    matcher,
                    matchedCount = 0,
                    i = "0",
                    unmatched = seed && [],
                    setMatched = [],
                    contextBackup = outermostContext,
                    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                    dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                    len = elems.length;
                if (outermost) {
                  outermostContext = context === document || context || outermost;
                }
                for (; i !== len && (elem = elems[i]) != null; i++) {
                  if (byElement && elem) {
                    j = 0;
                    if (!context && elem.ownerDocument !== document) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while ((matcher = elementMatchers[j++])) {
                      if (matcher(elem, context || document, xml)) {
                        results.push(elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }
                  if (bySet) {
                    if ((elem = !matcher && elem)) {
                      matchedCount--;
                    }
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                  j = 0;
                  while ((matcher = setMatchers[j++])) {
                    matcher(unmatched, setMatched, context, xml);
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i--) {
                        if (!(unmatched[i] || setMatched[i])) {
                          setMatched[i] = pop.call(results);
                        }
                      }
                    }
                    setMatched = condense(setMatched);
                  }
                  push.apply(results, setMatched);
                  if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                    Sizzle.uniqueSort(results);
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }
                return unmatched;
              };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
          var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i = match.length;
            while (i--) {
              cached = matcherFromTokens(match[i]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            cached.selector = selector;
          }
          return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
          var i,
              tokens,
              token,
              type,
              find,
              compiled = typeof selector === "function" && selector,
              match = !seed && tokenize((selector = compiled.selector || selector));
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i--) {
              token = tokens[i];
              if (Expr.relative[(type = token.type)]) {
                break;
              }
              if ((find = Expr.find[type])) {
                if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        if (!assert(function(el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        }
        if (!support.attributes || !assert(function(el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function(elem, name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        }
        if (!assert(function(el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }
        return Sizzle;
      })(window);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
      var risSimple = /^.[^:#\[\.,]*$/;
      function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return (elem === qualifier) !== not;
          });
        }
        if (typeof qualifier === "string") {
          if (risSimple.test(qualifier)) {
            return jQuery.filter(qualifier, elements, not);
          }
          qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
          return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
        });
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
          return elem.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i,
              ret,
              len = this.length,
              self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      });
      var rootjQuery,
          rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          init = jQuery.fn.init = function(selector, context, root) {
            var match,
                elem;
            if (!selector) {
              return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
              if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [null, selector, null];
              } else {
                match = rquickExpr.exec(selector);
              }
              if (match && (match[1] || !context)) {
                if (match[1]) {
                  context = context instanceof jQuery ? context[0] : context;
                  jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                  if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                    for (match in context) {
                      if (jQuery.isFunction(this[match])) {
                        this[match](context[match]);
                      } else {
                        this.attr(match, context[match]);
                      }
                    }
                  }
                  return this;
                } else {
                  elem = document.getElementById(match[2]);
                  if (elem) {
                    this[0] = elem;
                    this.length = 1;
                  }
                  return this;
                }
              } else if (!context || context.jquery) {
                return (context || root).find(selector);
              } else {
                return this.constructor(context).find(selector);
              }
            } else if (selector.nodeType) {
              this[0] = selector;
              this.length = 1;
              return this;
            } else if (jQuery.isFunction(selector)) {
              return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
          };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/,
          guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
          };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this),
              l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnotwhite = (/\S+/g);
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing,
            memory,
            fired,
            locked,
            list = [],
            queue = [],
            firingIndex = -1,
            fire = function() {
              locked = options.once;
              fired = firing = true;
              for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                  if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    firingIndex = list.length;
                    memory = false;
                  }
                }
              }
              if (!options.memory) {
                memory = false;
              }
              firing = false;
              if (locked) {
                if (memory) {
                  list = [];
                } else {
                  list = "";
                }
              }
            },
            self = {
              add: function() {
                if (list) {
                  if (memory && !firing) {
                    firingIndex = list.length - 1;
                    queue.push(memory);
                  }
                  (function add(args) {
                    jQuery.each(args, function(_, arg) {
                      if (jQuery.isFunction(arg)) {
                        if (!options.unique || !self.has(arg)) {
                          list.push(arg);
                        }
                      } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                        add(arg);
                      }
                    });
                  })(arguments);
                  if (memory && !firing) {
                    fire();
                  }
                }
                return this;
              },
              remove: function() {
                jQuery.each(arguments, function(_, arg) {
                  var index;
                  while ((index = jQuery.inArray(arg, list, index)) > -1) {
                    list.splice(index, 1);
                    if (index <= firingIndex) {
                      firingIndex--;
                    }
                  }
                });
                return this;
              },
              has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
              },
              empty: function() {
                if (list) {
                  list = [];
                }
                return this;
              },
              disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
              },
              disabled: function() {
                return !list;
              },
              lock: function() {
                locked = queue = [];
                if (!memory && !firing) {
                  list = memory = "";
                }
                return this;
              },
              locked: function() {
                return !!locked;
              },
              fireWith: function(context, args) {
                if (!locked) {
                  args = args || [];
                  args = [context, args.slice ? args.slice() : args];
                  queue.push(args);
                  if (!firing) {
                    fire();
                  }
                }
                return this;
              },
              fire: function() {
                self.fireWith(this, arguments);
                return this;
              },
              fired: function() {
                return !!fired;
              }
            };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject) {
        var method;
        try {
          if (value && jQuery.isFunction((method = value.promise))) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && jQuery.isFunction((method = value.then))) {
            method.call(value, resolve, reject);
          } else {
            resolve.call(undefined, value);
          }
        } catch (value) {
          reject.call(undefined, value);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
              state = "pending",
              promise = {
                state: function() {
                  return state;
                },
                always: function() {
                  deferred.done(arguments).fail(arguments);
                  return this;
                },
                "catch": function(fn) {
                  return promise.then(null, fn);
                },
                pipe: function() {
                  var fns = arguments;
                  return jQuery.Deferred(function(newDefer) {
                    jQuery.each(tuples, function(i, tuple) {
                      var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                      deferred[tuple[1]](function() {
                        var returned = fn && fn.apply(this, arguments);
                        if (returned && jQuery.isFunction(returned.promise)) {
                          returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                        } else {
                          newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                        }
                      });
                    });
                    fns = null;
                  }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                  var maxDepth = 0;
                  function resolve(depth, deferred, handler, special) {
                    return function() {
                      var that = this,
                          args = arguments,
                          mightThrow = function() {
                            var returned,
                                then;
                            if (depth < maxDepth) {
                              return;
                            }
                            returned = handler.apply(that, args);
                            if (returned === deferred.promise()) {
                              throw new TypeError("Thenable self-resolution");
                            }
                            then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                            if (jQuery.isFunction(then)) {
                              if (special) {
                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                              } else {
                                maxDepth++;
                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                              }
                            } else {
                              if (handler !== Identity) {
                                that = undefined;
                                args = [returned];
                              }
                              (special || deferred.resolveWith)(that, args);
                            }
                          },
                          process = special ? mightThrow : function() {
                            try {
                              mightThrow();
                            } catch (e) {
                              if (jQuery.Deferred.exceptionHook) {
                                jQuery.Deferred.exceptionHook(e, process.stackTrace);
                              }
                              if (depth + 1 >= maxDepth) {
                                if (handler !== Thrower) {
                                  that = undefined;
                                  args = [e];
                                }
                                deferred.rejectWith(that, args);
                              }
                            }
                          };
                      if (depth) {
                        process();
                      } else {
                        if (jQuery.Deferred.getStackHook) {
                          process.stackTrace = jQuery.Deferred.getStackHook();
                        }
                        window.setTimeout(process);
                      }
                    };
                  }
                  return jQuery.Deferred(function(newDefer) {
                    tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                    tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
                    tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
                  }).promise();
                },
                promise: function(obj) {
                  return obj != null ? jQuery.extend(obj, promise) : promise;
                }
              },
              deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2],
                stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, tuples[3 - i][2].disable, tuples[0][2].lock);
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length,
              i = remaining,
              resolveContexts = Array(i),
              resolveValues = slice.call(arguments),
              master = jQuery.Deferred(),
              updateFunc = function(i) {
                return function(value) {
                  resolveContexts[i] = this;
                  resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                  if (!(--remaining)) {
                    master.resolveWith(resolveContexts, resolveValues);
                  }
                };
              };
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
            if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }
          return master.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, stack) {
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn);
        return this;
      };
      jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        },
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null;
        if (jQuery.type(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== undefined) {
          chainable = true;
          if (!jQuery.isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, key, value) {
                return bulk.call(jQuery(elem), value);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
      };
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop,
              cache = this.cache(owner);
          if (typeof data === "string") {
            cache[jQuery.camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[jQuery.camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
        },
        access: function(owner, key, value) {
          if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
          var i,
              cache = owner[this.expando];
          if (cache === undefined) {
            return;
          }
          if (key !== undefined) {
            if (jQuery.isArray(key)) {
              key = key.map(jQuery.camelCase);
            } else {
              key = jQuery.camelCase(key);
              key = key in cache ? [key] : (key.match(rnotwhite) || []);
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === undefined || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = undefined;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          rmultiDash = /[A-Z]/g;
      function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? JSON.parse(data) : data;
            } catch (e) {}
            dataUser.set(elem, key, data);
          } else {
            data = undefined;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i,
              name,
              data,
              elem = this[0],
              attrs = elem && elem.attributes;
          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = jQuery.camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value) {
            var data;
            if (elem && value === undefined) {
              data = dataUser.get(elem, key);
              if (data !== undefined) {
                return data;
              }
              data = dataAttr(elem, key);
              if (data !== undefined) {
                return data;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || jQuery.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks(elem, type),
              next = function() {
                jQuery.dequeue(elem, type);
              };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })});
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === undefined ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function() {
                if (!(--count)) {
                  defer.resolveWith(elements, [elements]);
                }
              };
          if (typeof type !== "string") {
            obj = type;
            type = undefined;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
      };
      var swap = function(elem, options, callback, args) {
        var ret,
            name,
            old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted,
            scale = 1,
            maxIterations = 20,
            currentValue = tween ? function() {
              return tween.cur();
            } : function() {
              return jQuery.css(elem, prop, "");
            },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          unit = unit || initialInUnit[3];
          valueParts = valueParts || [];
          initialInUnit = +initial || 1;
          do {
            scale = scale || ".5";
            initialInUnit = initialInUnit / scale;
            jQuery.style(elem, prop, initialInUnit + unit);
          } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName] = display;
        return display;
      }
      function showHide(elements, show) {
        var display,
            elem,
            values = [],
            index = 0,
            length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = (/^(?:checkbox|radio)$/i);
      var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
      var rscriptType = (/^$|\/(?:java|ecma)script/i);
      var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      function getAll(context, tag) {
        var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem,
            tmp,
            tag,
            wrap,
            contains,
            j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (jQuery.type(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while ((elem = nodes[i++])) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          contains = jQuery.contains(elem.ownerDocument, elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (contains) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while ((elem = tmp[j++])) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      (function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      })();
      var documentElement = document.documentElement;
      var rkeyEvent = /^key/,
          rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function safeActiveElement() {
        try {
          return document.activeElement;
        } catch (err) {}
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn,
            type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = undefined;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = undefined;
          } else {
            fn = data;
            data = selector;
            selector = undefined;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn,
              eventHandle,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.get(elem);
          if (!elemData) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
          }
          types = (types || "").match(rnotwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j,
              origCount,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnotwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var event = jQuery.event.fix(nativeEvent);
          var i,
              j,
              ret,
              matched,
              handleObj,
              handlerQueue,
              args = new Array(arguments.length),
              handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
              special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i,
              matches,
              sel,
              handleObj,
              handlerQueue = [],
              delegateCount = handlers.delegateCount,
              cur = event.target;
          if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                matches = [];
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matches[sel] === undefined) {
                    matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matches[sel]) {
                    matches.push(handleObj);
                  }
                }
                if (matches.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matches
                  });
                }
              }
            }
          }
          if (delegateCount < handlers.length) {
            handlerQueue.push({
              elem: this,
              handlers: handlers.slice(delegateCount)
            });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: jQuery.isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {noBubble: true},
          focus: {
            trigger: function() {
              if (this !== safeActiveElement() && this.focus) {
                this.focus();
                return false;
              }
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === safeActiveElement() && this.blur) {
                this.blur();
                return false;
              }
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                this.click();
                return false;
              }
            },
            _default: function(event) {
              return jQuery.nodeName(event.target, "a");
            }
          },
          beforeunload: {postDispatch: function(event) {
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }}
        }
      };
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
          this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(event) {
          var button = event.button;
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          }
          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            return (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
          }
          return event.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj;
            if (!related || (related !== target && !jQuery.contains(target, related))) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj,
              type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = undefined;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          rnoInnerhtml = /<script|<style|<link/i,
          rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
          rscriptTypeMasked = /^true\/(.*)/,
          rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return elem.getElementsByTagName("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
          elem.type = match[1];
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i,
            l,
            type,
            pdataOld,
            pdataCur,
            udataOld,
            udataCur,
            events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.access(src);
          pdataCur = dataPriv.set(dest, pdataOld);
          events = pdataOld.events;
          if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment,
            first,
            scripts,
            hasScripts,
            node,
            doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value);
        if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (isFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src) {
                    if (jQuery._evalUrl) {
                      jQuery._evalUrl(node.src);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && jQuery.contains(node.ownerDocument, node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i,
              l,
              srcElements,
              destElements,
              clone = elem.cloneNode(true),
              inPage = jQuery.contains(elem.ownerDocument, elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data,
              elem,
              type,
              special = jQuery.event.special,
              i = 0;
          for (; (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if ((data = elem[dataPriv.expando])) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = undefined;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = undefined;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value) {
            return value === undefined ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem,
              i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value) {
            var elem = this[0] || {},
                i = 0,
                l = this.length;
            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value;
                  }
                }
                elem = 0;
              } catch (e) {}
            }
            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems,
              ret = [],
              insert = jQuery(selector),
              last = insert.length - 1,
              i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rmargin = (/^margin/);
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window;
        }
        return view.getComputedStyle(elem);
      };
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
          div.innerHTML = "";
          documentElement.appendChild(container);
          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = divStyle.marginLeft === "2px";
          boxSizingReliableVal = divStyle.width === "4px";
          div.style.marginRight = "50%";
          pixelMarginRightVal = divStyle.marginRight === "4px";
          documentElement.removeChild(container);
          div = null;
        }
        var pixelPositionVal,
            boxSizingReliableVal,
            pixelMarginRightVal,
            reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        container.appendChild(div);
        jQuery.extend(support, {
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelMarginRight: function() {
            computeStyleTests();
            return pixelMarginRightVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width,
            minWidth,
            maxWidth,
            ret,
            style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== undefined ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }};
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
          cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          },
          cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
          },
          cssPrefixes = ["Webkit", "Moz", "ms"],
          emptyStyle = document.createElement("div").style;
      function vendorPropName(name) {
        if (name in emptyStyle) {
          return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }
      function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
            val = 0;
        for (; i < 4; i += 2) {
          if (extra === "margin") {
            val += jQuery.css(elem, extra + cssExpand[i], true, styles);
          }
          if (isBorderBox) {
            if (extra === "content") {
              val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (extra !== "margin") {
              val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (extra !== "padding") {
              val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        return val;
      }
      function getWidthOrHeight(elem, name, extra) {
        var val,
            valueIsBorderBox = true,
            styles = getStyles(elem),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (elem.getClientRects().length) {
          val = elem.getBoundingClientRect()[name];
        }
        if (val <= 0 || val == null) {
          val = curCSS(elem, name, styles);
          if (val < 0 || val == null) {
            val = elem.style[name];
          }
          if (rnumnonpx.test(val)) {
            return val;
          }
          valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
          val = parseFloat(val) || 0;
        }
        return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
      }
      jQuery.extend({
        cssHooks: {opacity: {get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }}},
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },
        cssProps: {"float": "cssFloat"},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret,
              type,
              hooks,
              origName = jQuery.camelCase(name),
              style = elem.style;
          name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== undefined) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number") {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
              style[name] = value;
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val,
              num,
              hooks,
              origName = jQuery.camelCase(name);
          name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === undefined) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, name, extra);
              }) : getWidthOrHeight(elem, name, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches,
                styles = extra && getStyles(elem),
                subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[name] = value;
              value = jQuery.css(elem, name);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
            var i = 0,
                expanded = {},
                parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }};
        if (!rmargin.test(prefix)) {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({css: function(name, value) {
          return access(this, function(elem, name, value) {
            var styles,
                len,
                map = {},
                i = 0;
            if (jQuery.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;
              for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }
              return map;
            }
            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
          }, name, value, arguments.length > 1);
        }});
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased,
              hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {_default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }};
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }};
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow,
          timerId,
          rfxtypes = /^(?:toggle|show|hide)$/,
          rrun = /queueHooks$/;
      function raf() {
        if (timerId) {
          window.requestAnimationFrame(raf);
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window.setTimeout(function() {
          fxNow = undefined;
        });
        return (fxNow = jQuery.now());
      }
      function genFx(type, includeWidth) {
        var which,
            i = 0,
            attrs = {height: type};
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
          if ((tween = collection[index].call(animation, prop, value))) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop,
            value,
            toggle,
            hooks,
            oldfire,
            propTween,
            restoreDisplay,
            display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index,
            name,
            easing,
            value,
            hooks;
        for (index in props) {
          name = jQuery.camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (jQuery.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() {
              delete tick.elem;
            }),
            tick = function() {
              if (stopped) {
                return false;
              }
              var currentTime = fxNow || createFxNow(),
                  remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                  temp = remaining / animation.duration || 0,
                  percent = 1 - temp,
                  index = 0,
                  length = animation.tweens.length;
              for (; index < length; index++) {
                animation.tweens[index].run(percent);
              }
              deferred.notifyWith(elem, [animation, percent, remaining]);
              if (percent < 1 && length) {
                return remaining;
              } else {
                deferred.resolveWith(elem, [animation]);
                return false;
              }
            },
            animation = deferred.promise({
              elem: elem,
              props: jQuery.extend({}, properties),
              opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
              }, options),
              originalProperties: properties,
              originalOptions: options,
              startTime: fxNow || createFxNow(),
              duration: options.duration,
              tweens: [],
              createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
              },
              stop: function(gotoEnd) {
                var index = 0,
                    length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                  return this;
                }
                stopped = true;
                for (; index < length; index++) {
                  animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                  deferred.notifyWith(elem, [animation, 1, 0]);
                  deferred.resolveWith(elem, [animation, gotoEnd]);
                } else {
                  deferred.rejectWith(elem, [animation, gotoEnd]);
                }
                return this;
              }
            }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (jQuery.isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
          elem: elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {"*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]},
        tweener: function(props, callback) {
          if (jQuery.isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnotwhite);
          }
          var prop,
              index = 0,
              length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        if (jQuery.fx.off || document.hidden) {
          opt.duration = 0;
        } else {
          opt.duration = typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (jQuery.isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
              optall = jQuery.speed(speed, easing, callback),
              doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || dataPriv.get(this, "finish")) {
                  anim.stop(true);
                }
              };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
          }
          if (clearQueue && type !== false) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true,
                index = type != null && type + "queueHooks",
                timers = jQuery.timers,
                data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index,
                data = dataPriv.get(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer,
            i = 0,
            timers = jQuery.timers;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = undefined;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
          jQuery.fx.start();
        } else {
          jQuery.timers.pop();
        }
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (!timerId) {
          timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
      };
      jQuery.fx.stop = function() {
        if (window.cancelAnimationFrame) {
          window.cancelAnimationFrame(timerId);
        } else {
          window.clearInterval(timerId);
        }
        timerId = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window.setTimeout(next, time);
          hooks.stop = function() {
            window.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook,
          attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
          }
          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? undefined : ret;
        },
        attrHooks: {type: {set: function(elem, value) {
              if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }}},
        removeAttr: function(elem, value) {
          var name,
              i = 0,
              attrNames = value && value.match(rnotwhite);
          if (attrNames && elem.nodeType === 1) {
            while ((name = attrNames[i++])) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }};
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
          var ret,
              handle,
              lowercaseName = name.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i,
          rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== undefined) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }
            return (elem[name] = value);
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {tabIndex: {get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
            }}},
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      var rclass = /[\t\r\n\f]/g;
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;
          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          if (typeof value === "string" && value) {
            classes = value.match(rnotwhite) || [];
            while ((elem = this[i++])) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
              if (cur) {
                j = 0;
                while ((clazz = classes[j++])) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = jQuery.trim(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;
          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          if (typeof value === "string" && value) {
            classes = value.match(rnotwhite) || [];
            while ((elem = this[i++])) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
              if (cur) {
                j = 0;
                while ((clazz = classes[j++])) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = jQuery.trim(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value;
          if (typeof stateVal === "boolean" && type === "string") {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (jQuery.isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }
          return this.each(function() {
            var className,
                i,
                self,
                classNames;
            if (type === "string") {
              i = 0;
              self = jQuery(this);
              classNames = value.match(rnotwhite) || [];
              while ((className = classNames[i++])) {
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === undefined || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function(selector) {
          var className,
              elem,
              i = 0;
          className = " " + selector + " ";
          while ((elem = this[i++])) {
            if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g,
          rspaces = /[\x20\t\r\n\f]+/g;
      jQuery.fn.extend({val: function(value) {
          var hooks,
              ret,
              isFunction,
              elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                return ret;
              }
              ret = elem.value;
              return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
            }
            return;
          }
          isFunction = jQuery.isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (isFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (jQuery.isArray(val)) {
              val = jQuery.map(val, function(value) {
                return value == null ? "" : value + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val;
            }
          });
        }});
      jQuery.extend({valHooks: {
          option: {get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
            }},
          select: {
            get: function(elem) {
              var value,
                  option,
                  options = elem.options,
                  index = elem.selectedIndex,
                  one = elem.type === "select-one",
                  values = one ? null : [],
                  max = one ? index + 1 : options.length,
                  i = index < 0 ? max : one ? index : 0;
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet,
                  option,
                  options = elem.options,
                  values = jQuery.makeArray(value),
                  i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }});
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {set: function(elem, value) {
            if (jQuery.isArray(value)) {
              return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
            }
          }};
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i,
              cur,
              tmp,
              bubbleType,
              ontype,
              handle,
              special,
              eventPath = [elem || document],
              type = hasOwn.call(event, "type") ? event.type : event,
              namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = tmp = elem = elem || document;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = undefined;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                elem[type]();
                jQuery.event.triggered = undefined;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event(), event, {
            type: type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      jQuery.fn.extend({hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }});
      support.focusin = "onfocusin" in window;
      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function(orig, fix) {
          var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this,
                  attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this,
                  attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window.location;
      var nonce = jQuery.now();
      var rquery = (/\?/);
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = (new window.DOMParser()).parseFromString(data, "text/xml");
        } catch (e) {
          xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }
        return xml;
      };
      var rbracket = /\[\]$/,
          rCRLF = /\r?\n/g,
          rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
          rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && jQuery.type(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix,
            s = [],
            add = function(key, valueOrFunction) {
              var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
              s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            };
        if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(i, elem) {
            var val = jQuery(this).val();
            return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
              return {
                name: elem.name,
                value: val.replace(rCRLF, "\r\n")
              };
            }) : {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      var r20 = /%20/g,
          rhash = /#.*$/,
          rts = /([?&])_=[^&]*/,
          rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
          rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          rnoContent = /^(?:GET|HEAD)$/,
          rprotocol = /^\/\//,
          prefilters = {},
          transports = {},
          allTypes = "*/".concat("*"),
          originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType,
              i = 0,
              dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
          if (jQuery.isFunction(func)) {
            while ((dataType = dataTypes[i++])) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = (structure === transports);
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key,
            deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct,
            type,
            finalDataType,
            firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2,
            current,
            conv,
            tmp,
            prev,
            converters = {},
            dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return {
          state: "success",
          data: response
        };
      }
      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = undefined;
          }
          options = options || {};
          var transport,
              cacheURL,
              responseHeadersString,
              responseHeaders,
              timeoutTimer,
              urlAnchor,
              completed,
              fireGlobals,
              i,
              uncached,
              s = jQuery.ajaxSetup({}, options),
              callbackContext = s.context || s,
              globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
              deferred = jQuery.Deferred(),
              completeDeferred = jQuery.Callbacks("once memory"),
              statusCode = s.statusCode || {},
              requestHeaders = {},
              requestHeadersNames = {},
              strAbort = "canceled",
              jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                  var match;
                  if (completed) {
                    if (!responseHeaders) {
                      responseHeaders = {};
                      while ((match = rheaders.exec(responseHeadersString))) {
                        responseHeaders[match[1].toLowerCase()] = match[2];
                      }
                    }
                    match = responseHeaders[key.toLowerCase()];
                  }
                  return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                  return completed ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                  if (completed == null) {
                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                    requestHeaders[name] = value;
                  }
                  return this;
                },
                overrideMimeType: function(type) {
                  if (completed == null) {
                    s.mimeType = type;
                  }
                  return this;
                },
                statusCode: function(map) {
                  var code;
                  if (map) {
                    if (completed) {
                      jqXHR.always(map[jqXHR.status]);
                    } else {
                      for (code in map) {
                        statusCode[code] = [statusCode[code], map[code]];
                      }
                    }
                  }
                  return this;
                },
                abort: function(statusText) {
                  var finalText = statusText || strAbort;
                  if (transport) {
                    transport.abort(finalText);
                  }
                  done(0, finalText);
                  return this;
                }
              };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rts, "");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess,
                success,
                error,
                response,
                modified,
                statusText = nativeStatusText;
            if (completed) {
              return;
            }
            completed = true;
            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer);
            }
            transport = undefined;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = undefined;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!(--jQuery.active)) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, undefined, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (jQuery.isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
          }
          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery._evalUrl = function(url) {
        return jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          "throws": true
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (jQuery.isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (jQuery.isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery(this),
                contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var isFunction = jQuery.isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      },
          xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback,
            errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i,
                  xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = callback("error");
              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {"text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }}
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
          var script,
              callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [],
          rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName,
            overwritten,
            responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window[callbackName];
          window[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName);
            } else {
              window[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && jQuery.isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = undefined;
          });
          return "script";
        }
      });
      support.createHTMLDocument = (function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      })();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base,
            parsed,
            scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector,
            type,
            response,
            self = this,
            off = url.indexOf(" ");
        if (off > -1) {
          selector = jQuery.trim(url.slice(off));
          url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
          callback = params;
          params = undefined;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery.ajax({
            url: url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
      }
      jQuery.offset = {setOffset: function(elem, options, i) {
          var curPosition,
              curLeft,
              curCSSTop,
              curTop,
              curOffset,
              curCSSLeft,
              calculatePosition,
              position = jQuery.css(elem, "position"),
              curElem = jQuery(elem),
              props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (jQuery.isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = (options.top - curOffset.top) + curTop;
          }
          if (options.left != null) {
            props.left = (options.left - curOffset.left) + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }};
      jQuery.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var docElem,
              win,
              rect,
              doc,
              elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          }
          rect = elem.getBoundingClientRect();
          if (rect.width || rect.height) {
            doc = elem.ownerDocument;
            win = getWindow(doc);
            docElem = doc.documentElement;
            return {
              top: rect.top + win.pageYOffset - docElem.clientTop,
              left: rect.left + win.pageXOffset - docElem.clientLeft
            };
          }
          return rect;
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent,
              offset,
              elem = this[0],
              parentOffset = {
                top: 0,
                left: 0
              };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offsetParent = this.offsetParent();
            offset = this.offset();
            if (!jQuery.nodeName(offsetParent[0], "html")) {
              parentOffset = offsetParent.offset();
            }
            parentOffset = {
              top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
              left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
            };
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method, val) {
            var win = getWindow(elem);
            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }
            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
            } else {
              elem[method] = val;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      });
      jQuery.each({
        Height: "height",
        Width: "width"
      }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type, value) {
              var doc;
              if (jQuery.isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }
              return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
            }, type, chainable ? margin : undefined, chainable);
          };
        });
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
      });
      jQuery.parseJSON = JSON.parse;
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window.jQuery,
          _$ = window.$;
      jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
      }
      return jQuery;
    }));
  })($__require('4'));
  return module.exports;
});

$__System.registerDynamic("5", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3');
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      cachedSetTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6');
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('7');
  return module.exports;
});

$__System.registerDynamic("4", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('8');
  return module.exports;
});

$__System.registerDynamic("9", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    (function(root, doc, factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
          factory($, root, doc);
          return $.mobile;
        });
      } else {
        factory(root.jQuery, root, doc);
      }
    }(this, document, function(jQuery, window, document, undefined) {
      (function($) {
        $.mobile = {};
      }(jQuery));
      (function($, window, undefined) {
        $.extend($.mobile, {
          version: "1.4.1",
          subPageUrlKey: "ui-page",
          hideUrlBar: true,
          keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
          activePageClass: "ui-page-active",
          activeBtnClass: "ui-btn-active",
          focusClass: "ui-focus",
          ajaxEnabled: true,
          hashListeningEnabled: true,
          linkBindingEnabled: true,
          defaultPageTransition: "fade",
          maxTransitionWidth: false,
          minScrollBack: 0,
          defaultDialogTransition: "pop",
          pageLoadErrorMessage: "Error Loading Page",
          pageLoadErrorMessageTheme: "a",
          phonegapNavigationEnabled: false,
          autoInitializePage: true,
          pushStateEnabled: true,
          ignoreContentEnabled: false,
          buttonMarkup: {hoverDelay: 200},
          dynamicBaseEnabled: true,
          pageContainer: $(),
          allowCrossDomainPages: false,
          dialogHashKey: "&ui-state=dialog"
        });
      })(jQuery, this);
      (function($, window, undefined) {
        var nsNormalizeDict = {},
            oldFind = $.find,
            rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            jqmDataRE = /:jqmData\(([^)]*)\)/g;
        $.extend($.mobile, {
          ns: "",
          getAttribute: function(element, key) {
            var data;
            element = element.jquery ? element[0] : element;
            if (element && element.getAttribute) {
              data = element.getAttribute("data-" + $.mobile.ns + key);
            }
            try {
              data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? JSON.parse(data) : data;
            } catch (err) {}
            return data;
          },
          nsNormalizeDict: nsNormalizeDict,
          nsNormalize: function(prop) {
            return nsNormalizeDict[prop] || (nsNormalizeDict[prop] = $.camelCase($.mobile.ns + prop));
          },
          closestPageData: function($target) {
            return $target.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page");
          }
        });
        $.fn.jqmData = function(prop, value) {
          var result;
          if (typeof prop !== "undefined") {
            if (prop) {
              prop = $.mobile.nsNormalize(prop);
            }
            if (arguments.length < 2 || value === undefined) {
              result = this.data(prop);
            } else {
              result = this.data(prop, value);
            }
          }
          return result;
        };
        $.jqmData = function(elem, prop, value) {
          var result;
          if (typeof prop !== "undefined") {
            result = $.data(elem, prop ? $.mobile.nsNormalize(prop) : prop, value);
          }
          return result;
        };
        $.fn.jqmRemoveData = function(prop) {
          return this.removeData($.mobile.nsNormalize(prop));
        };
        $.jqmRemoveData = function(elem, prop) {
          return $.removeData(elem, $.mobile.nsNormalize(prop));
        };
        $.find = function(selector, context, ret, extra) {
          if (selector.indexOf(":jqmData") > -1) {
            selector = selector.replace(jqmDataRE, "[data-" + ($.mobile.ns || "") + "$1]");
          }
          return oldFind.call(this, selector, context, ret, extra);
        };
        $.extend($.find, oldFind);
      })(jQuery, this);
      (function($, undefined) {
        var uuid = 0,
            runiqueId = /^ui-id-\d+$/;
        $.ui = $.ui || {};
        $.extend($.ui, {
          version: "c0ab71056b936627e8a7821f03c044aec6280a40",
          keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
          }
        });
        $.fn.extend({
          focus: (function(orig) {
            return function(delay, fn) {
              return typeof delay === "number" ? this.each(function() {
                var elem = this;
                setTimeout(function() {
                  $(elem).focus();
                  if (fn) {
                    fn.call(elem);
                  }
                }, delay);
              }) : orig.apply(this, arguments);
            };
          })($.fn.focus),
          scrollParent: function() {
            var scrollParent;
            if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
              scrollParent = this.parents().filter(function() {
                return (/(relative|absolute|fixed)/).test($.css(this, "position")) && (/(auto|scroll)/).test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"));
              }).eq(0);
            } else {
              scrollParent = this.parents().filter(function() {
                return (/(auto|scroll)/).test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"));
              }).eq(0);
            }
            return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
          },
          uniqueId: function() {
            return this.each(function() {
              if (!this.id) {
                this.id = "ui-id-" + (++uuid);
              }
            });
          },
          removeUniqueId: function() {
            return this.each(function() {
              if (runiqueId.test(this.id)) {
                $(this).removeAttr("id");
              }
            });
          }
        });
        function focusable(element, isTabIndexNotNaN) {
          var map,
              mapName,
              img,
              nodeName = element.nodeName.toLowerCase();
          if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
              return false;
            }
            img = $("img[usemap=#" + mapName + "]")[0];
            return !!img && visible(img);
          }
          return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
        }
        function visible(element) {
          return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
            return $.css(this, "visibility") === "hidden";
          }).length;
        }
        $.extend($.expr[":"], {
          data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
              return !!$.data(elem, dataName);
            };
          }) : function(elem, i, match) {
            return !!$.data(elem, match[3]);
          },
          focusable: function(element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
          },
          tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
          }
        });
        if (!$("<a>").outerWidth(1).jquery) {
          $.each(["Width", "Height"], function(i, name) {
            var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                type = name.toLowerCase(),
                orig = {
                  innerWidth: $.fn.innerWidth,
                  innerHeight: $.fn.innerHeight,
                  outerWidth: $.fn.outerWidth,
                  outerHeight: $.fn.outerHeight
                };
            function reduce(elem, size, border, margin) {
              $.each(side, function() {
                size -= parseFloat($.css(elem, "padding" + this)) || 0;
                if (border) {
                  size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
                }
                if (margin) {
                  size -= parseFloat($.css(elem, "margin" + this)) || 0;
                }
              });
              return size;
            }
            $.fn["inner" + name] = function(size) {
              if (size === undefined) {
                return orig["inner" + name].call(this);
              }
              return this.each(function() {
                $(this).css(type, reduce(this, size) + "px");
              });
            };
            $.fn["outer" + name] = function(size, margin) {
              if (typeof size !== "number") {
                return orig["outer" + name].call(this, size);
              }
              return this.each(function() {
                $(this).css(type, reduce(this, size, true, margin) + "px");
              });
            };
          });
        }
        if (!$.fn.addBack) {
          $.fn.addBack = function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          };
        }
        if ($("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
          $.fn.removeData = (function(removeData) {
            return function(key) {
              if (arguments.length) {
                return removeData.call(this, $.camelCase(key));
              } else {
                return removeData.call(this);
              }
            };
          })($.fn.removeData);
        }
        $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        $.support.selectstart = "onselectstart" in document.createElement("div");
        $.fn.extend({
          disableSelection: function() {
            return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(event) {
              event.preventDefault();
            });
          },
          enableSelection: function() {
            return this.unbind(".ui-disableSelection");
          },
          zIndex: function(zIndex) {
            if (zIndex !== undefined) {
              return this.css("zIndex", zIndex);
            }
            if (this.length) {
              var elem = $(this[0]),
                  position,
                  value;
              while (elem.length && elem[0] !== document) {
                position = elem.css("position");
                if (position === "absolute" || position === "relative" || position === "fixed") {
                  value = parseInt(elem.css("zIndex"), 10);
                  if (!isNaN(value) && value !== 0) {
                    return value;
                  }
                }
                elem = elem.parent();
              }
            }
            return 0;
          }
        });
        $.ui.plugin = {
          add: function(module, option, set) {
            var i,
                proto = $.ui[module].prototype;
            for (i in set) {
              proto.plugins[i] = proto.plugins[i] || [];
              proto.plugins[i].push([option, set[i]]);
            }
          },
          call: function(instance, name, args, allowDisconnected) {
            var i,
                set = instance.plugins[name];
            if (!set) {
              return;
            }
            if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
              return;
            }
            for (i = 0; i < set.length; i++) {
              if (instance.options[set[i][0]]) {
                set[i][1].apply(instance.element, args);
              }
            }
          }
        };
      })(jQuery);
      (function($, window, undefined) {
        $.extend($.mobile, {
          window: $(window),
          document: $(document),
          keyCode: $.ui.keyCode,
          behaviors: {},
          silentScroll: function(ypos) {
            if ($.type(ypos) !== "number") {
              ypos = $.mobile.defaultHomeScroll;
            }
            $.event.special.scrollstart.enabled = false;
            setTimeout(function() {
              window.scrollTo(0, ypos);
              $.mobile.document.trigger("silentscroll", {
                x: 0,
                y: ypos
              });
            }, 20);
            setTimeout(function() {
              $.event.special.scrollstart.enabled = true;
            }, 150);
          },
          getClosestBaseUrl: function(ele) {
            var url = $(ele).closest(".ui-page").jqmData("url"),
                base = $.mobile.path.documentBase.hrefNoHash;
            if (!$.mobile.dynamicBaseEnabled || !url || !$.mobile.path.isPath(url)) {
              url = base;
            }
            return $.mobile.path.makeUrlAbsolute(url, base);
          },
          removeActiveLinkClass: function(forceRemoval) {
            if (!!$.mobile.activeClickedLink && (!$.mobile.activeClickedLink.closest("." + $.mobile.activePageClass).length || forceRemoval)) {
              $.mobile.activeClickedLink.removeClass($.mobile.activeBtnClass);
            }
            $.mobile.activeClickedLink = null;
          },
          getInheritedTheme: function(el, defaultTheme) {
            var e = el[0],
                ltr = "",
                re = /ui-(bar|body|overlay)-([a-z])\b/,
                c,
                m;
            while (e) {
              c = e.className || "";
              if (c && (m = re.exec(c)) && (ltr = m[2])) {
                break;
              }
              e = e.parentNode;
            }
            return ltr || defaultTheme || "a";
          },
          enhanceable: function(elements) {
            return this.haveParents(elements, "enhance");
          },
          hijackable: function(elements) {
            return this.haveParents(elements, "ajax");
          },
          haveParents: function(elements, attr) {
            if (!$.mobile.ignoreContentEnabled) {
              return elements;
            }
            var count = elements.length,
                $newSet = $(),
                e,
                $element,
                excluded,
                i,
                c;
            for (i = 0; i < count; i++) {
              $element = elements.eq(i);
              excluded = false;
              e = elements[i];
              while (e) {
                c = e.getAttribute ? e.getAttribute("data-" + $.mobile.ns + attr) : "";
                if (c === "false") {
                  excluded = true;
                  break;
                }
                e = e.parentNode;
              }
              if (!excluded) {
                $newSet = $newSet.add($element);
              }
            }
            return $newSet;
          },
          getScreenHeight: function() {
            return window.innerHeight || $.mobile.window.height();
          },
          resetActivePageHeight: function(height) {
            var page = $("." + $.mobile.activePageClass),
                pageHeight = page.height(),
                pageOuterHeight = page.outerHeight(true);
            height = (typeof height === "number") ? height : $.mobile.getScreenHeight();
            page.css("min-height", height - (pageOuterHeight - pageHeight));
          },
          loading: function() {
            var loader = this.loading._widget || $($.mobile.loader.prototype.defaultHtml).loader(),
                returnValue = loader.loader.apply(loader, arguments);
            this.loading._widget = loader;
            return returnValue;
          }
        });
        $.addDependents = function(elem, newDependents) {
          var $elem = $(elem),
              dependents = $elem.jqmData("dependents") || $();
          $elem.jqmData("dependents", $(dependents).add(newDependents));
        };
        $.fn.extend({
          removeWithDependents: function() {
            $.removeWithDependents(this);
          },
          enhanceWithin: function() {
            var index,
                widgetElements = {},
                keepNative = $.mobile.page.prototype.keepNativeSelector(),
                that = this;
            if ($.mobile.nojs) {
              $.mobile.nojs(this);
            }
            if ($.mobile.links) {
              $.mobile.links(this);
            }
            if ($.mobile.degradeInputsWithin) {
              $.mobile.degradeInputsWithin(this);
            }
            if ($.fn.buttonMarkup) {
              this.find($.fn.buttonMarkup.initSelector).not(keepNative).jqmEnhanceable().buttonMarkup();
            }
            if ($.fn.fieldcontain) {
              this.find(":jqmData(role='fieldcontain')").not(keepNative).jqmEnhanceable().fieldcontain();
            }
            $.each($.mobile.widgets, function(name, constructor) {
              if (constructor.initSelector) {
                var elements = $.mobile.enhanceable(that.find(constructor.initSelector));
                if (elements.length > 0) {
                  elements = elements.not(keepNative);
                }
                if (elements.length > 0) {
                  widgetElements[constructor.prototype.widgetName] = elements;
                }
              }
            });
            for (index in widgetElements) {
              widgetElements[index][index]();
            }
            return this;
          },
          addDependents: function(newDependents) {
            $.addDependents(this, newDependents);
          },
          getEncodedText: function() {
            return $("<a>").text(this.text()).html();
          },
          jqmEnhanceable: function() {
            return $.mobile.enhanceable(this);
          },
          jqmHijackable: function() {
            return $.mobile.hijackable(this);
          }
        });
        $.removeWithDependents = function(nativeElement) {
          var element = $(nativeElement);
          (element.jqmData("dependents") || $()).remove();
          element.remove();
        };
        $.addDependents = function(nativeElement, newDependents) {
          var element = $(nativeElement),
              dependents = element.jqmData("dependents") || $();
          element.jqmData("dependents", $(dependents).add(newDependents));
        };
        $.find.matches = function(expr, set) {
          return $.find(expr, null, null, set);
        };
        $.find.matchesSelector = function(node, expr) {
          return $.find(expr, null, null, [node]).length > 0;
        };
      })(jQuery, this);
      (function($, undefined) {
        var uuid = 0,
            slice = Array.prototype.slice,
            _cleanData = $.cleanData;
        $.cleanData = function(elems) {
          for (var i = 0,
              elem; (elem = elems[i]) != null; i++) {
            try {
              $(elem).triggerHandler("remove");
            } catch (e) {}
          }
          _cleanData(elems);
        };
        $.widget = function(name, base, prototype) {
          var fullName,
              existingConstructor,
              constructor,
              basePrototype,
              proxiedPrototype = {},
              namespace = name.split(".")[0];
          name = name.split(".")[1];
          fullName = namespace + "-" + name;
          if (!prototype) {
            prototype = base;
            base = $.Widget;
          }
          $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
          };
          $[namespace] = $[namespace] || {};
          existingConstructor = $[namespace][name];
          constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
              return new constructor(options, element);
            }
            if (arguments.length) {
              this._createWidget(options, element);
            }
          };
          $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
          });
          basePrototype = new base();
          basePrototype.options = $.widget.extend({}, basePrototype.options);
          $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
              proxiedPrototype[prop] = value;
              return;
            }
            proxiedPrototype[prop] = (function() {
              var _super = function() {
                return base.prototype[prop].apply(this, arguments);
              },
                  _superApply = function(args) {
                    return base.prototype[prop].apply(this, args);
                  };
              return function() {
                var __super = this._super,
                    __superApply = this._superApply,
                    returnValue;
                this._super = _super;
                this._superApply = _superApply;
                returnValue = value.apply(this, arguments);
                this._super = __super;
                this._superApply = __superApply;
                return returnValue;
              };
            })();
          });
          constructor.prototype = $.widget.extend(basePrototype, {widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name}, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
          });
          if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
              var childPrototype = child.prototype;
              $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            delete existingConstructor._childConstructors;
          } else {
            base._childConstructors.push(constructor);
          }
          $.widget.bridge(name, constructor);
          return constructor;
        };
        $.widget.extend = function(target) {
          var input = slice.call(arguments, 1),
              inputIndex = 0,
              inputLength = input.length,
              key,
              value;
          for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
              value = input[inputIndex][key];
              if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                if ($.isPlainObject(value)) {
                  target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                } else {
                  target[key] = value;
                }
              }
            }
          }
          return target;
        };
        $.widget.bridge = function(name, object) {
          var fullName = object.prototype.widgetFullName || name;
          $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string",
                args = slice.call(arguments, 1),
                returnValue = this;
            options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options;
            if (isMethodCall) {
              this.each(function() {
                var methodValue,
                    instance = $.data(this, fullName);
                if (options === "instance") {
                  returnValue = instance;
                  return false;
                }
                if (!instance) {
                  return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                  return $.error("no such method '" + options + "' for " + name + " widget instance");
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== undefined) {
                  returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                  return false;
                }
              });
            } else {
              this.each(function() {
                var instance = $.data(this, fullName);
                if (instance) {
                  instance.option(options || {})._init();
                } else {
                  $.data(this, fullName, new object(options, this));
                }
              });
            }
            return returnValue;
          };
        };
        $.Widget = function() {};
        $.Widget._childConstructors = [];
        $.Widget.prototype = {
          widgetName: "widget",
          widgetEventPrefix: "",
          defaultElement: "<div>",
          options: {
            disabled: false,
            create: null
          },
          _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            if (element !== this) {
              $.data(element, this.widgetFullName, this);
              this._on(true, this.element, {remove: function(event) {
                  if (event.target === element) {
                    this.destroy();
                  }
                }});
              this.document = $(element.style ? element.ownerDocument : element.document || element);
              this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
          },
          _getCreateOptions: $.noop,
          _getCreateEventData: $.noop,
          _create: $.noop,
          _init: $.noop,
          destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
          },
          _destroy: $.noop,
          widget: function() {
            return this.element;
          },
          option: function(key, value) {
            var options = key,
                parts,
                curOption,
                i;
            if (arguments.length === 0) {
              return $.widget.extend({}, this.options);
            }
            if (typeof key === "string") {
              options = {};
              parts = key.split(".");
              key = parts.shift();
              if (parts.length) {
                curOption = options[key] = $.widget.extend({}, this.options[key]);
                for (i = 0; i < parts.length - 1; i++) {
                  curOption[parts[i]] = curOption[parts[i]] || {};
                  curOption = curOption[parts[i]];
                }
                key = parts.pop();
                if (value === undefined) {
                  return curOption[key] === undefined ? null : curOption[key];
                }
                curOption[key] = value;
              } else {
                if (value === undefined) {
                  return this.options[key] === undefined ? null : this.options[key];
                }
                options[key] = value;
              }
            }
            this._setOptions(options);
            return this;
          },
          _setOptions: function(options) {
            var key;
            for (key in options) {
              this._setOption(key, options[key]);
            }
            return this;
          },
          _setOption: function(key, value) {
            this.options[key] = value;
            if (key === "disabled") {
              this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);
              this.hoverable.removeClass("ui-state-hover");
              this.focusable.removeClass("ui-state-focus");
            }
            return this;
          },
          enable: function() {
            return this._setOptions({disabled: false});
          },
          disable: function() {
            return this._setOptions({disabled: true});
          },
          _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement,
                instance = this;
            if (typeof suppressDisabledCheck !== "boolean") {
              handlers = element;
              element = suppressDisabledCheck;
              suppressDisabledCheck = false;
            }
            if (!handlers) {
              handlers = element;
              element = this.element;
              delegateElement = this.widget();
            } else {
              element = delegateElement = $(element);
              this.bindings = this.bindings.add(element);
            }
            $.each(handlers, function(event, handler) {
              function handlerProxy() {
                if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                  return;
                }
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
              }
              if (typeof handler !== "string") {
                handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
              }
              var match = event.match(/^(\w+)\s*(.*)$/),
                  eventName = match[1] + instance.eventNamespace,
                  selector = match[2];
              if (selector) {
                delegateElement.delegate(selector, eventName, handlerProxy);
              } else {
                element.bind(eventName, handlerProxy);
              }
            });
          },
          _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);
          },
          _delay: function(handler, delay) {
            function handlerProxy() {
              return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
          },
          _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
              mouseenter: function(event) {
                $(event.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function(event) {
                $(event.currentTarget).removeClass("ui-state-hover");
              }
            });
          },
          _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
              focusin: function(event) {
                $(event.currentTarget).addClass("ui-state-focus");
              },
              focusout: function(event) {
                $(event.currentTarget).removeClass("ui-state-focus");
              }
            });
          },
          _trigger: function(type, event, data) {
            var prop,
                orig,
                callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
              for (prop in orig) {
                if (!(prop in event)) {
                  event[prop] = orig[prop];
                }
              }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
          }
        };
        $.each({
          show: "fadeIn",
          hide: "fadeOut"
        }, function(method, defaultEffect) {
          $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
              options = {effect: options};
            }
            var hasOptions,
                effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
              options = {duration: options};
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
              element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
              element[method](options);
            } else if (effectName !== method && element[effectName]) {
              element[effectName](options.duration, options.easing, callback);
            } else {
              element.queue(function(next) {
                $(this)[method]();
                if (callback) {
                  callback.call(element[0]);
                }
                next();
              });
            }
          };
        });
      })(jQuery);
      (function($, undefined) {
        var rcapitals = /[A-Z]/g,
            replaceFunction = function(c) {
              return "-" + c.toLowerCase();
            };
        $.extend($.Widget.prototype, {_getCreateOptions: function() {
            var option,
                value,
                elem = this.element[0],
                options = {};
            if (!$.mobile.getAttribute(elem, "defaults")) {
              for (option in this.options) {
                value = $.mobile.getAttribute(elem, option.replace(rcapitals, replaceFunction));
                if (value != null) {
                  options[option] = value;
                }
              }
            }
            return options;
          }});
        $.mobile.widget = $.Widget;
      })(jQuery);
      (function($) {
        var loaderClass = "ui-loader",
            $html = $("html");
        $.widget("mobile.loader", {
          options: {
            theme: "a",
            textVisible: false,
            html: "",
            text: "loading"
          },
          defaultHtml: "<div class='" + loaderClass + "'>" + "<span class='ui-icon-loading'></span>" + "<h1></h1>" + "</div>",
          fakeFixLoader: function() {
            var activeBtn = $("." + $.mobile.activeBtnClass).first();
            this.element.css({top: $.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 || activeBtn.length && activeBtn.offset().top || 100});
          },
          checkLoaderPosition: function() {
            var offset = this.element.offset(),
                scrollTop = this.window.scrollTop(),
                screenHeight = $.mobile.getScreenHeight();
            if (offset.top < scrollTop || (offset.top - scrollTop) > screenHeight) {
              this.element.addClass("ui-loader-fakefix");
              this.fakeFixLoader();
              this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", $.proxy(this.fakeFixLoader, this));
            }
          },
          resetHtml: function() {
            this.element.html($(this.defaultHtml).html());
          },
          show: function(theme, msgText, textonly) {
            var textVisible,
                message,
                loadSettings;
            this.resetHtml();
            if ($.type(theme) === "object") {
              loadSettings = $.extend({}, this.options, theme);
              theme = loadSettings.theme;
            } else {
              loadSettings = this.options;
              theme = theme || loadSettings.theme;
            }
            message = msgText || (loadSettings.text === false ? "" : loadSettings.text);
            $html.addClass("ui-loading");
            textVisible = loadSettings.textVisible;
            this.element.attr("class", loaderClass + " ui-corner-all ui-body-" + theme + " ui-loader-" + (textVisible || msgText || theme.text ? "verbose" : "default") + (loadSettings.textonly || textonly ? " ui-loader-textonly" : ""));
            if (loadSettings.html) {
              this.element.html(loadSettings.html);
            } else {
              this.element.find("h1").text(message);
            }
            this.element.appendTo($.mobile.pageContainer);
            this.checkLoaderPosition();
            this.window.bind("scroll", $.proxy(this.checkLoaderPosition, this));
          },
          hide: function() {
            $html.removeClass("ui-loading");
            if (this.options.text) {
              this.element.removeClass("ui-loader-fakefix");
            }
            $.mobile.window.unbind("scroll", this.fakeFixLoader);
            $.mobile.window.unbind("scroll", this.checkLoaderPosition);
          }
        });
      })(jQuery, this);
      (function($, window, undefined) {
        '$:nomunge';
        var str_hashchange = 'hashchange',
            doc = document,
            fake_onhashchange,
            special = $.event.special,
            doc_mode = doc.documentMode,
            supports_onhashchange = 'on' + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);
        function get_fragment(url) {
          url = url || location.href;
          return '#' + url.replace(/^[^#]*#?(.*)$/, '$1');
        }
        ;
        $.fn[str_hashchange] = function(fn) {
          return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange);
        };
        $.fn[str_hashchange].delay = 50;
        special[str_hashchange] = $.extend(special[str_hashchange], {
          setup: function() {
            if (supports_onhashchange) {
              return false;
            }
            $(fake_onhashchange.start);
          },
          teardown: function() {
            if (supports_onhashchange) {
              return false;
            }
            $(fake_onhashchange.stop);
          }
        });
        fake_onhashchange = (function() {
          var self = {},
              timeout_id,
              last_hash = get_fragment(),
              fn_retval = function(val) {
                return val;
              },
              history_set = fn_retval,
              history_get = fn_retval;
          self.start = function() {
            timeout_id || poll();
          };
          self.stop = function() {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined;
          };
          function poll() {
            var hash = get_fragment(),
                history_hash = history_get(last_hash);
            if (hash !== last_hash) {
              history_set(last_hash = hash, history_hash);
              $(window).trigger(str_hashchange);
            } else if (history_hash !== last_hash) {
              location.href = location.href.replace(/#.*/, '') + history_hash;
            }
            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay);
          }
          ;
          window.attachEvent && !window.addEventListener && !supports_onhashchange && (function() {
            var iframe,
                iframe_src;
            self.start = function() {
              if (!iframe) {
                iframe_src = $.fn[str_hashchange].src;
                iframe_src = iframe_src && iframe_src + get_fragment();
                iframe = $('<iframe tabindex="-1" title="empty"/>').hide().one('load', function() {
                  iframe_src || history_set(get_fragment());
                  poll();
                }).attr('src', iframe_src || 'javascript:0').insertAfter('body')[0].contentWindow;
                doc.onpropertychange = function() {
                  try {
                    if (event.propertyName === 'title') {
                      iframe.document.title = doc.title;
                    }
                  } catch (e) {}
                };
              }
            };
            self.stop = fn_retval;
            history_get = function() {
              return get_fragment(iframe.location.href);
            };
            history_set = function(hash, history_hash) {
              var iframe_doc = iframe.document,
                  domain = $.fn[str_hashchange].domain;
              if (hash !== history_hash) {
                iframe_doc.title = doc.title;
                iframe_doc.open();
                domain && iframe_doc.write('<script>document.domain="' + domain + '"</script>');
                iframe_doc.close();
                iframe.location.hash = hash;
              }
            };
          })();
          return self;
        })();
      })(jQuery, this);
      (function($, undefined) {
        window.matchMedia = window.matchMedia || (function(doc, undefined) {
          var bool,
              docElem = doc.documentElement,
              refNode = docElem.firstElementChild || docElem.firstChild,
              fakeBody = doc.createElement("body"),
              div = doc.createElement("div");
          div.id = "mq-test-1";
          div.style.cssText = "position:absolute;top:-100em";
          fakeBody.style.background = "none";
          fakeBody.appendChild(div);
          return function(q) {
            div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";
            docElem.insertBefore(fakeBody, refNode);
            bool = div.offsetWidth === 42;
            docElem.removeChild(fakeBody);
            return {
              matches: bool,
              media: q
            };
          };
        }(document));
        $.mobile.media = function(q) {
          return window.matchMedia(q).matches;
        };
      })(jQuery);
      (function($, undefined) {
        var support = {touch: "ontouchend" in document};
        $.mobile.support = $.mobile.support || {};
        $.extend($.support, support);
        $.extend($.mobile.support, support);
      }(jQuery));
      (function($, undefined) {
        $.extend($.support, {orientation: "orientation" in window && "onorientationchange" in window});
      }(jQuery));
      (function($, undefined) {
        function propExists(prop) {
          var uc_prop = prop.charAt(0).toUpperCase() + prop.substr(1),
              props = (prop + " " + vendors.join(uc_prop + " ") + uc_prop).split(" "),
              v;
          for (v in props) {
            if (fbCSS[props[v]] !== undefined) {
              return true;
            }
          }
        }
        var fakeBody = $("<body>").prependTo("html"),
            fbCSS = fakeBody[0].style,
            vendors = ["Webkit", "Moz", "O"],
            webos = "palmGetResource" in window,
            operamini = window.operamini && ({}).toString.call(window.operamini) === "[object OperaMini]",
            bb = window.blackberry && !propExists("-webkit-transform"),
            nokiaLTE7_3;
        function inlineSVG() {
          var w = window,
              svg = !!w.document.createElementNS && !!w.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect && !(w.opera && navigator.userAgent.indexOf("Chrome") === -1),
              support = function(data) {
                if (!(data && svg)) {
                  $("html").addClass("ui-nosvg");
                }
              },
              img = new w.Image();
          img.onerror = function() {
            support(false);
          };
          img.onload = function() {
            support(img.width === 1 && img.height === 1);
          };
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        }
        function transform3dTest() {
          var mqProp = "transform-3d",
              ret = $.mobile.media("(-" + vendors.join("-" + mqProp + "),(-") + "-" + mqProp + "),(" + mqProp + ")"),
              el,
              transforms,
              t;
          if (ret) {
            return !!ret;
          }
          el = document.createElement("div");
          transforms = {
            "MozTransform": "-moz-transform",
            "transform": "transform"
          };
          fakeBody.append(el);
          for (t in transforms) {
            if (el.style[t] !== undefined) {
              el.style[t] = "translate3d( 100px, 1px, 1px )";
              ret = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
          }
          return (!!ret && ret !== "none");
        }
        function baseTagTest() {
          var fauxBase = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
              base = $("head base"),
              fauxEle = null,
              href = "",
              link,
              rebase;
          if (!base.length) {
            base = fauxEle = $("<base>", {"href": fauxBase}).appendTo("head");
          } else {
            href = base.attr("href");
          }
          link = $("<a href='testurl' />").prependTo(fakeBody);
          rebase = link[0].href;
          base[0].href = href || location.pathname;
          if (fauxEle) {
            fauxEle.remove();
          }
          return rebase.indexOf(fauxBase) === 0;
        }
        function cssPointerEventsTest() {
          var element = document.createElement("x"),
              documentElement = document.documentElement,
              getComputedStyle = window.getComputedStyle,
              supports;
          if (!("pointerEvents" in element.style)) {
            return false;
          }
          element.style.pointerEvents = "auto";
          element.style.pointerEvents = "x";
          documentElement.appendChild(element);
          supports = getComputedStyle && getComputedStyle(element, "").pointerEvents === "auto";
          documentElement.removeChild(element);
          return !!supports;
        }
        function boundingRect() {
          var div = document.createElement("div");
          return typeof div.getBoundingClientRect !== "undefined";
        }
        $.extend($.mobile, {browser: {}});
        $.mobile.browser.oldIE = (function() {
          var v = 3,
              div = document.createElement("div"),
              a = div.all || [];
          do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><br><![endif]-->";
          } while (a[0]);
          return v > 4 ? v : !v;
        })();
        function fixedPosition() {
          var w = window,
              ua = navigator.userAgent,
              platform = navigator.platform,
              wkmatch = ua.match(/AppleWebKit\/([0-9]+)/),
              wkversion = !!wkmatch && wkmatch[1],
              ffmatch = ua.match(/Fennec\/([0-9]+)/),
              ffversion = !!ffmatch && ffmatch[1],
              operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/),
              omversion = !!operammobilematch && operammobilematch[1];
          if (((platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf("iPod") > -1) && wkversion && wkversion < 534) || (w.operamini && ({}).toString.call(w.operamini) === "[object OperaMini]") || (operammobilematch && omversion < 7458) || (ua.indexOf("Android") > -1 && wkversion && wkversion < 533) || (ffversion && ffversion < 6) || ("palmGetResource" in window && wkversion && wkversion < 534) || (ua.indexOf("MeeGo") > -1 && ua.indexOf("NokiaBrowser/8.5.0") > -1)) {
            return false;
          }
          return true;
        }
        $.extend($.support, {
          pushState: "pushState" in history && "replaceState" in history && !(window.navigator.userAgent.indexOf("Firefox") >= 0 && window.top !== window) && (window.navigator.userAgent.search(/CriOS/) === -1),
          mediaquery: $.mobile.media("only all"),
          cssPseudoElement: !!propExists("content"),
          touchOverflow: !!propExists("overflowScrolling"),
          cssTransform3d: transform3dTest(),
          boxShadow: !!propExists("boxShadow") && !bb,
          fixedPosition: fixedPosition(),
          scrollTop: ("pageXOffset" in window || "scrollTop" in document.documentElement || "scrollTop" in fakeBody[0]) && !webos && !operamini,
          dynamicBaseTag: baseTagTest(),
          cssPointerEvents: cssPointerEventsTest(),
          boundingRect: boundingRect(),
          inlineSVG: inlineSVG
        });
        fakeBody.remove();
        nokiaLTE7_3 = (function() {
          var ua = window.navigator.userAgent;
          return ua.indexOf("Nokia") > -1 && (ua.indexOf("Symbian/3") > -1 || ua.indexOf("Series60/5") > -1) && ua.indexOf("AppleWebKit") > -1 && ua.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/);
        })();
        $.mobile.gradeA = function() {
          return (($.support.mediaquery && $.support.cssPseudoElement) || $.mobile.browser.oldIE && $.mobile.browser.oldIE >= 8) && ($.support.boundingRect || $.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/) !== null);
        };
        $.mobile.ajaxBlacklist = window.blackberry && !window.WebKitPoint || operamini || nokiaLTE7_3;
        if (nokiaLTE7_3) {
          $(function() {
            $("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet");
          });
        }
        if (!$.support.boxShadow) {
          $("html").addClass("ui-noboxshadow");
        }
      })(jQuery);
      (function($, undefined) {
        var $win = $.mobile.window,
            self,
            dummyFnToInitNavigate = function() {};
        $.event.special.beforenavigate = {
          setup: function() {
            $win.on("navigate", dummyFnToInitNavigate);
          },
          teardown: function() {
            $win.off("navigate", dummyFnToInitNavigate);
          }
        };
        $.event.special.navigate = self = {
          bound: false,
          pushStateEnabled: true,
          originalEventName: undefined,
          isPushStateEnabled: function() {
            return $.support.pushState && $.mobile.pushStateEnabled === true && this.isHashChangeEnabled();
          },
          isHashChangeEnabled: function() {
            return $.mobile.hashListeningEnabled === true;
          },
          popstate: function(event) {
            var newEvent = new $.Event("navigate"),
                beforeNavigate = new $.Event("beforenavigate"),
                state = event.originalEvent.state || {};
            beforeNavigate.originalEvent = event;
            $win.trigger(beforeNavigate);
            if (beforeNavigate.isDefaultPrevented()) {
              return;
            }
            if (event.historyState) {
              $.extend(state, event.historyState);
            }
            newEvent.originalEvent = event;
            setTimeout(function() {
              $win.trigger(newEvent, {state: state});
            }, 0);
          },
          hashchange: function(event) {
            var newEvent = new $.Event("navigate"),
                beforeNavigate = new $.Event("beforenavigate");
            beforeNavigate.originalEvent = event;
            $win.trigger(beforeNavigate);
            if (beforeNavigate.isDefaultPrevented()) {
              return;
            }
            newEvent.originalEvent = event;
            $win.trigger(newEvent, {state: event.hashchangeState || {}});
          },
          setup: function() {
            if (self.bound) {
              return;
            }
            self.bound = true;
            if (self.isPushStateEnabled()) {
              self.originalEventName = "popstate";
              $win.bind("popstate.navigate", self.popstate);
            } else if (self.isHashChangeEnabled()) {
              self.originalEventName = "hashchange";
              $win.bind("hashchange.navigate", self.hashchange);
            }
          }
        };
      })(jQuery);
      (function($, undefined) {
        var path,
            $base,
            dialogHashKey = "&ui-state=dialog";
        $.mobile.path = path = {
          uiStateKey: "&ui-state",
          urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
          getLocation: function(url) {
            var uri = url ? this.parseUrl(url) : location,
                hash = this.parseUrl(url || location.href).hash;
            hash = hash === "#" ? "" : hash;
            return uri.protocol + "//" + uri.host + uri.pathname + uri.search + hash;
          },
          getDocumentUrl: function(asParsedObject) {
            return asParsedObject ? $.extend({}, path.documentUrl) : path.documentUrl.href;
          },
          parseLocation: function() {
            return this.parseUrl(this.getLocation());
          },
          parseUrl: function(url) {
            if ($.type(url) === "object") {
              return url;
            }
            var matches = path.urlParseRE.exec(url || "") || [];
            return {
              href: matches[0] || "",
              hrefNoHash: matches[1] || "",
              hrefNoSearch: matches[2] || "",
              domain: matches[3] || "",
              protocol: matches[4] || "",
              doubleSlash: matches[5] || "",
              authority: matches[6] || "",
              username: matches[8] || "",
              password: matches[9] || "",
              host: matches[10] || "",
              hostname: matches[11] || "",
              port: matches[12] || "",
              pathname: matches[13] || "",
              directory: matches[14] || "",
              filename: matches[15] || "",
              search: matches[16] || "",
              hash: matches[17] || ""
            };
          },
          makePathAbsolute: function(relPath, absPath) {
            var absStack,
                relStack,
                i,
                d;
            if (relPath && relPath.charAt(0) === "/") {
              return relPath;
            }
            relPath = relPath || "";
            absPath = absPath ? absPath.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";
            absStack = absPath ? absPath.split("/") : [];
            relStack = relPath.split("/");
            for (i = 0; i < relStack.length; i++) {
              d = relStack[i];
              switch (d) {
                case ".":
                  break;
                case "..":
                  if (absStack.length) {
                    absStack.pop();
                  }
                  break;
                default:
                  absStack.push(d);
                  break;
              }
            }
            return "/" + absStack.join("/");
          },
          isSameDomain: function(absUrl1, absUrl2) {
            return path.parseUrl(absUrl1).domain === path.parseUrl(absUrl2).domain;
          },
          isRelativeUrl: function(url) {
            return path.parseUrl(url).protocol === "";
          },
          isAbsoluteUrl: function(url) {
            return path.parseUrl(url).protocol !== "";
          },
          makeUrlAbsolute: function(relUrl, absUrl) {
            if (!path.isRelativeUrl(relUrl)) {
              return relUrl;
            }
            if (absUrl === undefined) {
              absUrl = this.documentBase;
            }
            var relObj = path.parseUrl(relUrl),
                absObj = path.parseUrl(absUrl),
                protocol = relObj.protocol || absObj.protocol,
                doubleSlash = relObj.protocol ? relObj.doubleSlash : (relObj.doubleSlash || absObj.doubleSlash),
                authority = relObj.authority || absObj.authority,
                hasPath = relObj.pathname !== "",
                pathname = path.makePathAbsolute(relObj.pathname || absObj.filename, absObj.pathname),
                search = relObj.search || (!hasPath && absObj.search) || "",
                hash = relObj.hash;
            return protocol + doubleSlash + authority + pathname + search + hash;
          },
          addSearchParams: function(url, params) {
            var u = path.parseUrl(url),
                p = (typeof params === "object") ? $.param(params) : params,
                s = u.search || "?";
            return u.hrefNoSearch + s + (s.charAt(s.length - 1) !== "?" ? "&" : "") + p + (u.hash || "");
          },
          convertUrlToDataUrl: function(absUrl) {
            var u = path.parseUrl(absUrl);
            if (path.isEmbeddedPage(u)) {
              return u.hash.split(dialogHashKey)[0].replace(/^#/, "").replace(/\?.*$/, "");
            } else if (path.isSameDomain(u, this.documentBase)) {
              return u.hrefNoHash.replace(this.documentBase.domain, "").split(dialogHashKey)[0];
            }
            return window.decodeURIComponent(absUrl);
          },
          get: function(newPath) {
            if (newPath === undefined) {
              newPath = path.parseLocation().hash;
            }
            return path.stripHash(newPath).replace(/[^\/]*\.[^\/*]+$/, "");
          },
          set: function(path) {
            location.hash = path;
          },
          isPath: function(url) {
            return (/\//).test(url);
          },
          clean: function(url) {
            return url.replace(this.documentBase.domain, "");
          },
          stripHash: function(url) {
            return url.replace(/^#/, "");
          },
          stripQueryParams: function(url) {
            return url.replace(/\?.*$/, "");
          },
          cleanHash: function(hash) {
            return path.stripHash(hash.replace(/\?.*$/, "").replace(dialogHashKey, ""));
          },
          isHashValid: function(hash) {
            return (/^#[^#]+$/).test(hash);
          },
          isExternal: function(url) {
            var u = path.parseUrl(url);
            return u.protocol && u.domain !== this.documentUrl.domain ? true : false;
          },
          hasProtocol: function(url) {
            return (/^(:?\w+:)/).test(url);
          },
          isEmbeddedPage: function(url) {
            var u = path.parseUrl(url);
            if (u.protocol !== "") {
              return (!this.isPath(u.hash) && u.hash && (u.hrefNoHash === this.documentUrl.hrefNoHash || (this.documentBaseDiffers && u.hrefNoHash === this.documentBase.hrefNoHash)));
            }
            return (/^#/).test(u.href);
          },
          squash: function(url, resolutionUrl) {
            var href,
                cleanedUrl,
                search,
                stateIndex,
                isPath = this.isPath(url),
                uri = this.parseUrl(url),
                preservedHash = uri.hash,
                uiState = "";
            resolutionUrl = resolutionUrl || (path.isPath(url) ? path.getLocation() : path.getDocumentUrl());
            cleanedUrl = isPath ? path.stripHash(url) : url;
            cleanedUrl = path.isPath(uri.hash) ? path.stripHash(uri.hash) : cleanedUrl;
            stateIndex = cleanedUrl.indexOf(this.uiStateKey);
            if (stateIndex > -1) {
              uiState = cleanedUrl.slice(stateIndex);
              cleanedUrl = cleanedUrl.slice(0, stateIndex);
            }
            href = path.makeUrlAbsolute(cleanedUrl, resolutionUrl);
            search = this.parseUrl(href).search;
            if (isPath) {
              if (path.isPath(preservedHash) || preservedHash.replace("#", "").indexOf(this.uiStateKey) === 0) {
                preservedHash = "";
              }
              if (uiState && preservedHash.indexOf(this.uiStateKey) === -1) {
                preservedHash += uiState;
              }
              if (preservedHash.indexOf("#") === -1 && preservedHash !== "") {
                preservedHash = "#" + preservedHash;
              }
              href = path.parseUrl(href);
              href = href.protocol + "//" + href.host + href.pathname + search + preservedHash;
            } else {
              href += href.indexOf("#") > -1 ? uiState : "#" + uiState;
            }
            return href;
          },
          isPreservableHash: function(hash) {
            return hash.replace("#", "").indexOf(this.uiStateKey) === 0;
          },
          hashToSelector: function(hash) {
            var hasHash = (hash.substring(0, 1) === "#");
            if (hasHash) {
              hash = hash.substring(1);
            }
            return (hasHash ? "#" : "") + hash.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1");
          },
          getFilePath: function(path) {
            var splitkey = "&" + $.mobile.subPageUrlKey;
            return path && path.split(splitkey)[0].split(dialogHashKey)[0];
          },
          isFirstPageUrl: function(url) {
            var u = path.parseUrl(path.makeUrlAbsolute(url, this.documentBase)),
                samePath = u.hrefNoHash === this.documentUrl.hrefNoHash || (this.documentBaseDiffers && u.hrefNoHash === this.documentBase.hrefNoHash),
                fp = $.mobile.firstPage,
                fpId = fp && fp[0] ? fp[0].id : undefined;
            return samePath && (!u.hash || u.hash === "#" || (fpId && u.hash.replace(/^#/, "") === fpId));
          },
          isPermittedCrossDomainRequest: function(docUrl, reqUrl) {
            return $.mobile.allowCrossDomainPages && (docUrl.protocol === "file:" || docUrl.protocol === "content:") && reqUrl.search(/^https?:/) !== -1;
          }
        };
        path.documentUrl = path.parseLocation();
        $base = $("head").find("base");
        path.documentBase = $base.length ? path.parseUrl(path.makeUrlAbsolute($base.attr("href"), path.documentUrl.href)) : path.documentUrl;
        path.documentBaseDiffers = (path.documentUrl.hrefNoHash !== path.documentBase.hrefNoHash);
        path.getDocumentBase = function(asParsedObject) {
          return asParsedObject ? $.extend({}, path.documentBase) : path.documentBase.href;
        };
        $.extend($.mobile, {
          getDocumentUrl: path.getDocumentUrl,
          getDocumentBase: path.getDocumentBase
        });
      })(jQuery);
      (function($, undefined) {
        $.mobile.History = function(stack, index) {
          this.stack = stack || [];
          this.activeIndex = index || 0;
        };
        $.extend($.mobile.History.prototype, {
          getActive: function() {
            return this.stack[this.activeIndex];
          },
          getLast: function() {
            return this.stack[this.previousIndex];
          },
          getNext: function() {
            return this.stack[this.activeIndex + 1];
          },
          getPrev: function() {
            return this.stack[this.activeIndex - 1];
          },
          add: function(url, data) {
            data = data || {};
            if (this.getNext()) {
              this.clearForward();
            }
            if (data.hash && data.hash.indexOf("#") === -1) {
              data.hash = "#" + data.hash;
            }
            data.url = url;
            this.stack.push(data);
            this.activeIndex = this.stack.length - 1;
          },
          clearForward: function() {
            this.stack = this.stack.slice(0, this.activeIndex + 1);
          },
          find: function(url, stack, earlyReturn) {
            stack = stack || this.stack;
            var entry,
                i,
                length = stack.length,
                index;
            for (i = 0; i < length; i++) {
              entry = stack[i];
              if (decodeURIComponent(url) === decodeURIComponent(entry.url) || decodeURIComponent(url) === decodeURIComponent(entry.hash)) {
                index = i;
                if (earlyReturn) {
                  return index;
                }
              }
            }
            return index;
          },
          closest: function(url) {
            var closest,
                a = this.activeIndex;
            closest = this.find(url, this.stack.slice(0, a));
            if (closest === undefined) {
              closest = this.find(url, this.stack.slice(a), true);
              closest = closest === undefined ? closest : closest + a;
            }
            return closest;
          },
          direct: function(opts) {
            var newActiveIndex = this.closest(opts.url),
                a = this.activeIndex;
            if (newActiveIndex !== undefined) {
              this.activeIndex = newActiveIndex;
              this.previousIndex = a;
            }
            if (newActiveIndex < a) {
              (opts.present || opts.back || $.noop)(this.getActive(), "back");
            } else if (newActiveIndex > a) {
              (opts.present || opts.forward || $.noop)(this.getActive(), "forward");
            } else if (newActiveIndex === undefined && opts.missing) {
              opts.missing(this.getActive());
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        var path = $.mobile.path,
            initialHref = location.href;
        $.mobile.Navigator = function(history) {
          this.history = history;
          this.ignoreInitialHashChange = true;
          $.mobile.window.bind({
            "popstate.history": $.proxy(this.popstate, this),
            "hashchange.history": $.proxy(this.hashchange, this)
          });
        };
        $.extend($.mobile.Navigator.prototype, {
          squash: function(url, data) {
            var state,
                href,
                hash = path.isPath(url) ? path.stripHash(url) : url;
            href = path.squash(url);
            state = $.extend({
              hash: hash,
              url: href
            }, data);
            window.history.replaceState(state, state.title || document.title, href);
            return state;
          },
          hash: function(url, href) {
            var parsed,
                loc,
                hash,
                resolved;
            parsed = path.parseUrl(url);
            loc = path.parseLocation();
            if (loc.pathname + loc.search === parsed.pathname + parsed.search) {
              hash = parsed.hash ? parsed.hash : parsed.pathname + parsed.search;
            } else if (path.isPath(url)) {
              resolved = path.parseUrl(href);
              hash = resolved.pathname + resolved.search + (path.isPreservableHash(resolved.hash) ? resolved.hash.replace("#", "") : "");
            } else {
              hash = url;
            }
            return hash;
          },
          go: function(url, data, noEvents) {
            var state,
                href,
                hash,
                popstateEvent,
                isPopStateEvent = $.event.special.navigate.isPushStateEnabled();
            href = path.squash(url);
            hash = this.hash(url, href);
            if (noEvents && hash !== path.stripHash(path.parseLocation().hash)) {
              this.preventNextHashChange = noEvents;
            }
            this.preventHashAssignPopState = true;
            window.location.hash = hash;
            this.preventHashAssignPopState = false;
            state = $.extend({
              url: href,
              hash: hash,
              title: document.title
            }, data);
            if (isPopStateEvent) {
              popstateEvent = new $.Event("popstate");
              popstateEvent.originalEvent = {
                type: "popstate",
                state: null
              };
              this.squash(url, state);
              if (!noEvents) {
                this.ignorePopState = true;
                $.mobile.window.trigger(popstateEvent);
              }
            }
            this.history.add(state.url, state);
          },
          popstate: function(event) {
            var hash,
                state;
            if (!$.event.special.navigate.isPushStateEnabled()) {
              return;
            }
            if (this.preventHashAssignPopState) {
              this.preventHashAssignPopState = false;
              event.stopImmediatePropagation();
              return;
            }
            if (this.ignorePopState) {
              this.ignorePopState = false;
              return;
            }
            if (!event.originalEvent.state && this.history.stack.length === 1 && this.ignoreInitialHashChange) {
              this.ignoreInitialHashChange = false;
              if (location.href === initialHref) {
                event.preventDefault();
                return;
              }
            }
            hash = path.parseLocation().hash;
            if (!event.originalEvent.state && hash) {
              state = this.squash(hash);
              this.history.add(state.url, state);
              event.historyState = state;
              return;
            }
            this.history.direct({
              url: (event.originalEvent.state || {}).url || hash,
              present: function(historyEntry, direction) {
                event.historyState = $.extend({}, historyEntry);
                event.historyState.direction = direction;
              }
            });
          },
          hashchange: function(event) {
            var history,
                hash;
            if (!$.event.special.navigate.isHashChangeEnabled() || $.event.special.navigate.isPushStateEnabled()) {
              return;
            }
            if (this.preventNextHashChange) {
              this.preventNextHashChange = false;
              event.stopImmediatePropagation();
              return;
            }
            history = this.history;
            hash = path.parseLocation().hash;
            this.history.direct({
              url: hash,
              present: function(historyEntry, direction) {
                event.hashchangeState = $.extend({}, historyEntry);
                event.hashchangeState.direction = direction;
              },
              missing: function() {
                history.add(hash, {
                  hash: hash,
                  title: document.title
                });
              }
            });
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.mobile.navigate = function(url, data, noEvents) {
          $.mobile.navigate.navigator.go(url, data, noEvents);
        };
        $.mobile.navigate.history = new $.mobile.History();
        $.mobile.navigate.navigator = new $.mobile.Navigator($.mobile.navigate.history);
        var loc = $.mobile.path.parseLocation();
        $.mobile.navigate.history.add(loc.href, {hash: loc.hash});
      })(jQuery);
      (function($, undefined) {
        var props = {
          "animation": {},
          "transition": {}
        },
            testElement = document.createElement("a"),
            vendorPrefixes = ["", "webkit-", "moz-", "o-"];
        $.each(["animation", "transition"], function(i, test) {
          var testName = (i === 0) ? test + "-" + "name" : test;
          $.each(vendorPrefixes, function(j, prefix) {
            if (testElement.style[$.camelCase(prefix + testName)] !== undefined) {
              props[test]["prefix"] = prefix;
              return false;
            }
          });
          props[test]["duration"] = $.camelCase(props[test]["prefix"] + test + "-" + "duration");
          props[test]["event"] = $.camelCase(props[test]["prefix"] + test + "-" + "end");
          if (props[test]["prefix"] === "") {
            props[test]["duration"] = props[test]["duration"].toLowerCase();
            props[test]["event"] = props[test]["event"].toLowerCase();
          }
        });
        $.support.cssTransitions = (props["transition"]["prefix"] !== undefined);
        $.support.cssAnimations = (props["animation"]["prefix"] !== undefined);
        $(testElement).remove();
        $.fn.animationComplete = function(callback, type, fallbackTime) {
          var timer,
              duration,
              that = this,
              animationType = (!type || type === "animation") ? "animation" : "transition";
          if (($.support.cssTransitions && animationType === "transition") || ($.support.cssAnimations && animationType === "animation")) {
            if (fallbackTime === undefined) {
              if ($(this).context !== document) {
                duration = parseFloat($(this).css(props[animationType].duration)) * 3000;
              }
              if (duration === 0 || duration === undefined) {
                duration = $.fn.animationComplete.default;
              }
            }
            timer = setTimeout(function() {
              $(that).off(props[animationType].event);
              callback.apply(that);
            }, duration);
            return $(this).one(props[animationType].event, function() {
              clearTimeout(timer);
              callback.call(this, arguments);
            });
          } else {
            setTimeout($.proxy(callback, this), 0);
            return $(this);
          }
        };
        $.fn.animationComplete.default = 1000;
      })(jQuery);
      (function($, window, document, undefined) {
        var dataPropertyName = "virtualMouseBindings",
            touchTargetPropertyName = "virtualTouchID",
            virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            touchEventProps = "clientX clientY pageX pageY screenX screenY".split(" "),
            mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
            mouseEventProps = $.event.props.concat(mouseHookProps),
            activeDocHandlers = {},
            resetTimerID = 0,
            startX = 0,
            startY = 0,
            didScroll = false,
            clickBlockList = [],
            blockMouseTriggers = false,
            blockTouchTriggers = false,
            eventCaptureSupported = "addEventListener" in document,
            $document = $(document),
            nextTouchID = 1,
            lastTouchID = 0,
            threshold,
            i;
        $.vmouse = {
          moveDistanceThreshold: 10,
          clickDistanceThreshold: 10,
          resetTimerDuration: 1500
        };
        function getNativeEvent(event) {
          while (event && typeof event.originalEvent !== "undefined") {
            event = event.originalEvent;
          }
          return event;
        }
        function createVirtualEvent(event, eventType) {
          var t = event.type,
              oe,
              props,
              ne,
              prop,
              ct,
              touch,
              i,
              j,
              len;
          event = $.Event(event);
          event.type = eventType;
          oe = event.originalEvent;
          props = $.event.props;
          if (t.search(/^(mouse|click)/) > -1) {
            props = mouseEventProps;
          }
          if (oe) {
            for (i = props.length, prop; i; ) {
              prop = props[--i];
              event[prop] = oe[prop];
            }
          }
          if (t.search(/mouse(down|up)|click/) > -1 && !event.which) {
            event.which = 1;
          }
          if (t.search(/^touch/) !== -1) {
            ne = getNativeEvent(oe);
            t = ne.touches;
            ct = ne.changedTouches;
            touch = (t && t.length) ? t[0] : ((ct && ct.length) ? ct[0] : undefined);
            if (touch) {
              for (j = 0, len = touchEventProps.length; j < len; j++) {
                prop = touchEventProps[j];
                event[prop] = touch[prop];
              }
            }
          }
          return event;
        }
        function getVirtualBindingFlags(element) {
          var flags = {},
              b,
              k;
          while (element) {
            b = $.data(element, dataPropertyName);
            for (k in b) {
              if (b[k]) {
                flags[k] = flags.hasVirtualBinding = true;
              }
            }
            element = element.parentNode;
          }
          return flags;
        }
        function getClosestElementWithVirtualBinding(element, eventType) {
          var b;
          while (element) {
            b = $.data(element, dataPropertyName);
            if (b && (!eventType || b[eventType])) {
              return element;
            }
            element = element.parentNode;
          }
          return null;
        }
        function enableTouchBindings() {
          blockTouchTriggers = false;
        }
        function disableTouchBindings() {
          blockTouchTriggers = true;
        }
        function enableMouseBindings() {
          lastTouchID = 0;
          clickBlockList.length = 0;
          blockMouseTriggers = false;
          disableTouchBindings();
        }
        function disableMouseBindings() {
          enableTouchBindings();
        }
        function startResetTimer() {
          clearResetTimer();
          resetTimerID = setTimeout(function() {
            resetTimerID = 0;
            enableMouseBindings();
          }, $.vmouse.resetTimerDuration);
        }
        function clearResetTimer() {
          if (resetTimerID) {
            clearTimeout(resetTimerID);
            resetTimerID = 0;
          }
        }
        function triggerVirtualEvent(eventType, event, flags) {
          var ve;
          if ((flags && flags[eventType]) || (!flags && getClosestElementWithVirtualBinding(event.target, eventType))) {
            ve = createVirtualEvent(event, eventType);
            $(event.target).trigger(ve);
          }
          return ve;
        }
        function mouseEventCallback(event) {
          var touchID = $.data(event.target, touchTargetPropertyName),
              ve;
          if (!blockMouseTriggers && (!lastTouchID || lastTouchID !== touchID)) {
            ve = triggerVirtualEvent("v" + event.type, event);
            if (ve) {
              if (ve.isDefaultPrevented()) {
                event.preventDefault();
              }
              if (ve.isPropagationStopped()) {
                event.stopPropagation();
              }
              if (ve.isImmediatePropagationStopped()) {
                event.stopImmediatePropagation();
              }
            }
          }
        }
        function handleTouchStart(event) {
          var touches = getNativeEvent(event).touches,
              target,
              flags,
              t;
          if (touches && touches.length === 1) {
            target = event.target;
            flags = getVirtualBindingFlags(target);
            if (flags.hasVirtualBinding) {
              lastTouchID = nextTouchID++;
              $.data(target, touchTargetPropertyName, lastTouchID);
              clearResetTimer();
              disableMouseBindings();
              didScroll = false;
              t = getNativeEvent(event).touches[0];
              startX = t.pageX;
              startY = t.pageY;
              triggerVirtualEvent("vmouseover", event, flags);
              triggerVirtualEvent("vmousedown", event, flags);
            }
          }
        }
        function handleScroll(event) {
          if (blockTouchTriggers) {
            return;
          }
          if (!didScroll) {
            triggerVirtualEvent("vmousecancel", event, getVirtualBindingFlags(event.target));
          }
          didScroll = true;
          startResetTimer();
        }
        function handleTouchMove(event) {
          if (blockTouchTriggers) {
            return;
          }
          var t = getNativeEvent(event).touches[0],
              didCancel = didScroll,
              moveThreshold = $.vmouse.moveDistanceThreshold,
              flags = getVirtualBindingFlags(event.target);
          didScroll = didScroll || (Math.abs(t.pageX - startX) > moveThreshold || Math.abs(t.pageY - startY) > moveThreshold);
          if (didScroll && !didCancel) {
            triggerVirtualEvent("vmousecancel", event, flags);
          }
          triggerVirtualEvent("vmousemove", event, flags);
          startResetTimer();
        }
        function handleTouchEnd(event) {
          if (blockTouchTriggers) {
            return;
          }
          disableTouchBindings();
          var flags = getVirtualBindingFlags(event.target),
              ve,
              t;
          triggerVirtualEvent("vmouseup", event, flags);
          if (!didScroll) {
            ve = triggerVirtualEvent("vclick", event, flags);
            if (ve && ve.isDefaultPrevented()) {
              t = getNativeEvent(event).changedTouches[0];
              clickBlockList.push({
                touchID: lastTouchID,
                x: t.clientX,
                y: t.clientY
              });
              blockMouseTriggers = true;
            }
          }
          triggerVirtualEvent("vmouseout", event, flags);
          didScroll = false;
          startResetTimer();
        }
        function hasVirtualBindings(ele) {
          var bindings = $.data(ele, dataPropertyName),
              k;
          if (bindings) {
            for (k in bindings) {
              if (bindings[k]) {
                return true;
              }
            }
          }
          return false;
        }
        function dummyMouseHandler() {}
        function getSpecialEventObject(eventType) {
          var realType = eventType.substr(1);
          return {
            setup: function() {
              if (!hasVirtualBindings(this)) {
                $.data(this, dataPropertyName, {});
              }
              var bindings = $.data(this, dataPropertyName);
              bindings[eventType] = true;
              activeDocHandlers[eventType] = (activeDocHandlers[eventType] || 0) + 1;
              if (activeDocHandlers[eventType] === 1) {
                $document.bind(realType, mouseEventCallback);
              }
              $(this).bind(realType, dummyMouseHandler);
              if (eventCaptureSupported) {
                activeDocHandlers["touchstart"] = (activeDocHandlers["touchstart"] || 0) + 1;
                if (activeDocHandlers["touchstart"] === 1) {
                  $document.bind("touchstart", handleTouchStart).bind("touchend", handleTouchEnd).bind("touchmove", handleTouchMove).bind("scroll", handleScroll);
                }
              }
            },
            teardown: function() {
              --activeDocHandlers[eventType];
              if (!activeDocHandlers[eventType]) {
                $document.unbind(realType, mouseEventCallback);
              }
              if (eventCaptureSupported) {
                --activeDocHandlers["touchstart"];
                if (!activeDocHandlers["touchstart"]) {
                  $document.unbind("touchstart", handleTouchStart).unbind("touchmove", handleTouchMove).unbind("touchend", handleTouchEnd).unbind("scroll", handleScroll);
                }
              }
              var $this = $(this),
                  bindings = $.data(this, dataPropertyName);
              if (bindings) {
                bindings[eventType] = false;
              }
              $this.unbind(realType, dummyMouseHandler);
              if (!hasVirtualBindings(this)) {
                $this.removeData(dataPropertyName);
              }
            }
          };
        }
        for (i = 0; i < virtualEventNames.length; i++) {
          $.event.special[virtualEventNames[i]] = getSpecialEventObject(virtualEventNames[i]);
        }
        if (eventCaptureSupported) {
          document.addEventListener("click", function(e) {
            var cnt = clickBlockList.length,
                target = e.target,
                x,
                y,
                ele,
                i,
                o,
                touchID;
            if (cnt) {
              x = e.clientX;
              y = e.clientY;
              threshold = $.vmouse.clickDistanceThreshold;
              ele = target;
              while (ele) {
                for (i = 0; i < cnt; i++) {
                  o = clickBlockList[i];
                  touchID = 0;
                  if ((ele === target && Math.abs(o.x - x) < threshold && Math.abs(o.y - y) < threshold) || $.data(ele, touchTargetPropertyName) === o.touchID) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                }
                ele = ele.parentNode;
              }
            }
          }, true);
        }
      })(jQuery, window, document);
      (function($, window, undefined) {
        var $document = $(document),
            supportTouch = $.mobile.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
        $.each(("touchstart touchmove touchend " + "tap taphold " + "swipe swipeleft swiperight " + "scrollstart scrollstop").split(" "), function(i, name) {
          $.fn[name] = function(fn) {
            return fn ? this.bind(name, fn) : this.trigger(name);
          };
          if ($.attrFn) {
            $.attrFn[name] = true;
          }
        });
        function triggerCustomEvent(obj, eventType, event, bubble) {
          var originalType = event.type;
          event.type = eventType;
          if (bubble) {
            $.event.trigger(event, undefined, obj);
          } else {
            $.event.dispatch.call(obj, event);
          }
          event.type = originalType;
        }
        $.event.special.scrollstart = {
          enabled: true,
          setup: function() {
            var thisObject = this,
                $this = $(thisObject),
                scrolling,
                timer;
            function trigger(event, state) {
              scrolling = state;
              triggerCustomEvent(thisObject, scrolling ? "scrollstart" : "scrollstop", event);
            }
            $this.bind(scrollEvent, function(event) {
              if (!$.event.special.scrollstart.enabled) {
                return;
              }
              if (!scrolling) {
                trigger(event, true);
              }
              clearTimeout(timer);
              timer = setTimeout(function() {
                trigger(event, false);
              }, 50);
            });
          },
          teardown: function() {
            $(this).unbind(scrollEvent);
          }
        };
        $.event.special.tap = {
          tapholdThreshold: 750,
          emitTapOnTaphold: true,
          setup: function() {
            var thisObject = this,
                $this = $(thisObject),
                isTaphold = false;
            $this.bind("vmousedown", function(event) {
              isTaphold = false;
              if (event.which && event.which !== 1) {
                return false;
              }
              var origTarget = event.target,
                  timer;
              function clearTapTimer() {
                clearTimeout(timer);
              }
              function clearTapHandlers() {
                clearTapTimer();
                $this.unbind("vclick", clickHandler).unbind("vmouseup", clearTapTimer);
                $document.unbind("vmousecancel", clearTapHandlers);
              }
              function clickHandler(event) {
                clearTapHandlers();
                if (!isTaphold && origTarget === event.target) {
                  triggerCustomEvent(thisObject, "tap", event);
                } else if (isTaphold) {
                  event.stopPropagation();
                }
              }
              $this.bind("vmouseup", clearTapTimer).bind("vclick", clickHandler);
              $document.bind("vmousecancel", clearTapHandlers);
              timer = setTimeout(function() {
                if (!$.event.special.tap.emitTapOnTaphold) {
                  isTaphold = true;
                }
                triggerCustomEvent(thisObject, "taphold", $.Event("taphold", {target: origTarget}));
              }, $.event.special.tap.tapholdThreshold);
            });
          },
          teardown: function() {
            $(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
            $document.unbind("vmousecancel");
          }
        };
        $.event.special.swipe = {
          scrollSupressionThreshold: 30,
          durationThreshold: 1000,
          horizontalDistanceThreshold: 30,
          verticalDistanceThreshold: 30,
          getLocation: function(event) {
            var winPageX = window.pageXOffset,
                winPageY = window.pageYOffset,
                x = event.clientX,
                y = event.clientY;
            if (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY) || event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX)) {
              x = x - winPageX;
              y = y - winPageY;
            } else if (y < (event.pageY - winPageY) || x < (event.pageX - winPageX)) {
              x = event.pageX - winPageX;
              y = event.pageY - winPageY;
            }
            return {
              x: x,
              y: y
            };
          },
          start: function(event) {
            var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
                location = $.event.special.swipe.getLocation(data);
            return {
              time: (new Date()).getTime(),
              coords: [location.x, location.y],
              origin: $(event.target)
            };
          },
          stop: function(event) {
            var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
                location = $.event.special.swipe.getLocation(data);
            return {
              time: (new Date()).getTime(),
              coords: [location.x, location.y]
            };
          },
          handleSwipe: function(start, stop, thisObject, origTarget) {
            if (stop.time - start.time < $.event.special.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < $.event.special.swipe.verticalDistanceThreshold) {
              var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";
              triggerCustomEvent(thisObject, "swipe", $.Event("swipe", {
                target: origTarget,
                swipestart: start,
                swipestop: stop
              }), true);
              triggerCustomEvent(thisObject, direction, $.Event(direction, {
                target: origTarget,
                swipestart: start,
                swipestop: stop
              }), true);
              return true;
            }
            return false;
          },
          eventInProgress: false,
          setup: function() {
            var events,
                thisObject = this,
                $this = $(thisObject),
                context = {};
            events = $.data(this, "mobile-events");
            if (!events) {
              events = {length: 0};
              $.data(this, "mobile-events", events);
            }
            events.length++;
            events.swipe = context;
            context.start = function(event) {
              if ($.event.special.swipe.eventInProgress) {
                return;
              }
              $.event.special.swipe.eventInProgress = true;
              var stop,
                  start = $.event.special.swipe.start(event),
                  origTarget = event.target,
                  emitted = false;
              context.move = function(event) {
                if (!start) {
                  return;
                }
                stop = $.event.special.swipe.stop(event);
                if (!emitted) {
                  emitted = $.event.special.swipe.handleSwipe(start, stop, thisObject, origTarget);
                  if (emitted) {
                    $.event.special.swipe.eventInProgress = false;
                  }
                }
                if (Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.scrollSupressionThreshold) {
                  event.preventDefault();
                }
              };
              context.stop = function() {
                emitted = true;
                $.event.special.swipe.eventInProgress = false;
                $document.off(touchMoveEvent, context.move);
                context.move = null;
              };
              $document.on(touchMoveEvent, context.move).one(touchStopEvent, context.stop);
            };
            $this.on(touchStartEvent, context.start);
          },
          teardown: function() {
            var events,
                context;
            events = $.data(this, "mobile-events");
            if (events) {
              context = events.swipe;
              delete events.swipe;
              events.length--;
              if (events.length === 0) {
                $.removeData(this, "mobile-events");
              }
            }
            if (context) {
              if (context.start) {
                $(this).off(touchStartEvent, context.start);
              }
              if (context.move) {
                $document.off(touchMoveEvent, context.move);
              }
              if (context.stop) {
                $document.off(touchStopEvent, context.stop);
              }
            }
          }
        };
        $.each({
          scrollstop: "scrollstart",
          taphold: "tap",
          swipeleft: "swipe",
          swiperight: "swipe"
        }, function(event, sourceEvent) {
          $.event.special[event] = {
            setup: function() {
              $(this).bind(sourceEvent, $.noop);
            },
            teardown: function() {
              $(this).unbind(sourceEvent);
            }
          };
        });
      })(jQuery, this);
      (function($) {
        $.event.special.throttledresize = {
          setup: function() {
            $(this).bind("resize", handler);
          },
          teardown: function() {
            $(this).unbind("resize", handler);
          }
        };
        var throttle = 250,
            handler = function() {
              curr = (new Date()).getTime();
              diff = curr - lastCall;
              if (diff >= throttle) {
                lastCall = curr;
                $(this).trigger("throttledresize");
              } else {
                if (heldCall) {
                  clearTimeout(heldCall);
                }
                heldCall = setTimeout(handler, throttle - diff);
              }
            },
            lastCall = 0,
            heldCall,
            curr,
            diff;
      })(jQuery);
      (function($, window) {
        var win = $(window),
            event_name = "orientationchange",
            get_orientation,
            last_orientation,
            initial_orientation_is_landscape,
            initial_orientation_is_default,
            portrait_map = {
              "0": true,
              "180": true
            },
            ww,
            wh,
            landscape_threshold;
        if ($.support.orientation) {
          ww = window.innerWidth || win.width();
          wh = window.innerHeight || win.height();
          landscape_threshold = 50;
          initial_orientation_is_landscape = ww > wh && (ww - wh) > landscape_threshold;
          initial_orientation_is_default = portrait_map[window.orientation];
          if ((initial_orientation_is_landscape && initial_orientation_is_default) || (!initial_orientation_is_landscape && !initial_orientation_is_default)) {
            portrait_map = {
              "-90": true,
              "90": true
            };
          }
        }
        $.event.special.orientationchange = $.extend({}, $.event.special.orientationchange, {
          setup: function() {
            if ($.support.orientation && !$.event.special.orientationchange.disabled) {
              return false;
            }
            last_orientation = get_orientation();
            win.bind("throttledresize", handler);
          },
          teardown: function() {
            if ($.support.orientation && !$.event.special.orientationchange.disabled) {
              return false;
            }
            win.unbind("throttledresize", handler);
          },
          add: function(handleObj) {
            var old_handler = handleObj.handler;
            handleObj.handler = function(event) {
              event.orientation = get_orientation();
              return old_handler.apply(this, arguments);
            };
          }
        });
        function handler() {
          var orientation = get_orientation();
          if (orientation !== last_orientation) {
            last_orientation = orientation;
            win.trigger(event_name);
          }
        }
        $.event.special.orientationchange.orientation = get_orientation = function() {
          var isPortrait = true,
              elem = document.documentElement;
          if ($.support.orientation) {
            isPortrait = portrait_map[window.orientation];
          } else {
            isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
          }
          return isPortrait ? "portrait" : "landscape";
        };
        $.fn[event_name] = function(fn) {
          return fn ? this.bind(event_name, fn) : this.trigger(event_name);
        };
        if ($.attrFn) {
          $.attrFn[event_name] = true;
        }
      }(jQuery, this));
      (function($, undefined) {
        var baseElement = $("head").children("base"),
            base = {
              element: (baseElement.length ? baseElement : $("<base>", {href: $.mobile.path.documentBase.hrefNoHash}).prependTo($("head"))),
              linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",
              set: function(href) {
                if (!$.mobile.dynamicBaseEnabled) {
                  return;
                }
                if ($.support.dynamicBaseTag) {
                  base.element.attr("href", $.mobile.path.makeUrlAbsolute(href, $.mobile.path.documentBase));
                }
              },
              rewrite: function(href, page) {
                var newPath = $.mobile.path.get(href);
                page.find(base.linkSelector).each(function(i, link) {
                  var thisAttr = $(link).is("[href]") ? "href" : $(link).is("[src]") ? "src" : "action",
                      thisUrl = $(link).attr(thisAttr);
                  thisUrl = thisUrl.replace(location.protocol + "//" + location.host + location.pathname, "");
                  if (!/^(\w+:|#|\/)/.test(thisUrl)) {
                    $(link).attr(thisAttr, newPath + thisUrl);
                  }
                });
              },
              reset: function() {
                base.element.attr("href", $.mobile.path.documentBase.hrefNoSearch);
              }
            };
        $.mobile.base = base;
      })(jQuery);
      (function($, undefined) {
        $.mobile.widgets = {};
        var originalWidget = $.widget,
            keepNativeFactoryDefault = $.mobile.keepNative;
        $.widget = (function(orig) {
          return function() {
            var constructor = orig.apply(this, arguments),
                name = constructor.prototype.widgetName;
            constructor.initSelector = ((constructor.prototype.initSelector !== undefined) ? constructor.prototype.initSelector : ":jqmData(role='" + name + "')");
            $.mobile.widgets[name] = constructor;
            return constructor;
          };
        })($.widget);
        $.extend($.widget, originalWidget);
        $.mobile.document.on("create", function(event) {
          $(event.target).enhanceWithin();
        });
        $.widget("mobile.page", {
          options: {
            theme: "a",
            domCache: false,
            keepNativeDefault: $.mobile.keepNative,
            contentTheme: null,
            enhanced: false
          },
          _createWidget: function() {
            $.Widget.prototype._createWidget.apply(this, arguments);
            this._trigger("init");
          },
          _create: function() {
            if (this._trigger("beforecreate") === false) {
              return false;
            }
            if (!this.options.enhanced) {
              this._enhance();
            }
            this._on(this.element, {
              pagebeforehide: "removeContainerBackground",
              pagebeforeshow: "_handlePageBeforeShow"
            });
            this.element.enhanceWithin();
            if ($.mobile.getAttribute(this.element[0], "role") === "dialog" && $.mobile.dialog) {
              this.element.dialog();
            }
          },
          _enhance: function() {
            var attrPrefix = "data-" + $.mobile.ns,
                self = this;
            if (this.options.role) {
              this.element.attr("data-" + $.mobile.ns + "role", this.options.role);
            }
            this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme);
            this.element.find("[" + attrPrefix + "role='content']").each(function() {
              var $this = $(this),
                  theme = this.getAttribute(attrPrefix + "theme") || undefined;
              self.options.contentTheme = theme || self.options.contentTheme || (self.options.dialog && self.options.theme) || (self.element.jqmData("role") === "dialog" && self.options.theme);
              $this.addClass("ui-content");
              if (self.options.contentTheme) {
                $this.addClass("ui-body-" + (self.options.contentTheme));
              }
              $this.attr("role", "main").addClass("ui-content");
            });
          },
          bindRemove: function(callback) {
            var page = this.element;
            if (!page.data("mobile-page").options.domCache && page.is(":jqmData(external-page='true')")) {
              page.bind("pagehide.remove", callback || function(e, data) {
                if (!data.samePage) {
                  var $this = $(this),
                      prEvent = new $.Event("pageremove");
                  $this.trigger(prEvent);
                  if (!prEvent.isDefaultPrevented()) {
                    $this.removeWithDependents();
                  }
                }
              });
            }
          },
          _setOptions: function(o) {
            if (o.theme !== undefined) {
              this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + o.theme);
            }
            if (o.contentTheme !== undefined) {
              this.element.find("[data-" + $.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + o.contentTheme);
            }
          },
          _handlePageBeforeShow: function() {
            this.setContainerBackground();
          },
          removeContainerBackground: function() {
            this.element.closest(":mobile-pagecontainer").pagecontainer({"theme": "none"});
          },
          setContainerBackground: function(theme) {
            this.element.parent().pagecontainer({"theme": theme || this.options.theme});
          },
          keepNativeSelector: function() {
            var options = this.options,
                keepNative = $.trim(options.keepNative || ""),
                globalValue = $.trim($.mobile.keepNative),
                optionValue = $.trim(options.keepNativeDefault),
                newDefault = (keepNativeFactoryDefault === globalValue ? "" : globalValue),
                oldDefault = (newDefault === "" ? optionValue : "");
            return ((keepNative ? [keepNative] : []).concat(newDefault ? [newDefault] : []).concat(oldDefault ? [oldDefault] : []).join(", "));
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.pagecontainer", {
          options: {theme: "a"},
          initSelector: false,
          _create: function() {
            this.setLastScrollEnabled = true;
            this._on(this.window, {navigate: "_filterNavigateEvents"});
            this._on(this.window, {
              navigate: "_disableRecordScroll",
              scrollstop: "_delayedRecordScroll"
            });
            this._on({pagechange: "_afterContentChange"});
            this.window.one("navigate", $.proxy(function() {
              this.setLastScrollEnabled = true;
            }, this));
          },
          _setOptions: function(options) {
            if (options.theme !== undefined && options.theme !== "none") {
              this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + options.theme);
            } else if (options.theme !== undefined) {
              this.element.removeClass("ui-overlay-" + this.options.theme);
            }
            this._super(options);
          },
          _disableRecordScroll: function() {
            this.setLastScrollEnabled = false;
          },
          _enableRecordScroll: function() {
            this.setLastScrollEnabled = true;
          },
          _afterContentChange: function() {
            this.setLastScrollEnabled = true;
            this._off(this.window, "scrollstop");
            this._on(this.window, {scrollstop: "_delayedRecordScroll"});
          },
          _recordScroll: function() {
            if (!this.setLastScrollEnabled) {
              return;
            }
            var active = this._getActiveHistory(),
                currentScroll,
                minScroll,
                defaultScroll;
            if (active) {
              currentScroll = this._getScroll();
              minScroll = this._getMinScroll();
              defaultScroll = this._getDefaultScroll();
              active.lastScroll = currentScroll < minScroll ? defaultScroll : currentScroll;
            }
          },
          _delayedRecordScroll: function() {
            setTimeout($.proxy(this, "_recordScroll"), 100);
          },
          _getScroll: function() {
            return this.window.scrollTop();
          },
          _getMinScroll: function() {
            return $.mobile.minScrollBack;
          },
          _getDefaultScroll: function() {
            return $.mobile.defaultHomeScroll;
          },
          _filterNavigateEvents: function(e, data) {
            var url;
            if (e.originalEvent && e.originalEvent.isDefaultPrevented()) {
              return;
            }
            url = e.originalEvent.type.indexOf("hashchange") > -1 ? data.state.hash : data.state.url;
            if (!url) {
              url = this._getHash();
            }
            if (!url || url === "#" || url.indexOf("#" + $.mobile.path.uiStateKey) === 0) {
              url = location.href;
            }
            this._handleNavigate(url, data.state);
          },
          _getHash: function() {
            return $.mobile.path.parseLocation().hash;
          },
          getActivePage: function() {
            return this.activePage;
          },
          _getInitialContent: function() {
            return $.mobile.firstPage;
          },
          _getHistory: function() {
            return $.mobile.navigate.history;
          },
          _getActiveHistory: function() {
            return $.mobile.navigate.history.getActive();
          },
          _getDocumentBase: function() {
            return $.mobile.path.documentBase;
          },
          back: function() {
            this.go(-1);
          },
          forward: function() {
            this.go(1);
          },
          go: function(steps) {
            if ($.mobile.hashListeningEnabled) {
              window.history.go(steps);
            } else {
              var activeIndex = $.mobile.navigate.history.activeIndex,
                  index = activeIndex + parseInt(steps, 10),
                  url = $.mobile.navigate.history.stack[index].url,
                  direction = (steps >= 1) ? "forward" : "back";
              $.mobile.navigate.history.activeIndex = index;
              $.mobile.navigate.history.previousIndex = activeIndex;
              this.change(url, {
                direction: direction,
                changeHash: false,
                fromHashChange: true
              });
            }
          },
          _handleDestination: function(to) {
            var history;
            if ($.type(to) === "string") {
              to = $.mobile.path.stripHash(to);
            }
            if (to) {
              history = this._getHistory();
              to = !$.mobile.path.isPath(to) ? ($.mobile.path.makeUrlAbsolute("#" + to, this._getDocumentBase())) : to;
              if (to === $.mobile.path.makeUrlAbsolute("#" + history.initialDst, this._getDocumentBase()) && history.stack.length && history.stack[0].url !== history.initialDst.replace($.mobile.dialogHashKey, "")) {
                to = this._getInitialContent();
              }
            }
            return to || this._getInitialContent();
          },
          _handleDialog: function(changePageOptions, data) {
            var to,
                active,
                activeContent = this.getActivePage();
            if (activeContent && !activeContent.hasClass("ui-dialog")) {
              if (data.direction === "back") {
                this.back();
              } else {
                this.forward();
              }
              return false;
            } else {
              to = data.pageUrl;
              active = this._getActiveHistory();
              $.extend(changePageOptions, {
                role: active.role,
                transition: active.transition,
                reverse: data.direction === "back"
              });
            }
            return to;
          },
          _handleNavigate: function(url, data) {
            var to = $.mobile.path.stripHash(url),
                history = this._getHistory(),
                transition = history.stack.length === 0 ? "none" : undefined,
                changePageOptions = {
                  changeHash: false,
                  fromHashChange: true,
                  reverse: data.direction === "back"
                };
            $.extend(changePageOptions, data, {transition: (history.getLast() || {}).transition || transition});
            if (history.activeIndex > 0 && to.indexOf($.mobile.dialogHashKey) > -1 && history.initialDst !== to) {
              to = this._handleDialog(changePageOptions, data);
              if (to === false) {
                return;
              }
            }
            this._changeContent(this._handleDestination(to), changePageOptions);
          },
          _changeContent: function(to, opts) {
            $.mobile.changePage(to, opts);
          },
          _getBase: function() {
            return $.mobile.base;
          },
          _getNs: function() {
            return $.mobile.ns;
          },
          _enhance: function(content, role) {
            return content.page({role: role});
          },
          _include: function(page, settings) {
            page.appendTo(this.element);
            this._enhance(page, settings.role);
            page.page("bindRemove");
          },
          _find: function(absUrl) {
            var fileUrl = this._createFileUrl(absUrl),
                dataUrl = this._createDataUrl(absUrl),
                page,
                initialContent = this._getInitialContent();
            page = this.element.children("[data-" + this._getNs() + "url='" + dataUrl + "']");
            if (page.length === 0 && dataUrl && !$.mobile.path.isPath(dataUrl)) {
              page = this.element.children($.mobile.path.hashToSelector("#" + dataUrl)).attr("data-" + this._getNs() + "url", dataUrl).jqmData("url", dataUrl);
            }
            if (page.length === 0 && $.mobile.path.isFirstPageUrl(fileUrl) && initialContent && initialContent.parent().length) {
              page = $(initialContent);
            }
            return page;
          },
          _getLoader: function() {
            return $.mobile.loading();
          },
          _showLoading: function(delay, theme, msg, textonly) {
            if (this._loadMsg) {
              return;
            }
            this._loadMsg = setTimeout($.proxy(function() {
              this._getLoader().loader("show", theme, msg, textonly);
              this._loadMsg = 0;
            }, this), delay);
          },
          _hideLoading: function() {
            clearTimeout(this._loadMsg);
            this._loadMsg = 0;
            this._getLoader().loader("hide");
          },
          _showError: function() {
            this._hideLoading();
            this._showLoading(0, $.mobile.pageLoadErrorMessageTheme, $.mobile.pageLoadErrorMessage, true);
            setTimeout($.proxy(this, "_hideLoading"), 1500);
          },
          _parse: function(html, fileUrl) {
            var page,
                all = $("<div></div>");
            all.get(0).innerHTML = html;
            page = all.find(":jqmData(role='page'), :jqmData(role='dialog')").first();
            if (!page.length) {
              page = $("<div data-" + this._getNs() + "role='page'>" + (html.split(/<\/?body[^>]*>/gmi)[1] || "") + "</div>");
            }
            page.attr("data-" + this._getNs() + "url", $.mobile.path.convertUrlToDataUrl(fileUrl)).attr("data-" + this._getNs() + "external-page", true);
            return page;
          },
          _setLoadedTitle: function(page, html) {
            var newPageTitle = html.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
            if (newPageTitle && !page.jqmData("title")) {
              newPageTitle = $("<div>" + newPageTitle + "</div>").text();
              page.jqmData("title", newPageTitle);
            }
          },
          _isRewritableBaseTag: function() {
            return $.mobile.dynamicBaseEnabled && !$.support.dynamicBaseTag;
          },
          _createDataUrl: function(absoluteUrl) {
            return $.mobile.path.convertUrlToDataUrl(absoluteUrl);
          },
          _createFileUrl: function(absoluteUrl) {
            return $.mobile.path.getFilePath(absoluteUrl);
          },
          _triggerWithDeprecated: function(name, data, page) {
            var deprecatedEvent = $.Event("page" + name),
                newEvent = $.Event(this.widgetName + name);
            (page || this.element).trigger(deprecatedEvent, data);
            this.element.trigger(newEvent, data);
            return {
              deprecatedEvent: deprecatedEvent,
              event: newEvent
            };
          },
          _loadSuccess: function(absUrl, triggerData, settings, deferred) {
            var fileUrl = this._createFileUrl(absUrl),
                dataUrl = this._createDataUrl(absUrl);
            return $.proxy(function(html, textStatus, xhr) {
              var content,
                  pageElemRegex = new RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)"),
                  dataUrlRegex = new RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?");
              if (pageElemRegex.test(html) && RegExp.$1 && dataUrlRegex.test(RegExp.$1) && RegExp.$1) {
                fileUrl = $.mobile.path.getFilePath($("<div>" + RegExp.$1 + "</div>").text());
              }
              if (settings.prefetch === undefined) {
                this._getBase().set(fileUrl);
              }
              content = this._parse(html, fileUrl);
              this._setLoadedTitle(content, html);
              triggerData.xhr = xhr;
              triggerData.textStatus = textStatus;
              triggerData.page = content;
              triggerData.content = content;
              if (!this._trigger("load", undefined, triggerData)) {
                return;
              }
              if (this._isRewritableBaseTag() && content) {
                this._getBase().rewrite(fileUrl, content);
              }
              this._include(content, settings);
              if (absUrl.indexOf("&" + $.mobile.subPageUrlKey) > -1) {
                content = this.element.children("[data-" + this._getNs() + "url='" + dataUrl + "']");
              }
              if (settings.showLoadMsg) {
                this._hideLoading();
              }
              this.element.trigger("pageload");
              deferred.resolve(absUrl, settings, content);
            }, this);
          },
          _loadDefaults: {
            type: "get",
            data: undefined,
            reloadPage: false,
            reload: false,
            role: undefined,
            showLoadMsg: false,
            loadMsgDelay: 50
          },
          load: function(url, options) {
            var deferred = (options && options.deferred) || $.Deferred(),
                settings = $.extend({}, this._loadDefaults, options),
                content = null,
                absUrl = $.mobile.path.makeUrlAbsolute(url, this._findBaseWithDefault()),
                fileUrl,
                dataUrl,
                pblEvent,
                triggerData;
            settings.reload = settings.reloadPage;
            if (settings.data && settings.type === "get") {
              absUrl = $.mobile.path.addSearchParams(absUrl, settings.data);
              settings.data = undefined;
            }
            if (settings.data && settings.type === "post") {
              settings.reload = true;
            }
            fileUrl = this._createFileUrl(absUrl);
            dataUrl = this._createDataUrl(absUrl);
            content = this._find(absUrl);
            if (content.length === 0 && $.mobile.path.isEmbeddedPage(fileUrl) && !$.mobile.path.isFirstPageUrl(fileUrl)) {
              deferred.reject(absUrl, settings);
              return;
            }
            this._getBase().reset();
            if (content.length && !settings.reload) {
              this._enhance(content, settings.role);
              deferred.resolve(absUrl, settings, content);
              if (!settings.prefetch) {
                this._getBase().set(url);
              }
              return;
            }
            triggerData = {
              url: url,
              absUrl: absUrl,
              dataUrl: dataUrl,
              deferred: deferred,
              options: settings
            };
            pblEvent = this._triggerWithDeprecated("beforeload", triggerData);
            if (pblEvent.deprecatedEvent.isDefaultPrevented() || pblEvent.event.isDefaultPrevented()) {
              return;
            }
            if (settings.showLoadMsg) {
              this._showLoading(settings.loadMsgDelay);
            }
            if (settings.prefetch === undefined) {
              this._getBase().reset();
            }
            if (!($.mobile.allowCrossDomainPages || $.mobile.path.isSameDomain($.mobile.path.documentUrl, absUrl))) {
              deferred.reject(absUrl, settings);
              return;
            }
            $.ajax({
              url: fileUrl,
              type: settings.type,
              data: settings.data,
              contentType: settings.contentType,
              dataType: "html",
              success: this._loadSuccess(absUrl, triggerData, settings, deferred),
              error: this._loadError(absUrl, triggerData, settings, deferred)
            });
          },
          _loadError: function(absUrl, triggerData, settings, deferred) {
            return $.proxy(function(xhr, textStatus, errorThrown) {
              this._getBase().set($.mobile.path.get());
              triggerData.xhr = xhr;
              triggerData.textStatus = textStatus;
              triggerData.errorThrown = errorThrown;
              var plfEvent = this._triggerWithDeprecated("loadfailed", triggerData);
              if (plfEvent.deprecatedEvent.isDefaultPrevented() || plfEvent.event.isDefaultPrevented()) {
                return;
              }
              if (settings.showLoadMsg) {
                this._showError();
              }
              deferred.reject(absUrl, settings);
            }, this);
          },
          _getTransitionHandler: function(transition) {
            transition = $.mobile._maybeDegradeTransition(transition);
            return $.mobile.transitionHandlers[transition] || $.mobile.defaultTransitionHandler;
          },
          _triggerCssTransitionEvents: function(to, from, prefix) {
            var samePage = false;
            prefix = prefix || "";
            if (from) {
              if (to[0] === from[0]) {
                samePage = true;
              }
              this._triggerWithDeprecated(prefix + "hide", {
                nextPage: to,
                samePage: samePage
              }, from);
            }
            this._triggerWithDeprecated(prefix + "show", {prevPage: from || $("")}, to);
          },
          _cssTransition: function(to, from, options) {
            var transition = options.transition,
                reverse = options.reverse,
                deferred = options.deferred,
                TransitionHandler,
                promise;
            this._triggerCssTransitionEvents(to, from, "before");
            this._hideLoading();
            TransitionHandler = this._getTransitionHandler(transition);
            promise = (new TransitionHandler(transition, reverse, to, from)).transition();
            promise.done(function() {
              deferred.resolve.apply(deferred, arguments);
            });
            promise.done($.proxy(function() {
              this._triggerCssTransitionEvents(to, from);
            }, this));
          },
          _releaseTransitionLock: function() {
            isPageTransitioning = false;
            if (pageTransitionQueue.length > 0) {
              $.mobile.changePage.apply(null, pageTransitionQueue.pop());
            }
          },
          _removeActiveLinkClass: function(force) {
            $.mobile.removeActiveLinkClass(force);
          },
          _loadUrl: function(to, triggerData, settings) {
            settings.target = to;
            settings.deferred = $.Deferred();
            this.load(to, settings);
            settings.deferred.done($.proxy(function(url, options, content) {
              isPageTransitioning = false;
              options.absUrl = triggerData.absUrl;
              this.transition(content, triggerData, options);
            }, this));
            settings.deferred.fail($.proxy(function() {
              this._removeActiveLinkClass(true);
              this._releaseTransitionLock();
              this._triggerWithDeprecated("changefailed", triggerData);
            }, this));
          },
          _triggerPageBeforeChange: function(to, triggerData, settings) {
            var pbcEvent = new $.Event("pagebeforechange");
            $.extend(triggerData, {
              toPage: to,
              options: settings
            });
            if ($.type(to) === "string") {
              triggerData.absUrl = $.mobile.path.makeUrlAbsolute(to, this._findBaseWithDefault());
            } else {
              triggerData.absUrl = settings.absUrl;
            }
            this.element.trigger(pbcEvent, triggerData);
            if (pbcEvent.isDefaultPrevented()) {
              return false;
            }
            return true;
          },
          change: function(to, options) {
            if (isPageTransitioning) {
              pageTransitionQueue.unshift(arguments);
              return;
            }
            var settings = $.extend({}, $.mobile.changePage.defaults, options),
                triggerData = {};
            settings.fromPage = settings.fromPage || this.activePage;
            if (!this._triggerPageBeforeChange(to, triggerData, settings)) {
              return;
            }
            to = triggerData.toPage;
            if ($.type(to) === "string") {
              isPageTransitioning = true;
              this._loadUrl(to, triggerData, settings);
            } else {
              this.transition(to, triggerData, settings);
            }
          },
          transition: function(toPage, triggerData, settings) {
            var fromPage,
                url,
                pageUrl,
                fileUrl,
                active,
                activeIsInitialPage,
                historyDir,
                pageTitle,
                isDialog,
                alreadyThere,
                newPageTitle,
                params,
                cssTransitionDeferred,
                beforeTransition;
            if (isPageTransitioning) {
              pageTransitionQueue.unshift([toPage, settings]);
              return;
            }
            if (!this._triggerPageBeforeChange(toPage, triggerData, settings)) {
              return;
            }
            beforeTransition = this._triggerWithDeprecated("beforetransition", triggerData);
            if (beforeTransition.deprecatedEvent.isDefaultPrevented() || beforeTransition.event.isDefaultPrevented()) {
              return;
            }
            isPageTransitioning = true;
            if (toPage[0] === $.mobile.firstPage[0] && !settings.dataUrl) {
              settings.dataUrl = $.mobile.path.documentUrl.hrefNoHash;
            }
            fromPage = settings.fromPage;
            url = (settings.dataUrl && $.mobile.path.convertUrlToDataUrl(settings.dataUrl)) || toPage.jqmData("url");
            pageUrl = url;
            fileUrl = $.mobile.path.getFilePath(url);
            active = $.mobile.navigate.history.getActive();
            activeIsInitialPage = $.mobile.navigate.history.activeIndex === 0;
            historyDir = 0;
            pageTitle = document.title;
            isDialog = (settings.role === "dialog" || toPage.jqmData("role") === "dialog") && toPage.jqmData("dialog") !== true;
            if (fromPage && fromPage[0] === toPage[0] && !settings.allowSamePageTransition) {
              isPageTransitioning = false;
              this._triggerWithDeprecated("transition", triggerData);
              this.element.trigger("pagechange", triggerData);
              if (settings.fromHashChange) {
                $.mobile.navigate.history.direct({url: url});
              }
              return;
            }
            toPage.page({role: settings.role});
            if (settings.fromHashChange) {
              historyDir = settings.direction === "back" ? -1 : 1;
            }
            try {
              if (document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body") {
                $(document.activeElement).blur();
              } else {
                $("input:focus, textarea:focus, select:focus").blur();
              }
            } catch (e) {}
            alreadyThere = false;
            if (isDialog && active) {
              if (active.url && active.url.indexOf($.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && $.mobile.navigate.history.activeIndex > 0) {
                settings.changeHash = false;
                alreadyThere = true;
              }
              url = (active.url || "");
              if (!alreadyThere && url.indexOf("#") > -1) {
                url += $.mobile.dialogHashKey;
              } else {
                url += "#" + $.mobile.dialogHashKey;
              }
              if ($.mobile.navigate.history.activeIndex === 0 && url === $.mobile.navigate.history.initialDst) {
                url += $.mobile.dialogHashKey;
              }
            }
            newPageTitle = (!active) ? pageTitle : toPage.jqmData("title") || toPage.children(":jqmData(role='header')").find(".ui-title").text();
            if (!!newPageTitle && pageTitle === document.title) {
              pageTitle = newPageTitle;
            }
            if (!toPage.jqmData("title")) {
              toPage.jqmData("title", pageTitle);
            }
            settings.transition = settings.transition || ((historyDir && !activeIsInitialPage) ? active.transition : undefined) || (isDialog ? $.mobile.defaultDialogTransition : $.mobile.defaultPageTransition);
            if (!historyDir && alreadyThere) {
              $.mobile.navigate.history.getActive().pageUrl = pageUrl;
            }
            if (url && !settings.fromHashChange) {
              if (!$.mobile.path.isPath(url) && url.indexOf("#") < 0) {
                url = "#" + url;
              }
              params = {
                transition: settings.transition,
                title: pageTitle,
                pageUrl: pageUrl,
                role: settings.role
              };
              if (settings.changeHash !== false && $.mobile.hashListeningEnabled) {
                $.mobile.navigate(url, params, true);
              } else if (toPage[0] !== $.mobile.firstPage[0]) {
                $.mobile.navigate.history.add(url, params);
              }
            }
            document.title = pageTitle;
            $.mobile.activePage = toPage;
            this.activePage = toPage;
            settings.reverse = settings.reverse || historyDir < 0;
            cssTransitionDeferred = $.Deferred();
            this._cssTransition(toPage, fromPage, {
              transition: settings.transition,
              reverse: settings.reverse,
              deferred: cssTransitionDeferred
            });
            cssTransitionDeferred.done($.proxy(function(name, reverse, $to, $from, alreadyFocused) {
              $.mobile.removeActiveLinkClass();
              if (settings.duplicateCachedPage) {
                settings.duplicateCachedPage.remove();
              }
              if (!alreadyFocused) {
                $.mobile.focusPage(toPage);
              }
              this._releaseTransitionLock();
              this.element.trigger("pagechange", triggerData);
              this._triggerWithDeprecated("transition", triggerData);
            }, this));
          },
          _findBaseWithDefault: function() {
            var closestBase = (this.activePage && $.mobile.getClosestBaseUrl(this.activePage));
            return closestBase || $.mobile.path.documentBase.hrefNoHash;
          }
        });
        $.mobile.navreadyDeferred = $.Deferred();
        var pageTransitionQueue = [],
            isPageTransitioning = false;
      })(jQuery);
      (function($, undefined) {
        var domreadyDeferred = $.Deferred(),
            documentUrl = $.mobile.path.documentUrl,
            $lastVClicked = null;
        function findClosestLink(ele) {
          while (ele) {
            if ((typeof ele.nodeName === "string") && ele.nodeName.toLowerCase() === "a") {
              break;
            }
            ele = ele.parentNode;
          }
          return ele;
        }
        $.mobile.loadPage = function(url, opts) {
          var container;
          opts = opts || {};
          container = (opts.pageContainer || $.mobile.pageContainer);
          opts.deferred = $.Deferred();
          container.pagecontainer("load", url, opts);
          return opts.deferred.promise();
        };
        $.mobile.back = function() {
          var nav = window.navigator;
          if (this.phonegapNavigationEnabled && nav && nav.app && nav.app.backHistory) {
            nav.app.backHistory();
          } else {
            $.mobile.pageContainer.pagecontainer("back");
          }
        };
        $.mobile.focusPage = function(page) {
          var autofocus = page.find("[autofocus]"),
              pageTitle = page.find(".ui-title:eq(0)");
          if (autofocus.length) {
            autofocus.focus();
            return;
          }
          if (pageTitle.length) {
            pageTitle.focus();
          } else {
            page.focus();
          }
        };
        $.mobile._maybeDegradeTransition = $.mobile._maybeDegradeTransition || function(transition) {
          return transition;
        };
        $.mobile.changePage = function(to, options) {
          $.mobile.pageContainer.pagecontainer("change", to, options);
        };
        $.mobile.changePage.defaults = {
          transition: undefined,
          reverse: false,
          changeHash: true,
          fromHashChange: false,
          role: undefined,
          duplicateCachedPage: undefined,
          pageContainer: undefined,
          showLoadMsg: true,
          dataUrl: undefined,
          fromPage: undefined,
          allowSamePageTransition: false
        };
        $.mobile._registerInternalEvents = function() {
          var getAjaxFormData = function($form, calculateOnly) {
            var url,
                ret = true,
                formData,
                vclickedName,
                method;
            if (!$.mobile.ajaxEnabled || $form.is(":jqmData(ajax='false')") || !$form.jqmHijackable().length || $form.attr("target")) {
              return false;
            }
            url = ($lastVClicked && $lastVClicked.attr("formaction")) || $form.attr("action");
            method = ($form.attr("method") || "get").toLowerCase();
            if (!url) {
              url = $.mobile.getClosestBaseUrl($form);
              if (method === "get") {
                url = $.mobile.path.parseUrl(url).hrefNoSearch;
              }
              if (url === $.mobile.path.documentBase.hrefNoHash) {
                url = documentUrl.hrefNoSearch;
              }
            }
            url = $.mobile.path.makeUrlAbsolute(url, $.mobile.getClosestBaseUrl($form));
            if (($.mobile.path.isExternal(url) && !$.mobile.path.isPermittedCrossDomainRequest(documentUrl, url))) {
              return false;
            }
            if (!calculateOnly) {
              formData = $form.serializeArray();
              if ($lastVClicked && $lastVClicked[0].form === $form[0]) {
                vclickedName = $lastVClicked.attr("name");
                if (vclickedName) {
                  $.each(formData, function(key, value) {
                    if (value.name === vclickedName) {
                      vclickedName = "";
                      return false;
                    }
                  });
                  if (vclickedName) {
                    formData.push({
                      name: vclickedName,
                      value: $lastVClicked.attr("value")
                    });
                  }
                }
              }
              ret = {
                url: url,
                options: {
                  type: method,
                  data: $.param(formData),
                  transition: $form.jqmData("transition"),
                  reverse: $form.jqmData("direction") === "reverse",
                  reloadPage: true
                }
              };
            }
            return ret;
          };
          $.mobile.document.delegate("form", "submit", function(event) {
            var formData;
            if (!event.isDefaultPrevented()) {
              formData = getAjaxFormData($(this));
              if (formData) {
                $.mobile.changePage(formData.url, formData.options);
                event.preventDefault();
              }
            }
          });
          $.mobile.document.bind("vclick", function(event) {
            var $btn,
                btnEls,
                target = event.target,
                needClosest = false;
            if (event.which > 1 || !$.mobile.linkBindingEnabled) {
              return;
            }
            $lastVClicked = $(target);
            if ($.data(target, "mobile-button")) {
              if (!getAjaxFormData($(target).closest("form"), true)) {
                return;
              }
              if (target.parentNode) {
                target = target.parentNode;
              }
            } else {
              target = findClosestLink(target);
              if (!(target && $.mobile.path.parseUrl(target.getAttribute("href") || "#").hash !== "#")) {
                return;
              }
              if (!$(target).jqmHijackable().length) {
                return;
              }
            }
            if (!!~target.className.indexOf("ui-link-inherit")) {
              if (target.parentNode) {
                btnEls = $.data(target.parentNode, "buttonElements");
              }
            } else {
              btnEls = $.data(target, "buttonElements");
            }
            if (btnEls) {
              target = btnEls.outer;
            } else {
              needClosest = true;
            }
            $btn = $(target);
            if (needClosest) {
              $btn = $btn.closest(".ui-btn");
            }
            if ($btn.length > 0 && !($btn.hasClass("ui-state-disabled" || $btn.hasClass("ui-disabled")))) {
              $.mobile.removeActiveLinkClass(true);
              $.mobile.activeClickedLink = $btn;
              $.mobile.activeClickedLink.addClass($.mobile.activeBtnClass);
            }
          });
          $.mobile.document.bind("click", function(event) {
            if (!$.mobile.linkBindingEnabled || event.isDefaultPrevented()) {
              return;
            }
            var link = findClosestLink(event.target),
                $link = $(link),
                httpCleanup = function() {
                  window.setTimeout(function() {
                    $.mobile.removeActiveLinkClass(true);
                  }, 200);
                },
                baseUrl,
                href,
                useDefaultUrlHandling,
                isExternal,
                transition,
                reverse,
                role;
            if ($.mobile.activeClickedLink && $.mobile.activeClickedLink[0] === event.target.parentNode) {
              httpCleanup();
            }
            if (!link || event.which > 1 || !$link.jqmHijackable().length) {
              return;
            }
            if ($link.is(":jqmData(rel='back')")) {
              $.mobile.back();
              return false;
            }
            baseUrl = $.mobile.getClosestBaseUrl($link);
            href = $.mobile.path.makeUrlAbsolute($link.attr("href") || "#", baseUrl);
            if (!$.mobile.ajaxEnabled && !$.mobile.path.isEmbeddedPage(href)) {
              httpCleanup();
              return;
            }
            if (href.search("#") !== -1) {
              href = href.replace(/[^#]*#/, "");
              if (!href) {
                event.preventDefault();
                return;
              } else if ($.mobile.path.isPath(href)) {
                href = $.mobile.path.makeUrlAbsolute(href, baseUrl);
              } else {
                href = $.mobile.path.makeUrlAbsolute("#" + href, documentUrl.hrefNoHash);
              }
            }
            useDefaultUrlHandling = $link.is("[rel='external']") || $link.is(":jqmData(ajax='false')") || $link.is("[target]");
            isExternal = useDefaultUrlHandling || ($.mobile.path.isExternal(href) && !$.mobile.path.isPermittedCrossDomainRequest(documentUrl, href));
            if (isExternal) {
              httpCleanup();
              return;
            }
            transition = $link.jqmData("transition");
            reverse = $link.jqmData("direction") === "reverse" || $link.jqmData("back");
            role = $link.attr("data-" + $.mobile.ns + "rel") || undefined;
            $.mobile.changePage(href, {
              transition: transition,
              reverse: reverse,
              role: role,
              link: $link
            });
            event.preventDefault();
          });
          $.mobile.document.delegate(".ui-page", "pageshow.prefetch", function() {
            var urls = [];
            $(this).find("a:jqmData(prefetch)").each(function() {
              var $link = $(this),
                  url = $link.attr("href");
              if (url && $.inArray(url, urls) === -1) {
                urls.push(url);
                $.mobile.loadPage(url, {
                  role: $link.attr("data-" + $.mobile.ns + "rel"),
                  prefetch: true
                });
              }
            });
          });
          $.mobile.pageContainer.pagecontainer();
          $.mobile.document.bind("pageshow", $.mobile.resetActivePageHeight);
          $.mobile.window.bind("throttledresize", $.mobile.resetActivePageHeight);
        };
        $(function() {
          domreadyDeferred.resolve();
        });
        $.when(domreadyDeferred, $.mobile.navreadyDeferred).done(function() {
          $.mobile._registerInternalEvents();
        });
      })(jQuery);
      (function($, window, undefined) {
        $.mobile.Transition = function() {
          this.init.apply(this, arguments);
        };
        $.extend($.mobile.Transition.prototype, {
          toPreClass: " ui-page-pre-in",
          init: function(name, reverse, $to, $from) {
            $.extend(this, {
              name: name,
              reverse: reverse,
              $to: $to,
              $from: $from,
              deferred: new $.Deferred()
            });
          },
          cleanFrom: function() {
            this.$from.removeClass($.mobile.activePageClass + " out in reverse " + this.name).height("");
          },
          beforeDoneIn: function() {},
          beforeDoneOut: function() {},
          beforeStartOut: function() {},
          doneIn: function() {
            this.beforeDoneIn();
            this.$to.removeClass("out in reverse " + this.name).height("");
            this.toggleViewportClass();
            if ($.mobile.window.scrollTop() !== this.toScroll) {
              this.scrollPage();
            }
            if (!this.sequential) {
              this.$to.addClass($.mobile.activePageClass);
            }
            this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, true);
          },
          doneOut: function(screenHeight, reverseClass, none, preventFocus) {
            this.beforeDoneOut();
            this.startIn(screenHeight, reverseClass, none, preventFocus);
          },
          hideIn: function(callback) {
            this.$to.css("z-index", -10);
            callback.call(this);
            this.$to.css("z-index", "");
          },
          scrollPage: function() {
            $.event.special.scrollstart.enabled = false;
            if ($.mobile.hideUrlBar || this.toScroll !== $.mobile.defaultHomeScroll) {
              window.scrollTo(0, this.toScroll);
            }
            setTimeout(function() {
              $.event.special.scrollstart.enabled = true;
            }, 150);
          },
          startIn: function(screenHeight, reverseClass, none, preventFocus) {
            this.hideIn(function() {
              this.$to.addClass($.mobile.activePageClass + this.toPreClass);
              if (!preventFocus) {
                $.mobile.focusPage(this.$to);
              }
              this.$to.height(screenHeight + this.toScroll);
              if (!none) {
                this.scrollPage();
              }
            });
            this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + reverseClass);
            if (!none) {
              this.$to.animationComplete($.proxy(function() {
                this.doneIn();
              }, this));
            } else {
              this.doneIn();
            }
          },
          startOut: function(screenHeight, reverseClass, none) {
            this.beforeStartOut(screenHeight, reverseClass, none);
            this.$from.height(screenHeight + $.mobile.window.scrollTop()).addClass(this.name + " out" + reverseClass);
          },
          toggleViewportClass: function() {
            $.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name);
          },
          transition: function() {
            var reverseClass = this.reverse ? " reverse" : "",
                screenHeight = $.mobile.getScreenHeight(),
                maxTransitionOverride = $.mobile.maxTransitionWidth !== false && $.mobile.window.width() > $.mobile.maxTransitionWidth,
                none = !$.support.cssTransitions || !$.support.cssAnimations || maxTransitionOverride || !this.name || this.name === "none" || Math.max($.mobile.window.scrollTop(), this.toScroll) > $.mobile.getMaxScrollForTransition();
            this.toScroll = $.mobile.navigate.history.getActive().lastScroll || $.mobile.defaultHomeScroll;
            this.toggleViewportClass();
            if (this.$from && !none) {
              this.startOut(screenHeight, reverseClass, none);
            } else {
              this.doneOut(screenHeight, reverseClass, none, true);
            }
            return this.deferred.promise();
          }
        });
      })(jQuery, this);
      (function($) {
        $.mobile.SerialTransition = function() {
          this.init.apply(this, arguments);
        };
        $.extend($.mobile.SerialTransition.prototype, $.mobile.Transition.prototype, {
          sequential: true,
          beforeDoneOut: function() {
            if (this.$from) {
              this.cleanFrom();
            }
          },
          beforeStartOut: function(screenHeight, reverseClass, none) {
            this.$from.animationComplete($.proxy(function() {
              this.doneOut(screenHeight, reverseClass, none);
            }, this));
          }
        });
      })(jQuery);
      (function($) {
        $.mobile.ConcurrentTransition = function() {
          this.init.apply(this, arguments);
        };
        $.extend($.mobile.ConcurrentTransition.prototype, $.mobile.Transition.prototype, {
          sequential: false,
          beforeDoneIn: function() {
            if (this.$from) {
              this.cleanFrom();
            }
          },
          beforeStartOut: function(screenHeight, reverseClass, none) {
            this.doneOut(screenHeight, reverseClass, none);
          }
        });
      })(jQuery);
      (function($) {
        var defaultGetMaxScrollForTransition = function() {
          return $.mobile.getScreenHeight() * 3;
        };
        $.mobile.transitionHandlers = {
          "sequential": $.mobile.SerialTransition,
          "simultaneous": $.mobile.ConcurrentTransition
        };
        $.mobile.defaultTransitionHandler = $.mobile.transitionHandlers.sequential;
        $.mobile.transitionFallbacks = {};
        $.mobile._maybeDegradeTransition = function(transition) {
          if (transition && !$.support.cssTransform3d && $.mobile.transitionFallbacks[transition]) {
            transition = $.mobile.transitionFallbacks[transition];
          }
          return transition;
        };
        $.mobile.getMaxScrollForTransition = $.mobile.getMaxScrollForTransition || defaultGetMaxScrollForTransition;
      })(jQuery);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.flip = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.flow = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.pop = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionHandlers.slide = $.mobile.transitionHandlers.simultaneous;
        $.mobile.transitionFallbacks.slide = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.slidedown = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.slidefade = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.slideup = "fade";
      })(jQuery, this);
      (function($, window, undefined) {
        $.mobile.transitionFallbacks.turn = "fade";
      })(jQuery, this);
      (function($, undefined) {
        $.mobile.degradeInputs = {
          color: false,
          date: false,
          datetime: false,
          "datetime-local": false,
          email: false,
          month: false,
          number: false,
          range: "number",
          search: "text",
          tel: false,
          time: false,
          url: false,
          week: false
        };
        $.mobile.page.prototype.options.degradeInputs = $.mobile.degradeInputs;
        $.mobile.degradeInputsWithin = function(target) {
          target = $(target);
          target.find("input").not($.mobile.page.prototype.keepNativeSelector()).each(function() {
            var element = $(this),
                type = this.getAttribute("type"),
                optType = $.mobile.degradeInputs[type] || "text",
                html,
                hasType,
                findstr,
                repstr;
            if ($.mobile.degradeInputs[type]) {
              html = $("<div>").html(element.clone()).html();
              hasType = html.indexOf(" type=") > -1;
              findstr = hasType ? /\s+type=["']?\w+['"]?/ : /\/?>/;
              repstr = " type=\"" + optType + "\" data-" + $.mobile.ns + "type=\"" + type + "\"" + (hasType ? "" : ">");
              element.replaceWith(html.replace(findstr, repstr));
            }
          });
        };
      })(jQuery);
      (function($, window, undefined) {
        $.widget("mobile.page", $.mobile.page, {
          options: {
            closeBtn: "left",
            closeBtnText: "Close",
            overlayTheme: "a",
            corners: true,
            dialog: false
          },
          _create: function() {
            this._super();
            if (this.options.dialog) {
              $.extend(this, {
                _inner: this.element.children(),
                _headerCloseButton: null
              });
              if (!this.options.enhanced) {
                this._setCloseBtn(this.options.closeBtn);
              }
            }
          },
          _enhance: function() {
            this._super();
            if (this.options.dialog) {
              this.element.addClass("ui-dialog").wrapInner($("<div/>", {
                "role": "dialog",
                "class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
              }));
            }
          },
          _setOptions: function(options) {
            var closeButtonLocation,
                closeButtonText,
                currentOpts = this.options;
            if (options.corners !== undefined) {
              this._inner.toggleClass("ui-corner-all", !!options.corners);
            }
            if (options.overlayTheme !== undefined) {
              if ($.mobile.activePage[0] === this.element[0]) {
                currentOpts.overlayTheme = options.overlayTheme;
                this._handlePageBeforeShow();
              }
            }
            if (options.closeBtnText !== undefined) {
              closeButtonLocation = currentOpts.closeBtn;
              closeButtonText = options.closeBtnText;
            }
            if (options.closeBtn !== undefined) {
              closeButtonLocation = options.closeBtn;
            }
            if (closeButtonLocation) {
              this._setCloseBtn(closeButtonLocation, closeButtonText);
            }
            this._super(options);
          },
          _handlePageBeforeShow: function() {
            if (this.options.overlayTheme && this.options.dialog) {
              this.removeContainerBackground();
              this.setContainerBackground(this.options.overlayTheme);
            } else {
              this._super();
            }
          },
          _setCloseBtn: function(location, text) {
            var dst,
                btn = this._headerCloseButton;
            location = "left" === location ? "left" : "right" === location ? "right" : "none";
            if ("none" === location) {
              if (btn) {
                btn.remove();
                btn = null;
              }
            } else if (btn) {
              btn.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + location);
              if (text) {
                btn.text(text);
              }
            } else {
              dst = this._inner.find(":jqmData(role='header')").first();
              btn = $("<a></a>", {
                "href": "#",
                "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + location
              }).attr("data-" + $.mobile.ns + "rel", "back").text(text || this.options.closeBtnText || "").prependTo(dst);
            }
            this._headerCloseButton = btn;
          }
        });
      })(jQuery, this);
      (function($, window, undefined) {
        $.widget("mobile.dialog", {
          options: {
            closeBtn: "left",
            closeBtnText: "Close",
            overlayTheme: "a",
            corners: true
          },
          _handlePageBeforeShow: function() {
            this._isCloseable = true;
            if (this.options.overlayTheme) {
              this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme);
            }
          },
          _handlePageBeforeHide: function() {
            this._isCloseable = false;
          },
          _handleVClickSubmit: function(event) {
            var attrs,
                $target = $(event.target).closest(event.type === "vclick" ? "a" : "form");
            if ($target.length && !$target.jqmData("transition")) {
              attrs = {};
              attrs["data-" + $.mobile.ns + "transition"] = ($.mobile.navigate.history.getActive() || {})["transition"] || $.mobile.defaultDialogTransition;
              attrs["data-" + $.mobile.ns + "direction"] = "reverse";
              $target.attr(attrs);
            }
          },
          _create: function() {
            var elem = this.element,
                opts = this.options;
            elem.addClass("ui-dialog").wrapInner($("<div/>", {
              "role": "dialog",
              "class": "ui-dialog-contain ui-overlay-shadow" + (!!opts.corners ? " ui-corner-all" : "")
            }));
            $.extend(this, {
              _isCloseable: false,
              _inner: elem.children(),
              _headerCloseButton: null
            });
            this._on(elem, {
              vclick: "_handleVClickSubmit",
              submit: "_handleVClickSubmit",
              pagebeforeshow: "_handlePageBeforeShow",
              pagebeforehide: "_handlePageBeforeHide"
            });
            this._setCloseBtn(opts.closeBtn);
          },
          _setOptions: function(options) {
            var closeButtonLocation,
                closeButtonText,
                currentOpts = this.options;
            if (options.corners !== undefined) {
              this._inner.toggleClass("ui-corner-all", !!options.corners);
            }
            if (options.overlayTheme !== undefined) {
              if ($.mobile.activePage[0] === this.element[0]) {
                currentOpts.overlayTheme = options.overlayTheme;
                this._handlePageBeforeShow();
              }
            }
            if (options.closeBtnText !== undefined) {
              closeButtonLocation = currentOpts.closeBtn;
              closeButtonText = options.closeBtnText;
            }
            if (options.closeBtn !== undefined) {
              closeButtonLocation = options.closeBtn;
            }
            if (closeButtonLocation) {
              this._setCloseBtn(closeButtonLocation, closeButtonText);
            }
            this._super(options);
          },
          _setCloseBtn: function(location, text) {
            var dst,
                btn = this._headerCloseButton;
            location = "left" === location ? "left" : "right" === location ? "right" : "none";
            if ("none" === location) {
              if (btn) {
                btn.remove();
                btn = null;
              }
            } else if (btn) {
              btn.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + location);
              if (text) {
                btn.text(text);
              }
            } else {
              dst = this._inner.find(":jqmData(role='header')").first();
              btn = $("<a></a>", {
                "role": "button",
                "href": "#",
                "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + location
              }).text(text || this.options.closeBtnText || "").prependTo(dst);
              this._on(btn, {click: "close"});
            }
            this._headerCloseButton = btn;
          },
          close: function() {
            var hist = $.mobile.navigate.history;
            if (this._isCloseable) {
              this._isCloseable = false;
              if ($.mobile.hashListeningEnabled && hist.activeIndex > 0) {
                $.mobile.back();
              } else {
                $.mobile.pageContainer.pagecontainer("back");
              }
            }
          }
        });
      })(jQuery, this);
      (function($, undefined) {
        var rInitialLetter = /([A-Z])/g,
            iconposClass = function(iconpos) {
              return ("ui-btn-icon-" + (iconpos === null ? "left" : iconpos));
            };
        $.widget("mobile.collapsible", {
          options: {
            enhanced: false,
            expandCueText: null,
            collapseCueText: null,
            collapsed: true,
            heading: "h1,h2,h3,h4,h5,h6,legend",
            collapsedIcon: null,
            expandedIcon: null,
            iconpos: null,
            theme: null,
            contentTheme: null,
            inset: null,
            corners: null,
            mini: null
          },
          _create: function() {
            var elem = this.element,
                ui = {accordion: elem.closest(":jqmData(role='collapsible-set')," + ":jqmData(role='collapsibleset')" + ($.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set")};
            this._ui = ui;
            this._renderedOptions = this._getOptions(this.options);
            if (this.options.enhanced) {
              ui.heading = $(".ui-collapsible-heading", this.element[0]);
              ui.content = ui.heading.next();
              ui.anchor = $("a", ui.heading[0]).first();
              ui.status = ui.anchor.children(".ui-collapsible-heading-status");
            } else {
              this._enhance(elem, ui);
            }
            this._on(ui.heading, {
              "tap": function() {
                ui.heading.find("a").first().addClass($.mobile.activeBtnClass);
              },
              "click": function(event) {
                this._handleExpandCollapse(!ui.heading.hasClass("ui-collapsible-heading-collapsed"));
                event.preventDefault();
                event.stopPropagation();
              }
            });
          },
          _getOptions: function(options) {
            var key,
                accordion = this._ui.accordion,
                accordionWidget = this._ui.accordionWidget;
            options = $.extend({}, options);
            if (accordion.length && !accordionWidget) {
              this._ui.accordionWidget = accordionWidget = accordion.data("mobile-collapsibleset");
            }
            for (key in options) {
              options[key] = (options[key] != null) ? options[key] : (accordionWidget) ? accordionWidget.options[key] : accordion.length ? $.mobile.getAttribute(accordion[0], key.replace(rInitialLetter, "-$1").toLowerCase()) : null;
              if (null == options[key]) {
                options[key] = $.mobile.collapsible.defaults[key];
              }
            }
            return options;
          },
          _themeClassFromOption: function(prefix, value) {
            return (value ? (value === "none" ? "" : prefix + value) : "");
          },
          _enhance: function(elem, ui) {
            var iconclass,
                opts = this._renderedOptions,
                contentThemeClass = this._themeClassFromOption("ui-body-", opts.contentTheme);
            elem.addClass("ui-collapsible " + (opts.inset ? "ui-collapsible-inset " : "") + (opts.inset && opts.corners ? "ui-corner-all " : "") + (contentThemeClass ? "ui-collapsible-themed-content " : ""));
            ui.originalHeading = elem.children(this.options.heading).first(), ui.content = elem.wrapInner("<div " + "class='ui-collapsible-content " + contentThemeClass + "'></div>").children(".ui-collapsible-content"), ui.heading = ui.originalHeading;
            if (ui.heading.is("legend")) {
              ui.heading = $("<div role='heading'>" + ui.heading.html() + "</div>");
              ui.placeholder = $("<div><!-- placeholder for legend --></div>").insertBefore(ui.originalHeading);
              ui.originalHeading.remove();
            }
            iconclass = (opts.collapsed ? (opts.collapsedIcon ? "ui-icon-" + opts.collapsedIcon : "") : (opts.expandedIcon ? "ui-icon-" + opts.expandedIcon : ""));
            ui.status = $("<span class='ui-collapsible-heading-status'></span>");
            ui.anchor = ui.heading.detach().addClass("ui-collapsible-heading").append(ui.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (iconclass ? iconclass + " " : "") + (iconclass ? iconposClass(opts.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", opts.theme) + " " + (opts.mini ? "ui-mini " : ""));
            ui.heading.insertBefore(ui.content);
            this._handleExpandCollapse(this.options.collapsed);
            return ui;
          },
          refresh: function() {
            this._applyOptions(this.options);
            this._renderedOptions = this._getOptions(this.options);
          },
          _applyOptions: function(options) {
            var isCollapsed,
                newTheme,
                oldTheme,
                hasCorners,
                elem = this.element,
                currentOpts = this._renderedOptions,
                ui = this._ui,
                anchor = ui.anchor,
                status = ui.status,
                opts = this._getOptions(options);
            if (options.collapsed !== undefined) {
              this._handleExpandCollapse(options.collapsed);
            }
            isCollapsed = elem.hasClass("ui-collapsible-collapsed");
            if (isCollapsed) {
              if (opts.expandCueText !== undefined) {
                status.text(opts.expandCueText);
              }
              if (opts.collapsedIcon !== undefined) {
                if (currentOpts.collapsedIcon) {
                  anchor.removeClass("ui-icon-" + currentOpts.collapsedIcon);
                }
                if (opts.collapsedIcon) {
                  anchor.addClass("ui-icon-" + opts.collapsedIcon);
                }
              }
            } else {
              if (opts.collapseCueText !== undefined) {
                status.text(opts.collapseCueText);
              }
              if (opts.expandedIcon !== undefined) {
                if (currentOpts.expandedIcon) {
                  anchor.removeClass("ui-icon-" + currentOpts.expandedIcon);
                }
                if (opts.expandedIcon) {
                  anchor.addClass("ui-icon-" + opts.expandedIcon);
                }
              }
            }
            if (opts.iconpos !== undefined) {
              anchor.removeClass(iconposClass(currentOpts.iconpos)).addClass(iconposClass(opts.iconpos));
            }
            if (opts.theme !== undefined) {
              oldTheme = this._themeClassFromOption("ui-btn-", currentOpts.theme);
              newTheme = this._themeClassFromOption("ui-btn-", opts.theme);
              anchor.removeClass(oldTheme).addClass(newTheme);
            }
            if (opts.contentTheme !== undefined) {
              oldTheme = this._themeClassFromOption("ui-body-", currentOpts.contentTheme);
              newTheme = this._themeClassFromOption("ui-body-", opts.contentTheme);
              ui.content.removeClass(oldTheme).addClass(newTheme);
            }
            if (opts.inset !== undefined) {
              elem.toggleClass("ui-collapsible-inset", opts.inset);
              hasCorners = !!(opts.inset && (opts.corners || currentOpts.corners));
            }
            if (opts.corners !== undefined) {
              hasCorners = !!(opts.corners && (opts.inset || currentOpts.inset));
            }
            if (hasCorners !== undefined) {
              elem.toggleClass("ui-corner-all", hasCorners);
            }
            if (opts.mini !== undefined) {
              anchor.toggleClass("ui-mini", opts.mini);
            }
          },
          _setOptions: function(options) {
            this._applyOptions(options);
            this._super(options);
            this._renderedOptions = this._getOptions(this.options);
          },
          _handleExpandCollapse: function(isCollapse) {
            var opts = this._renderedOptions,
                ui = this._ui;
            ui.status.text(isCollapse ? opts.expandCueText : opts.collapseCueText);
            ui.heading.toggleClass("ui-collapsible-heading-collapsed", isCollapse).find("a").first().toggleClass("ui-icon-" + opts.expandedIcon, !isCollapse).toggleClass("ui-icon-" + opts.collapsedIcon, (isCollapse || opts.expandedIcon === opts.collapsedIcon)).removeClass($.mobile.activeBtnClass);
            this.element.toggleClass("ui-collapsible-collapsed", isCollapse);
            ui.content.toggleClass("ui-collapsible-content-collapsed", isCollapse).attr("aria-hidden", isCollapse).trigger("updatelayout");
            this.options.collapsed = isCollapse;
            this._trigger(isCollapse ? "collapse" : "expand");
          },
          expand: function() {
            this._handleExpandCollapse(false);
          },
          collapse: function() {
            this._handleExpandCollapse(true);
          },
          _destroy: function() {
            var ui = this._ui,
                opts = this.options;
            if (opts.enhanced) {
              return;
            }
            if (ui.placeholder) {
              ui.originalHeading.insertBefore(ui.placeholder);
              ui.placeholder.remove();
              ui.heading.remove();
            } else {
              ui.status.remove();
              ui.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap();
            }
            ui.anchor.contents().unwrap();
            ui.content.contents().unwrap();
            this.element.removeClass("ui-collapsible ui-collapsible-collapsed " + "ui-collapsible-themed-content ui-collapsible-inset ui-corner-all");
          }
        });
        $.mobile.collapsible.defaults = {
          expandCueText: " click to expand contents",
          collapseCueText: " click to collapse contents",
          collapsedIcon: "plus",
          contentTheme: "inherit",
          expandedIcon: "minus",
          iconpos: "left",
          inset: true,
          corners: true,
          theme: "inherit",
          mini: false
        };
      })(jQuery);
      (function($, undefined) {
        $.mobile.behaviors.addFirstLastClasses = {
          _getVisibles: function($els, create) {
            var visibles;
            if (create) {
              visibles = $els.not(".ui-screen-hidden");
            } else {
              visibles = $els.filter(":visible");
              if (visibles.length === 0) {
                visibles = $els.not(".ui-screen-hidden");
              }
            }
            return visibles;
          },
          _addFirstLastClasses: function($els, $visibles, create) {
            $els.removeClass("ui-first-child ui-last-child");
            $visibles.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child");
            if (!create) {
              this.element.trigger("updatelayout");
            }
          },
          _removeFirstLastClasses: function($els) {
            $els.removeClass("ui-first-child ui-last-child");
          }
        };
      })(jQuery);
      (function($, undefined) {
        var childCollapsiblesSelector = ":mobile-collapsible, " + $.mobile.collapsible.initSelector;
        $.widget("mobile.collapsibleset", $.extend({
          initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",
          options: $.extend({enhanced: false}, $.mobile.collapsible.defaults),
          _handleCollapsibleExpand: function(event) {
            var closestCollapsible = $(event.target).closest(".ui-collapsible");
            if (closestCollapsible.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')")) {
              closestCollapsible.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse");
            }
          },
          _create: function() {
            var elem = this.element,
                opts = this.options;
            $.extend(this, {_classes: ""});
            if (!opts.enhanced) {
              elem.addClass("ui-collapsible-set " + this._themeClassFromOption("ui-group-theme-", opts.theme) + " " + (opts.corners && opts.inset ? "ui-corner-all " : ""));
              this.element.find($.mobile.collapsible.initSelector).collapsible();
            }
            this._on(elem, {collapsibleexpand: "_handleCollapsibleExpand"});
          },
          _themeClassFromOption: function(prefix, value) {
            return (value ? (value === "none" ? "" : prefix + value) : "");
          },
          _init: function() {
            this._refresh(true);
            this.element.children(childCollapsiblesSelector).filter(":jqmData(collapsed='false')").collapsible("expand");
          },
          _setOptions: function(options) {
            var ret,
                hasCorners,
                elem = this.element,
                themeClass = this._themeClassFromOption("ui-group-theme-", options.theme);
            if (themeClass) {
              elem.removeClass(this._themeClassFromOption("ui-group-theme-", this.options.theme)).addClass(themeClass);
            }
            if (options.inset !== undefined) {
              hasCorners = !!(options.inset && (options.corners || this.options.corners));
            }
            if (options.corners !== undefined) {
              hasCorners = !!(options.corners && (options.inset || this.options.inset));
            }
            if (hasCorners !== undefined) {
              elem.toggleClass("ui-corner-all", hasCorners);
            }
            ret = this._super(options);
            this.element.children(":mobile-collapsible").collapsible("refresh");
            return ret;
          },
          _destroy: function() {
            var el = this.element;
            this._removeFirstLastClasses(el.children(childCollapsiblesSelector));
            el.removeClass("ui-collapsible-set ui-corner-all " + this._themeClassFromOption("ui-group-theme-", this.options.theme)).children(":mobile-collapsible").collapsible("destroy");
          },
          _refresh: function(create) {
            var collapsiblesInSet = this.element.children(childCollapsiblesSelector);
            this.element.find($.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible();
            this._addFirstLastClasses(collapsiblesInSet, this._getVisibles(collapsiblesInSet, create), create);
          },
          refresh: function() {
            this._refresh(false);
          }
        }, $.mobile.behaviors.addFirstLastClasses));
      })(jQuery);
      (function($, undefined) {
        $.fn.fieldcontain = function() {
          return this.addClass("ui-field-contain");
        };
      })(jQuery);
      (function($, undefined) {
        $.fn.grid = function(options) {
          return this.each(function() {
            var $this = $(this),
                o = $.extend({grid: null}, options),
                $kids = $this.children(),
                gridCols = {
                  solo: 1,
                  a: 2,
                  b: 3,
                  c: 4,
                  d: 5
                },
                grid = o.grid,
                iterator,
                letter;
            if (!grid) {
              if ($kids.length <= 5) {
                for (letter in gridCols) {
                  if (gridCols[letter] === $kids.length) {
                    grid = letter;
                  }
                }
              } else {
                grid = "a";
                $this.addClass("ui-grid-duo");
              }
            }
            iterator = gridCols[grid];
            $this.addClass("ui-grid-" + grid);
            $kids.filter(":nth-child(" + iterator + "n+1)").addClass("ui-block-a");
            if (iterator > 1) {
              $kids.filter(":nth-child(" + iterator + "n+2)").addClass("ui-block-b");
            }
            if (iterator > 2) {
              $kids.filter(":nth-child(" + iterator + "n+3)").addClass("ui-block-c");
            }
            if (iterator > 3) {
              $kids.filter(":nth-child(" + iterator + "n+4)").addClass("ui-block-d");
            }
            if (iterator > 4) {
              $kids.filter(":nth-child(" + iterator + "n+5)").addClass("ui-block-e");
            }
          });
        };
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.navbar", {
          options: {
            iconpos: "top",
            grid: null
          },
          _create: function() {
            var $navbar = this.element,
                $navbtns = $navbar.find("a"),
                iconpos = $navbtns.filter(":jqmData(icon)").length ? this.options.iconpos : undefined;
            $navbar.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({grid: this.options.grid});
            $navbtns.each(function() {
              var icon = $.mobile.getAttribute(this, "icon"),
                  theme = $.mobile.getAttribute(this, "theme"),
                  classes = "ui-btn";
              if (theme) {
                classes += " ui-btn-" + theme;
              }
              if (icon) {
                classes += " ui-icon-" + icon + " ui-btn-icon-" + iconpos;
              }
              $(this).addClass(classes);
            });
            $navbar.delegate("a", "vclick", function() {
              var activeBtn = $(this);
              if (!(activeBtn.hasClass("ui-state-disabled") || activeBtn.hasClass("ui-disabled") || activeBtn.hasClass($.mobile.activeBtnClass))) {
                $navbtns.removeClass($.mobile.activeBtnClass);
                activeBtn.addClass($.mobile.activeBtnClass);
                $(document).one("pagehide", function() {
                  activeBtn.removeClass($.mobile.activeBtnClass);
                });
              }
            });
            $navbar.closest(".ui-page").bind("pagebeforeshow", function() {
              $navbtns.filter(".ui-state-persist").addClass($.mobile.activeBtnClass);
            });
          }
        });
      })(jQuery);
      (function($, undefined) {
        var getAttr = $.mobile.getAttribute;
        $.widget("mobile.listview", $.extend({
          options: {
            theme: null,
            countTheme: null,
            dividerTheme: null,
            icon: "carat-r",
            splitIcon: "carat-r",
            splitTheme: null,
            corners: true,
            shadow: true,
            inset: false
          },
          _create: function() {
            var t = this,
                listviewClasses = "";
            listviewClasses += t.options.inset ? " ui-listview-inset" : "";
            if (!!t.options.inset) {
              listviewClasses += t.options.corners ? " ui-corner-all" : "";
              listviewClasses += t.options.shadow ? " ui-shadow" : "";
            }
            t.element.addClass(" ui-listview" + listviewClasses);
            t.refresh(true);
          },
          _findFirstElementByTagName: function(ele, nextProp, lcName, ucName) {
            var dict = {};
            dict[lcName] = dict[ucName] = true;
            while (ele) {
              if (dict[ele.nodeName]) {
                return ele;
              }
              ele = ele[nextProp];
            }
            return null;
          },
          _addThumbClasses: function(containers) {
            var i,
                img,
                len = containers.length;
            for (i = 0; i < len; i++) {
              img = $(this._findFirstElementByTagName(containers[i].firstChild, "nextSibling", "img", "IMG"));
              if (img.length) {
                $(this._findFirstElementByTagName(img[0].parentNode, "parentNode", "li", "LI")).addClass(img.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb");
              }
            }
          },
          _getChildrenByTagName: function(ele, lcName, ucName) {
            var results = [],
                dict = {};
            dict[lcName] = dict[ucName] = true;
            ele = ele.firstChild;
            while (ele) {
              if (dict[ele.nodeName]) {
                results.push(ele);
              }
              ele = ele.nextSibling;
            }
            return $(results);
          },
          _beforeListviewRefresh: $.noop,
          _afterListviewRefresh: $.noop,
          refresh: function(create) {
            var buttonClass,
                pos,
                numli,
                item,
                itemClass,
                itemTheme,
                itemIcon,
                icon,
                a,
                isDivider,
                startCount,
                newStartCount,
                value,
                last,
                splittheme,
                splitThemeClass,
                spliticon,
                altButtonClass,
                dividerTheme,
                li,
                o = this.options,
                $list = this.element,
                ol = !!$.nodeName($list[0], "ol"),
                start = $list.attr("start"),
                itemClassDict = {},
                countBubbles = $list.find(".ui-li-count"),
                countTheme = getAttr($list[0], "counttheme") || this.options.countTheme,
                countThemeClass = countTheme ? "ui-body-" + countTheme : "ui-body-inherit";
            if (o.theme) {
              $list.addClass("ui-group-theme-" + o.theme);
            }
            if (ol && (start || start === 0)) {
              startCount = parseInt(start, 10) - 1;
              $list.css("counter-reset", "listnumbering " + startCount);
            }
            this._beforeListviewRefresh();
            li = this._getChildrenByTagName($list[0], "li", "LI");
            for (pos = 0, numli = li.length; pos < numli; pos++) {
              item = li.eq(pos);
              itemClass = "";
              if (create || item[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) {
                a = this._getChildrenByTagName(item[0], "a", "A");
                isDivider = (getAttr(item[0], "role") === "list-divider");
                value = item.attr("value");
                itemTheme = getAttr(item[0], "theme");
                if (a.length && a[0].className.search(/\bui-btn\b/) < 0 && !isDivider) {
                  itemIcon = getAttr(item[0], "icon");
                  icon = (itemIcon === false) ? false : (itemIcon || o.icon);
                  a.removeClass("ui-link");
                  buttonClass = "ui-btn";
                  if (itemTheme) {
                    buttonClass += " ui-btn-" + itemTheme;
                  }
                  if (a.length > 1) {
                    itemClass = "ui-li-has-alt";
                    last = a.last();
                    splittheme = getAttr(last[0], "theme") || o.splitTheme || getAttr(item[0], "theme", true);
                    splitThemeClass = splittheme ? " ui-btn-" + splittheme : "";
                    spliticon = getAttr(last[0], "icon") || getAttr(item[0], "icon") || o.splitIcon;
                    altButtonClass = "ui-btn ui-btn-icon-notext ui-icon-" + spliticon + splitThemeClass;
                    last.attr("title", $.trim(last.getEncodedText())).addClass(altButtonClass).empty();
                  } else if (icon) {
                    buttonClass += " ui-btn-icon-right ui-icon-" + icon;
                  }
                  a.first().addClass(buttonClass);
                } else if (isDivider) {
                  dividerTheme = (getAttr(item[0], "theme") || o.dividerTheme || o.theme);
                  itemClass = "ui-li-divider ui-bar-" + (dividerTheme ? dividerTheme : "inherit");
                  item.attr("role", "heading");
                } else if (a.length <= 0) {
                  itemClass = "ui-li-static ui-body-" + (itemTheme ? itemTheme : "inherit");
                }
                if (ol && value) {
                  newStartCount = parseInt(value, 10) - 1;
                  item.css("counter-reset", "listnumbering " + newStartCount);
                }
              }
              if (!itemClassDict[itemClass]) {
                itemClassDict[itemClass] = [];
              }
              itemClassDict[itemClass].push(item[0]);
            }
            for (itemClass in itemClassDict) {
              $(itemClassDict[itemClass]).addClass(itemClass);
            }
            countBubbles.each(function() {
              $(this).closest("li").addClass("ui-li-has-count");
            });
            if (countThemeClass) {
              countBubbles.addClass(countThemeClass);
            }
            this._addThumbClasses(li);
            this._addThumbClasses(li.find(".ui-btn"));
            this._afterListviewRefresh();
            this._addFirstLastClasses(li, this._getVisibles(li, create), create);
          }
        }, $.mobile.behaviors.addFirstLastClasses));
      })(jQuery);
      (function($, undefined) {
        function defaultAutodividersSelector(elt) {
          var text = $.trim(elt.text()) || null;
          if (!text) {
            return null;
          }
          text = text.slice(0, 1).toUpperCase();
          return text;
        }
        $.widget("mobile.listview", $.mobile.listview, {
          options: {
            autodividers: false,
            autodividersSelector: defaultAutodividersSelector
          },
          _beforeListviewRefresh: function() {
            if (this.options.autodividers) {
              this._replaceDividers();
              this._superApply(arguments);
            }
          },
          _replaceDividers: function() {
            var i,
                lis,
                li,
                dividerText,
                lastDividerText = null,
                list = this.element,
                divider;
            list.children("li:jqmData(role='list-divider')").remove();
            lis = list.children("li");
            for (i = 0; i < lis.length; i++) {
              li = lis[i];
              dividerText = this.options.autodividersSelector($(li));
              if (dividerText && lastDividerText !== dividerText) {
                divider = document.createElement("li");
                divider.appendChild(document.createTextNode(dividerText));
                divider.setAttribute("data-" + $.mobile.ns + "role", "list-divider");
                li.parentNode.insertBefore(divider, li);
              }
              lastDividerText = dividerText;
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        var rdivider = /(^|\s)ui-li-divider($|\s)/,
            rhidden = /(^|\s)ui-screen-hidden($|\s)/;
        $.widget("mobile.listview", $.mobile.listview, {
          options: {hideDividers: false},
          _afterListviewRefresh: function() {
            var items,
                idx,
                item,
                hideDivider = true;
            this._superApply(arguments);
            if (this.options.hideDividers) {
              items = this._getChildrenByTagName(this.element[0], "li", "LI");
              for (idx = items.length - 1; idx > -1; idx--) {
                item = items[idx];
                if (item.className.match(rdivider)) {
                  if (hideDivider) {
                    item.className = item.className + " ui-screen-hidden";
                  }
                  hideDivider = true;
                } else {
                  if (!item.className.match(rhidden)) {
                    hideDivider = false;
                  }
                }
              }
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.mobile.nojs = function(target) {
          $(":jqmData(role='nojs')", target).addClass("ui-nojs");
        };
      })(jQuery);
      (function($, undefined) {
        $.mobile.behaviors.formReset = {_handleFormReset: function() {
            this._on(this.element.closest("form"), {reset: function() {
                this._delay("_reset");
              }});
          }};
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.checkboxradio", $.extend({
          initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",
          options: {
            theme: "inherit",
            mini: false,
            wrapperClass: null,
            enhanced: false,
            iconpos: "left"
          },
          _create: function() {
            var input = this.element,
                o = this.options,
                inheritAttr = function(input, dataAttr) {
                  return input.jqmData(dataAttr) || input.closest("form, fieldset").jqmData(dataAttr);
                },
                parentLabel = input.closest("label"),
                label = parentLabel.length ? parentLabel : input.closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + $.mobile.path.hashToSelector(input[0].id) + "']").first(),
                inputtype = input[0].type,
                checkedClass = "ui-" + inputtype + "-on",
                uncheckedClass = "ui-" + inputtype + "-off";
            if (inputtype !== "checkbox" && inputtype !== "radio") {
              return;
            }
            if (this.element[0].disabled) {
              this.options.disabled = true;
            }
            o.iconpos = inheritAttr(input, "iconpos") || label.attr("data-" + $.mobile.ns + "iconpos") || o.iconpos, o.mini = inheritAttr(input, "mini") || o.mini;
            $.extend(this, {
              input: input,
              label: label,
              parentLabel: parentLabel,
              inputtype: inputtype,
              checkedClass: checkedClass,
              uncheckedClass: uncheckedClass
            });
            if (!this.options.enhanced) {
              this._enhance();
            }
            this._on(label, {
              vmouseover: "_handleLabelVMouseOver",
              vclick: "_handleLabelVClick"
            });
            this._on(input, {
              vmousedown: "_cacheVals",
              vclick: "_handleInputVClick",
              focus: "_handleInputFocus",
              blur: "_handleInputBlur"
            });
            this._handleFormReset();
            this.refresh();
          },
          _enhance: function() {
            this.label.addClass("ui-btn ui-corner-all");
            if (this.parentLabel.length > 0) {
              this.input.add(this.label).wrapAll(this._wrapper());
            } else {
              this.element.wrap(this._wrapper());
              this.element.parent().prepend(this.label);
            }
            this._setOptions({
              "theme": this.options.theme,
              "iconpos": this.options.iconpos,
              "mini": this.options.mini
            });
          },
          _wrapper: function() {
            return $("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>");
          },
          _handleInputFocus: function() {
            this.label.addClass($.mobile.focusClass);
          },
          _handleInputBlur: function() {
            this.label.removeClass($.mobile.focusClass);
          },
          _handleInputVClick: function() {
            var $this = this.element;
            if ($this.is(":checked")) {
              $this.prop("checked", true);
              this._getInputSet().not($this).prop("checked", false);
            } else {
              $this.prop("checked", false);
            }
            this._updateAll();
          },
          _handleLabelVMouseOver: function(event) {
            if (this.label.parent().hasClass("ui-state-disabled")) {
              event.stopPropagation();
            }
          },
          _handleLabelVClick: function(event) {
            var input = this.element;
            if (input.is(":disabled")) {
              event.preventDefault();
              return;
            }
            this._cacheVals();
            input.prop("checked", this.inputtype === "radio" && true || !input.prop("checked"));
            input.triggerHandler("click");
            this._getInputSet().not(input).prop("checked", false);
            this._updateAll();
            return false;
          },
          _cacheVals: function() {
            this._getInputSet().each(function() {
              $(this).attr("data-" + $.mobile.ns + "cacheVal", this.checked);
            });
          },
          _getInputSet: function() {
            if (this.inputtype === "checkbox") {
              return this.element;
            }
            return this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']");
          },
          _updateAll: function() {
            var self = this;
            this._getInputSet().each(function() {
              var $this = $(this);
              if (this.checked || self.inputtype === "checkbox") {
                $this.trigger("change");
              }
            }).checkboxradio("refresh");
          },
          _reset: function() {
            this.refresh();
          },
          _hasIcon: function() {
            var controlgroup,
                controlgroupWidget,
                controlgroupConstructor = $.mobile.controlgroup;
            if (controlgroupConstructor) {
              controlgroup = this.element.closest(":mobile-controlgroup," + controlgroupConstructor.prototype.initSelector);
              if (controlgroup.length > 0) {
                controlgroupWidget = $.data(controlgroup[0], "mobile-controlgroup");
                return ((controlgroupWidget ? controlgroupWidget.options.type : controlgroup.attr("data-" + $.mobile.ns + "type")) !== "horizontal");
              }
            }
            return true;
          },
          refresh: function() {
            var hasIcon = this._hasIcon(),
                isChecked = this.element[0].checked,
                active = $.mobile.activeBtnClass,
                iconposClass = "ui-btn-icon-" + this.options.iconpos,
                addClasses = [],
                removeClasses = [];
            if (hasIcon) {
              removeClasses.push(active);
              addClasses.push(iconposClass);
            } else {
              removeClasses.push(iconposClass);
              (isChecked ? addClasses : removeClasses).push(active);
            }
            if (isChecked) {
              addClasses.push(this.checkedClass);
              removeClasses.push(this.uncheckedClass);
            } else {
              addClasses.push(this.uncheckedClass);
              removeClasses.push(this.checkedClass);
            }
            this.label.addClass(addClasses.join(" ")).removeClass(removeClasses.join(" "));
          },
          widget: function() {
            return this.label.parent();
          },
          _setOptions: function(options) {
            var label = this.label,
                currentOptions = this.options,
                outer = this.widget(),
                hasIcon = this._hasIcon();
            if (options.disabled !== undefined) {
              this.input.prop("disabled", !!options.disabled);
              outer.toggleClass("ui-state-disabled", !!options.disabled);
            }
            if (options.mini !== undefined) {
              outer.toggleClass("ui-mini", !!options.mini);
            }
            if (options.theme !== undefined) {
              label.removeClass("ui-btn-" + currentOptions.theme).addClass("ui-btn-" + options.theme);
            }
            if (options.wrapperClass !== undefined) {
              outer.removeClass(currentOptions.wrapperClass).addClass(options.wrapperClass);
            }
            if (options.iconpos !== undefined && hasIcon) {
              label.removeClass("ui-btn-icon-" + currentOptions.iconpos).addClass("ui-btn-icon-" + options.iconpos);
            } else if (!hasIcon) {
              label.removeClass("ui-btn-icon-" + currentOptions.iconpos);
            }
            this._super(options);
          }
        }, $.mobile.behaviors.formReset));
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.button", {
          initSelector: "input[type='button'], input[type='submit'], input[type='reset']",
          options: {
            theme: null,
            icon: null,
            iconpos: "left",
            iconshadow: false,
            corners: true,
            shadow: true,
            inline: null,
            mini: null,
            wrapperClass: null,
            enhanced: false
          },
          _create: function() {
            if (this.element.is(":disabled")) {
              this.options.disabled = true;
            }
            if (!this.options.enhanced) {
              this._enhance();
            }
            $.extend(this, {wrapper: this.element.parent()});
            this._on({
              focus: function() {
                this.widget().addClass($.mobile.focusClass);
              },
              blur: function() {
                this.widget().removeClass($.mobile.focusClass);
              }
            });
            this.refresh(true);
          },
          _enhance: function() {
            this.element.wrap(this._button());
          },
          _button: function() {
            var options = this.options,
                iconClasses = this._getIconClasses(this.options);
            return $("<div class='ui-btn ui-input-btn" + (options.wrapperClass ? " " + options.wrapperClass : "") + (options.theme ? " ui-btn-" + options.theme : "") + (options.corners ? " ui-corner-all" : "") + (options.shadow ? " ui-shadow" : "") + (options.inline ? " ui-btn-inline" : "") + (options.mini ? " ui-mini" : "") + (options.disabled ? " ui-state-disabled" : "") + (iconClasses ? (" " + iconClasses) : "") + "' >" + this.element.val() + "</div>");
          },
          widget: function() {
            return this.wrapper;
          },
          _destroy: function() {
            this.element.insertBefore(this.button);
            this.button.remove();
          },
          _getIconClasses: function(options) {
            return (options.icon ? ("ui-icon-" + options.icon + (options.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + options.iconpos) : "");
          },
          _setOptions: function(options) {
            var outer = this.widget();
            if (options.theme !== undefined) {
              outer.removeClass(this.options.theme).addClass("ui-btn-" + options.theme);
            }
            if (options.corners !== undefined) {
              outer.toggleClass("ui-corner-all", options.corners);
            }
            if (options.shadow !== undefined) {
              outer.toggleClass("ui-shadow", options.shadow);
            }
            if (options.inline !== undefined) {
              outer.toggleClass("ui-btn-inline", options.inline);
            }
            if (options.mini !== undefined) {
              outer.toggleClass("ui-mini", options.mini);
            }
            if (options.disabled !== undefined) {
              this.element.prop("disabled", options.disabled);
              outer.toggleClass("ui-state-disabled", options.disabled);
            }
            if (options.icon !== undefined || options.iconshadow !== undefined || options.iconpos !== undefined) {
              outer.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses($.extend({}, this.options, options)));
            }
            this._super(options);
          },
          refresh: function(create) {
            if (this.options.icon && this.options.iconpos === "notext" && this.element.attr("title")) {
              this.element.attr("title", this.element.val());
            }
            if (!create) {
              var originalElement = this.element.detach();
              $(this.wrapper).text(this.element.val()).append(originalElement);
            }
          }
        });
      })(jQuery);
      (function($) {
        var meta = $("meta[name=viewport]"),
            initialContent = meta.attr("content"),
            disabledZoom = initialContent + ",maximum-scale=1, user-scalable=no",
            enabledZoom = initialContent + ",maximum-scale=10, user-scalable=yes",
            disabledInitially = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(initialContent);
        $.mobile.zoom = $.extend({}, {
          enabled: !disabledInitially,
          locked: false,
          disable: function(lock) {
            if (!disabledInitially && !$.mobile.zoom.locked) {
              meta.attr("content", disabledZoom);
              $.mobile.zoom.enabled = false;
              $.mobile.zoom.locked = lock || false;
            }
          },
          enable: function(unlock) {
            if (!disabledInitially && (!$.mobile.zoom.locked || unlock === true)) {
              meta.attr("content", enabledZoom);
              $.mobile.zoom.enabled = true;
              $.mobile.zoom.locked = false;
            }
          },
          restore: function() {
            if (!disabledInitially) {
              meta.attr("content", initialContent);
              $.mobile.zoom.enabled = true;
            }
          }
        });
      }(jQuery));
      (function($, undefined) {
        $.widget("mobile.textinput", {
          initSelector: "input[type='text']," + "input[type='search']," + ":jqmData(type='search')," + "input[type='number']," + ":jqmData(type='number')," + "input[type='password']," + "input[type='email']," + "input[type='url']," + "input[type='tel']," + "textarea," + "input[type='time']," + "input[type='date']," + "input[type='month']," + "input[type='week']," + "input[type='datetime']," + "input[type='datetime-local']," + "input[type='color']," + "input:not([type])," + "input[type='file']",
          options: {
            theme: null,
            corners: true,
            mini: false,
            preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
            wrapperClass: "",
            enhanced: false
          },
          _create: function() {
            var options = this.options,
                isSearch = this.element.is("[type='search'], :jqmData(type='search')"),
                isTextarea = this.element[0].tagName === "TEXTAREA",
                isRange = this.element.is("[data-" + ($.mobile.ns || "") + "type='range']"),
                inputNeedsWrap = ((this.element.is("input") || this.element.is("[data-" + ($.mobile.ns || "") + "type='search']")) && !isRange);
            if (this.element.prop("disabled")) {
              options.disabled = true;
            }
            $.extend(this, {
              classes: this._classesFromOptions(),
              isSearch: isSearch,
              isTextarea: isTextarea,
              isRange: isRange,
              inputNeedsWrap: inputNeedsWrap
            });
            this._autoCorrect();
            if (!options.enhanced) {
              this._enhance();
            }
            this._on({
              "focus": "_handleFocus",
              "blur": "_handleBlur"
            });
          },
          refresh: function() {
            this.setOptions({"disabled": this.element.is(":disabled")});
          },
          _enhance: function() {
            var elementClasses = [];
            if (this.isTextarea) {
              elementClasses.push("ui-input-text");
            }
            if (this.isTextarea || this.isRange) {
              elementClasses.push("ui-shadow-inset");
            }
            if (this.inputNeedsWrap) {
              this.element.wrap(this._wrap());
            } else {
              elementClasses = elementClasses.concat(this.classes);
            }
            this.element.addClass(elementClasses.join(" "));
          },
          widget: function() {
            return (this.inputNeedsWrap) ? this.element.parent() : this.element;
          },
          _classesFromOptions: function() {
            var options = this.options,
                classes = [];
            classes.push("ui-body-" + ((options.theme === null) ? "inherit" : options.theme));
            if (options.corners) {
              classes.push("ui-corner-all");
            }
            if (options.mini) {
              classes.push("ui-mini");
            }
            if (options.disabled) {
              classes.push("ui-state-disabled");
            }
            if (options.wrapperClass) {
              classes.push(options.wrapperClass);
            }
            return classes;
          },
          _wrap: function() {
            return $("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " " + "ui-shadow-inset'></div>");
          },
          _autoCorrect: function() {
            if (typeof this.element[0].autocorrect !== "undefined" && !$.support.touchOverflow) {
              this.element[0].setAttribute("autocorrect", "off");
              this.element[0].setAttribute("autocomplete", "off");
            }
          },
          _handleBlur: function() {
            this.widget().removeClass($.mobile.focusClass);
            if (this.options.preventFocusZoom) {
              $.mobile.zoom.enable(true);
            }
          },
          _handleFocus: function() {
            if (this.options.preventFocusZoom) {
              $.mobile.zoom.disable(true);
            }
            this.widget().addClass($.mobile.focusClass);
          },
          _setOptions: function(options) {
            var outer = this.widget();
            this._super(options);
            if (!(options.disabled === undefined && options.mini === undefined && options.corners === undefined && options.theme === undefined && options.wrapperClass === undefined)) {
              outer.removeClass(this.classes.join(" "));
              this.classes = this._classesFromOptions();
              outer.addClass(this.classes.join(" "));
            }
            if (options.disabled !== undefined) {
              this.element.prop("disabled", !!options.disabled);
            }
          },
          _destroy: function() {
            if (this.options.enhanced) {
              return;
            }
            if (this.inputNeedsWrap) {
              this.element.unwrap();
            }
            this.element.removeClass("ui-input-text " + this.classes.join(" "));
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.slider", $.extend({
          initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
          widgetEventPrefix: "slide",
          options: {
            theme: null,
            trackTheme: null,
            corners: true,
            mini: false,
            highlight: false
          },
          _create: function() {
            var self = this,
                control = this.element,
                trackTheme = this.options.trackTheme || $.mobile.getAttribute(control[0], "theme"),
                trackThemeClass = trackTheme ? " ui-bar-" + trackTheme : " ui-bar-inherit",
                cornerClass = (this.options.corners || control.jqmData("corners")) ? " ui-corner-all" : "",
                miniClass = (this.options.mini || control.jqmData("mini")) ? " ui-mini" : "",
                cType = control[0].nodeName.toLowerCase(),
                isToggleSwitch = (cType === "select"),
                isRangeslider = control.parent().is(":jqmData(role='rangeslider')"),
                selectClass = (isToggleSwitch) ? "ui-slider-switch" : "",
                controlID = control.attr("id"),
                $label = $("[for='" + controlID + "']"),
                labelID = $label.attr("id") || controlID + "-label",
                min = !isToggleSwitch ? parseFloat(control.attr("min")) : 0,
                max = !isToggleSwitch ? parseFloat(control.attr("max")) : control.find("option").length - 1,
                step = window.parseFloat(control.attr("step") || 1),
                domHandle = document.createElement("a"),
                handle = $(domHandle),
                domSlider = document.createElement("div"),
                slider = $(domSlider),
                valuebg = this.options.highlight && !isToggleSwitch ? (function() {
                  var bg = document.createElement("div");
                  bg.className = "ui-slider-bg " + $.mobile.activeBtnClass;
                  return $(bg).prependTo(slider);
                })() : false,
                options,
                wrapper,
                j,
                length,
                i,
                optionsCount,
                origTabIndex,
                side,
                activeClass,
                sliderImg;
            $label.attr("id", labelID);
            this.isToggleSwitch = isToggleSwitch;
            domHandle.setAttribute("href", "#");
            domSlider.setAttribute("role", "application");
            domSlider.className = [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", selectClass, trackThemeClass, cornerClass, miniClass].join("");
            domHandle.className = "ui-slider-handle";
            domSlider.appendChild(domHandle);
            handle.attr({
              "role": "slider",
              "aria-valuemin": min,
              "aria-valuemax": max,
              "aria-valuenow": this._value(),
              "aria-valuetext": this._value(),
              "title": this._value(),
              "aria-labelledby": labelID
            });
            $.extend(this, {
              slider: slider,
              handle: handle,
              control: control,
              type: cType,
              step: step,
              max: max,
              min: min,
              valuebg: valuebg,
              isRangeslider: isRangeslider,
              dragging: false,
              beforeStart: null,
              userModified: false,
              mouseMoved: false
            });
            if (isToggleSwitch) {
              origTabIndex = control.attr("tabindex");
              if (origTabIndex) {
                handle.attr("tabindex", origTabIndex);
              }
              control.attr("tabindex", "-1").focus(function() {
                $(this).blur();
                handle.focus();
              });
              wrapper = document.createElement("div");
              wrapper.className = "ui-slider-inneroffset";
              for (j = 0, length = domSlider.childNodes.length; j < length; j++) {
                wrapper.appendChild(domSlider.childNodes[j]);
              }
              domSlider.appendChild(wrapper);
              handle.addClass("ui-slider-handle-snapping");
              options = control.find("option");
              for (i = 0, optionsCount = options.length; i < optionsCount; i++) {
                side = !i ? "b" : "a";
                activeClass = !i ? "" : " " + $.mobile.activeBtnClass;
                sliderImg = document.createElement("span");
                sliderImg.className = ["ui-slider-label ui-slider-label-", side, activeClass].join("");
                sliderImg.setAttribute("role", "img");
                sliderImg.appendChild(document.createTextNode(options[i].innerHTML));
                $(sliderImg).prependTo(slider);
              }
              self._labels = $(".ui-slider-label", slider);
            }
            control.addClass(isToggleSwitch ? "ui-slider-switch" : "ui-slider-input");
            this._on(control, {
              "change": "_controlChange",
              "keyup": "_controlKeyup",
              "blur": "_controlBlur",
              "vmouseup": "_controlVMouseUp"
            });
            slider.bind("vmousedown", $.proxy(this._sliderVMouseDown, this)).bind("vclick", false);
            this._on(document, {"vmousemove": "_preventDocumentDrag"});
            this._on(slider.add(document), {"vmouseup": "_sliderVMouseUp"});
            slider.insertAfter(control);
            if (!isToggleSwitch && !isRangeslider) {
              wrapper = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>";
              control.add(slider).wrapAll(wrapper);
            }
            this._on(this.handle, {
              "vmousedown": "_handleVMouseDown",
              "keydown": "_handleKeydown",
              "keyup": "_handleKeyup"
            });
            this.handle.bind("vclick", false);
            this._handleFormReset();
            this.refresh(undefined, undefined, true);
          },
          _setOptions: function(options) {
            if (options.theme !== undefined) {
              this._setTheme(options.theme);
            }
            if (options.trackTheme !== undefined) {
              this._setTrackTheme(options.trackTheme);
            }
            if (options.corners !== undefined) {
              this._setCorners(options.corners);
            }
            if (options.mini !== undefined) {
              this._setMini(options.mini);
            }
            if (options.highlight !== undefined) {
              this._setHighlight(options.highlight);
            }
            if (options.disabled !== undefined) {
              this._setDisabled(options.disabled);
            }
            this._super(options);
          },
          _controlChange: function(event) {
            if (this._trigger("controlchange", event) === false) {
              return false;
            }
            if (!this.mouseMoved) {
              this.refresh(this._value(), true);
            }
          },
          _controlKeyup: function() {
            this.refresh(this._value(), true, true);
          },
          _controlBlur: function() {
            this.refresh(this._value(), true);
          },
          _controlVMouseUp: function() {
            this._checkedRefresh();
          },
          _handleVMouseDown: function() {
            this.handle.focus();
          },
          _handleKeydown: function(event) {
            var index = this._value();
            if (this.options.disabled) {
              return;
            }
            switch (event.keyCode) {
              case $.mobile.keyCode.HOME:
              case $.mobile.keyCode.END:
              case $.mobile.keyCode.PAGE_UP:
              case $.mobile.keyCode.PAGE_DOWN:
              case $.mobile.keyCode.UP:
              case $.mobile.keyCode.RIGHT:
              case $.mobile.keyCode.DOWN:
              case $.mobile.keyCode.LEFT:
                event.preventDefault();
                if (!this._keySliding) {
                  this._keySliding = true;
                  this.handle.addClass("ui-state-active");
                }
                break;
            }
            switch (event.keyCode) {
              case $.mobile.keyCode.HOME:
                this.refresh(this.min);
                break;
              case $.mobile.keyCode.END:
                this.refresh(this.max);
                break;
              case $.mobile.keyCode.PAGE_UP:
              case $.mobile.keyCode.UP:
              case $.mobile.keyCode.RIGHT:
                this.refresh(index + this.step);
                break;
              case $.mobile.keyCode.PAGE_DOWN:
              case $.mobile.keyCode.DOWN:
              case $.mobile.keyCode.LEFT:
                this.refresh(index - this.step);
                break;
            }
          },
          _handleKeyup: function() {
            if (this._keySliding) {
              this._keySliding = false;
              this.handle.removeClass("ui-state-active");
            }
          },
          _sliderVMouseDown: function(event) {
            if (this.options.disabled || !(event.which === 1 || event.which === 0 || event.which === undefined)) {
              return false;
            }
            if (this._trigger("beforestart", event) === false) {
              return false;
            }
            this.dragging = true;
            this.userModified = false;
            this.mouseMoved = false;
            if (this.isToggleSwitch) {
              this.beforeStart = this.element[0].selectedIndex;
            }
            this.refresh(event);
            this._trigger("start");
            return false;
          },
          _sliderVMouseUp: function() {
            if (this.dragging) {
              this.dragging = false;
              if (this.isToggleSwitch) {
                this.handle.addClass("ui-slider-handle-snapping");
                if (this.mouseMoved) {
                  if (this.userModified) {
                    this.refresh(this.beforeStart === 0 ? 1 : 0);
                  } else {
                    this.refresh(this.beforeStart);
                  }
                } else {
                  this.refresh(this.beforeStart === 0 ? 1 : 0);
                }
              }
              this.mouseMoved = false;
              this._trigger("stop");
              return false;
            }
          },
          _preventDocumentDrag: function(event) {
            if (this._trigger("drag", event) === false) {
              return false;
            }
            if (this.dragging && !this.options.disabled) {
              this.mouseMoved = true;
              if (this.isToggleSwitch) {
                this.handle.removeClass("ui-slider-handle-snapping");
              }
              this.refresh(event);
              this.userModified = this.beforeStart !== this.element[0].selectedIndex;
              return false;
            }
          },
          _checkedRefresh: function() {
            if (this.value !== this._value()) {
              this.refresh(this._value());
            }
          },
          _value: function() {
            return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val());
          },
          _reset: function() {
            this.refresh(undefined, false, true);
          },
          refresh: function(val, isfromControl, preventInputUpdate) {
            var self = this,
                parentTheme = $.mobile.getAttribute(this.element[0], "theme"),
                theme = this.options.theme || parentTheme,
                themeClass = theme ? " ui-btn-" + theme : "",
                trackTheme = this.options.trackTheme || parentTheme,
                trackThemeClass = trackTheme ? " ui-bar-" + trackTheme : " ui-bar-inherit",
                cornerClass = this.options.corners ? " ui-corner-all" : "",
                miniClass = this.options.mini ? " ui-mini" : "",
                left,
                width,
                data,
                tol,
                pxStep,
                percent,
                control,
                isInput,
                optionElements,
                min,
                max,
                step,
                newval,
                valModStep,
                alignValue,
                percentPerStep,
                handlePercent,
                aPercent,
                bPercent,
                valueChanged;
            self.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", trackThemeClass, cornerClass, miniClass].join("");
            if (this.options.disabled || this.element.prop("disabled")) {
              this.disable();
            }
            this.value = this._value();
            if (this.options.highlight && !this.isToggleSwitch && this.slider.find(".ui-slider-bg").length === 0) {
              this.valuebg = (function() {
                var bg = document.createElement("div");
                bg.className = "ui-slider-bg " + $.mobile.activeBtnClass;
                return $(bg).prependTo(self.slider);
              })();
            }
            this.handle.addClass("ui-btn" + themeClass + " ui-shadow");
            control = this.element;
            isInput = !this.isToggleSwitch;
            optionElements = isInput ? [] : control.find("option");
            min = isInput ? parseFloat(control.attr("min")) : 0;
            max = isInput ? parseFloat(control.attr("max")) : optionElements.length - 1;
            step = (isInput && parseFloat(control.attr("step")) > 0) ? parseFloat(control.attr("step")) : 1;
            if (typeof val === "object") {
              data = val;
              tol = 8;
              left = this.slider.offset().left;
              width = this.slider.width();
              pxStep = width / ((max - min) / step);
              if (!this.dragging || data.pageX < left - tol || data.pageX > left + width + tol) {
                return;
              }
              if (pxStep > 1) {
                percent = ((data.pageX - left) / width) * 100;
              } else {
                percent = Math.round(((data.pageX - left) / width) * 100);
              }
            } else {
              if (val == null) {
                val = isInput ? parseFloat(control.val() || 0) : control[0].selectedIndex;
              }
              percent = (parseFloat(val) - min) / (max - min) * 100;
            }
            if (isNaN(percent)) {
              return;
            }
            newval = (percent / 100) * (max - min) + min;
            valModStep = (newval - min) % step;
            alignValue = newval - valModStep;
            if (Math.abs(valModStep) * 2 >= step) {
              alignValue += (valModStep > 0) ? step : (-step);
            }
            percentPerStep = 100 / ((max - min) / step);
            newval = parseFloat(alignValue.toFixed(5));
            if (typeof pxStep === "undefined") {
              pxStep = width / ((max - min) / step);
            }
            if (pxStep > 1 && isInput) {
              percent = (newval - min) * percentPerStep * (1 / step);
            }
            if (percent < 0) {
              percent = 0;
            }
            if (percent > 100) {
              percent = 100;
            }
            if (newval < min) {
              newval = min;
            }
            if (newval > max) {
              newval = max;
            }
            this.handle.css("left", percent + "%");
            this.handle[0].setAttribute("aria-valuenow", isInput ? newval : optionElements.eq(newval).attr("value"));
            this.handle[0].setAttribute("aria-valuetext", isInput ? newval : optionElements.eq(newval).getEncodedText());
            this.handle[0].setAttribute("title", isInput ? newval : optionElements.eq(newval).getEncodedText());
            if (this.valuebg) {
              this.valuebg.css("width", percent + "%");
            }
            if (this._labels) {
              handlePercent = this.handle.width() / this.slider.width() * 100;
              aPercent = percent && handlePercent + (100 - handlePercent) * percent / 100;
              bPercent = percent === 100 ? 0 : Math.min(handlePercent + 100 - aPercent, 100);
              this._labels.each(function() {
                var ab = $(this).hasClass("ui-slider-label-a");
                $(this).width((ab ? aPercent : bPercent) + "%");
              });
            }
            if (!preventInputUpdate) {
              valueChanged = false;
              if (isInput) {
                valueChanged = control.val() !== newval;
                control.val(newval);
              } else {
                valueChanged = control[0].selectedIndex !== newval;
                control[0].selectedIndex = newval;
              }
              if (this._trigger("beforechange", val) === false) {
                return false;
              }
              if (!isfromControl && valueChanged) {
                control.trigger("change");
              }
            }
          },
          _setHighlight: function(value) {
            value = !!value;
            if (value) {
              this.options.highlight = !!value;
              this.refresh();
            } else if (this.valuebg) {
              this.valuebg.remove();
              this.valuebg = false;
            }
          },
          _setTheme: function(value) {
            this.handle.removeClass("ui-btn-" + this.options.theme).addClass("ui-btn-" + value);
            var currentTheme = this.options.theme ? this.options.theme : "inherit",
                newTheme = value ? value : "inherit";
            this.control.removeClass("ui-body-" + currentTheme).addClass("ui-body-" + newTheme);
          },
          _setTrackTheme: function(value) {
            var currentTrackTheme = this.options.trackTheme ? this.options.trackTheme : "inherit",
                newTrackTheme = value ? value : "inherit";
            this.slider.removeClass("ui-body-" + currentTrackTheme).addClass("ui-body-" + newTrackTheme);
          },
          _setMini: function(value) {
            value = !!value;
            if (!this.isToggleSwitch && !this.isRangeslider) {
              this.slider.parent().toggleClass("ui-mini", value);
              this.element.toggleClass("ui-mini", value);
            }
            this.slider.toggleClass("ui-mini", value);
          },
          _setCorners: function(value) {
            this.slider.toggleClass("ui-corner-all", value);
            if (!this.isToggleSwitch) {
              this.control.toggleClass("ui-corner-all", value);
            }
          },
          _setDisabled: function(value) {
            value = !!value;
            this.element.prop("disabled", value);
            this.slider.toggleClass("ui-state-disabled", value).attr("aria-disabled", value);
          }
        }, $.mobile.behaviors.formReset));
      })(jQuery);
      (function($, undefined) {
        var popup;
        function getPopup() {
          if (!popup) {
            popup = $("<div></div>", {"class": "ui-slider-popup ui-shadow ui-corner-all"});
          }
          return popup.clone();
        }
        $.widget("mobile.slider", $.mobile.slider, {
          options: {
            popupEnabled: false,
            showValue: false
          },
          _create: function() {
            this._super();
            $.extend(this, {
              _currentValue: null,
              _popup: null,
              _popupVisible: false
            });
            this._setOption("popupEnabled", this.options.popupEnabled);
            this._on(this.handle, {"vmousedown": "_showPopup"});
            this._on(this.slider.add(this.document), {"vmouseup": "_hidePopup"});
            this._refresh();
          },
          _positionPopup: function() {
            var dstOffset = this.handle.offset();
            this._popup.offset({
              left: dstOffset.left + (this.handle.width() - this._popup.width()) / 2,
              top: dstOffset.top - this._popup.outerHeight() - 5
            });
          },
          _setOption: function(key, value) {
            this._super(key, value);
            if (key === "showValue") {
              this.handle.html(value && !this.options.mini ? this._value() : "");
            } else if (key === "popupEnabled") {
              if (value && !this._popup) {
                this._popup = getPopup().addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element);
              }
            }
          },
          refresh: function() {
            this._super.apply(this, arguments);
            this._refresh();
          },
          _refresh: function() {
            var o = this.options,
                newValue;
            if (o.popupEnabled) {
              this.handle.removeAttr("title");
            }
            newValue = this._value();
            if (newValue === this._currentValue) {
              return;
            }
            this._currentValue = newValue;
            if (o.popupEnabled && this._popup) {
              this._positionPopup();
              this._popup.html(newValue);
            } else if (o.showValue && !this.options.mini) {
              this.handle.html(newValue);
            }
          },
          _showPopup: function() {
            if (this.options.popupEnabled && !this._popupVisible) {
              this.handle.html("");
              this._popup.show();
              this._positionPopup();
              this._popupVisible = true;
            }
          },
          _hidePopup: function() {
            var o = this.options;
            if (o.popupEnabled && this._popupVisible) {
              if (o.showValue && !o.mini) {
                this.handle.html(this._value());
              }
              this._popup.hide();
              this._popupVisible = false;
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.flipswitch", $.extend({
          options: {
            onText: "On",
            offText: "Off",
            theme: null,
            enhanced: false,
            wrapperClass: null,
            corners: true,
            mini: false
          },
          _create: function() {
            if (!this.options.enhanced) {
              this._enhance();
            } else {
              $.extend(this, {
                flipswitch: this.element.parent(),
                on: this.element.find(".ui-flipswitch-on").eq(0),
                off: this.element.find(".ui-flipswitch-off").eq(0),
                type: this.element.get(0).tagName
              });
            }
            this._handleFormReset();
            this._originalTabIndex = this.element.attr("tabindex");
            if (this._originalTabIndex != null) {
              this.on.attr("tabindex", this._originalTabIndex);
            }
            this.element.attr("tabindex", "-1");
            this._on({"focus": "_handleInputFocus"});
            if (this.element.is(":disabled")) {
              this._setOptions({"disabled": true});
            }
            this._on(this.flipswitch, {
              "click": "_toggle",
              "swipeleft": "_left",
              "swiperight": "_right"
            });
            this._on(this.on, {"keydown": "_keydown"});
            this._on({"change": "refresh"});
          },
          _handleInputFocus: function() {
            this.on.focus();
          },
          widget: function() {
            return this.flipswitch;
          },
          _left: function() {
            this.flipswitch.removeClass("ui-flipswitch-active");
            if (this.type === "SELECT") {
              this.element.get(0).selectedIndex = 0;
            } else {
              this.element.prop("checked", false);
            }
            this.element.trigger("change");
          },
          _right: function() {
            this.flipswitch.addClass("ui-flipswitch-active");
            if (this.type === "SELECT") {
              this.element.get(0).selectedIndex = 1;
            } else {
              this.element.prop("checked", true);
            }
            this.element.trigger("change");
          },
          _enhance: function() {
            var flipswitch = $("<div>"),
                options = this.options,
                element = this.element,
                theme = options.theme ? options.theme : "inherit",
                on = $("<a></a>", {"href": "#"}),
                off = $("<span></span>"),
                type = element.get(0).tagName,
                onText = (type === "INPUT") ? options.onText : element.find("option").eq(1).text(),
                offText = (type === "INPUT") ? options.offText : element.find("option").eq(0).text();
            on.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(onText);
            off.addClass("ui-flipswitch-off").text(offText);
            flipswitch.addClass("ui-flipswitch ui-shadow-inset " + "ui-bar-" + theme + " " + (options.wrapperClass ? options.wrapperClass : "") + " " + ((element.is(":checked") || element.find("option").eq(1).is(":selected")) ? "ui-flipswitch-active" : "") + (element.is(":disabled") ? " ui-state-disabled" : "") + (options.corners ? " ui-corner-all" : "") + (options.mini ? " ui-mini" : "")).append(on, off);
            element.addClass("ui-flipswitch-input").after(flipswitch).appendTo(flipswitch);
            $.extend(this, {
              flipswitch: flipswitch,
              on: on,
              off: off,
              type: type
            });
          },
          _reset: function() {
            this.refresh();
          },
          refresh: function() {
            var direction,
                existingDirection = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left";
            if (this.type === "SELECT") {
              direction = (this.element.get(0).selectedIndex > 0) ? "_right" : "_left";
            } else {
              direction = this.element.prop("checked") ? "_right" : "_left";
            }
            if (direction !== existingDirection) {
              this[direction]();
            }
          },
          _toggle: function() {
            var direction = this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right";
            this[direction]();
          },
          _keydown: function(e) {
            if (e.which === $.mobile.keyCode.LEFT) {
              this._left();
            } else if (e.which === $.mobile.keyCode.RIGHT) {
              this._right();
            } else if (e.which === $.mobile.keyCode.SPACE) {
              this._toggle();
              e.preventDefault();
            }
          },
          _setOptions: function(options) {
            if (options.theme !== undefined) {
              var currentTheme = options.theme ? options.theme : "inherit",
                  newTheme = options.theme ? options.theme : "inherit";
              this.widget().removeClass("ui-bar-" + currentTheme).addClass("ui-bar-" + newTheme);
            }
            if (options.onText !== undefined) {
              this.on.text(options.onText);
            }
            if (options.offText !== undefined) {
              this.off.text(options.offText);
            }
            if (options.disabled !== undefined) {
              this.widget().toggleClass("ui-state-disabled", options.disabled);
            }
            if (options.mini !== undefined) {
              this.widget().toggleClass("ui-mini", options.mini);
            }
            if (options.corners !== undefined) {
              this.widget().toggleClass("ui-corner-all", options.corners);
            }
            this._super(options);
          },
          _destroy: function() {
            if (this.options.enhanced) {
              return;
            }
            if (this._originalTabIndex != null) {
              this.element.attr("tabindex", this._originalTabIndex);
            } else {
              this.element.removeAttr("tabindex");
            }
            this.on.remove();
            this.off.remove();
            this.element.unwrap();
            this.flipswitch.remove();
            this.removeClass("ui-flipswitch-input");
          }
        }, $.mobile.behaviors.formReset));
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.rangeslider", $.extend({
          options: {
            theme: null,
            trackTheme: null,
            corners: true,
            mini: false,
            highlight: true
          },
          _create: function() {
            var $el = this.element,
                elClass = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
                _inputFirst = $el.find("input").first(),
                _inputLast = $el.find("input").last(),
                _label = $el.find("label").first(),
                _sliderWidgetFirst = $.data(_inputFirst.get(0), "mobile-slider") || $.data(_inputFirst.slider().get(0), "mobile-slider"),
                _sliderWidgetLast = $.data(_inputLast.get(0), "mobile-slider") || $.data(_inputLast.slider().get(0), "mobile-slider"),
                _sliderFirst = _sliderWidgetFirst.slider,
                _sliderLast = _sliderWidgetLast.slider,
                firstHandle = _sliderWidgetFirst.handle,
                _sliders = $("<div class='ui-rangeslider-sliders' />").appendTo($el);
            _inputFirst.addClass("ui-rangeslider-first");
            _inputLast.addClass("ui-rangeslider-last");
            $el.addClass(elClass);
            _sliderFirst.appendTo(_sliders);
            _sliderLast.appendTo(_sliders);
            _label.insertBefore($el);
            firstHandle.prependTo(_sliderLast);
            $.extend(this, {
              _inputFirst: _inputFirst,
              _inputLast: _inputLast,
              _sliderFirst: _sliderFirst,
              _sliderLast: _sliderLast,
              _label: _label,
              _targetVal: null,
              _sliderTarget: false,
              _sliders: _sliders,
              _proxy: false
            });
            this.refresh();
            this._on(this.element.find("input.ui-slider-input"), {
              "slidebeforestart": "_slidebeforestart",
              "slidestop": "_slidestop",
              "slidedrag": "_slidedrag",
              "slidebeforechange": "_change",
              "blur": "_change",
              "keyup": "_change"
            });
            this._on({"mousedown": "_change"});
            this._on(this.element.closest("form"), {"reset": "_handleReset"});
            this._on(firstHandle, {"vmousedown": "_dragFirstHandle"});
          },
          _handleReset: function() {
            var self = this;
            setTimeout(function() {
              self._updateHighlight();
            }, 0);
          },
          _dragFirstHandle: function(event) {
            $.data(this._inputFirst.get(0), "mobile-slider").dragging = true;
            $.data(this._inputFirst.get(0), "mobile-slider").refresh(event);
            return false;
          },
          _slidedrag: function(event) {
            var first = $(event.target).is(this._inputFirst),
                otherSlider = (first) ? this._inputLast : this._inputFirst;
            this._sliderTarget = false;
            if ((this._proxy === "first" && first) || (this._proxy === "last" && !first)) {
              $.data(otherSlider.get(0), "mobile-slider").dragging = true;
              $.data(otherSlider.get(0), "mobile-slider").refresh(event);
              return false;
            }
          },
          _slidestop: function(event) {
            var first = $(event.target).is(this._inputFirst);
            this._proxy = false;
            this.element.find("input").trigger("vmouseup");
            this._sliderFirst.css("z-index", first ? 1 : "");
          },
          _slidebeforestart: function(event) {
            this._sliderTarget = false;
            if ($(event.originalEvent.target).hasClass("ui-slider-track")) {
              this._sliderTarget = true;
              this._targetVal = $(event.target).val();
            }
          },
          _setOptions: function(options) {
            if (options.theme !== undefined) {
              this._setTheme(options.theme);
            }
            if (options.trackTheme !== undefined) {
              this._setTrackTheme(options.trackTheme);
            }
            if (options.mini !== undefined) {
              this._setMini(options.mini);
            }
            if (options.highlight !== undefined) {
              this._setHighlight(options.highlight);
            }
            this._super(options);
            this.refresh();
          },
          refresh: function() {
            var $el = this.element,
                o = this.options;
            if (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) {
              this.options.disabled = true;
            }
            $el.find("input").slider({
              theme: o.theme,
              trackTheme: o.trackTheme,
              disabled: o.disabled,
              corners: o.corners,
              mini: o.mini,
              highlight: o.highlight
            }).slider("refresh");
            this._updateHighlight();
          },
          _change: function(event) {
            if (event.type === "keyup") {
              this._updateHighlight();
              return false;
            }
            var self = this,
                min = parseFloat(this._inputFirst.val(), 10),
                max = parseFloat(this._inputLast.val(), 10),
                first = $(event.target).hasClass("ui-rangeslider-first"),
                thisSlider = first ? this._inputFirst : this._inputLast,
                otherSlider = first ? this._inputLast : this._inputFirst;
            if ((this._inputFirst.val() > this._inputLast.val() && event.type === "mousedown" && !$(event.target).hasClass("ui-slider-handle"))) {
              thisSlider.blur();
            } else if (event.type === "mousedown") {
              return;
            }
            if (min > max && !this._sliderTarget) {
              thisSlider.val(first ? max : min).slider("refresh");
              this._trigger("normalize");
            } else if (min > max) {
              thisSlider.val(this._targetVal).slider("refresh");
              setTimeout(function() {
                otherSlider.val(first ? min : max).slider("refresh");
                $.data(otherSlider.get(0), "mobile-slider").handle.focus();
                self._sliderFirst.css("z-index", first ? "" : 1);
                self._trigger("normalize");
              }, 0);
              this._proxy = (first) ? "first" : "last";
            }
            if (min === max) {
              $.data(thisSlider.get(0), "mobile-slider").handle.css("z-index", 1);
              $.data(otherSlider.get(0), "mobile-slider").handle.css("z-index", 0);
            } else {
              $.data(otherSlider.get(0), "mobile-slider").handle.css("z-index", "");
              $.data(thisSlider.get(0), "mobile-slider").handle.css("z-index", "");
            }
            this._updateHighlight();
            if (min >= max) {
              return false;
            }
          },
          _updateHighlight: function() {
            var min = parseInt($.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10),
                max = parseInt($.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 10),
                width = (max - min);
            this.element.find(".ui-slider-bg").css({
              "margin-left": min + "%",
              "width": width + "%"
            });
          },
          _setTheme: function(value) {
            this._inputFirst.slider("option", "theme", value);
            this._inputLast.slider("option", "theme", value);
          },
          _setTrackTheme: function(value) {
            this._inputFirst.slider("option", "trackTheme", value);
            this._inputLast.slider("option", "trackTheme", value);
          },
          _setMini: function(value) {
            this._inputFirst.slider("option", "mini", value);
            this._inputLast.slider("option", "mini", value);
            this.element.toggleClass("ui-mini", !!value);
          },
          _setHighlight: function(value) {
            this._inputFirst.slider("option", "highlight", value);
            this._inputLast.slider("option", "highlight", value);
          },
          _destroy: function() {
            this._label.prependTo(this.element);
            this.element.removeClass("ui-rangeslider ui-mini");
            this._inputFirst.after(this._sliderFirst);
            this._inputLast.after(this._sliderLast);
            this._sliders.remove();
            this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy");
          }
        }, $.mobile.behaviors.formReset));
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.textinput", $.mobile.textinput, {
          options: {
            clearBtn: false,
            clearBtnText: "Clear text"
          },
          _create: function() {
            this._super();
            if (!!this.options.clearBtn || this.isSearch) {
              this._addClearBtn();
            }
          },
          clearButton: function() {
            return $("<a href='#' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all" + "' title='" + this.options.clearBtnText + "'>" + this.options.clearBtnText + "</a>");
          },
          _clearBtnClick: function(event) {
            this.element.val("").focus().trigger("change");
            this._clearBtn.addClass("ui-input-clear-hidden");
            event.preventDefault();
          },
          _addClearBtn: function() {
            if (!this.options.enhanced) {
              this._enhanceClear();
            }
            $.extend(this, {_clearBtn: this.widget().find("a.ui-input-clear")});
            this._bindClearEvents();
            this._toggleClear();
          },
          _enhanceClear: function() {
            this.clearButton().appendTo(this.widget());
            this.widget().addClass("ui-input-has-clear");
          },
          _bindClearEvents: function() {
            this._on(this._clearBtn, {"click": "_clearBtnClick"});
            this._on({
              "keyup": "_toggleClear",
              "change": "_toggleClear",
              "input": "_toggleClear",
              "focus": "_toggleClear",
              "blur": "_toggleClear",
              "cut": "_toggleClear",
              "paste": "_toggleClear"
            });
          },
          _unbindClear: function() {
            this._off(this._clearBtn, "click");
            this._off(this.element, "keyup change input focus blur cut paste");
          },
          _setOptions: function(options) {
            this._super(options);
            if (options.clearBtn !== undefined && !this.element.is("textarea, :jqmData(type='range')")) {
              if (options.clearBtn) {
                this._addClearBtn();
              } else {
                this._destroyClear();
              }
            }
            if (options.clearBtnText !== undefined && this._clearBtn !== undefined) {
              this._clearBtn.text(options.clearBtnText).attr("title", options.clearBtnText);
            }
          },
          _toggleClear: function() {
            this._delay("_toggleClearClass", 0);
          },
          _toggleClearClass: function() {
            this._clearBtn.toggleClass("ui-input-clear-hidden", !this.element.val());
          },
          _destroyClear: function() {
            this.widget().removeClass("ui-input-has-clear");
            this._unbindClear();
            this._clearBtn.remove();
          },
          _destroy: function() {
            this._super();
            this._destroyClear();
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.textinput", $.mobile.textinput, {
          options: {
            autogrow: true,
            keyupTimeoutBuffer: 100
          },
          _create: function() {
            this._super();
            if (this.options.autogrow && this.isTextarea) {
              this._autogrow();
            }
          },
          _autogrow: function() {
            this.element.addClass("ui-textinput-autogrow");
            this._on({
              "keyup": "_timeout",
              "change": "_timeout",
              "input": "_timeout",
              "paste": "_timeout"
            });
            this._on(true, this.document, {
              "pageshow": "_handleShow",
              "popupbeforeposition": "_handleShow",
              "updatelayout": "_handleShow",
              "panelopen": "_handleShow"
            });
          },
          _handleShow: function(event) {
            if ($.contains(event.target, this.element[0]) && this.element.is(":visible")) {
              if (event.type !== "popupbeforeposition") {
                this.element.addClass("ui-textinput-autogrow-resize").animationComplete($.proxy(function() {
                  this.element.removeClass("ui-textinput-autogrow-resize");
                }, this), "transition");
              }
              this._timeout();
            }
          },
          _unbindAutogrow: function() {
            this.element.removeClass("ui-textinput-autogrow");
            this._off(this.element, "keyup change input paste");
            this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen");
          },
          keyupTimeout: null,
          _prepareHeightUpdate: function(delay) {
            if (this.keyupTimeout) {
              clearTimeout(this.keyupTimeout);
            }
            if (delay === undefined) {
              this._updateHeight();
            } else {
              this.keyupTimeout = this._delay("_updateHeight", delay);
            }
          },
          _timeout: function() {
            this._prepareHeightUpdate(this.options.keyupTimeoutBuffer);
          },
          _updateHeight: function() {
            var paddingTop,
                paddingBottom,
                paddingHeight,
                scrollHeight,
                clientHeight,
                borderTop,
                borderBottom,
                borderHeight,
                height,
                scrollTop = this.window.scrollTop();
            this.keyupTimeout = 0;
            if (!("onpage" in this.element[0])) {
              this.element.css({
                "height": 0,
                "min-height": 0,
                "max-height": 0
              });
            }
            scrollHeight = this.element[0].scrollHeight;
            clientHeight = this.element[0].clientHeight;
            borderTop = parseFloat(this.element.css("border-top-width"));
            borderBottom = parseFloat(this.element.css("border-bottom-width"));
            borderHeight = borderTop + borderBottom;
            height = scrollHeight + borderHeight + 15;
            if (clientHeight === 0) {
              paddingTop = parseFloat(this.element.css("padding-top"));
              paddingBottom = parseFloat(this.element.css("padding-bottom"));
              paddingHeight = paddingTop + paddingBottom;
              height += paddingHeight;
            }
            this.element.css({
              "height": height,
              "min-height": "",
              "max-height": ""
            });
            this.window.scrollTop(scrollTop);
          },
          refresh: function() {
            if (this.options.autogrow && this.isTextarea) {
              this._updateHeight();
            }
          },
          _setOptions: function(options) {
            this._super(options);
            if (options.autogrow !== undefined && this.isTextarea) {
              if (options.autogrow) {
                this._autogrow();
              } else {
                this._unbindAutogrow();
              }
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.selectmenu", $.extend({
          initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",
          options: {
            theme: null,
            icon: "carat-d",
            iconpos: "right",
            inline: false,
            corners: true,
            shadow: true,
            iconshadow: false,
            overlayTheme: null,
            dividerTheme: null,
            hidePlaceholderMenuItems: true,
            closeText: "Close",
            nativeMenu: true,
            preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
            mini: false
          },
          _button: function() {
            return $("<div/>");
          },
          _setDisabled: function(value) {
            this.element.attr("disabled", value);
            this.button.attr("aria-disabled", value);
            return this._setOption("disabled", value);
          },
          _focusButton: function() {
            var self = this;
            setTimeout(function() {
              self.button.focus();
            }, 40);
          },
          _selectOptions: function() {
            return this.select.find("option");
          },
          _preExtension: function() {
            var inline = this.options.inline || this.element.jqmData("inline"),
                mini = this.options.mini || this.element.jqmData("mini"),
                classes = "";
            if (!!~this.element[0].className.indexOf("ui-btn-left")) {
              classes = " ui-btn-left";
            }
            if (!!~this.element[0].className.indexOf("ui-btn-right")) {
              classes = " ui-btn-right";
            }
            if (inline) {
              classes += " ui-btn-inline";
            }
            if (mini) {
              classes += " ui-mini";
            }
            this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + classes + "'>");
            this.selectId = this.select.attr("id") || ("select-" + this.uuid);
            this.buttonId = this.selectId + "-button";
            this.label = $("label[for='" + this.selectId + "']");
            this.isMultiple = this.select[0].multiple;
          },
          _destroy: function() {
            var wrapper = this.element.parents(".ui-select");
            if (wrapper.length > 0) {
              if (wrapper.is(".ui-btn-left, .ui-btn-right")) {
                this.element.addClass(wrapper.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right");
              }
              this.element.insertAfter(wrapper);
              wrapper.remove();
            }
          },
          _create: function() {
            this._preExtension();
            this.button = this._button();
            var self = this,
                options = this.options,
                iconpos = options.icon ? (options.iconpos || this.select.jqmData("iconpos")) : false,
                button = this.button.insertBefore(this.select).attr("id", this.buttonId).addClass("ui-btn" + (options.icon ? (" ui-icon-" + options.icon + " ui-btn-icon-" + iconpos + (options.iconshadow ? " ui-shadow-icon" : "")) : "") + (options.theme ? " ui-btn-" + options.theme : "") + (options.corners ? " ui-corner-all" : "") + (options.shadow ? " ui-shadow" : ""));
            this.setButtonText();
            if (options.nativeMenu && window.opera && window.opera.version) {
              button.addClass("ui-select-nativeonly");
            }
            if (this.isMultiple) {
              this.buttonCount = $("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(button.addClass("ui-li-has-count"));
            }
            if (options.disabled || this.element.attr("disabled")) {
              this.disable();
            }
            this.select.change(function() {
              self.refresh();
              if (!!options.nativeMenu) {
                this.blur();
              }
            });
            this._handleFormReset();
            this._on(this.button, {keydown: "_handleKeydown"});
            this.build();
          },
          build: function() {
            var self = this;
            this.select.appendTo(self.button).bind("vmousedown", function() {
              self.button.addClass($.mobile.activeBtnClass);
            }).bind("focus", function() {
              self.button.addClass($.mobile.focusClass);
            }).bind("blur", function() {
              self.button.removeClass($.mobile.focusClass);
            }).bind("focus vmouseover", function() {
              self.button.trigger("vmouseover");
            }).bind("vmousemove", function() {
              self.button.removeClass($.mobile.activeBtnClass);
            }).bind("change blur vmouseout", function() {
              self.button.trigger("vmouseout").removeClass($.mobile.activeBtnClass);
            });
            self.button.bind("vmousedown", function() {
              if (self.options.preventFocusZoom) {
                $.mobile.zoom.disable(true);
              }
            });
            self.label.bind("click focus", function() {
              if (self.options.preventFocusZoom) {
                $.mobile.zoom.disable(true);
              }
            });
            self.select.bind("focus", function() {
              if (self.options.preventFocusZoom) {
                $.mobile.zoom.disable(true);
              }
            });
            self.button.bind("mouseup", function() {
              if (self.options.preventFocusZoom) {
                setTimeout(function() {
                  $.mobile.zoom.enable(true);
                }, 0);
              }
            });
            self.select.bind("blur", function() {
              if (self.options.preventFocusZoom) {
                $.mobile.zoom.enable(true);
              }
            });
          },
          selected: function() {
            return this._selectOptions().filter(":selected");
          },
          selectedIndices: function() {
            var self = this;
            return this.selected().map(function() {
              return self._selectOptions().index(this);
            }).get();
          },
          setButtonText: function() {
            var self = this,
                selected = this.selected(),
                text = this.placeholder,
                span = $(document.createElement("span"));
            this.button.children("span").not(".ui-li-count").remove().end().end().prepend((function() {
              if (selected.length) {
                text = selected.map(function() {
                  return $(this).text();
                }).get().join(", ");
              } else {
                text = self.placeholder;
              }
              if (text) {
                span.text(text);
              } else {
                span.html("&#160;");
              }
              return span.addClass(self.select.attr("class")).addClass(selected.attr("class")).removeClass("ui-screen-hidden");
            })());
          },
          setButtonCount: function() {
            var selected = this.selected();
            if (this.isMultiple) {
              this.buttonCount[selected.length > 1 ? "show" : "hide"]().text(selected.length);
            }
          },
          _handleKeydown: function() {
            this._delay("_refreshButton");
          },
          _reset: function() {
            this.refresh();
          },
          _refreshButton: function() {
            this.setButtonText();
            this.setButtonCount();
          },
          refresh: function() {
            this._refreshButton();
          },
          open: $.noop,
          close: $.noop,
          disable: function() {
            this._setDisabled(true);
            this.button.addClass("ui-state-disabled");
          },
          enable: function() {
            this._setDisabled(false);
            this.button.removeClass("ui-state-disabled");
          }
        }, $.mobile.behaviors.formReset));
      })(jQuery);
      (function($, undefined) {
        $.mobile.links = function(target) {
          $(target).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function() {
            var element = this,
                idref = element.getAttribute("href").substring(1);
            if (idref) {
              element.setAttribute("aria-haspopup", true);
              element.setAttribute("aria-owns", idref);
              element.setAttribute("aria-expanded", false);
            }
          }).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link");
        };
      })(jQuery);
      (function($, undefined) {
        function fitSegmentInsideSegment(windowSize, segmentSize, offset, desired) {
          var returnValue = desired;
          if (windowSize < segmentSize) {
            returnValue = offset + (windowSize - segmentSize) / 2;
          } else {
            returnValue = Math.min(Math.max(offset, desired - segmentSize / 2), offset + windowSize - segmentSize);
          }
          return returnValue;
        }
        function getWindowCoordinates(theWindow) {
          return {
            x: theWindow.scrollLeft(),
            y: theWindow.scrollTop(),
            cx: (theWindow[0].innerWidth || theWindow.width()),
            cy: (theWindow[0].innerHeight || theWindow.height())
          };
        }
        $.widget("mobile.popup", {
          options: {
            wrapperClass: null,
            theme: null,
            overlayTheme: null,
            shadow: true,
            corners: true,
            transition: "none",
            positionTo: "origin",
            tolerance: null,
            closeLinkSelector: "a:jqmData(rel='back')",
            closeLinkEvents: "click.popup",
            navigateEvents: "navigate.popup",
            closeEvents: "navigate.popup pagebeforechange.popup",
            dismissible: true,
            enhanced: false,
            history: !$.mobile.browser.oldIE
          },
          _create: function() {
            var theElement = this.element,
                myId = theElement.attr("id"),
                currentOptions = this.options;
            currentOptions.history = currentOptions.history && $.mobile.ajaxEnabled && $.mobile.hashListeningEnabled;
            $.extend(this, {
              _scrollTop: 0,
              _page: theElement.closest(".ui-page"),
              _ui: null,
              _fallbackTransition: "",
              _currentTransition: false,
              _prerequisites: null,
              _isOpen: false,
              _tolerance: null,
              _resizeData: null,
              _ignoreResizeTo: 0,
              _orientationchangeInProgress: false
            });
            if (this._page.length === 0) {
              this._page = $("body");
            }
            if (currentOptions.enhanced) {
              this._ui = {
                container: theElement.parent(),
                screen: theElement.parent().prev(),
                placeholder: $(this.document[0].getElementById(myId + "-placeholder"))
              };
            } else {
              this._ui = this._enhance(theElement, myId);
              this._applyTransition(currentOptions.transition);
            }
            this._setTolerance(currentOptions.tolerance)._ui.focusElement = this._ui.container;
            this._on(this._ui.screen, {"vclick": "_eatEventAndClose"});
            this._on(this.window, {
              orientationchange: $.proxy(this, "_handleWindowOrientationchange"),
              resize: $.proxy(this, "_handleWindowResize"),
              keyup: $.proxy(this, "_handleWindowKeyUp")
            });
            this._on(this.document, {"focusin": "_handleDocumentFocusIn"});
          },
          _enhance: function(theElement, myId) {
            var currentOptions = this.options,
                wrapperClass = currentOptions.wrapperClass,
                ui = {
                  screen: $("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", currentOptions.overlayTheme) + "'></div>"),
                  placeholder: $("<div style='display: none;'><!-- placeholder --></div>"),
                  container: $("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + (wrapperClass ? (" " + wrapperClass) : "") + "'></div>")
                },
                fragment = this.document[0].createDocumentFragment();
            fragment.appendChild(ui.screen[0]);
            fragment.appendChild(ui.container[0]);
            if (myId) {
              ui.screen.attr("id", myId + "-screen");
              ui.container.attr("id", myId + "-popup");
              ui.placeholder.attr("id", myId + "-placeholder").html("<!-- placeholder for " + myId + " -->");
            }
            this._page[0].appendChild(fragment);
            ui.placeholder.insertAfter(theElement);
            theElement.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", currentOptions.theme) + " " + (currentOptions.shadow ? "ui-overlay-shadow " : "") + (currentOptions.corners ? "ui-corner-all " : "")).appendTo(ui.container);
            return ui;
          },
          _eatEventAndClose: function(theEvent) {
            theEvent.preventDefault();
            theEvent.stopImmediatePropagation();
            if (this.options.dismissible) {
              this.close();
            }
            return false;
          },
          _resizeScreen: function() {
            var screen = this._ui.screen,
                popupHeight = this._ui.container.outerHeight(true),
                screenHeight = screen.removeAttr("style").height(),
                documentHeight = this.document.height() - 1;
            if (screenHeight < documentHeight) {
              screen.height(documentHeight);
            } else if (popupHeight > screenHeight) {
              screen.height(popupHeight);
            }
          },
          _handleWindowKeyUp: function(theEvent) {
            if (this._isOpen && theEvent.keyCode === $.mobile.keyCode.ESCAPE) {
              return this._eatEventAndClose(theEvent);
            }
          },
          _expectResizeEvent: function() {
            var windowCoordinates = getWindowCoordinates(this.window);
            if (this._resizeData) {
              if (windowCoordinates.x === this._resizeData.windowCoordinates.x && windowCoordinates.y === this._resizeData.windowCoordinates.y && windowCoordinates.cx === this._resizeData.windowCoordinates.cx && windowCoordinates.cy === this._resizeData.windowCoordinates.cy) {
                return false;
              } else {
                clearTimeout(this._resizeData.timeoutId);
              }
            }
            this._resizeData = {
              timeoutId: this._delay("_resizeTimeout", 200),
              windowCoordinates: windowCoordinates
            };
            return true;
          },
          _resizeTimeout: function() {
            if (this._isOpen) {
              if (!this._expectResizeEvent()) {
                if (this._ui.container.hasClass("ui-popup-hidden")) {
                  this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate");
                  this.reposition({positionTo: "window"});
                  this._ignoreResizeEvents();
                }
                this._resizeScreen();
                this._resizeData = null;
                this._orientationchangeInProgress = false;
              }
            } else {
              this._resizeData = null;
              this._orientationchangeInProgress = false;
            }
          },
          _stopIgnoringResizeEvents: function() {
            this._ignoreResizeTo = 0;
          },
          _ignoreResizeEvents: function() {
            if (this._ignoreResizeTo) {
              clearTimeout(this._ignoreResizeTo);
            }
            this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1000);
          },
          _handleWindowResize: function() {
            if (this._isOpen && this._ignoreResizeTo === 0) {
              if ((this._expectResizeEvent() || this._orientationchangeInProgress) && !this._ui.container.hasClass("ui-popup-hidden")) {
                this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style");
              }
            }
          },
          _handleWindowOrientationchange: function() {
            if (!this._orientationchangeInProgress && this._isOpen && this._ignoreResizeTo === 0) {
              this._expectResizeEvent();
              this._orientationchangeInProgress = true;
            }
          },
          _handleDocumentFocusIn: function(theEvent) {
            var target,
                targetElement = theEvent.target,
                ui = this._ui;
            if (!this._isOpen) {
              return;
            }
            if (targetElement !== ui.container[0]) {
              target = $(targetElement);
              if (0 === target.parents().filter(ui.container[0]).length) {
                $(this.document[0].activeElement).one("focus", function() {
                  target.blur();
                });
                ui.focusElement.focus();
                theEvent.preventDefault();
                theEvent.stopImmediatePropagation();
                return false;
              } else if (ui.focusElement[0] === ui.container[0]) {
                ui.focusElement = target;
              }
            }
            this._ignoreResizeEvents();
          },
          _themeClassFromOption: function(prefix, value) {
            return (value ? (value === "none" ? "" : (prefix + value)) : (prefix + "inherit"));
          },
          _applyTransition: function(value) {
            if (value) {
              this._ui.container.removeClass(this._fallbackTransition);
              if (value !== "none") {
                this._fallbackTransition = $.mobile._maybeDegradeTransition(value);
                if (this._fallbackTransition === "none") {
                  this._fallbackTransition = "";
                }
                this._ui.container.addClass(this._fallbackTransition);
              }
            }
            return this;
          },
          _setOptions: function(newOptions) {
            var currentOptions = this.options,
                theElement = this.element,
                screen = this._ui.screen;
            if (newOptions.wrapperClass !== undefined) {
              this._ui.container.removeClass(currentOptions.wrapperClass).addClass(newOptions.wrapperClass);
            }
            if (newOptions.theme !== undefined) {
              theElement.removeClass(this._themeClassFromOption("ui-body-", currentOptions.theme)).addClass(this._themeClassFromOption("ui-body-", newOptions.theme));
            }
            if (newOptions.overlayTheme !== undefined) {
              screen.removeClass(this._themeClassFromOption("ui-overlay-", currentOptions.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", newOptions.overlayTheme));
              if (this._isOpen) {
                screen.addClass("in");
              }
            }
            if (newOptions.shadow !== undefined) {
              theElement.toggleClass("ui-overlay-shadow", newOptions.shadow);
            }
            if (newOptions.corners !== undefined) {
              theElement.toggleClass("ui-corner-all", newOptions.corners);
            }
            if (newOptions.transition !== undefined) {
              if (!this._currentTransition) {
                this._applyTransition(newOptions.transition);
              }
            }
            if (newOptions.tolerance !== undefined) {
              this._setTolerance(newOptions.tolerance);
            }
            if (newOptions.disabled !== undefined) {
              if (newOptions.disabled) {
                this.close();
              }
            }
            return this._super(newOptions);
          },
          _setTolerance: function(value) {
            var tol = {
              t: 30,
              r: 15,
              b: 30,
              l: 15
            },
                ar;
            if (value !== undefined) {
              ar = String(value).split(",");
              $.each(ar, function(idx, val) {
                ar[idx] = parseInt(val, 10);
              });
              switch (ar.length) {
                case 1:
                  if (!isNaN(ar[0])) {
                    tol.t = tol.r = tol.b = tol.l = ar[0];
                  }
                  break;
                case 2:
                  if (!isNaN(ar[0])) {
                    tol.t = tol.b = ar[0];
                  }
                  if (!isNaN(ar[1])) {
                    tol.l = tol.r = ar[1];
                  }
                  break;
                case 4:
                  if (!isNaN(ar[0])) {
                    tol.t = ar[0];
                  }
                  if (!isNaN(ar[1])) {
                    tol.r = ar[1];
                  }
                  if (!isNaN(ar[2])) {
                    tol.b = ar[2];
                  }
                  if (!isNaN(ar[3])) {
                    tol.l = ar[3];
                  }
                  break;
                default:
                  break;
              }
            }
            this._tolerance = tol;
            return this;
          },
          _clampPopupWidth: function(infoOnly) {
            var menuSize,
                windowCoordinates = getWindowCoordinates(this.window),
                rectangle = {
                  x: this._tolerance.l,
                  y: windowCoordinates.y + this._tolerance.t,
                  cx: windowCoordinates.cx - this._tolerance.l - this._tolerance.r,
                  cy: windowCoordinates.cy - this._tolerance.t - this._tolerance.b
                };
            if (!infoOnly) {
              this._ui.container.css("max-width", rectangle.cx);
            }
            menuSize = {
              cx: this._ui.container.outerWidth(true),
              cy: this._ui.container.outerHeight(true)
            };
            return {
              rc: rectangle,
              menuSize: menuSize
            };
          },
          _calculateFinalLocation: function(desired, clampInfo) {
            var returnValue,
                rectangle = clampInfo.rc,
                menuSize = clampInfo.menuSize;
            returnValue = {
              left: fitSegmentInsideSegment(rectangle.cx, menuSize.cx, rectangle.x, desired.x),
              top: fitSegmentInsideSegment(rectangle.cy, menuSize.cy, rectangle.y, desired.y)
            };
            returnValue.top = Math.max(0, returnValue.top);
            returnValue.top -= Math.min(returnValue.top, Math.max(0, returnValue.top + menuSize.cy - this.document.height()));
            return returnValue;
          },
          _placementCoords: function(desired) {
            return this._calculateFinalLocation(desired, this._clampPopupWidth());
          },
          _createPrerequisites: function(screenPrerequisite, containerPrerequisite, whenDone) {
            var prerequisites,
                self = this;
            prerequisites = {
              screen: $.Deferred(),
              container: $.Deferred()
            };
            prerequisites.screen.then(function() {
              if (prerequisites === self._prerequisites) {
                screenPrerequisite();
              }
            });
            prerequisites.container.then(function() {
              if (prerequisites === self._prerequisites) {
                containerPrerequisite();
              }
            });
            $.when(prerequisites.screen, prerequisites.container).done(function() {
              if (prerequisites === self._prerequisites) {
                self._prerequisites = null;
                whenDone();
              }
            });
            self._prerequisites = prerequisites;
          },
          _animate: function(args) {
            this._ui.screen.removeClass(args.classToRemove).addClass(args.screenClassToAdd);
            args.prerequisites.screen.resolve();
            if (args.transition && args.transition !== "none") {
              if (args.applyTransition) {
                this._applyTransition(args.transition);
              }
              if (this._fallbackTransition) {
                this._ui.container.addClass(args.containerClassToAdd).removeClass(args.classToRemove).animationComplete($.proxy(args.prerequisites.container, "resolve"));
                return;
              }
            }
            this._ui.container.removeClass(args.classToRemove);
            args.prerequisites.container.resolve();
          },
          _desiredCoords: function(openOptions) {
            var offset,
                dst = null,
                windowCoordinates = getWindowCoordinates(this.window),
                x = openOptions.x,
                y = openOptions.y,
                pTo = openOptions.positionTo;
            if (pTo && pTo !== "origin") {
              if (pTo === "window") {
                x = windowCoordinates.cx / 2 + windowCoordinates.x;
                y = windowCoordinates.cy / 2 + windowCoordinates.y;
              } else {
                try {
                  dst = $(pTo);
                } catch (err) {
                  dst = null;
                }
                if (dst) {
                  dst.filter(":visible");
                  if (dst.length === 0) {
                    dst = null;
                  }
                }
              }
            }
            if (dst) {
              offset = dst.offset();
              x = offset.left + dst.outerWidth() / 2;
              y = offset.top + dst.outerHeight() / 2;
            }
            if ($.type(x) !== "number" || isNaN(x)) {
              x = windowCoordinates.cx / 2 + windowCoordinates.x;
            }
            if ($.type(y) !== "number" || isNaN(y)) {
              y = windowCoordinates.cy / 2 + windowCoordinates.y;
            }
            return {
              x: x,
              y: y
            };
          },
          _reposition: function(openOptions) {
            openOptions = {
              x: openOptions.x,
              y: openOptions.y,
              positionTo: openOptions.positionTo
            };
            this._trigger("beforeposition", undefined, openOptions);
            this._ui.container.offset(this._placementCoords(this._desiredCoords(openOptions)));
          },
          reposition: function(openOptions) {
            if (this._isOpen) {
              this._reposition(openOptions);
            }
          },
          _openPrerequisitesComplete: function() {
            var id = this.element.attr("id");
            this._ui.container.addClass("ui-popup-active");
            this._isOpen = true;
            this._resizeScreen();
            this._ui.container.attr("tabindex", "0").focus();
            this._ignoreResizeEvents();
            if (id) {
              this.document.find("[aria-haspopup='true'][aria-owns='" + id + "']").attr("aria-expanded", true);
            }
            this._trigger("afteropen");
          },
          _open: function(options) {
            var openOptions = $.extend({}, this.options, options),
                androidBlacklist = (function() {
                  var ua = navigator.userAgent,
                      wkmatch = ua.match(/AppleWebKit\/([0-9\.]+)/),
                      wkversion = !!wkmatch && wkmatch[1],
                      androidmatch = ua.match(/Android (\d+(?:\.\d+))/),
                      andversion = !!androidmatch && androidmatch[1],
                      chromematch = ua.indexOf("Chrome") > -1;
                  if (androidmatch !== null && andversion === "4.0" && wkversion && wkversion > 534.13 && !chromematch) {
                    return true;
                  }
                  return false;
                }());
            this._createPrerequisites($.noop, $.noop, $.proxy(this, "_openPrerequisitesComplete"));
            this._currentTransition = openOptions.transition;
            this._applyTransition(openOptions.transition);
            this._ui.screen.removeClass("ui-screen-hidden");
            this._ui.container.removeClass("ui-popup-truncate");
            this._reposition(openOptions);
            this._ui.container.removeClass("ui-popup-hidden");
            if (this.options.overlayTheme && androidBlacklist) {
              this.element.closest(".ui-page").addClass("ui-popup-open");
            }
            this._animate({
              additionalCondition: true,
              transition: openOptions.transition,
              classToRemove: "",
              screenClassToAdd: "in",
              containerClassToAdd: "in",
              applyTransition: false,
              prerequisites: this._prerequisites
            });
          },
          _closePrerequisiteScreen: function() {
            this._ui.screen.removeClass("out").addClass("ui-screen-hidden");
          },
          _closePrerequisiteContainer: function() {
            this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style");
          },
          _closePrerequisitesDone: function() {
            var container = this._ui.container,
                id = this.element.attr("id");
            container.removeAttr("tabindex");
            $.mobile.popup.active = undefined;
            $(":focus", container[0]).add(container[0]).blur();
            if (id) {
              this.document.find("[aria-haspopup='true'][aria-owns='" + id + "']").attr("aria-expanded", false);
            }
            this._trigger("afterclose");
          },
          _close: function(immediate) {
            this._ui.container.removeClass("ui-popup-active");
            this._page.removeClass("ui-popup-open");
            this._isOpen = false;
            this._createPrerequisites($.proxy(this, "_closePrerequisiteScreen"), $.proxy(this, "_closePrerequisiteContainer"), $.proxy(this, "_closePrerequisitesDone"));
            this._animate({
              additionalCondition: this._ui.screen.hasClass("in"),
              transition: (immediate ? "none" : (this._currentTransition)),
              classToRemove: "in",
              screenClassToAdd: "out",
              containerClassToAdd: "reverse out",
              applyTransition: true,
              prerequisites: this._prerequisites
            });
          },
          _unenhance: function() {
            if (this.options.enhanced) {
              return;
            }
            this._setOptions({theme: $.mobile.popup.prototype.options.theme});
            this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit");
            this._ui.screen.remove();
            this._ui.container.remove();
            this._ui.placeholder.remove();
          },
          _destroy: function() {
            if ($.mobile.popup.active === this) {
              this.element.one("popupafterclose", $.proxy(this, "_unenhance"));
              this.close();
            } else {
              this._unenhance();
            }
            return this;
          },
          _closePopup: function(theEvent, data) {
            var parsedDst,
                toUrl,
                currentOptions = this.options,
                immediate = false;
            if ((theEvent && theEvent.isDefaultPrevented()) || $.mobile.popup.active !== this) {
              return;
            }
            window.scrollTo(0, this._scrollTop);
            if (theEvent && theEvent.type === "pagebeforechange" && data) {
              if (typeof data.toPage === "string") {
                parsedDst = data.toPage;
              } else {
                parsedDst = data.toPage.jqmData("url");
              }
              parsedDst = $.mobile.path.parseUrl(parsedDst);
              toUrl = parsedDst.pathname + parsedDst.search + parsedDst.hash;
              if (this._myUrl !== $.mobile.path.makeUrlAbsolute(toUrl)) {
                immediate = true;
              } else {
                theEvent.preventDefault();
              }
            }
            this.window.off(currentOptions.closeEvents);
            this.element.undelegate(currentOptions.closeLinkSelector, currentOptions.closeLinkEvents);
            this._close(immediate);
          },
          _bindContainerClose: function() {
            this.window.on(this.options.closeEvents, $.proxy(this, "_closePopup"));
          },
          widget: function() {
            return this._ui.container;
          },
          open: function(options) {
            var url,
                hashkey,
                activePage,
                currentIsDialog,
                hasHash,
                urlHistory,
                self = this,
                currentOptions = this.options;
            if ($.mobile.popup.active || currentOptions.disabled) {
              return this;
            }
            $.mobile.popup.active = this;
            this._scrollTop = this.window.scrollTop();
            if (!(currentOptions.history)) {
              self._open(options);
              self._bindContainerClose();
              self.element.delegate(currentOptions.closeLinkSelector, currentOptions.closeLinkEvents, function(theEvent) {
                self.close();
                theEvent.preventDefault();
              });
              return this;
            }
            urlHistory = $.mobile.navigate.history;
            hashkey = $.mobile.dialogHashKey;
            activePage = $.mobile.activePage;
            currentIsDialog = (activePage ? activePage.hasClass("ui-dialog") : false);
            this._myUrl = url = urlHistory.getActive().url;
            hasHash = (url.indexOf(hashkey) > -1) && !currentIsDialog && (urlHistory.activeIndex > 0);
            if (hasHash) {
              self._open(options);
              self._bindContainerClose();
              return this;
            }
            if (url.indexOf(hashkey) === -1 && !currentIsDialog) {
              url = url + (url.indexOf("#") > -1 ? hashkey : "#" + hashkey);
            } else {
              url = $.mobile.path.parseLocation().hash + hashkey;
            }
            if (urlHistory.activeIndex === 0 && url === urlHistory.initialDst) {
              url += hashkey;
            }
            this.window.one("beforenavigate", function(theEvent) {
              theEvent.preventDefault();
              self._open(options);
              self._bindContainerClose();
            });
            this.urlAltered = true;
            $.mobile.navigate(url, {role: "dialog"});
            return this;
          },
          close: function() {
            if ($.mobile.popup.active !== this) {
              return this;
            }
            this._scrollTop = this.window.scrollTop();
            if (this.options.history && this.urlAltered) {
              $.mobile.back();
              this.urlAltered = false;
            } else {
              this._closePopup();
            }
            return this;
          }
        });
        $.mobile.popup.handleLink = function($link) {
          var offset,
              path = $.mobile.path,
              popup = $(path.hashToSelector(path.parseUrl($link.attr("href")).hash)).first();
          if (popup.length > 0 && popup.data("mobile-popup")) {
            offset = $link.offset();
            popup.popup("open", {
              x: offset.left + $link.outerWidth() / 2,
              y: offset.top + $link.outerHeight() / 2,
              transition: $link.jqmData("transition"),
              positionTo: $link.jqmData("position-to")
            });
          }
          setTimeout(function() {
            $link.removeClass($.mobile.activeBtnClass);
          }, 300);
        };
        $.mobile.document.on("pagebeforechange", function(theEvent, data) {
          if (data.options.role === "popup") {
            $.mobile.popup.handleLink(data.options.link);
            theEvent.preventDefault();
          }
        });
      })(jQuery);
      (function($, undefined) {
        var unfocusableItemSelector = ".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",
            goToAdjacentItem = function(item, target, direction) {
              var adjacent = item[direction + "All"]().not(unfocusableItemSelector).first();
              if (adjacent.length) {
                target.blur().attr("tabindex", "-1");
                adjacent.find("a").first().focus();
              }
            };
        $.widget("mobile.selectmenu", $.mobile.selectmenu, {
          _create: function() {
            var o = this.options;
            o.nativeMenu = o.nativeMenu || (this.element.parents(":jqmData(role='popup'),:mobile-popup").length > 0);
            return this._super();
          },
          _handleSelectFocus: function() {
            this.element.blur();
            this.button.focus();
          },
          _handleKeydown: function(event) {
            this._super(event);
            this._handleButtonVclickKeydown(event);
          },
          _handleButtonVclickKeydown: function(event) {
            if (this.options.disabled || this.isOpen) {
              return;
            }
            if (event.type === "vclick" || event.keyCode && (event.keyCode === $.mobile.keyCode.ENTER || event.keyCode === $.mobile.keyCode.SPACE)) {
              this._decideFormat();
              if (this.menuType === "overlay") {
                this.button.attr("href", "#" + this.popupId).attr("data-" + ($.mobile.ns || "") + "rel", "popup");
              } else {
                this.button.attr("href", "#" + this.dialogId).attr("data-" + ($.mobile.ns || "") + "rel", "dialog");
              }
              this.isOpen = true;
            }
          },
          _handleListFocus: function(e) {
            var params = (e.type === "focusin") ? {
              tabindex: "0",
              event: "vmouseover"
            } : {
              tabindex: "-1",
              event: "vmouseout"
            };
            $(e.target).attr("tabindex", params.tabindex).trigger(params.event);
          },
          _handleListKeydown: function(event) {
            var target = $(event.target),
                li = target.closest("li");
            switch (event.keyCode) {
              case 38:
                goToAdjacentItem(li, target, "prev");
                return false;
              case 40:
                goToAdjacentItem(li, target, "next");
                return false;
              case 13:
              case 32:
                target.trigger("click");
                return false;
            }
          },
          _handleMenuPageHide: function() {
            this.thisPage.page("bindRemove");
          },
          _handleHeaderCloseClick: function() {
            if (this.menuType === "overlay") {
              this.close();
              return false;
            }
          },
          build: function() {
            var selectId,
                popupId,
                dialogId,
                label,
                thisPage,
                isMultiple,
                menuId,
                themeAttr,
                overlayTheme,
                overlayThemeAttr,
                dividerThemeAttr,
                menuPage,
                listbox,
                list,
                header,
                headerTitle,
                menuPageContent,
                menuPageClose,
                headerClose,
                self,
                o = this.options;
            if (o.nativeMenu) {
              return this._super();
            }
            self = this;
            selectId = this.selectId;
            popupId = selectId + "-listbox";
            dialogId = selectId + "-dialog";
            label = this.label;
            thisPage = this.element.closest(".ui-page");
            isMultiple = this.element[0].multiple;
            menuId = selectId + "-menu";
            themeAttr = o.theme ? (" data-" + $.mobile.ns + "theme='" + o.theme + "'") : "";
            overlayTheme = o.overlayTheme || o.theme || null;
            overlayThemeAttr = overlayTheme ? (" data-" + $.mobile.ns + "overlay-theme='" + overlayTheme + "'") : "";
            dividerThemeAttr = (o.dividerTheme && isMultiple) ? (" data-" + $.mobile.ns + "divider-theme='" + o.dividerTheme + "'") : "";
            menuPage = $("<div data-" + $.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + dialogId + "'" + themeAttr + overlayThemeAttr + ">" + "<div data-" + $.mobile.ns + "role='header'>" + "<div class='ui-title'>" + label.getEncodedText() + "</div>" + "</div>" + "<div data-" + $.mobile.ns + "role='content'></div>" + "</div>");
            listbox = $("<div id='" + popupId + "' class='ui-selectmenu'></div>").insertAfter(this.select).popup({theme: o.overlayTheme});
            list = $("<ul class='ui-selectmenu-list' id='" + menuId + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + themeAttr + dividerThemeAttr + "></ul>").appendTo(listbox);
            header = $("<div class='ui-header ui-bar-" + (o.theme ? o.theme : "inherit") + "'></div>").prependTo(listbox);
            headerTitle = $("<h1 class='ui-title'></h1>").appendTo(header);
            if (this.isMultiple) {
              headerClose = $("<a>", {
                "role": "button",
                "text": o.closeText,
                "href": "#",
                "class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
              }).appendTo(header);
            }
            $.extend(this, {
              selectId: selectId,
              menuId: menuId,
              popupId: popupId,
              dialogId: dialogId,
              thisPage: thisPage,
              menuPage: menuPage,
              label: label,
              isMultiple: isMultiple,
              theme: o.theme,
              listbox: listbox,
              list: list,
              header: header,
              headerTitle: headerTitle,
              headerClose: headerClose,
              menuPageContent: menuPageContent,
              menuPageClose: menuPageClose,
              placeholder: ""
            });
            this.refresh();
            if (this._origTabIndex === undefined) {
              this._origTabIndex = (this.select[0].getAttribute("tabindex") === null) ? false : this.select.attr("tabindex");
            }
            this.select.attr("tabindex", "-1");
            this._on(this.select, {focus: "_handleSelectFocus"});
            this._on(this.button, {vclick: "_handleButtonVclickKeydown"});
            this.list.attr("role", "listbox");
            this._on(this.list, {
              focusin: "_handleListFocus",
              focusout: "_handleListFocus",
              keydown: "_handleListKeydown"
            });
            this.list.delegate("li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)", "click", function(event) {
              var oldIndex = self.select[0].selectedIndex,
                  newIndex = $.mobile.getAttribute(this, "option-index"),
                  option = self._selectOptions().eq(newIndex)[0];
              option.selected = self.isMultiple ? !option.selected : true;
              if (self.isMultiple) {
                $(this).find("a").toggleClass("ui-checkbox-on", option.selected).toggleClass("ui-checkbox-off", !option.selected);
              }
              if (self.isMultiple || oldIndex !== newIndex) {
                self.select.trigger("change");
              }
              if (self.isMultiple) {
                self.list.find("li:not(.ui-li-divider)").eq(newIndex).find("a").first().focus();
              } else {
                self.close();
              }
              event.preventDefault();
            });
            this._on(this.menuPage, {pagehide: "_handleMenuPageHide"});
            this._on(this.listbox, {popupafterclose: "close"});
            if (this.isMultiple) {
              this._on(this.headerClose, {click: "_handleHeaderCloseClick"});
            }
            return this;
          },
          _isRebuildRequired: function() {
            var list = this.list.find("li"),
                options = this._selectOptions().not(".ui-screen-hidden");
            return options.text() !== list.text();
          },
          selected: function() {
            return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )");
          },
          refresh: function(force) {
            var self,
                indices;
            if (this.options.nativeMenu) {
              return this._super(force);
            }
            self = this;
            if (force || this._isRebuildRequired()) {
              self._buildList();
            }
            indices = this.selectedIndices();
            self.setButtonText();
            self.setButtonCount();
            self.list.find("li:not(.ui-li-divider)").find("a").removeClass($.mobile.activeBtnClass).end().attr("aria-selected", false).each(function(i) {
              if ($.inArray(i, indices) > -1) {
                var item = $(this);
                item.attr("aria-selected", true);
                if (self.isMultiple) {
                  item.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on");
                } else {
                  if (item.hasClass("ui-screen-hidden")) {
                    item.next().find("a").addClass($.mobile.activeBtnClass);
                  } else {
                    item.find("a").addClass($.mobile.activeBtnClass);
                  }
                }
              }
            });
          },
          close: function() {
            if (this.options.disabled || !this.isOpen) {
              return;
            }
            var self = this;
            if (self.menuType === "page") {
              self.menuPage.dialog("close");
              self.list.appendTo(self.listbox);
            } else {
              self.listbox.popup("close");
            }
            self._focusButton();
            self.isOpen = false;
          },
          open: function() {
            this.button.click();
          },
          _focusMenuItem: function() {
            var selector = this.list.find("a." + $.mobile.activeBtnClass);
            if (selector.length === 0) {
              selector = this.list.find("li:not(" + unfocusableItemSelector + ") a.ui-btn");
            }
            selector.first().focus();
          },
          _decideFormat: function() {
            var self = this,
                $window = this.window,
                selfListParent = self.list.parent(),
                menuHeight = selfListParent.outerHeight(),
                scrollTop = $window.scrollTop(),
                btnOffset = self.button.offset().top,
                screenHeight = $window.height();
            if (menuHeight > screenHeight - 80 || !$.support.scrollTop) {
              self.menuPage.appendTo($.mobile.pageContainer).page();
              self.menuPageContent = self.menuPage.find(".ui-content");
              self.menuPageClose = self.menuPage.find(".ui-header a");
              self.thisPage.unbind("pagehide.remove");
              if (scrollTop === 0 && btnOffset > screenHeight) {
                self.thisPage.one("pagehide", function() {
                  $(this).jqmData("lastScroll", btnOffset);
                });
              }
              self.menuPage.one({
                pageshow: $.proxy(this, "_focusMenuItem"),
                pagehide: $.proxy(this, "close")
              });
              self.menuType = "page";
              self.menuPageContent.append(self.list);
              self.menuPage.find("div .ui-title").text(self.label.text());
            } else {
              self.menuType = "overlay";
              self.listbox.one({popupafteropen: $.proxy(this, "_focusMenuItem")});
            }
          },
          _buildList: function() {
            var self = this,
                o = this.options,
                placeholder = this.placeholder,
                needPlaceholder = true,
                dataIcon = "false",
                $options,
                numOptions,
                select,
                dataPrefix = "data-" + $.mobile.ns,
                dataIndexAttr = dataPrefix + "option-index",
                dataIconAttr = dataPrefix + "icon",
                dataRoleAttr = dataPrefix + "role",
                dataPlaceholderAttr = dataPrefix + "placeholder",
                fragment = document.createDocumentFragment(),
                isPlaceholderItem = false,
                optGroup,
                i,
                option,
                $option,
                parent,
                text,
                anchor,
                classes,
                optLabel,
                divider,
                item;
            self.list.empty().filter(".ui-listview").listview("destroy");
            $options = this._selectOptions();
            numOptions = $options.length;
            select = this.select[0];
            for (i = 0; i < numOptions; i++, isPlaceholderItem = false) {
              option = $options[i];
              $option = $(option);
              if ($option.hasClass("ui-screen-hidden")) {
                continue;
              }
              parent = option.parentNode;
              text = $option.text();
              anchor = document.createElement("a");
              classes = [];
              anchor.setAttribute("href", "#");
              anchor.appendChild(document.createTextNode(text));
              if (parent !== select && parent.nodeName.toLowerCase() === "optgroup") {
                optLabel = parent.getAttribute("label");
                if (optLabel !== optGroup) {
                  divider = document.createElement("li");
                  divider.setAttribute(dataRoleAttr, "list-divider");
                  divider.setAttribute("role", "option");
                  divider.setAttribute("tabindex", "-1");
                  divider.appendChild(document.createTextNode(optLabel));
                  fragment.appendChild(divider);
                  optGroup = optLabel;
                }
              }
              if (needPlaceholder && (!option.getAttribute("value") || text.length === 0 || $option.jqmData("placeholder"))) {
                needPlaceholder = false;
                isPlaceholderItem = true;
                if (null === option.getAttribute(dataPlaceholderAttr)) {
                  this._removePlaceholderAttr = true;
                }
                option.setAttribute(dataPlaceholderAttr, true);
                if (o.hidePlaceholderMenuItems) {
                  classes.push("ui-screen-hidden");
                }
                if (placeholder !== text) {
                  placeholder = self.placeholder = text;
                }
              }
              item = document.createElement("li");
              if (option.disabled) {
                classes.push("ui-state-disabled");
                item.setAttribute("aria-disabled", true);
              }
              item.setAttribute(dataIndexAttr, i);
              item.setAttribute(dataIconAttr, dataIcon);
              if (isPlaceholderItem) {
                item.setAttribute(dataPlaceholderAttr, true);
              }
              item.className = classes.join(" ");
              item.setAttribute("role", "option");
              anchor.setAttribute("tabindex", "-1");
              if (this.isMultiple) {
                $(anchor).addClass("ui-btn ui-checkbox-off ui-btn-icon-right");
              }
              item.appendChild(anchor);
              fragment.appendChild(item);
            }
            self.list[0].appendChild(fragment);
            if (!this.isMultiple && !placeholder.length) {
              this.header.addClass("ui-screen-hidden");
            } else {
              this.headerTitle.text(this.placeholder);
            }
            self.list.listview();
          },
          _button: function() {
            return this.options.nativeMenu ? this._super() : $("<a>", {
              "href": "#",
              "role": "button",
              "id": this.buttonId,
              "aria-haspopup": "true",
              "aria-owns": this.menuId
            });
          },
          _destroy: function() {
            if (!this.options.nativeMenu) {
              this.close();
              if (this._origTabIndex !== undefined) {
                if (this._origTabIndex !== false) {
                  this.select.attr("tabindex", this._origTabIndex);
                } else {
                  this.select.removeAttr("tabindex");
                }
              }
              if (this._removePlaceholderAttr) {
                this._selectOptions().removeAttr("data-" + $.mobile.ns + "placeholder");
              }
              this.listbox.remove();
              this.menuPage.remove();
            }
            this._super();
          }
        });
      })(jQuery);
      (function($, undefined) {
        var reverseBoolOptionMap = {
          "ui-shadow": "shadow",
          "ui-corner-all": "corners",
          "ui-btn-inline": "inline",
          "ui-shadow-icon": "iconshadow",
          "ui-mini": "mini"
        },
            getAttrFixed = function() {
              var ret = $.mobile.getAttribute.apply(this, arguments);
              return (ret == null ? undefined : ret);
            },
            capitalLettersRE = /[A-Z]/g;
        function optionsToClasses(options, existingClasses) {
          var classes = existingClasses ? existingClasses : [];
          classes.push("ui-btn");
          if (options.theme) {
            classes.push("ui-btn-" + options.theme);
          }
          if (options.icon) {
            classes = classes.concat(["ui-icon-" + options.icon, "ui-btn-icon-" + options.iconpos]);
            if (options.iconshadow) {
              classes.push("ui-shadow-icon");
            }
          }
          if (options.inline) {
            classes.push("ui-btn-inline");
          }
          if (options.shadow) {
            classes.push("ui-shadow");
          }
          if (options.corners) {
            classes.push("ui-corner-all");
          }
          if (options.mini) {
            classes.push("ui-mini");
          }
          return classes;
        }
        function classNameToOptions(classes) {
          var idx,
              map,
              unknownClass,
              alreadyEnhanced = false,
              noIcon = true,
              o = {
                icon: "",
                inline: false,
                shadow: false,
                corners: false,
                iconshadow: false,
                mini: false
              },
              unknownClasses = [];
          classes = classes.split(" ");
          for (idx = 0; idx < classes.length; idx++) {
            unknownClass = true;
            map = reverseBoolOptionMap[classes[idx]];
            if (map !== undefined) {
              unknownClass = false;
              o[map] = true;
            } else if (classes[idx].indexOf("ui-btn-icon-") === 0) {
              unknownClass = false;
              noIcon = false;
              o.iconpos = classes[idx].substring(12);
            } else if (classes[idx].indexOf("ui-icon-") === 0) {
              unknownClass = false;
              o.icon = classes[idx].substring(8);
            } else if (classes[idx].indexOf("ui-btn-") === 0 && classes[idx].length === 8) {
              unknownClass = false;
              o.theme = classes[idx].substring(7);
            } else if (classes[idx] === "ui-btn") {
              unknownClass = false;
              alreadyEnhanced = true;
            }
            if (unknownClass) {
              unknownClasses.push(classes[idx]);
            }
          }
          if (noIcon) {
            o.icon = "";
          }
          return {
            options: o,
            unknownClasses: unknownClasses,
            alreadyEnhanced: alreadyEnhanced
          };
        }
        function camelCase2Hyphenated(c) {
          return "-" + c.toLowerCase();
        }
        $.fn.buttonMarkup = function(options, overwriteClasses) {
          var idx,
              data,
              el,
              retrievedOptions,
              optionKey,
              defaults = $.fn.buttonMarkup.defaults;
          for (idx = 0; idx < this.length; idx++) {
            el = this[idx];
            data = overwriteClasses ? {
              alreadyEnhanced: false,
              unknownClasses: []
            } : classNameToOptions(el.className);
            retrievedOptions = $.extend({}, (data.alreadyEnhanced ? data.options : {}), options);
            if (!data.alreadyEnhanced) {
              for (optionKey in defaults) {
                if (retrievedOptions[optionKey] === undefined) {
                  retrievedOptions[optionKey] = getAttrFixed(el, optionKey.replace(capitalLettersRE, camelCase2Hyphenated));
                }
              }
            }
            el.className = optionsToClasses($.extend({}, defaults, retrievedOptions), data.unknownClasses).join(" ");
            if (el.tagName.toLowerCase() !== "button") {
              el.setAttribute("role", "button");
            }
          }
          return this;
        };
        $.fn.buttonMarkup.defaults = {
          icon: "",
          iconpos: "left",
          theme: null,
          inline: false,
          shadow: true,
          corners: true,
          iconshadow: false,
          mini: false
        };
        $.extend($.fn.buttonMarkup, {initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button"});
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.controlgroup", $.extend({
          options: {
            enhanced: false,
            theme: null,
            shadow: false,
            corners: true,
            excludeInvisible: true,
            type: "vertical",
            mini: false
          },
          _create: function() {
            var elem = this.element,
                opts = this.options;
            if ($.fn.buttonMarkup) {
              this.element.find($.fn.buttonMarkup.initSelector).buttonMarkup();
            }
            $.each(this._childWidgets, $.proxy(function(number, widgetName) {
              if ($.mobile[widgetName]) {
                this.element.find($.mobile[widgetName].initSelector).not($.mobile.page.prototype.keepNativeSelector())[widgetName]();
              }
            }, this));
            $.extend(this, {
              _ui: null,
              _initialRefresh: true
            });
            if (opts.enhanced) {
              this._ui = {
                groupLegend: elem.children(".ui-controlgroup-label").children(),
                childWrapper: elem.children(".ui-controlgroup-controls")
              };
            } else {
              this._ui = this._enhance();
            }
          },
          _childWidgets: ["checkboxradio", "selectmenu", "button"],
          _themeClassFromOption: function(value) {
            return (value ? (value === "none" ? "" : "ui-group-theme-" + value) : "");
          },
          _enhance: function() {
            var elem = this.element,
                opts = this.options,
                ui = {
                  groupLegend: elem.children("legend"),
                  childWrapper: elem.addClass("ui-controlgroup " + "ui-controlgroup-" + (opts.type === "horizontal" ? "horizontal" : "vertical") + " " + this._themeClassFromOption(opts.theme) + " " + (opts.corners ? "ui-corner-all " : "") + (opts.mini ? "ui-mini " : "")).wrapInner("<div " + "class='ui-controlgroup-controls " + (opts.shadow === true ? "ui-shadow" : "") + "'></div>").children()
                };
            if (ui.groupLegend.length > 0) {
              $("<div role='heading' class='ui-controlgroup-label'></div>").append(ui.groupLegend).prependTo(elem);
            }
            return ui;
          },
          _init: function() {
            this.refresh();
          },
          _setOptions: function(options) {
            var callRefresh,
                returnValue,
                elem = this.element;
            if (options.type !== undefined) {
              elem.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + (options.type === "horizontal" ? "horizontal" : "vertical"));
              callRefresh = true;
            }
            if (options.theme !== undefined) {
              elem.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(options.theme));
            }
            if (options.corners !== undefined) {
              elem.toggleClass("ui-corner-all", options.corners);
            }
            if (options.mini !== undefined) {
              elem.toggleClass("ui-mini", options.mini);
            }
            if (options.shadow !== undefined) {
              this._ui.childWrapper.toggleClass("ui-shadow", options.shadow);
            }
            if (options.excludeInvisible !== undefined) {
              this.options.excludeInvisible = options.excludeInvisible;
              callRefresh = true;
            }
            returnValue = this._super(options);
            if (callRefresh) {
              this.refresh();
            }
            return returnValue;
          },
          container: function() {
            return this._ui.childWrapper;
          },
          refresh: function() {
            var $el = this.container(),
                els = $el.find(".ui-btn").not(".ui-slider-handle"),
                create = this._initialRefresh;
            if ($.mobile.checkboxradio) {
              $el.find(":mobile-checkboxradio").checkboxradio("refresh");
            }
            this._addFirstLastClasses(els, this.options.excludeInvisible ? this._getVisibles(els, create) : els, create);
            this._initialRefresh = false;
          },
          _destroy: function() {
            var ui,
                buttons,
                opts = this.options;
            if (opts.enhanced) {
              return this;
            }
            ui = this._ui;
            buttons = this.element.removeClass("ui-controlgroup " + "ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(opts.theme)).find(".ui-btn").not(".ui-slider-handle");
            this._removeFirstLastClasses(buttons);
            ui.groupLegend.unwrap();
            ui.childWrapper.children().unwrap();
          }
        }, $.mobile.behaviors.addFirstLastClasses));
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.toolbar", {
          initSelector: ":jqmData(role='footer'), :jqmData(role='header')",
          options: {
            theme: null,
            addBackBtn: false,
            backBtnTheme: null,
            backBtnText: "Back"
          },
          _create: function() {
            var leftbtn,
                rightbtn,
                role = this.element.is(":jqmData(role='header')") ? "header" : "footer",
                page = this.element.closest(".ui-page");
            if (page.length === 0) {
              page = false;
              this._on(this.document, {"pageshow": "refresh"});
            }
            $.extend(this, {
              role: role,
              page: page,
              leftbtn: leftbtn,
              rightbtn: rightbtn,
              backBtn: null
            });
            this.element.attr("role", role === "header" ? "banner" : "contentinfo").addClass("ui-" + role);
            this.refresh();
            this._setOptions(this.options);
          },
          _setOptions: function(o) {
            if (o.addBackBtn !== undefined) {
              if (this.options.addBackBtn && this.role === "header" && $(".ui-page").length > 1 && this.page[0].getAttribute("data-" + $.mobile.ns + "url") !== $.mobile.path.stripHash(location.hash) && !this.leftbtn) {
                this._addBackButton();
              } else {
                this.element.find(".ui-toolbar-back-btn").remove();
              }
            }
            if (o.backBtnTheme != null) {
              this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-" + o.backBtnTheme);
            }
            if (o.backBtnText !== undefined) {
              this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(o.backBtnText);
            }
            if (o.theme !== undefined) {
              var currentTheme = this.options.theme ? this.options.theme : "inherit",
                  newTheme = o.theme ? o.theme : "inherit";
              this.element.removeClass("ui-bar-" + currentTheme).addClass("ui-bar-" + newTheme);
            }
            this._super(o);
          },
          refresh: function() {
            if (this.role === "header") {
              this._addHeaderButtonClasses();
            }
            if (!this.page) {
              this._setRelative();
              if (this.role === "footer") {
                this.element.appendTo("body");
              }
            }
            this._addHeadingClasses();
            this._btnMarkup();
          },
          _setRelative: function() {
            $("[data-" + $.mobile.ns + "role='page']").css({"position": "relative"});
          },
          _btnMarkup: function() {
            this.element.children("a").filter(":not([data-" + $.mobile.ns + "role='none'])").attr("data-" + $.mobile.ns + "role", "button");
            this.element.trigger("create");
          },
          _addHeaderButtonClasses: function() {
            var $headeranchors = this.element.children("a, button");
            this.leftbtn = $headeranchors.hasClass("ui-btn-left");
            this.rightbtn = $headeranchors.hasClass("ui-btn-right");
            this.leftbtn = this.leftbtn || $headeranchors.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length;
            this.rightbtn = this.rightbtn || $headeranchors.eq(1).addClass("ui-btn-right").length;
          },
          _addBackButton: function() {
            var theme,
                options = this.options;
            if (!this.backBtn) {
              theme = options.backBtnTheme || options.theme;
              this.backBtn = $("<a role='button' href='javascript:void(0);' " + "class='ui-btn ui-corner-all ui-shadow ui-btn-left " + (theme ? "ui-btn-" + theme + " " : "") + "ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' " + "data-" + $.mobile.ns + "rel='back'>" + options.backBtnText + "</a>").prependTo(this.element);
            }
          },
          _addHeadingClasses: function() {
            this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
              "role": "heading",
              "aria-level": "1"
            });
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.toolbar", $.mobile.toolbar, {
          options: {
            position: null,
            visibleOnPageShow: true,
            disablePageZoom: true,
            transition: "slide",
            fullscreen: false,
            tapToggle: true,
            tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
            hideDuringFocus: "input, textarea, select",
            updatePagePadding: true,
            trackPersistentToolbars: true,
            supportBlacklist: function() {
              return !$.support.fixedPosition;
            }
          },
          _create: function() {
            this._super();
            if (this.options.position === "fixed" && !this.options.supportBlacklist()) {
              this._makeFixed();
            }
          },
          _makeFixed: function() {
            this.element.addClass("ui-" + this.role + "-fixed");
            this.updatePagePadding();
            this._addTransitionClass();
            this._bindPageEvents();
            this._bindToggleHandlers();
            this._setOptions(this.options);
          },
          _setOptions: function(o) {
            if (o.position === "fixed" && this.options.position !== "fixed") {
              this._makeFixed();
            }
            if (this.options.position === "fixed" && !this.options.supportBlacklist()) {
              var $page = (!!this.page) ? this.page : ($(".ui-page-active").length > 0) ? $(".ui-page-active") : $(".ui-page").eq(0);
              if (o.fullscreen !== undefined) {
                if (o.fullscreen) {
                  this.element.addClass("ui-" + this.role + "-fullscreen");
                  $page.addClass("ui-page-" + this.role + "-fullscreen");
                } else {
                  this.element.removeClass("ui-" + this.role + "-fullscreen");
                  $page.removeClass("ui-page-" + this.role + "-fullscreen").addClass("ui-page-" + this.role + "-fixed");
                }
              }
            }
            this._super(o);
          },
          _addTransitionClass: function() {
            var tclass = this.options.transition;
            if (tclass && tclass !== "none") {
              if (tclass === "slide") {
                tclass = this.element.hasClass("ui-header") ? "slidedown" : "slideup";
              }
              this.element.addClass(tclass);
            }
          },
          _bindPageEvents: function() {
            var page = (!!this.page) ? this.element.closest(".ui-page") : this.document;
            this._on(page, {
              "pagebeforeshow": "_handlePageBeforeShow",
              "webkitAnimationStart": "_handleAnimationStart",
              "animationstart": "_handleAnimationStart",
              "updatelayout": "_handleAnimationStart",
              "pageshow": "_handlePageShow",
              "pagebeforehide": "_handlePageBeforeHide"
            });
          },
          _handlePageBeforeShow: function() {
            var o = this.options;
            if (o.disablePageZoom) {
              $.mobile.zoom.disable(true);
            }
            if (!o.visibleOnPageShow) {
              this.hide(true);
            }
          },
          _handleAnimationStart: function() {
            if (this.options.updatePagePadding) {
              this.updatePagePadding((!!this.page) ? this.page : ".ui-page-active");
            }
          },
          _handlePageShow: function() {
            this.updatePagePadding((!!this.page) ? this.page : ".ui-page-active");
            if (this.options.updatePagePadding) {
              this._on(this.window, {"throttledresize": "updatePagePadding"});
            }
          },
          _handlePageBeforeHide: function(e, ui) {
            var o = this.options,
                thisFooter,
                thisHeader,
                nextFooter,
                nextHeader;
            if (o.disablePageZoom) {
              $.mobile.zoom.enable(true);
            }
            if (o.updatePagePadding) {
              this._off(this.window, "throttledresize");
            }
            if (o.trackPersistentToolbars) {
              thisFooter = $(".ui-footer-fixed:jqmData(id)", this.page);
              thisHeader = $(".ui-header-fixed:jqmData(id)", this.page);
              nextFooter = thisFooter.length && ui.nextPage && $(".ui-footer-fixed:jqmData(id='" + thisFooter.jqmData("id") + "')", ui.nextPage) || $();
              nextHeader = thisHeader.length && ui.nextPage && $(".ui-header-fixed:jqmData(id='" + thisHeader.jqmData("id") + "')", ui.nextPage) || $();
              if (nextFooter.length || nextHeader.length) {
                nextFooter.add(nextHeader).appendTo($.mobile.pageContainer);
                ui.nextPage.one("pageshow", function() {
                  nextHeader.prependTo(this);
                  nextFooter.appendTo(this);
                });
              }
            }
          },
          _visible: true,
          updatePagePadding: function(tbPage) {
            var $el = this.element,
                header = (this.role === "header"),
                pos = parseFloat($el.css(header ? "top" : "bottom"));
            if (this.options.fullscreen) {
              return;
            }
            tbPage = (tbPage && tbPage.type === undefined && tbPage) || this.page || $el.closest(".ui-page");
            tbPage = (!!this.page) ? this.page : ".ui-page-active";
            $(tbPage).css("padding-" + (header ? "top" : "bottom"), $el.outerHeight() + pos);
          },
          _useTransition: function(notransition) {
            var $win = this.window,
                $el = this.element,
                scroll = $win.scrollTop(),
                elHeight = $el.height(),
                pHeight = (!!this.page) ? $el.closest(".ui-page").height() : $(".ui-page-active").height(),
                viewportHeight = $.mobile.getScreenHeight();
            return !notransition && (this.options.transition && this.options.transition !== "none" && ((this.role === "header" && !this.options.fullscreen && scroll > elHeight) || (this.role === "footer" && !this.options.fullscreen && scroll + viewportHeight < pHeight - elHeight)) || this.options.fullscreen);
          },
          show: function(notransition) {
            var hideClass = "ui-fixed-hidden",
                $el = this.element;
            if (this._useTransition(notransition)) {
              $el.removeClass("out " + hideClass).addClass("in").animationComplete(function() {
                $el.removeClass("in");
              });
            } else {
              $el.removeClass(hideClass);
            }
            this._visible = true;
          },
          hide: function(notransition) {
            var hideClass = "ui-fixed-hidden",
                $el = this.element,
                outclass = "out" + (this.options.transition === "slide" ? " reverse" : "");
            if (this._useTransition(notransition)) {
              $el.addClass(outclass).removeClass("in").animationComplete(function() {
                $el.addClass(hideClass).removeClass(outclass);
              });
            } else {
              $el.addClass(hideClass).removeClass(outclass);
            }
            this._visible = false;
          },
          toggle: function() {
            this[this._visible ? "hide" : "show"]();
          },
          _bindToggleHandlers: function() {
            var self = this,
                o = self.options,
                delayShow,
                delayHide,
                isVisible = true,
                page = (!!this.page) ? this.page : $(".ui-page");
            page.bind("vclick", function(e) {
              if (o.tapToggle && !$(e.target).closest(o.tapToggleBlacklist).length) {
                self.toggle();
              }
            }).bind("focusin focusout", function(e) {
              if (screen.width < 1025 && $(e.target).is(o.hideDuringFocus) && !$(e.target).closest(".ui-header-fixed, .ui-footer-fixed").length) {
                if (e.type === "focusout" && !isVisible) {
                  isVisible = true;
                  clearTimeout(delayHide);
                  delayShow = setTimeout(function() {
                    self.show();
                  }, 0);
                } else if (e.type === "focusin" && !!isVisible) {
                  clearTimeout(delayShow);
                  isVisible = false;
                  delayHide = setTimeout(function() {
                    self.hide();
                  }, 0);
                }
              }
            });
          },
          _setRelative: function() {
            if (this.options.position !== "fixed") {
              $("[data-" + $.mobile.ns + "role='page']").css({"position": "relative"});
            }
          },
          _destroy: function() {
            var $el = this.element,
                header = $el.hasClass("ui-header");
            $el.closest(".ui-page").css("padding-" + (header ? "top" : "bottom"), "");
            $el.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden");
            $el.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen");
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.toolbar", $.mobile.toolbar, {
          _makeFixed: function() {
            this._super();
            this._workarounds();
          },
          _workarounds: function() {
            var ua = navigator.userAgent,
                platform = navigator.platform,
                wkmatch = ua.match(/AppleWebKit\/([0-9]+)/),
                wkversion = !!wkmatch && wkmatch[1],
                os = null,
                self = this;
            if (platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf("iPod") > -1) {
              os = "ios";
            } else if (ua.indexOf("Android") > -1) {
              os = "android";
            } else {
              return;
            }
            if (os === "ios") {
              self._bindScrollWorkaround();
            } else if (os === "android" && wkversion && wkversion < 534) {
              self._bindScrollWorkaround();
              self._bindListThumbWorkaround();
            } else {
              return;
            }
          },
          _viewportOffset: function() {
            var $el = this.element,
                header = $el.hasClass("ui-header"),
                offset = Math.abs($el.offset().top - this.window.scrollTop());
            if (!header) {
              offset = Math.round(offset - this.window.height() + $el.outerHeight()) - 60;
            }
            return offset;
          },
          _bindScrollWorkaround: function() {
            var self = this;
            this._on(this.window, {scrollstop: function() {
                var viewportOffset = self._viewportOffset();
                if (viewportOffset > 2 && self._visible) {
                  self._triggerRedraw();
                }
              }});
          },
          _bindListThumbWorkaround: function() {
            this.element.closest(".ui-page").addClass("ui-android-2x-fixed");
          },
          _triggerRedraw: function() {
            var paddingBottom = parseFloat($(".ui-page-active").css("padding-bottom"));
            $(".ui-page-active").css("padding-bottom", (paddingBottom + 1) + "px");
            setTimeout(function() {
              $(".ui-page-active").css("padding-bottom", paddingBottom + "px");
            }, 0);
          },
          destroy: function() {
            this._super();
            this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix");
          }
        });
      })(jQuery);
      (function($, undefined) {
        var ieHack = ($.mobile.browser.oldIE && $.mobile.browser.oldIE <= 8),
            uiTemplate = $("<div class='ui-popup-arrow-guide'></div>" + "<div class='ui-popup-arrow-container" + (ieHack ? " ie" : "") + "'>" + "<div class='ui-popup-arrow'></div>" + "</div>");
        function getArrow() {
          var clone = uiTemplate.clone(),
              gd = clone.eq(0),
              ct = clone.eq(1),
              ar = ct.children();
          return {
            arEls: ct.add(gd),
            gd: gd,
            ct: ct,
            ar: ar
          };
        }
        $.widget("mobile.popup", $.mobile.popup, {
          options: {arrow: ""},
          _create: function() {
            var ar,
                ret = this._super();
            if (this.options.arrow) {
              this._ui.arrow = ar = this._addArrow();
            }
            return ret;
          },
          _addArrow: function() {
            var theme,
                opts = this.options,
                ar = getArrow();
            theme = this._themeClassFromOption("ui-body-", opts.theme);
            ar.ar.addClass(theme + (opts.shadow ? " ui-overlay-shadow" : ""));
            ar.arEls.hide().appendTo(this.element);
            return ar;
          },
          _unenhance: function() {
            var ar = this._ui.arrow;
            if (ar) {
              ar.arEls.remove();
            }
            return this._super();
          },
          _tryAnArrow: function(p, dir, desired, s, best) {
            var result,
                r,
                diff,
                desiredForArrow = {},
                tip = {};
            if (s.arFull[p.dimKey] > s.guideDims[p.dimKey]) {
              return best;
            }
            desiredForArrow[p.fst] = desired[p.fst] + (s.arHalf[p.oDimKey] + s.menuHalf[p.oDimKey]) * p.offsetFactor - s.contentBox[p.fst] + (s.clampInfo.menuSize[p.oDimKey] - s.contentBox[p.oDimKey]) * p.arrowOffsetFactor;
            desiredForArrow[p.snd] = desired[p.snd];
            result = s.result || this._calculateFinalLocation(desiredForArrow, s.clampInfo);
            r = {
              x: result.left,
              y: result.top
            };
            tip[p.fst] = r[p.fst] + s.contentBox[p.fst] + p.tipOffset;
            tip[p.snd] = Math.max(result[p.prop] + s.guideOffset[p.prop] + s.arHalf[p.dimKey], Math.min(result[p.prop] + s.guideOffset[p.prop] + s.guideDims[p.dimKey] - s.arHalf[p.dimKey], desired[p.snd]));
            diff = Math.abs(desired.x - tip.x) + Math.abs(desired.y - tip.y);
            if (!best || diff < best.diff) {
              tip[p.snd] -= s.arHalf[p.dimKey] + result[p.prop] + s.contentBox[p.snd];
              best = {
                dir: dir,
                diff: diff,
                result: result,
                posProp: p.prop,
                posVal: tip[p.snd]
              };
            }
            return best;
          },
          _getPlacementState: function(clamp) {
            var offset,
                gdOffset,
                ar = this._ui.arrow,
                state = {
                  clampInfo: this._clampPopupWidth(!clamp),
                  arFull: {
                    cx: ar.ct.width(),
                    cy: ar.ct.height()
                  },
                  guideDims: {
                    cx: ar.gd.width(),
                    cy: ar.gd.height()
                  },
                  guideOffset: ar.gd.offset()
                };
            offset = this.element.offset();
            ar.gd.css({
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            });
            gdOffset = ar.gd.offset();
            state.contentBox = {
              x: gdOffset.left - offset.left,
              y: gdOffset.top - offset.top,
              cx: ar.gd.width(),
              cy: ar.gd.height()
            };
            ar.gd.removeAttr("style");
            state.guideOffset = {
              left: state.guideOffset.left - offset.left,
              top: state.guideOffset.top - offset.top
            };
            state.arHalf = {
              cx: state.arFull.cx / 2,
              cy: state.arFull.cy / 2
            };
            state.menuHalf = {
              cx: state.clampInfo.menuSize.cx / 2,
              cy: state.clampInfo.menuSize.cy / 2
            };
            return state;
          },
          _placementCoords: function(desired) {
            var state,
                best,
                params,
                elOffset,
                bgRef,
                optionValue = this.options.arrow,
                ar = this._ui.arrow;
            if (!ar) {
              return this._super(desired);
            }
            ar.arEls.show();
            bgRef = {};
            state = this._getPlacementState(true);
            params = {
              "l": {
                fst: "x",
                snd: "y",
                prop: "top",
                dimKey: "cy",
                oDimKey: "cx",
                offsetFactor: 1,
                tipOffset: -state.arHalf.cx,
                arrowOffsetFactor: 0
              },
              "r": {
                fst: "x",
                snd: "y",
                prop: "top",
                dimKey: "cy",
                oDimKey: "cx",
                offsetFactor: -1,
                tipOffset: state.arHalf.cx + state.contentBox.cx,
                arrowOffsetFactor: 1
              },
              "b": {
                fst: "y",
                snd: "x",
                prop: "left",
                dimKey: "cx",
                oDimKey: "cy",
                offsetFactor: -1,
                tipOffset: state.arHalf.cy + state.contentBox.cy,
                arrowOffsetFactor: 1
              },
              "t": {
                fst: "y",
                snd: "x",
                prop: "left",
                dimKey: "cx",
                oDimKey: "cy",
                offsetFactor: 1,
                tipOffset: -state.arHalf.cy,
                arrowOffsetFactor: 0
              }
            };
            $.each((optionValue === true ? "l,t,r,b" : optionValue).split(","), $.proxy(function(key, value) {
              best = this._tryAnArrow(params[value], value, desired, state, best);
            }, this));
            if (!best) {
              ar.arEls.hide();
              return this._super(desired);
            }
            ar.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + best.dir).removeAttr("style").css(best.posProp, best.posVal).show();
            if (!ieHack) {
              elOffset = this.element.offset();
              bgRef[params[best.dir].fst] = ar.ct.offset();
              bgRef[params[best.dir].snd] = {
                left: elOffset.left + state.contentBox.x,
                top: elOffset.top + state.contentBox.y
              };
            }
            return best.result;
          },
          _setOptions: function(opts) {
            var newTheme,
                oldTheme = this.options.theme,
                ar = this._ui.arrow,
                ret = this._super(opts);
            if (opts.arrow !== undefined) {
              if (!ar && opts.arrow) {
                this._ui.arrow = this._addArrow();
                return;
              } else if (ar && !opts.arrow) {
                ar.arEls.remove();
                this._ui.arrow = null;
              }
            }
            ar = this._ui.arrow;
            if (ar) {
              if (opts.theme !== undefined) {
                oldTheme = this._themeClassFromOption("ui-body-", oldTheme);
                newTheme = this._themeClassFromOption("ui-body-", opts.theme);
                ar.ar.removeClass(oldTheme).addClass(newTheme);
              }
              if (opts.shadow !== undefined) {
                ar.ar.toggleClass("ui-overlay-shadow", opts.shadow);
              }
            }
            return ret;
          },
          _destroy: function() {
            var ar = this._ui.arrow;
            if (ar) {
              ar.arEls.remove();
            }
            return this._super();
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.panel", {
          options: {
            classes: {
              panel: "ui-panel",
              panelOpen: "ui-panel-open",
              panelClosed: "ui-panel-closed",
              panelFixed: "ui-panel-fixed",
              panelInner: "ui-panel-inner",
              modal: "ui-panel-dismiss",
              modalOpen: "ui-panel-dismiss-open",
              pageContainer: "ui-panel-page-container",
              pageWrapper: "ui-panel-wrapper",
              pageFixedToolbar: "ui-panel-fixed-toolbar",
              pageContentPrefix: "ui-panel-page-content",
              animate: "ui-panel-animate"
            },
            animate: true,
            theme: null,
            position: "left",
            dismissible: true,
            display: "reveal",
            swipeClose: true,
            positionFixed: false
          },
          _panelID: null,
          _closeLink: null,
          _parentPage: null,
          _page: null,
          _modal: null,
          _panelInner: null,
          _wrapper: null,
          _fixedToolbars: null,
          _create: function() {
            var el = this.element,
                parentPage = el.closest(":jqmData(role='page')");
            $.extend(this, {
              _panelID: el.attr("id"),
              _closeLink: el.find(":jqmData(rel='close')"),
              _parentPage: (parentPage.length > 0) ? parentPage : false,
              _page: this._getPage,
              _panelInner: this._getPanelInner(),
              _wrapper: this._getWrapper,
              _fixedToolbars: this._getFixedToolbars
            });
            this._addPanelClasses();
            if ($.support.cssTransform3d && !!this.options.animate) {
              this.element.addClass(this.options.classes.animate);
            }
            this._bindUpdateLayout();
            this._bindCloseEvents();
            this._bindLinkListeners();
            this._bindPageEvents();
            if (!!this.options.dismissible) {
              this._createModal();
            }
            this._bindSwipeEvents();
          },
          _getPanelInner: function() {
            var panelInner = this.element.find("." + this.options.classes.panelInner);
            if (panelInner.length === 0) {
              panelInner = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent();
            }
            return panelInner;
          },
          _createModal: function() {
            var self = this,
                target = self._parentPage ? self._parentPage.parent() : self.element.parent();
            self._modal = $("<div class='" + self.options.classes.modal + "' data-panelid='" + self._panelID + "'></div>").on("mousedown", function() {
              self.close();
            }).appendTo(target);
          },
          _getPage: function() {
            var page = this._parentPage ? this._parentPage : $("." + $.mobile.activePageClass);
            return page;
          },
          _getWrapper: function() {
            var wrapper = this._page().find("." + this.options.classes.pageWrapper);
            if (wrapper.length === 0) {
              wrapper = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent();
            }
            return wrapper;
          },
          _getFixedToolbars: function() {
            var extFixedToolbars = $("body").children(".ui-header-fixed, .ui-footer-fixed"),
                intFixedToolbars = this._page().find(".ui-header-fixed, .ui-footer-fixed"),
                fixedToolbars = extFixedToolbars.add(intFixedToolbars).addClass(this.options.classes.pageFixedToolbar);
            return fixedToolbars;
          },
          _getPosDisplayClasses: function(prefix) {
            return prefix + "-position-" + this.options.position + " " + prefix + "-display-" + this.options.display;
          },
          _getPanelClasses: function() {
            var panelClasses = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " " + "ui-body-" + (this.options.theme ? this.options.theme : "inherit");
            if (!!this.options.positionFixed) {
              panelClasses += " " + this.options.classes.panelFixed;
            }
            return panelClasses;
          },
          _addPanelClasses: function() {
            this.element.addClass(this._getPanelClasses());
          },
          _handleCloseClickAndEatEvent: function(event) {
            if (!event.isDefaultPrevented()) {
              event.preventDefault();
              this.close();
              return false;
            }
          },
          _handleCloseClick: function(event) {
            if (!event.isDefaultPrevented()) {
              this.close();
            }
          },
          _bindCloseEvents: function() {
            this._on(this._closeLink, {"click": "_handleCloseClick"});
            this._on({"click a:jqmData(ajax='false')": "_handleCloseClick"});
          },
          _positionPanel: function() {
            var self = this,
                panelInnerHeight = self._panelInner.outerHeight(),
                expand = panelInnerHeight > $.mobile.getScreenHeight();
            if (expand || !self.options.positionFixed) {
              if (expand) {
                self._unfixPanel();
                $.mobile.resetActivePageHeight(panelInnerHeight);
              }
              window.scrollTo(0, $.mobile.defaultHomeScroll);
            } else {
              self._fixPanel();
            }
          },
          _bindFixListener: function() {
            this._on($(window), {"throttledresize": "_positionPanel"});
          },
          _unbindFixListener: function() {
            this._off($(window), "throttledresize");
          },
          _unfixPanel: function() {
            if (!!this.options.positionFixed && $.support.fixedPosition) {
              this.element.removeClass(this.options.classes.panelFixed);
            }
          },
          _fixPanel: function() {
            if (!!this.options.positionFixed && $.support.fixedPosition) {
              this.element.addClass(this.options.classes.panelFixed);
            }
          },
          _bindUpdateLayout: function() {
            var self = this;
            self.element.on("updatelayout", function() {
              if (self._open) {
                self._positionPanel();
              }
            });
          },
          _bindLinkListeners: function() {
            this._on("body", {"click a": "_handleClick"});
          },
          _handleClick: function(e) {
            if (e.currentTarget.href.split("#")[1] === this._panelID && this._panelID !== undefined) {
              e.preventDefault();
              var link = $(e.target);
              if (link.hasClass("ui-btn")) {
                link.addClass($.mobile.activeBtnClass);
                this.element.one("panelopen panelclose", function() {
                  link.removeClass($.mobile.activeBtnClass);
                });
              }
              this.toggle();
              return false;
            }
          },
          _bindSwipeEvents: function() {
            var self = this,
                area = self._modal ? self.element.add(self._modal) : self.element;
            if (!!self.options.swipeClose) {
              if (self.options.position === "left") {
                area.on("swipeleft.panel", function() {
                  self.close();
                });
              } else {
                area.on("swiperight.panel", function() {
                  self.close();
                });
              }
            }
          },
          _bindPageEvents: function() {
            var self = this;
            this.document.on("panelbeforeopen", function(e) {
              if (self._open && e.target !== self.element[0]) {
                self.close();
              }
            }).on("keyup.panel", function(e) {
              if (e.keyCode === 27 && self._open) {
                self.close();
              }
            });
            if (self._parentPage) {
              this.document.on("pagehide", ":jqmData(role='page')", function() {
                if (self._open) {
                  self.close(true);
                }
              });
            } else {
              this.document.on("pagebeforehide", function() {
                if (self._open) {
                  self.close(true);
                }
              });
            }
          },
          _open: false,
          _pageContentOpenClasses: null,
          _modalOpenClasses: null,
          open: function(immediate) {
            if (!this._open) {
              var self = this,
                  o = self.options,
                  _openPanel = function() {
                    self.document.off("panelclose");
                    self._page().jqmData("panel", "open");
                    if ($.support.cssTransform3d && !!o.animate && o.display !== "overlay") {
                      self._wrapper().addClass(o.classes.animate);
                      self._fixedToolbars().addClass(o.classes.animate);
                    }
                    if (!immediate && $.support.cssTransform3d && !!o.animate) {
                      self.element.animationComplete(complete, "transition");
                    } else {
                      setTimeout(complete, 0);
                    }
                    if (o.theme && o.display !== "overlay") {
                      self._page().parent().addClass(o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme);
                    }
                    self.element.removeClass(o.classes.panelClosed).addClass(o.classes.panelOpen);
                    self._positionPanel();
                    self._pageContentOpenClasses = self._getPosDisplayClasses(o.classes.pageContentPrefix);
                    if (o.display !== "overlay") {
                      self._page().parent().addClass(o.classes.pageContainer);
                      self._wrapper().addClass(self._pageContentOpenClasses);
                      self._fixedToolbars().addClass(self._pageContentOpenClasses);
                    }
                    self._modalOpenClasses = self._getPosDisplayClasses(o.classes.modal) + " " + o.classes.modalOpen;
                    if (self._modal) {
                      self._modal.addClass(self._modalOpenClasses).height(Math.max(self._modal.height(), self.document.height()));
                    }
                  },
                  complete = function() {
                    if (o.display !== "overlay") {
                      self._wrapper().addClass(o.classes.pageContentPrefix + "-open");
                      self._fixedToolbars().addClass(o.classes.pageContentPrefix + "-open");
                    }
                    self._bindFixListener();
                    self._trigger("open");
                  };
              self._trigger("beforeopen");
              if (self._page().jqmData("panel") === "open") {
                self.document.on("panelclose", function() {
                  _openPanel();
                });
              } else {
                _openPanel();
              }
              self._open = true;
            }
          },
          close: function(immediate) {
            if (this._open) {
              var self = this,
                  o = this.options,
                  _closePanel = function() {
                    self.element.removeClass(o.classes.panelOpen);
                    if (o.display !== "overlay") {
                      self._wrapper().removeClass(self._pageContentOpenClasses);
                      self._fixedToolbars().removeClass(self._pageContentOpenClasses);
                    }
                    if (!immediate && $.support.cssTransform3d && !!o.animate) {
                      self.element.animationComplete(complete, "transition");
                    } else {
                      setTimeout(complete, 0);
                    }
                    if (self._modal) {
                      self._modal.removeClass(self._modalOpenClasses);
                    }
                  },
                  complete = function() {
                    if (o.theme && o.display !== "overlay") {
                      self._page().parent().removeClass(o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme);
                    }
                    self.element.addClass(o.classes.panelClosed);
                    if (o.display !== "overlay") {
                      self._page().parent().removeClass(o.classes.pageContainer);
                      self._wrapper().removeClass(o.classes.pageContentPrefix + "-open");
                      self._fixedToolbars().removeClass(o.classes.pageContentPrefix + "-open");
                    }
                    if ($.support.cssTransform3d && !!o.animate && o.display !== "overlay") {
                      self._wrapper().removeClass(o.classes.animate);
                      self._fixedToolbars().removeClass(o.classes.animate);
                    }
                    self._fixPanel();
                    self._unbindFixListener();
                    $.mobile.resetActivePageHeight();
                    self._page().jqmRemoveData("panel");
                    self._trigger("close");
                  };
              self._trigger("beforeclose");
              _closePanel();
              self._open = false;
            }
          },
          toggle: function() {
            this[this._open ? "close" : "open"]();
          },
          _destroy: function() {
            var otherPanels,
                o = this.options,
                multiplePanels = ($("body > :mobile-panel").length + $.mobile.activePage.find(":mobile-panel").length) > 1;
            if (o.display !== "overlay") {
              otherPanels = $("body > :mobile-panel").add($.mobile.activePage.find(":mobile-panel"));
              if (otherPanels.not(".ui-panel-display-overlay").not(this.element).length === 0) {
                this._wrapper().children().unwrap();
              }
              if (this._open) {
                this._fixedToolbars().removeClass(o.classes.pageContentPrefix + "-open");
                if ($.support.cssTransform3d && !!o.animate) {
                  this._fixedToolbars().removeClass(o.classes.animate);
                }
                this._page().parent().removeClass(o.classes.pageContainer);
                if (o.theme) {
                  this._page().parent().removeClass(o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme);
                }
              }
            }
            if (!multiplePanels) {
              this.document.off("panelopen panelclose");
            }
            if (this._open) {
              this._page().jqmRemoveData("panel");
            }
            this._panelInner.children().unwrap();
            this.element.removeClass([this._getPanelClasses(), o.classes.panelOpen, o.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout");
            if (this._modal) {
              this._modal.remove();
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.table", {
          options: {
            classes: {table: "ui-table"},
            enhanced: false
          },
          _create: function() {
            if (!this.options.enhanced) {
              this.element.addClass(this.options.classes.table);
            }
            $.extend(this, {
              headers: undefined,
              allHeaders: undefined
            });
            this._refresh(true);
          },
          _setHeaders: function() {
            var trs = this.element.find("thead tr");
            this.headers = this.element.find("tr:eq(0)").children();
            this.allHeaders = this.headers.add(trs.children());
          },
          refresh: function() {
            this._refresh();
          },
          rebuild: $.noop,
          _refresh: function() {
            var table = this.element,
                trs = table.find("thead tr");
            this._setHeaders();
            trs.each(function() {
              var columnCount = 0;
              $(this).children().each(function() {
                var span = parseInt(this.getAttribute("colspan"), 10),
                    selector = ":nth-child(" + (columnCount + 1) + ")",
                    j;
                this.setAttribute("data-" + $.mobile.ns + "colstart", columnCount + 1);
                if (span) {
                  for (j = 0; j < span - 1; j++) {
                    columnCount++;
                    selector += ", :nth-child(" + (columnCount + 1) + ")";
                  }
                }
                $(this).jqmData("cells", table.find("tr").not(trs.eq(0)).not(this).children(selector));
                columnCount++;
              });
            });
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.table", $.mobile.table, {
          options: {
            mode: "columntoggle",
            columnBtnTheme: null,
            columnPopupTheme: null,
            columnBtnText: "Columns...",
            classes: $.extend($.mobile.table.prototype.options.classes, {
              popup: "ui-table-columntoggle-popup",
              columnBtn: "ui-table-columntoggle-btn",
              priorityPrefix: "ui-table-priority-",
              columnToggleTable: "ui-table-columntoggle"
            })
          },
          _create: function() {
            this._super();
            if (this.options.mode !== "columntoggle") {
              return;
            }
            $.extend(this, {_menu: null});
            if (this.options.enhanced) {
              this._menu = $(this.document[0].getElementById(this._id() + "-popup")).children().first();
              this._addToggles(this._menu, true);
            } else {
              this._menu = this._enhanceColToggle();
              this.element.addClass(this.options.classes.columnToggleTable);
            }
            this._setupEvents();
            this._setToggleState();
          },
          _id: function() {
            return (this.element.attr("id") || (this.widgetName + this.uuid));
          },
          _setupEvents: function() {
            this._on(this.window, {throttledresize: "_setToggleState"});
            this._on(this._menu, {"change input": "_menuInputChange"});
          },
          _addToggles: function(menu, keep) {
            var inputs,
                checkboxIndex = 0,
                opts = this.options,
                container = menu.controlgroup("container");
            if (keep) {
              inputs = menu.find("input");
            } else {
              container.empty();
            }
            this.headers.not("td").each(function() {
              var header = $(this),
                  priority = $.mobile.getAttribute(this, "priority"),
                  cells = header.add(header.jqmData("cells"));
              if (priority) {
                cells.addClass(opts.classes.priorityPrefix + priority);
                (keep ? inputs.eq(checkboxIndex++) : $("<label><input type='checkbox' checked />" + (header.children("abbr").first().attr("title") || header.text()) + "</label>").appendTo(container).children(0).checkboxradio({theme: opts.columnPopupTheme})).jqmData("cells", cells);
              }
            });
            if (!keep) {
              menu.controlgroup("refresh");
            }
          },
          _menuInputChange: function(evt) {
            var input = $(evt.target),
                checked = input[0].checked;
            input.jqmData("cells").toggleClass("ui-table-cell-hidden", !checked).toggleClass("ui-table-cell-visible", checked);
            if (input[0].getAttribute("locked")) {
              input.removeAttr("locked");
              this._unlockCells(input.jqmData("cells"));
            } else {
              input.attr("locked", true);
            }
          },
          _unlockCells: function(cells) {
            cells.removeClass("ui-table-cell-hidden ui-table-cell-visible");
          },
          _enhanceColToggle: function() {
            var id,
                menuButton,
                popup,
                menu,
                table = this.element,
                opts = this.options,
                ns = $.mobile.ns,
                fragment = this.document[0].createDocumentFragment();
            id = this._id() + "-popup";
            menuButton = $("<a href='#" + id + "' " + "class='" + opts.classes.columnBtn + " ui-btn " + "ui-btn-" + (opts.columnBtnTheme || "a") + " ui-corner-all ui-shadow ui-mini' " + "data-" + ns + "rel='popup'>" + opts.columnBtnText + "</a>");
            popup = $("<div class='" + opts.classes.popup + "' id='" + id + "'></div>");
            menu = $("<fieldset></fieldset>").controlgroup();
            this._addToggles(menu, false);
            menu.appendTo(popup);
            fragment.appendChild(popup[0]);
            fragment.appendChild(menuButton[0]);
            table.before(fragment);
            popup.popup();
            return menu;
          },
          rebuild: function() {
            this._super();
            if (this.options.mode === "columntoggle") {
              this._refresh(false);
            }
          },
          _refresh: function(create) {
            this._super(create);
            if (!create && this.options.mode === "columntoggle") {
              this._unlockCells(this.allHeaders);
              this._addToggles(this._menu, create);
              this._setToggleState();
            }
          },
          _setToggleState: function() {
            this._menu.find("input").each(function() {
              var checkbox = $(this);
              this.checked = checkbox.jqmData("cells").eq(0).css("display") === "table-cell";
              checkbox.checkboxradio("refresh");
            });
          },
          _destroy: function() {
            this._super();
          }
        });
      })(jQuery);
      (function($, undefined) {
        $.widget("mobile.table", $.mobile.table, {
          options: {
            mode: "reflow",
            classes: $.extend($.mobile.table.prototype.options.classes, {
              reflowTable: "ui-table-reflow",
              cellLabels: "ui-table-cell-label"
            })
          },
          _create: function() {
            this._super();
            if (this.options.mode !== "reflow") {
              return;
            }
            if (!this.options.enhanced) {
              this.element.addClass(this.options.classes.reflowTable);
              this._updateReflow();
            }
          },
          rebuild: function() {
            this._super();
            if (this.options.mode === "reflow") {
              this._refresh(false);
            }
          },
          _refresh: function(create) {
            this._super(create);
            if (!create && this.options.mode === "reflow") {
              this._updateReflow();
            }
          },
          _updateReflow: function() {
            var table = this,
                opts = this.options;
            $(table.allHeaders.get().reverse()).each(function() {
              var cells = $(this).jqmData("cells"),
                  colstart = $.mobile.getAttribute(this, "colstart"),
                  hierarchyClass = cells.not(this).filter("thead th").length && " ui-table-cell-label-top",
                  text = $(this).text(),
                  iteration,
                  filter;
              if (text !== "") {
                if (hierarchyClass) {
                  iteration = parseInt(this.getAttribute("colspan"), 10);
                  filter = "";
                  if (iteration) {
                    filter = "td:nth-child(" + iteration + "n + " + (colstart) + ")";
                  }
                  table._addLabels(cells.filter(filter), opts.classes.cellLabels + hierarchyClass, text);
                } else {
                  table._addLabels(cells, opts.classes.cellLabels, text);
                }
              }
            });
          },
          _addLabels: function(cells, label, text) {
            cells.not(":has(b." + label + ")").prepend("<b class='" + label + "'>" + text + "</b>");
          }
        });
      })(jQuery);
      (function($, undefined) {
        var defaultFilterCallback = function(index, searchValue) {
          return (("" + ($.mobile.getAttribute(this, "filtertext") || $(this).text())).toLowerCase().indexOf(searchValue) === -1);
        };
        $.widget("mobile.filterable", {
          initSelector: ":jqmData(filter='true')",
          options: {
            filterReveal: false,
            filterCallback: defaultFilterCallback,
            enhanced: false,
            input: null,
            children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
          },
          _create: function() {
            var opts = this.options;
            $.extend(this, {
              _search: null,
              _timer: 0
            });
            this._setInput(opts.input);
            if (!opts.enhanced) {
              this._filterItems(((this._search && this._search.val()) || "").toLowerCase());
            }
          },
          _onKeyUp: function() {
            var val,
                lastval,
                search = this._search;
            if (search) {
              val = search.val().toLowerCase(), lastval = $.mobile.getAttribute(search[0], "lastval") + "";
              if (lastval && lastval === val) {
                return;
              }
              if (this._timer) {
                window.clearTimeout(this._timer);
                this._timer = 0;
              }
              this._timer = this._delay(function() {
                this._trigger("beforefilter", null, {input: search});
                search[0].setAttribute("data-" + $.mobile.ns + "lastval", val);
                this._filterItems(val);
                this._timer = 0;
              }, 250);
            }
          },
          _getFilterableItems: function() {
            var elem = this.element,
                children = this.options.children,
                items = !children ? {length: 0} : $.isFunction(children) ? children() : children.nodeName ? $(children) : children.jquery ? children : this.element.find(children);
            if (items.length === 0) {
              items = elem.children();
            }
            return items;
          },
          _filterItems: function(val) {
            var idx,
                callback,
                length,
                dst,
                show = [],
                hide = [],
                opts = this.options,
                filterItems = this._getFilterableItems();
            if (val != null) {
              callback = opts.filterCallback || defaultFilterCallback;
              length = filterItems.length;
              for (idx = 0; idx < length; idx++) {
                dst = (callback.call(filterItems[idx], idx, val)) ? hide : show;
                dst.push(filterItems[idx]);
              }
            }
            if (hide.length === 0) {
              filterItems[opts.filterReveal ? "addClass" : "removeClass"]("ui-screen-hidden");
            } else {
              $(hide).addClass("ui-screen-hidden");
              $(show).removeClass("ui-screen-hidden");
            }
            this._refreshChildWidget();
            this._trigger("filter", null, {items: filterItems});
          },
          _refreshChildWidget: function() {
            var widget,
                idx,
                recognizedWidgets = ["collapsibleset", "selectmenu", "controlgroup", "listview"];
            for (idx = recognizedWidgets.length - 1; idx > -1; idx--) {
              widget = recognizedWidgets[idx];
              if ($.mobile[widget]) {
                widget = this.element.data("mobile-" + widget);
                if (widget && $.isFunction(widget.refresh)) {
                  widget.refresh();
                }
              }
            }
          },
          _setInput: function(selector) {
            var search = this._search;
            if (this._timer) {
              window.clearTimeout(this._timer);
              this._timer = 0;
            }
            if (search) {
              this._off(search, "keyup change input");
              search = null;
            }
            if (selector) {
              search = selector.jquery ? selector : selector.nodeName ? $(selector) : this.document.find(selector);
              this._on(search, {
                keyup: "_onKeyUp",
                change: "_onKeyUp",
                input: "_onKeyUp"
              });
            }
            this._search = search;
          },
          _setOptions: function(options) {
            var refilter = !((options.filterReveal === undefined) && (options.filterCallback === undefined) && (options.children === undefined));
            this._super(options);
            if (options.input !== undefined) {
              this._setInput(options.input);
              refilter = true;
            }
            if (refilter) {
              this.refresh();
            }
          },
          _destroy: function() {
            var opts = this.options,
                items = this._getFilterableItems();
            if (opts.enhanced) {
              items.toggleClass("ui-screen-hidden", opts.filterReveal);
            } else {
              items.removeClass("ui-screen-hidden");
            }
          },
          refresh: function() {
            if (this._timer) {
              window.clearTimeout(this._timer);
              this._timer = 0;
            }
            this._filterItems(((this._search && this._search.val()) || "").toLowerCase());
          }
        });
      })(jQuery);
      (function($, undefined) {
        var replaceSetOptions = function(self, orig) {
          return function(options) {
            orig.call(this, options);
            self._syncTextInputOptions(options);
          };
        },
            rDividerListItem = /(^|\s)ui-li-divider(\s|$)/,
            origDefaultFilterCallback = $.mobile.filterable.prototype.options.filterCallback;
        $.mobile.filterable.prototype.options.filterCallback = function(index, searchValue) {
          return !this.className.match(rDividerListItem) && origDefaultFilterCallback.call(this, index, searchValue);
        };
        $.widget("mobile.filterable", $.mobile.filterable, {
          options: {
            filterPlaceholder: "Filter items...",
            filterTheme: null
          },
          _create: function() {
            var idx,
                widgetName,
                elem = this.element,
                recognizedWidgets = ["collapsibleset", "selectmenu", "controlgroup", "listview"],
                createHandlers = {};
            this._super();
            $.extend(this, {_widget: null});
            for (idx = recognizedWidgets.length - 1; idx > -1; idx--) {
              widgetName = recognizedWidgets[idx];
              if ($.mobile[widgetName]) {
                if (this._setWidget(elem.data("mobile-" + widgetName))) {
                  break;
                } else {
                  createHandlers[widgetName + "create"] = "_handleCreate";
                }
              }
            }
            if (!this._widget) {
              this._on(elem, createHandlers);
            }
          },
          _handleCreate: function(evt) {
            this._setWidget(this.element.data("mobile-" + evt.type.substring(0, evt.type.length - 6)));
          },
          _trigger: function(type, event, data) {
            if (this._widget && this._widget.widgetFullName === "mobile-listview" && type === "beforefilter") {
              this._widget._trigger("beforefilter", event, data);
            }
            this._super(type, event, data);
          },
          _setWidget: function(widget) {
            if (!this._widget && widget) {
              this._widget = widget;
              this._widget._setOptions = replaceSetOptions(this, this._widget._setOptions);
            }
            if (!!this._widget) {
              this._syncTextInputOptions(this._widget.options);
              if (this._widget.widgetName === "listview") {
                this._widget.options.hideDividers = true;
                this._widget.element.listview("refresh");
              }
            }
            return !!this._widget;
          },
          _isSearchInternal: function() {
            return (this._search && this._search.jqmData("ui-filterable-" + this.uuid + "-internal"));
          },
          _setInput: function(selector) {
            var opts = this.options,
                updatePlaceholder = true,
                textinputOpts = {};
            if (!selector) {
              if (this._isSearchInternal()) {
                return;
              } else {
                updatePlaceholder = false;
                selector = $("<input " + "data-" + $.mobile.ns + "type='search' " + "placeholder='" + opts.filterPlaceholder + "'></input>").jqmData("ui-filterable-" + this.uuid + "-internal", true);
                $("<form class='ui-filterable'></form>").append(selector).submit(function(evt) {
                  evt.preventDefault();
                  selector.blur();
                }).insertBefore(this.element);
                if ($.mobile.textinput) {
                  if (this.options.filterTheme != null) {
                    textinputOpts["theme"] = opts.filterTheme;
                  }
                  selector.textinput(textinputOpts);
                }
              }
            }
            this._super(selector);
            if (this._isSearchInternal() && updatePlaceholder) {
              this._search.attr("placeholder", this.options.filterPlaceholder);
            }
          },
          _setOptions: function(options) {
            var ret = this._super(options);
            if (options.filterPlaceholder !== undefined) {
              if (this._isSearchInternal()) {
                this._search.attr("placeholder", options.filterPlaceholder);
              }
            }
            if (options.filterTheme !== undefined && this._search && $.mobile.textinput) {
              this._search.textinput("option", "theme", options.filterTheme);
            }
            return ret;
          },
          _destroy: function() {
            if (this._isSearchInternal()) {
              this._search.remove();
            }
            this._super();
          },
          _syncTextInputOptions: function(options) {
            var idx,
                textinputOptions = {};
            if (this._isSearchInternal() && $.mobile.textinput) {
              for (idx in $.mobile.textinput.prototype.options) {
                if (options[idx] !== undefined) {
                  if (idx === "theme" && this.options.filterTheme != null) {
                    textinputOptions[idx] = this.options.filterTheme;
                  } else {
                    textinputOptions[idx] = options[idx];
                  }
                }
              }
              this._search.textinput("option", textinputOptions);
            }
          }
        });
      })(jQuery);
      (function($, undefined) {
        var tabId = 0,
            rhash = /#.*$/;
        function getNextTabId() {
          return ++tabId;
        }
        function isLocal(anchor) {
          return anchor.hash.length > 1 && decodeURIComponent(anchor.href.replace(rhash, "")) === decodeURIComponent(location.href.replace(rhash, ""));
        }
        $.widget("ui.tabs", {
          version: "fadf2b312a05040436451c64bbfaf4814bc62c56",
          delay: 300,
          options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
          },
          _create: function() {
            var that = this,
                options = this.options;
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", options.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(event) {
              if ($(this).is(".ui-state-disabled")) {
                event.preventDefault();
              }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
              if ($(this).closest("li").is(".ui-state-disabled")) {
                this.blur();
              }
            });
            this._processTabs();
            options.active = this._initialActive();
            if ($.isArray(options.disabled)) {
              options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li) {
                return that.tabs.index(li);
              }))).sort();
            }
            if (this.options.active !== false && this.anchors.length) {
              this.active = this._findActive(options.active);
            } else {
              this.active = $();
            }
            this._refresh();
            if (this.active.length) {
              this.load(options.active);
            }
          },
          _initialActive: function() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring(1);
            if (active === null) {
              if (locationHash) {
                this.tabs.each(function(i, tab) {
                  if ($(tab).attr("aria-controls") === locationHash) {
                    active = i;
                    return false;
                  }
                });
              }
              if (active === null) {
                active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
              }
              if (active === null || active === -1) {
                active = this.tabs.length ? 0 : false;
              }
            }
            if (active !== false) {
              active = this.tabs.index(this.tabs.eq(active));
              if (active === -1) {
                active = collapsible ? false : 0;
              }
            }
            if (!collapsible && active === false && this.anchors.length) {
              active = 0;
            }
            return active;
          },
          _getCreateEventData: function() {
            return {
              tab: this.active,
              panel: !this.active.length ? $() : this._getPanelForTab(this.active)
            };
          },
          _tabKeydown: function(event) {
            var focusedTab = $(this.document[0].activeElement).closest("li"),
                selectedIndex = this.tabs.index(focusedTab),
                goingForward = true;
            if (this._handlePageNav(event)) {
              return;
            }
            switch (event.keyCode) {
              case $.ui.keyCode.RIGHT:
              case $.ui.keyCode.DOWN:
                selectedIndex++;
                break;
              case $.ui.keyCode.UP:
              case $.ui.keyCode.LEFT:
                goingForward = false;
                selectedIndex--;
                break;
              case $.ui.keyCode.END:
                selectedIndex = this.anchors.length - 1;
                break;
              case $.ui.keyCode.HOME:
                selectedIndex = 0;
                break;
              case $.ui.keyCode.SPACE:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex);
                return;
              case $.ui.keyCode.ENTER:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex === this.options.active ? false : selectedIndex);
                return;
              default:
                return;
            }
            event.preventDefault();
            clearTimeout(this.activating);
            selectedIndex = this._focusNextTab(selectedIndex, goingForward);
            if (!event.ctrlKey) {
              focusedTab.attr("aria-selected", "false");
              this.tabs.eq(selectedIndex).attr("aria-selected", "true");
              this.activating = this._delay(function() {
                this.option("active", selectedIndex);
              }, this.delay);
            }
          },
          _panelKeydown: function(event) {
            if (this._handlePageNav(event)) {
              return;
            }
            if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
              event.preventDefault();
              this.active.focus();
            }
          },
          _handlePageNav: function(event) {
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
              this._activate(this._focusNextTab(this.options.active - 1, false));
              return true;
            }
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
              this._activate(this._focusNextTab(this.options.active + 1, true));
              return true;
            }
          },
          _findNextTab: function(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;
            function constrain() {
              if (index > lastTabIndex) {
                index = 0;
              }
              if (index < 0) {
                index = lastTabIndex;
              }
              return index;
            }
            while ($.inArray(constrain(), this.options.disabled) !== -1) {
              index = goingForward ? index + 1 : index - 1;
            }
            return index;
          },
          _focusNextTab: function(index, goingForward) {
            index = this._findNextTab(index, goingForward);
            this.tabs.eq(index).focus();
            return index;
          },
          _setOption: function(key, value) {
            if (key === "active") {
              this._activate(value);
              return;
            }
            if (key === "disabled") {
              this._setupDisabled(value);
              return;
            }
            this._super(key, value);
            if (key === "collapsible") {
              this.element.toggleClass("ui-tabs-collapsible", value);
              if (!value && this.options.active === false) {
                this._activate(0);
              }
            }
            if (key === "event") {
              this._setupEvents(value);
            }
            if (key === "heightStyle") {
              this._setupHeightStyle(value);
            }
          },
          _tabId: function(tab) {
            return tab.attr("aria-controls") || "ui-tabs-" + getNextTabId();
          },
          _sanitizeSelector: function(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
          },
          refresh: function() {
            var options = this.options,
                lis = this.tablist.children(":has(a[href])");
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function(tab) {
              return lis.index(tab);
            });
            this._processTabs();
            if (options.active === false || !this.anchors.length) {
              options.active = false;
              this.active = $();
            } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {
              if (this.tabs.length === options.disabled.length) {
                options.active = false;
                this.active = $();
              } else {
                this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
              }
            } else {
              options.active = this.tabs.index(this.active);
            }
            this._refresh();
          },
          _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
              "aria-selected": "false",
              tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
              "aria-expanded": "false",
              "aria-hidden": "true"
            });
            if (!this.active.length) {
              this.tabs.eq(0).attr("tabIndex", 0);
            } else {
              this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
              });
              this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
              });
            }
          },
          _processTabs: function() {
            var that = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
              role: "tab",
              tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
              return $("a", this)[0];
            }).addClass("ui-tabs-anchor").attr({
              role: "presentation",
              tabIndex: -1
            });
            this.panels = $();
            this.anchors.each(function(i, anchor) {
              var selector,
                  panel,
                  panelId,
                  anchorId = $(anchor).uniqueId().attr("id"),
                  tab = $(anchor).closest("li"),
                  originalAriaControls = tab.attr("aria-controls");
              if (isLocal(anchor)) {
                selector = anchor.hash;
                panel = that.element.find(that._sanitizeSelector(selector));
              } else {
                panelId = that._tabId(tab);
                selector = "#" + panelId;
                panel = that.element.find(selector);
                if (!panel.length) {
                  panel = that._createPanel(panelId);
                  panel.insertAfter(that.panels[i - 1] || that.tablist);
                }
                panel.attr("aria-live", "polite");
              }
              if (panel.length) {
                that.panels = that.panels.add(panel);
              }
              if (originalAriaControls) {
                tab.data("ui-tabs-aria-controls", originalAriaControls);
              }
              tab.attr({
                "aria-controls": selector.substring(1),
                "aria-labelledby": anchorId
              });
              panel.attr("aria-labelledby", anchorId);
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
          },
          _getList: function() {
            return this.element.find("ol,ul").eq(0);
          },
          _createPanel: function(id) {
            return $("<div>").attr("id", id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true);
          },
          _setupDisabled: function(disabled) {
            if ($.isArray(disabled)) {
              if (!disabled.length) {
                disabled = false;
              } else if (disabled.length === this.anchors.length) {
                disabled = true;
              }
            }
            for (var i = 0,
                li; (li = this.tabs[i]); i++) {
              if (disabled === true || $.inArray(i, disabled) !== -1) {
                $(li).addClass("ui-state-disabled").attr("aria-disabled", "true");
              } else {
                $(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");
              }
            }
            this.options.disabled = disabled;
          },
          _setupEvents: function(event) {
            var events = {click: function(event) {
                event.preventDefault();
              }};
            if (event) {
              $.each(event.split(" "), function(index, eventName) {
                events[eventName] = "_eventHandler";
              });
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, events);
            this._on(this.tabs, {keydown: "_tabKeydown"});
            this._on(this.panels, {keydown: "_panelKeydown"});
            this._focusable(this.tabs);
            this._hoverable(this.tabs);
          },
          _setupHeightStyle: function(heightStyle) {
            var maxHeight,
                parent = this.element.parent();
            if (heightStyle === "fill") {
              maxHeight = parent.height();
              maxHeight -= this.element.outerHeight() - this.element.height();
              this.element.siblings(":visible").each(function() {
                var elem = $(this),
                    position = elem.css("position");
                if (position === "absolute" || position === "fixed") {
                  return;
                }
                maxHeight -= elem.outerHeight(true);
              });
              this.element.children().not(this.panels).each(function() {
                maxHeight -= $(this).outerHeight(true);
              });
              this.panels.each(function() {
                $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
              }).css("overflow", "auto");
            } else if (heightStyle === "auto") {
              maxHeight = 0;
              this.panels.each(function() {
                maxHeight = Math.max(maxHeight, $(this).height("").height());
              }).height(maxHeight);
            }
          },
          _eventHandler: function(event) {
            var options = this.options,
                active = this.active,
                anchor = $(event.currentTarget),
                tab = anchor.closest("li"),
                clickedIsActive = tab[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab(tab),
                toHide = !active.length ? $() : this._getPanelForTab(active),
                eventData = {
                  oldTab: active,
                  oldPanel: toHide,
                  newTab: collapsing ? $() : tab,
                  newPanel: toShow
                };
            event.preventDefault();
            if (tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || (clickedIsActive && !options.collapsible) || (this._trigger("beforeActivate", event, eventData) === false)) {
              return;
            }
            options.active = collapsing ? false : this.tabs.index(tab);
            this.active = clickedIsActive ? $() : tab;
            if (this.xhr) {
              this.xhr.abort();
            }
            if (!toHide.length && !toShow.length) {
              $.error("jQuery UI Tabs: Mismatching fragment identifier.");
            }
            if (toShow.length) {
              this.load(this.tabs.index(tab), event);
            }
            this._toggle(event, eventData);
          },
          _toggle: function(event, eventData) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;
            this.running = true;
            function complete() {
              that.running = false;
              that._trigger("activate", event, eventData);
            }
            function show() {
              eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
              if (toShow.length && that.options.show) {
                that._show(toShow, that.options.show, complete);
              } else {
                toShow.show();
                complete();
              }
            }
            if (toHide.length && this.options.hide) {
              this._hide(toHide, this.options.hide, function() {
                eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                show();
              });
            } else {
              eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
              toHide.hide();
              show();
            }
            toHide.attr({
              "aria-expanded": "false",
              "aria-hidden": "true"
            });
            eventData.oldTab.attr("aria-selected", "false");
            if (toShow.length && toHide.length) {
              eventData.oldTab.attr("tabIndex", -1);
            } else if (toShow.length) {
              this.tabs.filter(function() {
                return $(this).attr("tabIndex") === 0;
              }).attr("tabIndex", -1);
            }
            toShow.attr({
              "aria-expanded": "true",
              "aria-hidden": "false"
            });
            eventData.newTab.attr({
              "aria-selected": "true",
              tabIndex: 0
            });
          },
          _activate: function(index) {
            var anchor,
                active = this._findActive(index);
            if (active[0] === this.active[0]) {
              return;
            }
            if (!active.length) {
              active = this.active;
            }
            anchor = active.find(".ui-tabs-anchor")[0];
            this._eventHandler({
              target: anchor,
              currentTarget: anchor,
              preventDefault: $.noop
            });
          },
          _findActive: function(index) {
            return index === false ? $() : this.tabs.eq(index);
          },
          _getIndex: function(index) {
            if (typeof index === "string") {
              index = this.anchors.index(this.anchors.filter("[href$='" + index + "']"));
            }
            return index;
          },
          _destroy: function() {
            if (this.xhr) {
              this.xhr.abort();
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
              if ($.data(this, "ui-tabs-destroy")) {
                $(this).remove();
              } else {
                $(this).removeClass("ui-state-default ui-state-active ui-state-disabled " + "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
              }
            });
            this.tabs.each(function() {
              var li = $(this),
                  prev = li.data("ui-tabs-aria-controls");
              if (prev) {
                li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
              } else {
                li.removeAttr("aria-controls");
              }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
              this.panels.css("height", "");
            }
          },
          enable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === false) {
              return;
            }
            if (index === undefined) {
              disabled = false;
            } else {
              index = this._getIndex(index);
              if ($.isArray(disabled)) {
                disabled = $.map(disabled, function(num) {
                  return num !== index ? num : null;
                });
              } else {
                disabled = $.map(this.tabs, function(li, num) {
                  return num !== index ? num : null;
                });
              }
            }
            this._setupDisabled(disabled);
          },
          disable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === true) {
              return;
            }
            if (index === undefined) {
              disabled = true;
            } else {
              index = this._getIndex(index);
              if ($.inArray(index, disabled) !== -1) {
                return;
              }
              if ($.isArray(disabled)) {
                disabled = $.merge([index], disabled).sort();
              } else {
                disabled = [index];
              }
            }
            this._setupDisabled(disabled);
          },
          load: function(index, event) {
            index = this._getIndex(index);
            var that = this,
                tab = this.tabs.eq(index),
                anchor = tab.find(".ui-tabs-anchor"),
                panel = this._getPanelForTab(tab),
                eventData = {
                  tab: tab,
                  panel: panel
                };
            if (isLocal(anchor[0])) {
              return;
            }
            this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));
            if (this.xhr && this.xhr.statusText !== "canceled") {
              tab.addClass("ui-tabs-loading");
              panel.attr("aria-busy", "true");
              this.xhr.success(function(response) {
                setTimeout(function() {
                  panel.html(response);
                  that._trigger("load", event, eventData);
                }, 1);
              }).complete(function(jqXHR, status) {
                setTimeout(function() {
                  if (status === "abort") {
                    that.panels.stop(false, true);
                  }
                  tab.removeClass("ui-tabs-loading");
                  panel.removeAttr("aria-busy");
                  if (jqXHR === that.xhr) {
                    delete that.xhr;
                  }
                }, 1);
              });
            }
          },
          _ajaxSettings: function(anchor, event, eventData) {
            var that = this;
            return {
              url: anchor.attr("href"),
              beforeSend: function(jqXHR, settings) {
                return that._trigger("beforeLoad", event, $.extend({
                  jqXHR: jqXHR,
                  ajaxSettings: settings
                }, eventData));
              }
            };
          },
          _getPanelForTab: function(tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id));
          }
        });
      })(jQuery);
      (function($, undefined) {})(jQuery);
      (function($, window) {
        $.mobile.iosorientationfixEnabled = true;
        var ua = navigator.userAgent,
            zoom,
            evt,
            x,
            y,
            z,
            aig;
        if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf("AppleWebKit") > -1)) {
          $.mobile.iosorientationfixEnabled = false;
          return;
        }
        zoom = $.mobile.zoom;
        function checkTilt(e) {
          evt = e.originalEvent;
          aig = evt.accelerationIncludingGravity;
          x = Math.abs(aig.x);
          y = Math.abs(aig.y);
          z = Math.abs(aig.z);
          if (!window.orientation && (x > 7 || ((z > 6 && y < 8 || z < 8 && y > 6) && x > 5))) {
            if (zoom.enabled) {
              zoom.disable();
            }
          } else if (!zoom.enabled) {
            zoom.enable();
          }
        }
        $.mobile.document.on("mobileinit", function() {
          if ($.mobile.iosorientationfixEnabled) {
            $.mobile.window.bind("orientationchange.iosorientationfix", zoom.enable).bind("devicemotion.iosorientationfix", checkTilt);
          }
        });
      }(jQuery, this));
      (function($, window, undefined) {
        var $html = $("html"),
            $window = $.mobile.window;
        function hideRenderingClass() {
          $html.removeClass("ui-mobile-rendering");
        }
        $(window.document).trigger("mobileinit");
        if (!$.mobile.gradeA()) {
          return;
        }
        if ($.mobile.ajaxBlacklist) {
          $.mobile.ajaxEnabled = false;
        }
        $html.addClass("ui-mobile ui-mobile-rendering");
        setTimeout(hideRenderingClass, 5000);
        $.extend($.mobile, {initializePage: function() {
            var path = $.mobile.path,
                $pages = $(":jqmData(role='page'), :jqmData(role='dialog')"),
                hash = path.stripHash(path.stripQueryParams(path.parseLocation().hash)),
                hashPage = document.getElementById(hash);
            if (!$pages.length) {
              $pages = $("body").wrapInner("<div data-" + $.mobile.ns + "role='page'></div>").children(0);
            }
            $pages.each(function() {
              var $this = $(this);
              if (!$this[0].getAttribute("data-" + $.mobile.ns + "url")) {
                $this.attr("data-" + $.mobile.ns + "url", $this.attr("id") || location.pathname + location.search);
              }
            });
            $.mobile.firstPage = $pages.first();
            $.mobile.pageContainer = $.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer();
            $.mobile.navreadyDeferred.resolve();
            $window.trigger("pagecontainercreate");
            $.mobile.loading("show");
            hideRenderingClass();
            if (!($.mobile.hashListeningEnabled && $.mobile.path.isHashValid(location.hash) && ($(hashPage).is(":jqmData(role='page')") || $.mobile.path.isPath(hash) || hash === $.mobile.dialogHashKey))) {
              if ($.mobile.path.isHashValid(location.hash)) {
                $.mobile.navigate.history.initialDst = hash.replace("#", "");
              }
              if ($.event.special.navigate.isPushStateEnabled()) {
                $.mobile.navigate.navigator.squash(path.parseLocation().href);
              }
              $.mobile.changePage($.mobile.firstPage, {
                transition: "none",
                reverse: true,
                changeHash: false,
                fromHashChange: true
              });
            } else {
              if (!$.event.special.navigate.isPushStateEnabled()) {
                $window.trigger("hashchange", [true]);
              } else {
                $.mobile.navigate.history.stack = [];
                $.mobile.navigate($.mobile.path.isPath(location.hash) ? location.hash : location.href);
              }
            }
          }});
        $(function() {
          $.support.inlineSVG();
          if ($.mobile.hideUrlBar) {
            window.scrollTo(0, 1);
          }
          $.mobile.defaultHomeScroll = (!$.support.scrollTop || $.mobile.window.scrollTop() === 1) ? 0 : 1;
          if ($.mobile.autoInitializePage) {
            $.mobile.initializePage();
          }
          if ($.mobile.hideUrlBar) {
            $window.load($.mobile.silentScroll);
          }
          if (!$.support.cssPointerEvents) {
            $.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function(e) {
              e.preventDefault();
              e.stopImmediatePropagation();
            });
          }
        });
      }(jQuery, this));
    }));
  })($__require('4'));
  return module.exports;
});

$__System.registerDynamic("a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  !function(name, definition) {
    if (typeof module != 'undefined' && module.exports)
      module.exports = definition();
    else if (typeof define == 'function' && define.amd)
      define(definition);
    else
      this[name] = definition();
  }('bowser', function() {
    var t = true;
    function detect(ua) {
      function getFirstMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[1]) || '';
      }
      function getSecondMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[2]) || '';
      }
      var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
          likeAndroid = /like android/i.test(ua),
          android = !likeAndroid && /android/i.test(ua),
          nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
          nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
          chromeos = /CrOS/.test(ua),
          silk = /silk/i.test(ua),
          sailfish = /sailfish/i.test(ua),
          tizen = /tizen/i.test(ua),
          webos = /(web|hpw)os/i.test(ua),
          windowsphone = /windows phone/i.test(ua),
          windows = !windowsphone && /windows/i.test(ua),
          mac = !iosdevice && !silk && /macintosh/i.test(ua),
          linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
          edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
          versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
          tablet = /tablet/i.test(ua),
          mobile = !tablet && /[^-]mobi/i.test(ua),
          xbox = /xbox/i.test(ua),
          result;
      if (/opera|opr|opios/i.test(ua)) {
        result = {
          name: 'Opera',
          opera: t,
          version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/coast/i.test(ua)) {
        result = {
          name: 'Opera Coast',
          coast: t,
          version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/yabrowser/i.test(ua)) {
        result = {
          name: 'Yandex Browser',
          yandexbrowser: t,
          version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/ucbrowser/i.test(ua)) {
        result = {
          name: 'UC Browser',
          ucbrowser: t,
          version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/mxios/i.test(ua)) {
        result = {
          name: 'Maxthon',
          maxthon: t,
          version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/epiphany/i.test(ua)) {
        result = {
          name: 'Epiphany',
          epiphany: t,
          version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/puffin/i.test(ua)) {
        result = {
          name: 'Puffin',
          puffin: t,
          version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        };
      } else if (/sleipnir/i.test(ua)) {
        result = {
          name: 'Sleipnir',
          sleipnir: t,
          version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (/k-meleon/i.test(ua)) {
        result = {
          name: 'K-Meleon',
          kMeleon: t,
          version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        };
      } else if (windowsphone) {
        result = {
          name: 'Windows Phone',
          windowsphone: t
        };
        if (edgeVersion) {
          result.msedge = t;
          result.version = edgeVersion;
        } else {
          result.msie = t;
          result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
        }
      } else if (/msie|trident/i.test(ua)) {
        result = {
          name: 'Internet Explorer',
          msie: t,
          version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        };
      } else if (chromeos) {
        result = {
          name: 'Chrome',
          chromeos: t,
          chromeBook: t,
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (/chrome.+? edge/i.test(ua)) {
        result = {
          name: 'Microsoft Edge',
          msedge: t,
          version: edgeVersion
        };
      } else if (/vivaldi/i.test(ua)) {
        result = {
          name: 'Vivaldi',
          vivaldi: t,
          version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      } else if (sailfish) {
        result = {
          name: 'Sailfish',
          sailfish: t,
          version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        };
      } else if (/seamonkey\//i.test(ua)) {
        result = {
          name: 'SeaMonkey',
          seamonkey: t,
          version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
        };
      } else if (/firefox|iceweasel|fxios/i.test(ua)) {
        result = {
          name: 'Firefox',
          firefox: t,
          version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        };
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
          result.firefoxos = t;
        }
      } else if (silk) {
        result = {
          name: 'Amazon Silk',
          silk: t,
          version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
        };
      } else if (/phantom/i.test(ua)) {
        result = {
          name: 'PhantomJS',
          phantom: t,
          version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/slimerjs/i.test(ua)) {
        result = {
          name: 'SlimerJS',
          slimer: t,
          version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
        };
      } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
        result = {
          name: 'BlackBerry',
          blackberry: t,
          version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        };
      } else if (webos) {
        result = {
          name: 'WebOS',
          webos: t,
          version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        };
        /touchpad\//i.test(ua) && (result.touchpad = t);
      } else if (/bada/i.test(ua)) {
        result = {
          name: 'Bada',
          bada: t,
          version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
        };
      } else if (tizen) {
        result = {
          name: 'Tizen',
          tizen: t,
          version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      } else if (/qupzilla/i.test(ua)) {
        result = {
          name: 'QupZilla',
          qupzilla: t,
          version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
        };
      } else if (/chromium/i.test(ua)) {
        result = {
          name: 'Chromium',
          chromium: t,
          version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
        };
      } else if (/chrome|crios|crmo/i.test(ua)) {
        result = {
          name: 'Chrome',
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (android) {
        result = {
          name: 'Android',
          version: versionIdentifier
        };
      } else if (/safari|applewebkit/i.test(ua)) {
        result = {
          name: 'Safari',
          safari: t
        };
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (iosdevice) {
        result = {name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'};
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (/googlebot/i.test(ua)) {
        result = {
          name: 'Googlebot',
          googlebot: t,
          version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
        };
      } else {
        result = {
          name: getFirstMatch(/^(.*)\/(.*) /),
          version: getSecondMatch(/^(.*)\/(.*) /)
        };
      }
      if (!result.msedge && /(apple)?webkit/i.test(ua)) {
        if (/(apple)?webkit\/537\.36/i.test(ua)) {
          result.name = result.name || "Blink";
          result.blink = t;
        } else {
          result.name = result.name || "Webkit";
          result.webkit = t;
        }
        if (!result.version && versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (!result.opera && /gecko\//i.test(ua)) {
        result.name = result.name || "Gecko";
        result.gecko = t;
        result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
      }
      if (!result.msedge && (android || result.silk)) {
        result.android = t;
      } else if (iosdevice) {
        result[iosdevice] = t;
        result.ios = t;
      } else if (mac) {
        result.mac = t;
      } else if (xbox) {
        result.xbox = t;
      } else if (windows) {
        result.windows = t;
      } else if (linux) {
        result.linux = t;
      }
      var osVersion = '';
      if (result.windowsphone) {
        osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
      } else if (iosdevice) {
        osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (android) {
        osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
      } else if (result.webos) {
        osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
      } else if (result.blackberry) {
        osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
      } else if (result.bada) {
        osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
      } else if (result.tizen) {
        osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
      }
      if (osVersion) {
        result.osversion = osVersion;
      }
      var osMajorVersion = osVersion.split('.')[0];
      if (tablet || nexusTablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile))) || result.silk) {
        result.tablet = t;
      } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || nexusMobile || result.blackberry || result.webos || result.bada) {
        result.mobile = t;
      }
      if (result.msedge || (result.msie && result.version >= 10) || (result.yandexbrowser && result.version >= 15) || (result.vivaldi && result.version >= 1.0) || (result.chrome && result.version >= 20) || (result.firefox && result.version >= 20.0) || (result.safari && result.version >= 6) || (result.opera && result.version >= 10.0) || (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) || (result.blackberry && result.version >= 10.1)) {
        result.a = t;
      } else if ((result.msie && result.version < 10) || (result.chrome && result.version < 20) || (result.firefox && result.version < 20.0) || (result.safari && result.version < 6) || (result.opera && result.version < 10.0) || (result.ios && result.osversion && result.osversion.split(".")[0] < 6)) {
        result.c = t;
      } else
        result.x = t;
      return result;
    }
    var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');
    bowser.test = function(browserList) {
      for (var i = 0; i < browserList.length; ++i) {
        var browserItem = browserList[i];
        if (typeof browserItem === 'string') {
          if (browserItem in bowser) {
            return true;
          }
        }
      }
      return false;
    };
    bowser._detect = detect;
    return bowser;
  });
  return module.exports;
});

$__System.registerDynamic("b", ["a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a');
  return module.exports;
});

$__System.register("c", ["d", "b"], function (_export) {
  var _Object$keys, bowser;

  /**
    Provides information about the browser and its URL handling behaviour
    by combining Bowser detection with info JSON/dict */

  function BrowserInfo() {
    /* The Bowser browser detection object */
    this.detection = bowser;
    /* The JSON dictionary of the Browser behaviour information. */
    this.info = {};
    /* Bower detection flags */
    this.flags = ["opera", "yandexbrowser", "windowsphone", "msedge", "msie", "chromeBook", "chrome", "sailfish", "seamonkey", "firefox", "silk", "phantom", "blackberry", "webos", "bada", "tizen", "safari", "webkit", "gecko", "android", "ios", "tablet", "mobile"];
    this.flags.sort();

    /**
      @param {String} data a JSON string to be parsed into the behaviour info.
      */
    this.loadjson = function (data) {
      this.info = JSON.parse(data);
    };

    /**
      @param {Object} data a dictionary of behaviour info.
      */
    this.load = function (data) {
      this.info = data;
    };

    /**
      @return {Number} number of entries in the browser info.
    */
    this.count = function () {
      return _Object$keys(this.info).length;
    };

    /**
      @return {String} a short text string with the browser name and version.
      */
    this.head = function () {
      return "Browser: " + this.detection.name + " " + this.detection.version;
    };

    /**
      @return {String} the HTML inputs for the controlgroup based on the flags
      */
    this.flaginputs = function () {
      var result = document.createElement("div");

      for (var i = 0; i < this.flags.length; i++) {
        var myflag = this.flags[i];
        var inputid = "checkbox-" + myflag;
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", myflag);
        input.setAttribute("id", inputid);
        input.setAttribute("data-mini", "true");
        if (this.detection[myflag] === true) {
          input.setAttribute("checked", "checked");
        }
        if (!this.info[myflag]) {
          input.setAttribute("disabled", "true");
        }
        result.appendChild(input);

        var label = document.createElement("label");
        label.setAttribute("for", inputid);
        var labelText = document.createTextNode(myflag);
        label.appendChild(labelText);
        result.appendChild(label);
      }

      return result.innerHTML;
    };

    /**
      @param {array} info The JSON dictionary of the Browser behaviour information.
      @return {String} information about the Browser's URL handler behaviour.
      */
    this.body = function () {
      var _this = this;

      /*
      <div class="ui-corner-all custom-corners">
        <div class="ui-bar ui-bar-a">
          <h3>Heading</h3>
        </div>
        <div class="ui-body ui-body-a">
          <p>Content</p>
        </div>
      </div>
        */
      var result = document.createElement("div");

      _Object$keys(this.info).forEach(function (key) {
        if (!(_this.detection[key] === true)) {
          return;
        }

        var entryname = key;
        var entrybody = _this.info[key];
        var entry = document.createElement("div");
        entry.setAttribute("class", "ui-bar ui-bar-a");
        var heading = document.createElement("h3");
        var headingText = document.createTextNode(entryname);
        heading.appendChild(headingText);
        entry.appendChild(heading);
        result.appendChild(entry);
        var body = document.createElement("div");
        body.setAttribute("class", "ui-body ui-body-a");
        var bodypara = document.createElement("p");
        var bodyparaText = document.createTextNode(entrybody);
        bodypara.appendChild(bodyparaText);
        body.appendChild(bodypara);
        result.appendChild(body);
      });

      if (!result.innerHTML) {
        var noresults = document.createElement("div");
        noresults.setAttribute("class", "ui-bar ui-bar-a");
        var noheading = document.createElement("h3");
        var noheadingText = document.createTextNode("No info about [" + this.detectionvector() + "]'s behaviour, please tweet your results!");
        noheading.appendChild(noheadingText);
        noresults.appendChild(noheading);
        result.appendChild(noresults);
      }

      return result.innerHTML;
    };

    /**
      @return {String} a vector of current Bowser detection flags
      */
    this.detectionvector = function () {
      var vector = "";

      for (var i = 0; i < this.flags.length; i++) {
        var myflag = this.flags[i];
        if (this.detection[myflag] === true) {
          if (vector.length > 0) {
            vector += ":";
          }
          vector += myflag;
        }
      }
      return vector;
    };

    /**
      @return {Object} a clickable tweet link with browser info vector filled in.
      */
    this.tweet = function () {
      /*
        <a href="http://twitter.com/intent/tweet?text=safari:webkit...&hashtags=urlhanders"
          title="Tweet" target="_blank" class="ui-btn-active">Tweet</a>
       */
      var link = document.createElement("a");
      var url = "https://twitter.com/intent/tweet";
      var vector = this.detectionvector();
      url += "?text=" + encodeURIComponent("My browser [" + vector + "] __eats weird URLs for breakfast__");
      url += "&hashtags=" + encodeURIComponent("urlhandlers");
      // url += "&url=http://hack.urlhanderlers.info/";
      link.setAttribute("href", url);
      link.setAttribute("title", "Tweet");
      link.setAttribute("target", "_blank");
      link.setAttribute("class", "ui-btn-active");
      link.setAttribute("data-icon", "action");
      var linkText = document.createTextNode("Tweet about [" + vector + "]'s behaviour");
      link.appendChild(linkText);
      return link;
    };
  }

  return {
    setters: [function (_d) {
      _Object$keys = _d["default"];
    }, function (_b) {
      bowser = _b["default"];
    }],
    execute: function () {
      "use strict";

      _export("BrowserInfo", BrowserInfo);
    }
  };
});
$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('e');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("10", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("11", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("12", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('11');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("13", ["10", "14", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('10'),
      core = $__require('14'),
      ctx = $__require('12'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("15", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("16", ["13", "14", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('13'),
      core = $__require('14'),
      fails = $__require('15');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("17", ["f", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('f');
  $__require('16')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("18", ["17", "14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('17');
  module.exports = $__require('14').Object.keys;
  return module.exports;
});

$__System.registerDynamic("d", ["18"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('18'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("19", ["d"], function (_export) {
  var _Object$keys;

  function HandlerInfo() {
    /* The JSON dictionary of the handler information. */
    this.info = {};
    /**
      Loads the handler info into the handler info object.
      @param {Object} data a dictionary of the handler info.
      */
    this.load = function (data) {
      this.info = data;
    };
    /**
      @return {Number} number of entries in the handler info.
    */
    this.count = function () {
      return _Object$keys(this.info).length;
    };
    /** Creates testing "widget" for the handler
     * @param {string} key for handler name
     * @param {Object} presets dict
     * @return {Object} a HTML div with the  or False if none
     */
    this.itemtester = function (key, presets) {
      /*
      <form>
        <div class="ui-field-contain">
          <input type="url" data-clear-btn="true" name="url-1" id="url-1" value="steam://">
          <select name="select-native-1" id="select-native-1" data-corners="false" data-mini="true">
            <option value="1">steam://AddNonSteamGame</option>
            <option value="2">steam://appnews/666</option>
            <option value="3">steam://connect/127.0.0.1:27015</option>
            <option value="4">steam://installaddon/halflifehd</option>
          </select>
          <fieldset class="ui-grid-b">
            <div class="ui-block-a"><button type="submit" data-corners="false" data-mini="true">direct</button></div>
            <div class="ui-block-b"><button type="submit" data-corners="false" data-mini="true">local redirect</button></div>
            <div class="ui-block-c"><button type="submit" data-corners="false" data-mini="true">remote redirect</button></div>
          </fieldset>
        </div>
      </form>
      */
      var form = document.createElement("form");
      var div = document.createElement("div");
      div.setAttribute("class", "ui-field-contain");

      // URL input
      var urlinput = document.createElement("input");
      urlinput.setAttribute("type", "url");
      urlinput.setAttribute("data-clear-btn", "true");
      urlinput.setAttribute("value", key + "//");
      div.appendChild(urlinput);

      // URL preset selector
      var select = document.createElement("select");
      select.setAttribute("data-corners", "false");
      select.setAttribute("data-mini", "true");
      var presetlist = [key + "//"];

      if (presets) {
        for (var i = 0; i < presets.length; i++) {
          if (!presets[i].value) {
            continue;
          }
          presetlist.push(presets[i].value);
        }
      }

      for (var j = 0; j < presetlist.length; j++) {
        var option = document.createElement("option");
        option.setAttribute("value", j);
        var optionText = document.createTextNode(presetlist[j]);
        option.appendChild(optionText);
        select.appendChild(option);
      }
      div.appendChild(select);

      // Actions
      var fieldset = document.createElement("fieldset");
      fieldset.setAttribute("class", "ui-grid-b");
      var actions = [["a", "direct"], ["b", "local redirect"], ["c", "remote redirect"]];
      for (var k = 0; k < actions.length; k++) {
        var actiondiv = document.createElement("div");
        actiondiv.setAttribute("class", "ui-block-" + actions[k][0]);
        var actionbutton = document.createElement("button");
        actionbutton.setAttribute("type", "submit");
        actionbutton.setAttribute("data-corners", "false");
        actionbutton.setAttribute("data-mini", "true");
        actionbutton.setAttribute("data-enhanced", "true");
        actionbutton.setAttribute("class", "ui-btn ui-shadow ui-mini");

        var actionbuttonText = document.createTextNode(actions[k][1]);
        actionbutton.appendChild(actionbuttonText);
        actiondiv.appendChild(actionbutton);
        fieldset.appendChild(actiondiv);
      }
      div.appendChild(fieldset);

      form.appendChild(div);
      return form;
    };
    /**
      Creates an Apps list
      * @param {Object[]} apps array (name, path, flags)
      * @return {Object} a HTML list of the Apps or False if none
      */
    this.itemapps = function (apps) {
      if (!Array.isArray(apps)) {
        return false;
      }

      var div = document.createElement("div");
      // div.setAttribute("data-role", "collapsible");
      // div.setAttribute("data-corners", "false");
      // div.setAttribute("data-collapsed-icon", "info");

      var list = document.createElement("ul");
      list.setAttribute("data-role", "listview");
      list.setAttribute("data-inset", "true");
      list.setAttribute("class", "dynamiclistview");

      for (var i = 0; i < apps.length; i++) {
        var appitem = document.createElement("li");
        var appinfo = document.createTextNode(apps[i].name + " [" + apps[i].path + "]");
        appitem.appendChild(appinfo);

        // If there are flags for this App then list them
        var flags = apps[i].flags;
        if (Array.isArray(flags)) {
          for (var j = 0; j < flags.length; j++) {
            var flag = document.createElement("span");
            flag.setAttribute("class", "custom-flag");
            var flagText = document.createTextNode(flags[j]);
            flag.appendChild(flagText);
            appitem.appendChild(flag);
          }
        }
        list.appendChild(appitem);
      }

      div.appendChild(list);
      return div;
    };
    /**
      Creates an URL list
      * @param {Object[]} urls array (value, description)
      * @return {Object} a HTML list of the URLs or False if none
      */
    this.itemurls = function (urls) {
      if (!Array.isArray(urls)) {
        return false;
      }

      var div = document.createElement("div");
      div.setAttribute("data-role", "collapsible");
      div.setAttribute("data-corners", "false");
      div.setAttribute("data-collapsed-icon", "info");

      var head = document.createElement("h3");
      var headText = document.createTextNode("More info:");
      head.appendChild(headText);
      div.appendChild(head);

      var list = document.createElement("ul");
      list.setAttribute("data-role", "listview");
      list.setAttribute("data-inset", "true");
      list.setAttribute("class", "dynamiclistview");

      for (var i = 0; i < urls.length; i++) {
        if (!urls[i].value) {
          continue;
        }
        var item = document.createElement("li");
        var a = document.createElement("a");
        var linkText;
        if (urls[i].description) {
          linkText = document.createTextNode(urls[i].description);
        } else {
          linkText = document.createTextNode(urls[i].value);
        }
        a.appendChild(linkText);
        a.setAttribute("href", urls[i].value);
        item.appendChild(a);
        list.appendChild(item);
      }
      div.appendChild(list);
      return div;
    };
    /**
      Creates individual handler list item
      * @param {Object} key for handler name
      * @param {Object} handler for value dict
      * @return {Object} a HTML list item of the handler
      */
    this.itemview = function (key, handler) {
      // Create the handler list item
      var item = document.createElement("li");
      var collapsible = document.createElement("div");
      collapsible.setAttribute("data-role", "collapsible");
      collapsible.setAttribute("data-corners", "false");
      var head = document.createElement("h3");
      var headText = document.createTextNode(key);
      head.appendChild(headText);
      collapsible.appendChild(head);

      // Add the testing widget
      collapsible.appendChild(this.itemtester(key, handler.presets));

      // If there are apps for this handler then list them
      var apps = this.itemapps(handler.apps);
      if (apps) {
        collapsible.appendChild(apps);
      }

      // If there are urls for this handler then list them
      var urls = this.itemurls(handler.urls);
      if (urls) {
        collapsible.appendChild(urls);
      }

      item.appendChild(collapsible);
      return item;
    };

    /**
      Creates listview of based on the handlers
      * @return {Object} a HTML list of handlers
      modified from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
      */
    this.listview = function () {
      var _this = this;

      // Create the list element:
      var list = document.createElement("ul");

      _Object$keys(this.info).forEach(function (key) {
        // Create the list for the handler
        var item = _this.itemview(key, _this.info[key]);
        // Add it to the handler list
        list.appendChild(item);
      });
      return list.innerHTML;
    };
  }

  return {
    setters: [function (_d) {
      _Object$keys = _d["default"];
    }],
    execute: function () {
      /**
        Builds URL handler lists based on discovery and info JSON/dict information.
        */
      "use strict";

      _export("HandlerInfo", HandlerInfo);
    }
  };
});
$__System.register('1', ['2', '5', '9', '19', 'c'], function (_export) {
  'use strict';

  var $, HandlerInfo, BrowserInfo, browserinfo, handlerlist, handlerinfolist;
  return {
    setters: [function (_) {}, function (_2) {
      $ = _2['default'];
    }, function (_3) {}, function (_4) {
      HandlerInfo = _4.HandlerInfo;
    }, function (_c) {
      BrowserInfo = _c.BrowserInfo;
    }],
    execute: function () {

      $(document).ready(function () {
        $("body").css("visibility", "visible");
      });

      browserinfo = new BrowserInfo();

      $.getJSON("db/browserinfo.json", function (data) {
        browserinfo.load(data);

        $("#browserinfohead").text(browserinfo.head());
        $("#browserinfotweet").html(browserinfo.tweet());
        $("#browserinfonavbar").navbar("destroy");
        $("#browserinfonavbar").navbar();

        var inputs = browserinfo.flaginputs();
        $("#browserinfogroup").controlgroup("container").append(inputs);
        $("#browserinfogroup input[type=checkbox]").checkboxradio();
        $("#browserinfogroup").controlgroup("refresh");

        $("#browserinfobody").html(browserinfo.body());

        $('#browserinfogroup input[type=checkbox]').change(function () {
          browserinfo.detection[this.name] = this.checked;
          $("#browserinfobody").html(browserinfo.body());
        });
      });

      handlerlist = new HandlerInfo();

      $.getJSON("handlers.json", function (data) {
        handlerlist.load(data);

        $("#handlerlist").append(handlerlist.listview());
        $("#handlerlist").listview("refresh");

        $("#handlerlist input[type=url]").textinput();
        $("#handlerlist .ui-field-contain").fieldcontain();
        $("#handlerlist select").selectmenu();
        $("#handlerlist button[type=submit]").button();
        $("#handlerlist [data-role=collapsible]").collapsible();
        $("#handlerlist .dynamiclistview").listview();

        $("#handlerlistcount").text(handlerlist.count()).fadeIn();
      });

      handlerinfolist = new HandlerInfo();

      $.getJSON("db/handlerinfo.json", function (data) {
        handlerinfolist.load(data);

        $("#handlerinfolist").append(handlerinfolist.listview());
        $("#handlerinfolist").listview("refresh");

        $("#handlerinfolist input[type=url]").textinput();
        $("#handlerinfolist .ui-field-contain").fieldcontain();
        $("#handlerinfolist select").selectmenu();
        $("#handlerinfolist button[type=submit]").button();
        $("#handlerinfolist [data-role=collapsible]").collapsible();
        $("#handlerinfolist .dynamiclistview").listview();

        $("#handlerinfolistcount").text(handlerinfolist.count()).fadeIn();
      });

      $.getJSON("db/handlerurls.json", function (data) {
        $.each(data, function (i, handler) {
          var key = i;
          $("#urllist").append('<li data-role="list-divider">' + key + '</li>');

          $.each(handler.urls, function (i, url) {
            var description = "";
            if (url.description) {
              description = url.description;
            } else {
              description = url.value;
            }
            $("#urllist").append('<li data-filtertext="' + key + '"><a href="' + url.value + '">' + description + '</li>');
          });
        });
        $("#urllist").listview("refresh");
      });

      $.getJSON("db/handlerpresets.json", function (data) {
        $.each(data, function (i, handler) {
          var key = i;
          $("#presetlist").append('<li data-role="list-divider">' + key + '</li>');

          $.each(handler.presets, function (i, preset) {
            var description = "";
            if (preset.description) {
              description = preset.description;
            } else {
              description = preset.value;
            }
            $("#presetlist").append('<li data-filtertext="' + key + '"><a href="' + preset.value + '">' + description + '</li>');
          });
        });
        $("#presetlist").listview("refresh");
      });
    }
  };
});
$__System.register('npm:jquery-mobile@1.4.1/dist/jquery.mobile.min.css!github:systemjs/plugin-css@0.1.23.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("/*! jQuery Mobile 1.4.1 | Git HEAD hash: 3455ada <> 2014-02-13T12:05:10Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */.ui-icon-action:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M9%2C5v3l5-4L9%2C0v3c0%2C0-5%2C0-5%2C7C6%2C5%2C9%2C5%2C9%2C5z%20M11%2C12H2V5h1l2-2H0v11h13V7l-2%2C2V12z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-alert:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M7%2C0L0%2C12h14L7%2C0z%20M7%2C11c-0.553%2C0-1-0.447-1-1s0.447-1%2C1-1c0.553%2C0%2C1%2C0.447%2C1%2C1S7.553%2C11%2C7%2C11z%20M7%2C8%20C6.447%2C8%2C6%2C7.553%2C6%2C7V5c0-0.553%2C0.447-1%2C1-1c0.553%2C0%2C1%2C0.447%2C1%2C1v2C8%2C7.553%2C7.553%2C8%2C7%2C8z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-arrow-d-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C3%2011%2C0%203.5%2C7.5%200%2C4%200%2C14%2010%2C14%206.5%2C10.5%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-d-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2210.5%2C7.5%203%2C0%200%2C3%207.5%2C10.5%204%2C14%2014%2C14%2014%2C4%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-d:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%229%2C7%209%2C0%205%2C0%205%2C7%200%2C7%207%2C14%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%227%2C5%207%2C0%200%2C7%207%2C14%207%2C9%2014%2C9%2014%2C5%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C7%207%2C0%207%2C5%200%2C5%200%2C9%207%2C9%207%2C14%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-u-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C11%206.5%2C3.5%2010%2C0%200%2C0%200%2C10%203.5%2C6.5%2011%2C14%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-u-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C0%204%2C0%207.5%2C3.5%200%2C11%203%2C14%2010.5%2C6.5%2014%2C10%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-arrow-u:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%227%2C0%200%2C7%205%2C7%205%2C14%209%2C14%209%2C7%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-audio:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214.018px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014.018%2014%22%20style%3D%22enable-background%3Anew%200%200%2014.018%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M1%2C4C0.447%2C4%2C0%2C4.447%2C0%2C5v4c0%2C0.553%2C0.447%2C1%2C1%2C1h1l4%2C4V0L2%2C4H1z%20M10.346%2C7c0-1.699-1.042-3.154-2.546-3.867L6.982%2C4.68%20C7.885%2C5.107%2C8.51%2C5.98%2C8.51%2C7S7.885%2C8.893%2C6.982%2C9.32L7.8%2C10.867C9.304%2C10.154%2C10.346%2C8.699%2C10.346%2C7z%20M9.447%2C0.017L8.618%2C1.586%20C10.723%2C2.584%2C12.182%2C4.621%2C12.182%2C7s-1.459%2C4.416-3.563%2C5.414l0.829%2C1.569c2.707-1.283%2C4.57-3.925%2C4.57-6.983%20S12.154%2C1.3%2C9.447%2C0.017z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-back:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M5%2C3V0L1%2C4l4%2C4V5c0%2C0%2C6%2C0%2C6%2C3s-5%2C4-5%2C4v2c0%2C0%2C7-1%2C7-6C13%2C4%2C8%2C3%2C5%2C3z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-bars:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M1%2C4h12c0.553%2C0%2C1-0.447%2C1-1s-0.447-1-1-1H1C0.447%2C2%2C0%2C2.447%2C0%2C3S0.447%2C4%2C1%2C4z%20M13%2C6H1%20C0.447%2C6%2C0%2C6.447%2C0%2C7c0%2C0.553%2C0.447%2C1%2C1%2C1h12c0.553%2C0%2C1-0.447%2C1-1C14%2C6.447%2C13.553%2C6%2C13%2C6z%20M13%2C10H1c-0.553%2C0-1%2C0.447-1%2C1%20s0.447%2C1%2C1%2C1h12c0.553%2C0%2C1-0.447%2C1-1S13.553%2C10%2C13%2C10z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-bullets:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M5%2C4h8c0.553%2C0%2C1-0.447%2C1-1s-0.447-1-1-1H5C4.447%2C2%2C4%2C2.447%2C4%2C3S4.447%2C4%2C5%2C4z%20M13%2C6H5%20C4.447%2C6%2C4%2C6.447%2C4%2C7c0%2C0.553%2C0.447%2C1%2C1%2C1h8c0.553%2C0%2C1-0.447%2C1-1C14%2C6.447%2C13.553%2C6%2C13%2C6z%20M13%2C10H5c-0.553%2C0-1%2C0.447-1%2C1%20s0.447%2C1%2C1%2C1h8c0.553%2C0%2C1-0.447%2C1-1S13.553%2C10%2C13%2C10z%20M1%2C2C0.447%2C2%2C0%2C2.447%2C0%2C3s0.447%2C1%2C1%2C1s1-0.447%2C1-1S1.553%2C2%2C1%2C2z%20M1%2C6%20C0.447%2C6%2C0%2C6.447%2C0%2C7c0%2C0.553%2C0.447%2C1%2C1%2C1s1-0.447%2C1-1C2%2C6.447%2C1.553%2C6%2C1%2C6z%20M1%2C10c-0.553%2C0-1%2C0.447-1%2C1s0.447%2C1%2C1%2C1s1-0.447%2C1-1%20S1.553%2C10%2C1%2C10z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-calendar:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M0%2C8h2V6H0V8z%20M3%2C8h2V6H3V8z%20M6%2C8h2V6H6V8z%20M9%2C8h2V6H9V8z%20M12%2C8h2V6h-2V8z%20M0%2C11h2V9H0V11z%20M3%2C11h2V9H3V11z%20M6%2C11h2V9H6V11z%20%20M9%2C11h2V9H9V11z%20M12%2C11h2V9h-2V11z%20M0%2C14h2v-2H0V14z%20M3%2C14h2v-2H3V14z%20M6%2C14h2v-2H6V14z%20M9%2C14h2v-2H9V14z%20M12%2C1%20c0-0.553-0.447-1-1-1s-1%2C0.447-1%2C1H4c0-0.553-0.447-1-1-1S2%2C0.447%2C2%2C1H0v4h14V1H12z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-camera:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M12%2C2.5H9.908c-0.206-0.581-0.756-1-1.408-1h-3c-0.652%2C0-1.202%2C0.419-1.408%2C1H2c-1.104%2C0-2%2C0.896-2%2C2%20v6c0%2C1.104%2C0.896%2C2%2C2%2C2h10c1.104%2C0%2C2-0.896%2C2-2v-6C14%2C3.396%2C13.104%2C2.5%2C12%2C2.5z%20M7%2C10.5c-1.657%2C0-3-1.344-3-3c0-1.657%2C1.343-3%2C3-3%20s3%2C1.343%2C3%2C3C10%2C9.156%2C8.657%2C10.5%2C7%2C10.5z%20M7%2C5.5c-1.104%2C0-2%2C0.896-2%2C2c0%2C1.104%2C0.896%2C2%2C2%2C2c1.104%2C0%2C2-0.896%2C2-2%20C9%2C6.396%2C8.104%2C5.5%2C7%2C5.5z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-carat-d:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%2211.949%2C3.404%207%2C8.354%202.05%2C3.404%20-0.071%2C5.525%207%2C12.596%2014.07%2C5.525%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-carat-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%2210.596%2C11.949%205.646%2C7%2010.596%2C2.05%208.475%2C-0.071%201.404%2C7%208.475%2C14.07%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-carat-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%223.404%2C2.051%208.354%2C7%203.404%2C11.95%205.525%2C14.07%2012.596%2C7%205.525%2C-0.071%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-carat-u:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%222.051%2C10.596%207%2C5.646%2011.95%2C10.596%2014.07%2C8.475%207%2C1.404%20-0.071%2C8.475%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-check:after,html .ui-btn.ui-checkbox-on.ui-checkbox-on:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%2214%2C4%2011%2C1%205.003%2C6.997%203%2C5%200%2C8%204.966%2C13%204.983%2C12.982%205%2C13%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-clock:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M7%2C0C3.134%2C0%2C0%2C3.134%2C0%2C7s3.134%2C7%2C7%2C7s7-3.134%2C7-7S10.866%2C0%2C7%2C0z%20M7%2C12c-2.762%2C0-5-2.238-5-5s2.238-5%2C5-5s5%2C2.238%2C5%2C5%20S9.762%2C12%2C7%2C12z%20M9%2C6H8V4c0-0.553-0.447-1-1-1S6%2C3.447%2C6%2C4v3c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1S9.553%2C6%2C9%2C6z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-cloud:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M14%2C9.5c0-0.793-0.465-1.473-1.134-1.795C12.949%2C7.484%2C13%2C7.249%2C13%2C7c0-1.104-0.896-2-2-2%20c-0.158%2C0-0.311%2C0.023-0.457%2C0.058C9.816%2C3.549%2C8.286%2C2.5%2C6.5%2C2.5c-2.33%2C0-4.224%2C1.777-4.454%2C4.046C0.883%2C6.76%2C0%2C7.773%2C0%2C9%20c0%2C1.381%2C1.119%2C2.5%2C2.5%2C2.5h10v-0.07C13.361%2C11.206%2C14%2C10.432%2C14%2C9.5z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-comment:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2v7c0%2C1.104%2C0.896%2C2%2C2%2C2h1v3l3-3h6c1.104%2C0%2C2-0.896%2C2-2V2C14%2C0.896%2C13.104%2C0%2C12%2C0z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-delete:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C3%2011%2C0%207%2C4%203%2C0%200%2C3%204%2C7%200%2C11%203%2C14%207%2C10%2011%2C14%2014%2C11%2010%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-edit:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M1%2C10l-1%2C4l4-1l7-7L8%2C3L1%2C10z%20M11%2C0L9%2C2l3%2C3l2-2L11%2C0z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-eye:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M7%2C2C3%2C2%2C0%2C7%2C0%2C7s3%2C5%2C7%2C5s7-5%2C7-5S11%2C2%2C7%2C2z%20M7%2C10c-1.657%2C0-3-1.344-3-3c0-1.657%2C1.343-3%2C3-3%20s3%2C1.343%2C3%2C3C10%2C8.656%2C8.657%2C10%2C7%2C10z%20M7%2C6C6.448%2C6%2C6%2C6.447%2C6%2C7c0%2C0.553%2C0.448%2C1%2C1%2C1s1-0.447%2C1-1C8%2C6.447%2C7.552%2C6%2C7%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-forbidden:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M12.601%2C11.187C13.476%2C10.018%2C14%2C8.572%2C14%2C7c0-3.866-3.134-7-7-7C5.428%2C0%2C3.982%2C0.524%2C2.813%2C1.399L2.757%2C1.343L2.053%2C2.048%20L2.048%2C2.053L1.343%2C2.758l0.056%2C0.056C0.524%2C3.982%2C0%2C5.428%2C0%2C7c0%2C3.866%2C3.134%2C7%2C7%2C7c1.572%2C0%2C3.018-0.524%2C4.187-1.399l0.056%2C0.057%20l0.705-0.705l0.005-0.005l0.705-0.705L12.601%2C11.187z%20M7%2C2c2.761%2C0%2C5%2C2.238%2C5%2C5c0%2C1.019-0.308%2C1.964-0.832%2C2.754L4.246%2C2.832%20C5.036%2C2.308%2C5.981%2C2%2C7%2C2z%20M7%2C12c-2.761%2C0-5-2.238-5-5c0-1.019%2C0.308-1.964%2C0.832-2.754l6.922%2C6.922C8.964%2C11.692%2C8.019%2C12%2C7%2C12z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-forward:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M13%2C4L9%2C0v3C6%2C3%2C1%2C4%2C1%2C8c0%2C5%2C7%2C6%2C7%2C6v-2c0%2C0-5-1-5-4s6-3%2C6-3v3L13%2C4z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-gear:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M13.621%2C5.904l-1.036-0.259c-0.168-0.042-0.303-0.168-0.355-0.332c-0.092-0.284-0.205-0.559-0.339-0.82%20c-0.079-0.153-0.073-0.337%2C0.017-0.486l0.549-0.915c0.118-0.196%2C0.088-0.448-0.075-0.61l-0.862-0.863%20c-0.162-0.163-0.414-0.193-0.611-0.075l-0.916%2C0.55C9.844%2C2.182%2C9.659%2C2.188%2C9.506%2C2.109C9.244%2C1.975%2C8.97%2C1.861%2C8.686%2C1.77%20c-0.165-0.052-0.29-0.187-0.332-0.354L8.095%2C0.379C8.039%2C0.156%2C7.839%2C0%2C7.609%2C0H6.391c-0.229%2C0-0.43%2C0.156-0.485%2C0.379L5.646%2C1.415%20C5.604%2C1.582%2C5.479%2C1.718%2C5.313%2C1.77c-0.284%2C0.092-0.559%2C0.206-0.82%2C0.34C4.339%2C2.188%2C4.155%2C2.182%2C4.007%2C2.093L3.092%2C1.544%20c-0.196-0.118-0.448-0.087-0.61%2C0.075L1.619%2C2.481C1.457%2C2.644%2C1.426%2C2.896%2C1.544%2C3.093l0.549%2C0.914%20c0.089%2C0.148%2C0.095%2C0.332%2C0.017%2C0.486C1.975%2C4.755%2C1.861%2C5.029%2C1.77%2C5.314c-0.053%2C0.164-0.188%2C0.29-0.354%2C0.332L0.379%2C5.905%20C0.156%2C5.961%2C0%2C6.161%2C0%2C6.391v1.219c0%2C0.229%2C0.156%2C0.43%2C0.379%2C0.485l1.036%2C0.26C1.582%2C8.396%2C1.717%2C8.521%2C1.77%2C8.687%20c0.092%2C0.284%2C0.205%2C0.559%2C0.34%2C0.82C2.188%2C9.66%2C2.182%2C9.844%2C2.093%2C9.993l-0.549%2C0.915c-0.118%2C0.195-0.087%2C0.448%2C0.075%2C0.61%20l0.862%2C0.862c0.162%2C0.163%2C0.414%2C0.193%2C0.61%2C0.075l0.915-0.549c0.148-0.089%2C0.332-0.095%2C0.486-0.017%20c0.262%2C0.135%2C0.536%2C0.248%2C0.82%2C0.34c0.165%2C0.053%2C0.291%2C0.187%2C0.332%2C0.354l0.259%2C1.036C5.96%2C13.844%2C6.16%2C14%2C6.39%2C14h1.22%20c0.229%2C0%2C0.43-0.156%2C0.485-0.379l0.259-1.036c0.042-0.167%2C0.168-0.302%2C0.333-0.354c0.284-0.092%2C0.559-0.205%2C0.82-0.34%20c0.154-0.078%2C0.338-0.072%2C0.486%2C0.017l0.914%2C0.549c0.197%2C0.118%2C0.449%2C0.088%2C0.611-0.074l0.862-0.863%20c0.163-0.162%2C0.193-0.415%2C0.075-0.611l-0.549-0.915c-0.089-0.148-0.096-0.332-0.017-0.485c0.134-0.263%2C0.248-0.536%2C0.339-0.82%20c0.053-0.165%2C0.188-0.291%2C0.355-0.333l1.036-0.259C13.844%2C8.039%2C14%2C7.839%2C14%2C7.609V6.39C14%2C6.16%2C13.844%2C5.96%2C13.621%2C5.904z%20M7%2C10%20c-1.657%2C0-3-1.343-3-3s1.343-3%2C3-3s3%2C1.343%2C3%2C3S8.657%2C10%2C7%2C10z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-grid:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M3%2C0H1C0.447%2C0%2C0%2C0.447%2C0%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C4%2C0.447%2C3.553%2C0%2C3%2C0z%20M8%2C0H6%20C5.447%2C0%2C5%2C0.447%2C5%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C9%2C0.447%2C8.553%2C0%2C8%2C0z%20M13%2C0h-2c-0.553%2C0-1%2C0.447-1%2C1v2%20c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C14%2C0.447%2C13.553%2C0%2C13%2C0z%20M3%2C5H1C0.447%2C5%2C0%2C5.447%2C0%2C6v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2%20c0.553%2C0%2C1-0.447%2C1-1V6C4%2C5.447%2C3.553%2C5%2C3%2C5z%20M8%2C5H6C5.447%2C5%2C5%2C5.447%2C5%2C6v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V6%20C9%2C5.447%2C8.553%2C5%2C8%2C5z%20M13%2C5h-2c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V6C14%2C5.447%2C13.553%2C5%2C13%2C5z%20M3%2C10%20H1c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1v-2C4%2C10.447%2C3.553%2C10%2C3%2C10z%20M8%2C10H6c-0.553%2C0-1%2C0.447-1%2C1v2%20c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1v-2C9%2C10.447%2C8.553%2C10%2C8%2C10z%20M13%2C10h-2c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2%20c0.553%2C0%2C1-0.447%2C1-1v-2C14%2C10.447%2C13.553%2C10%2C13%2C10z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-heart:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M7%2C1.872c-2-3-7-2-7%2C2c0%2C3%2C4%2C7%2C4%2C7s2.417%2C2.479%2C3%2C3c0.583-0.521%2C3-3%2C3-3s4-4%2C4-7%20C14-0.128%2C9-1.128%2C7%2C1.872z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-home:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%227%2C0%200%2C7%202%2C7%202%2C14%205%2C14%205%2C9%209%2C9%209%2C14%2012%2C14%2012%2C7%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-info:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M7%2C0C3.134%2C0%2C0%2C3.134%2C0%2C7s3.134%2C7%2C7%2C7s7-3.134%2C7-7S10.866%2C0%2C7%2C0z%20M7%2C2c0.552%2C0%2C1%2C0.447%2C1%2C1S7.552%2C4%2C7%2C4S6%2C3.553%2C6%2C3%20S6.448%2C2%2C7%2C2z%20M9%2C11H5v-1h1V6H5V5h3v5h1V11z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-location:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M7%2C0C4.791%2C0%2C3%2C1.791%2C3%2C4c0%2C2%2C4%2C10%2C4%2C10s4-8%2C4-10C11%2C1.791%2C9.209%2C0%2C7%2C0z%20M7%2C6C5.896%2C6%2C5%2C5.104%2C5%2C4%20s0.896-2%2C2-2c1.104%2C0%2C2%2C0.896%2C2%2C2S8.104%2C6%2C7%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-lock:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M12%2C6V5c0-2.762-2.238-5-5-5C4.239%2C0%2C2%2C2.238%2C2%2C5v1H1v8h12V6H12z%20M7.5%2C9.848V12h-1V9.848%20C6.207%2C9.673%2C6%2C9.366%2C6%2C9c0-0.553%2C0.448-1%2C1-1s1%2C0.447%2C1%2C1C8%2C9.366%2C7.793%2C9.673%2C7.5%2C9.848z%20M10%2C6H4V5c0-1.657%2C1.343-3%2C3-3%20s3%2C1.343%2C3%2C3V6z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-mail:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M0%2C3.75V12h14V3.75L7%2C9L0%2C3.75z%20M14%2C2H0l7%2C5L14%2C2z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-minus:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Crect%20y%3D%225%22%20style%3D%22fill%3A%23FFFFFF%3B%22%20width%3D%2214%22%20height%3D%224%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-navigation:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%2213%2C1%200%2C6%207%2C7%208%2C14%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-phone:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%22-0.01%200.008%2014%2014%22%20style%3D%22enable-background%3Anew%20-0.01%200.008%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M6.939%2C9.189C6.165%2C8.557%2C5.271%2C7.705%2C4.497%2C6.744C3.953%2C6.071%2C3.473%2C5.363%2C3.969%2C4.866l-3.482-3.48%20C-0.021%2C2.02-1.146%2C5.04%2C3.675%2C9.984c5.08%2C5.211%2C8.356%2C4.097%2C8.92%2C3.511l-3.396-3.4C8.725%2C10.568%2C8.113%2C10.146%2C6.939%2C9.189z%20%20M13.82%2C11.519v-0.004c0%2C0-2.648-2.646-2.649-2.647c-0.21-0.211-0.546-0.205-0.754%2C0.002L9.455%2C9.831l3.403%2C3.407%20c0%2C0%2C0.962-0.96%2C0.961-0.961l0.002-0.001C14.043%2C12.056%2C14.021%2C11.721%2C13.82%2C11.519z%20M5.192%2C3.644V3.642%20c0.222-0.222%2C0.2-0.557%2C0-0.758V2.881c0%2C0-2.726-2.725-2.727-2.726C2.255-0.055%2C1.92-0.05%2C1.712%2C0.156L0.751%2C1.121l3.479%2C3.482%20C4.231%2C4.604%2C5.192%2C3.645%2C5.192%2C3.644z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-plus:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23FFF%22%20points%3D%2214%2C5%209%2C5%209%2C0%205%2C0%205%2C5%200%2C5%200%2C9%205%2C9%205%2C14%209%2C14%209%2C9%2014%2C9%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-power:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M11.243%2C2.408c-0.392-0.401-1.024-0.401-1.415%2C0c-0.391%2C0.401-0.391%2C1.054%2C0%2C1.455%20C10.584%2C4.642%2C11%2C5.675%2C11%2C6.773s-0.416%2C2.133-1.172%2C2.91c-1.512%2C1.558-4.145%2C1.558-5.656%2C0C3.416%2C8.904%2C3%2C7.872%2C3%2C6.773%20C3%2C5.673%2C3.416%2C4.64%2C4.172%2C3.863c0.39-0.401%2C0.39-1.054%2C0-1.455c-0.391-0.401-1.024-0.401-1.415%2C0C1.624%2C3.574%2C1%2C5.125%2C1%2C6.773%20c0%2C1.647%2C0.624%2C3.199%2C1.757%2C4.365c1.134%2C1.166%2C2.64%2C1.809%2C4.243%2C1.809c1.604%2C0%2C3.109-0.645%2C4.243-1.811%20C12.376%2C9.975%2C13%2C8.423%2C13%2C6.773C13%2C5.125%2C12.376%2C3.574%2C11.243%2C2.408z%20M7%2C8.053c0.553%2C0%2C1-0.445%2C1-1v-6c0-0.553-0.447-1-1-1%20c-0.553%2C0-1%2C0.447-1%2C1v6C6%2C7.604%2C6.447%2C8.053%2C7%2C8.053z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-recycle:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M3%2C7h1L2%2C4L0%2C7h1c0%2C3.313%2C2.687%2C6%2C6%2C6c0.702%2C0%2C1.374-0.127%2C2-0.35v-2.205C8.41%2C10.789%2C7.732%2C11%2C7%2C11%20C4.791%2C11%2C3%2C9.209%2C3%2C7z%20M13%2C7c0-3.313-2.688-6-6-6C6.298%2C1%2C5.626%2C1.127%2C5%2C1.349v2.206C5.59%2C3.211%2C6.268%2C3%2C7%2C3c2.209%2C0%2C4%2C1.791%2C4%2C4%20h-1l2%2C3l2-3H13z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-refresh:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214.001px%22%20height%3D%2214.002px%22%20viewBox%3D%220%200%2014.001%2014.002%22%20style%3D%22enable-background%3Anew%200%200%2014.001%2014.002%3B%22%20%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M14.001%2C6.001v-6l-2.06%2C2.06c-0.423-0.424-0.897-0.809-1.44-1.122C7.153-0.994%2C2.872%2C0.153%2C0.939%2C3.501%20c-1.933%2C3.348-0.786%2C7.629%2C2.562%2C9.562c3.348%2C1.933%2C7.629%2C0.785%2C9.562-2.562l-1.732-1c-1.381%2C2.392-4.438%2C3.211-6.83%2C1.83%20s-3.211-4.438-1.83-6.83s4.438-3.211%2C6.83-1.83c0.389%2C0.225%2C0.718%2C0.506%2C1.02%2C0.81l-2.52%2C2.52H14.001z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-search:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M10.171%2C8.766c0.617-0.888%2C0.979-1.964%2C0.979-3.126c0-3.037-2.463-5.5-5.5-5.5s-5.5%2C2.463-5.5%2C5.5%20s2.463%2C5.5%2C5.5%2C5.5c1.152%2C0%2C2.223-0.355%2C3.104-0.962l3.684%2C3.683l1.414-1.414L10.171%2C8.766z%20M5.649%2C9.14c-1.933%2C0-3.5-1.567-3.5-3.5%20c0-1.933%2C1.567-3.5%2C3.5-3.5c1.933%2C0%2C3.5%2C1.567%2C3.5%2C3.5C9.149%2C7.572%2C7.582%2C9.14%2C5.649%2C9.14z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-shop:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M10%2C4V3c0-1.657-1.343-3-3-3S4%2C1.343%2C4%2C3v1H1v10h12V4H10z%20M4.5%2C6C4.224%2C6%2C4%2C5.776%2C4%2C5.5%20S4.224%2C5%2C4.5%2C5S5%2C5.224%2C5%2C5.5S4.776%2C6%2C4.5%2C6z%20M5%2C3c0-1.104%2C0.896-2%2C2-2c1.104%2C0%2C2%2C0.896%2C2%2C2v1H5V3z%20M9.5%2C6C9.225%2C6%2C9%2C5.776%2C9%2C5.5%20S9.225%2C5%2C9.5%2C5S10%2C5.224%2C10%2C5.5S9.775%2C6%2C9.5%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-star:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%2214%2C5%209%2C5%207%2C0%205%2C5%200%2C5%204%2C8%202.625%2C13%207%2C10%2011.375%2C13%2010%2C8%20%22%2F%3E%3C%2Fsvg%3E)}.ui-icon-tag:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M5%2C0H0v5l9%2C9l5-5L5%2C0z%20M3%2C4C2.447%2C4%2C2%2C3.553%2C2%2C3s0.447-1%2C1-1s1%2C0.447%2C1%2C1S3.553%2C4%2C3%2C4z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-user:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M8.851%2C10.101c-0.18-0.399-0.2-0.763-0.153-1.104C9.383%2C8.49%2C9.738%2C7.621%2C9.891%2C6.465C10.493%2C6.355%2C10.5%2C5.967%2C10.5%2C5.5%20c0-0.437-0.008-0.804-0.502-0.94C9.999%2C4.539%2C10%2C4.521%2C10%2C4.5c0-2.103-1-4-2-4C8%2C0.5%2C7.5%2C0%2C6.5%2C0C5%2C0%2C4%2C1.877%2C4%2C4.5%20c0%2C0.021%2C0.001%2C0.039%2C0.002%2C0.06C3.508%2C4.696%2C3.5%2C5.063%2C3.5%2C5.5c0%2C0.467%2C0.007%2C0.855%2C0.609%2C0.965%20C4.262%2C7.621%2C4.617%2C8.49%2C5.303%2C8.997c0.047%2C0.341%2C0.026%2C0.704-0.153%2C1.104C1.503%2C10.503%2C0%2C12%2C0%2C12v2h14v-2%20C14%2C12%2C12.497%2C10.503%2C8.851%2C10.101z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-icon-video:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%20-2%2014%2014%22%20style%3D%22enable-background%3Anew%200%20-2%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M8%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2v6c0%2C1.104%2C0.896%2C2%2C2%2C2h6c1.104%2C0%2C2-0.896%2C2-2V5V2C10%2C0.896%2C9.104%2C0%2C8%2C0z%20%20M10%2C5l4%2C4V1L10%2C5z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-action:after,.ui-alt-icon.ui-icon-action:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M9%2C5v3l5-4L9%2C0v3c0%2C0-5%2C0-5%2C7C6%2C5%2C9%2C5%2C9%2C5z%20M11%2C12H2V5h1l2-2H0v11h13V7l-2%2C2V12z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-alert:after,.ui-alt-icon.ui-icon-alert:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C0L0%2C12h14L7%2C0z%20M7%2C11c-0.553%2C0-1-0.447-1-1s0.447-1%2C1-1c0.553%2C0%2C1%2C0.447%2C1%2C1S7.553%2C11%2C7%2C11z%20M7%2C8C6.447%2C8%2C6%2C7.553%2C6%2C7V5%20c0-0.553%2C0.447-1%2C1-1c0.553%2C0%2C1%2C0.447%2C1%2C1v2C8%2C7.553%2C7.553%2C8%2C7%2C8z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-d:after,.ui-alt-icon.ui-icon-arrow-d:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%229%2C7%209%2C0%205%2C0%205%2C7%200%2C7%207%2C14%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-d-l:after,.ui-alt-icon.ui-icon-arrow-d-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C3%2011%2C0%203.5%2C7.5%200%2C4%200%2C14%2010%2C14%206.5%2C10.5%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-d-r:after,.ui-alt-icon.ui-icon-arrow-d-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2210.5%2C7.5%203%2C0%200%2C3%207.5%2C10.5%204%2C14%2014%2C14%2014%2C4%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-l:after,.ui-alt-icon.ui-icon-arrow-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%227%2C5%207%2C0%200%2C7%207%2C14%207%2C9%2014%2C9%2014%2C5%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-r:after,.ui-alt-icon.ui-icon-arrow-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C7%207%2C0%207%2C5%200%2C5%200%2C9%207%2C9%207%2C14%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-u:after,.ui-alt-icon.ui-icon-arrow-u:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%227%2C0%200%2C7%205%2C7%205%2C14%209%2C14%209%2C7%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-u-l:after,.ui-alt-icon.ui-icon-arrow-u-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C11%206.5%2C3.5%2010%2C0%200%2C0%200%2C10%203.5%2C6.5%2011%2C14%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-arrow-u-r:after,.ui-alt-icon.ui-icon-arrow-u-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C0%204%2C0%207.5%2C3.5%200%2C11%203%2C14%2010.5%2C6.5%2014%2C10%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-audio:after,.ui-alt-icon.ui-icon-audio:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214.018px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014.018%2014%22%20style%3D%22enable-background%3Anew%200%200%2014.018%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M1%2C4C0.447%2C4%2C0%2C4.447%2C0%2C5v4c0%2C0.553%2C0.447%2C1%2C1%2C1h1l4%2C4V0L2%2C4H1z%20M10.346%2C7c0-1.699-1.042-3.154-2.546-3.867L6.982%2C4.68%20C7.885%2C5.107%2C8.51%2C5.98%2C8.51%2C7S7.885%2C8.893%2C6.982%2C9.32L7.8%2C10.867C9.304%2C10.154%2C10.346%2C8.699%2C10.346%2C7z%20M9.447%2C0.017L8.618%2C1.586%20C10.723%2C2.584%2C12.182%2C4.621%2C12.182%2C7s-1.459%2C4.416-3.563%2C5.414l0.829%2C1.569c2.707-1.283%2C4.57-3.925%2C4.57-6.983%20S12.154%2C1.3%2C9.447%2C0.017z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-back:after,.ui-alt-icon.ui-icon-back:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M5%2C3V0L1%2C4l4%2C4V5c0%2C0%2C6%2C0%2C6%2C3s-5%2C4-5%2C4v2c0%2C0%2C7-1%2C7-6C13%2C4%2C8%2C3%2C5%2C3z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-bars:after,.ui-alt-icon.ui-icon-bars:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M1%2C4h12c0.553%2C0%2C1-0.447%2C1-1s-0.447-1-1-1H1C0.447%2C2%2C0%2C2.447%2C0%2C3S0.447%2C4%2C1%2C4z%20M13%2C6H1C0.447%2C6%2C0%2C6.447%2C0%2C7%20c0%2C0.553%2C0.447%2C1%2C1%2C1h12c0.553%2C0%2C1-0.447%2C1-1C14%2C6.447%2C13.553%2C6%2C13%2C6z%20M13%2C10H1c-0.553%2C0-1%2C0.447-1%2C1s0.447%2C1%2C1%2C1h12%20c0.553%2C0%2C1-0.447%2C1-1S13.553%2C10%2C13%2C10z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-bullets:after,.ui-alt-icon.ui-icon-bullets:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M5%2C4h8c0.553%2C0%2C1-0.447%2C1-1s-0.447-1-1-1H5C4.447%2C2%2C4%2C2.447%2C4%2C3S4.447%2C4%2C5%2C4z%20M13%2C6H5C4.447%2C6%2C4%2C6.447%2C4%2C7%20c0%2C0.553%2C0.447%2C1%2C1%2C1h8c0.553%2C0%2C1-0.447%2C1-1C14%2C6.447%2C13.553%2C6%2C13%2C6z%20M13%2C10H5c-0.553%2C0-1%2C0.447-1%2C1s0.447%2C1%2C1%2C1h8%20c0.553%2C0%2C1-0.447%2C1-1S13.553%2C10%2C13%2C10z%20M1%2C2C0.447%2C2%2C0%2C2.447%2C0%2C3s0.447%2C1%2C1%2C1s1-0.447%2C1-1S1.553%2C2%2C1%2C2z%20M1%2C6C0.447%2C6%2C0%2C6.447%2C0%2C7%20c0%2C0.553%2C0.447%2C1%2C1%2C1s1-0.447%2C1-1C2%2C6.447%2C1.553%2C6%2C1%2C6z%20M1%2C10c-0.553%2C0-1%2C0.447-1%2C1s0.447%2C1%2C1%2C1s1-0.447%2C1-1S1.553%2C10%2C1%2C10z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-calendar:after,.ui-alt-icon.ui-icon-calendar:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M0%2C8h2V6H0V8z%20M3%2C8h2V6H3V8z%20M6%2C8h2V6H6V8z%20M9%2C8h2V6H9V8z%20M12%2C8h2V6h-2V8z%20M0%2C11h2V9H0V11z%20M3%2C11h2V9H3V11z%20M6%2C11h2V9H6V11z%20%20M9%2C11h2V9H9V11z%20M12%2C11h2V9h-2V11z%20M0%2C14h2v-2H0V14z%20M3%2C14h2v-2H3V14z%20M6%2C14h2v-2H6V14z%20M9%2C14h2v-2H9V14z%20M12%2C1%20c0-0.553-0.447-1-1-1s-1%2C0.447-1%2C1H4c0-0.553-0.447-1-1-1S2%2C0.447%2C2%2C1H0v4h14V1H12z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-camera:after,.ui-alt-icon.ui-icon-camera:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M12%2C2.5H9.908c-0.206-0.581-0.756-1-1.408-1h-3c-0.652%2C0-1.202%2C0.419-1.408%2C1H2c-1.104%2C0-2%2C0.896-2%2C2v6c0%2C1.104%2C0.896%2C2%2C2%2C2%20h10c1.104%2C0%2C2-0.896%2C2-2v-6C14%2C3.396%2C13.104%2C2.5%2C12%2C2.5z%20M7%2C10.5c-1.657%2C0-3-1.344-3-3c0-1.657%2C1.343-3%2C3-3s3%2C1.343%2C3%2C3%20C10%2C9.156%2C8.657%2C10.5%2C7%2C10.5z%20M7%2C5.5c-1.104%2C0-2%2C0.896-2%2C2c0%2C1.104%2C0.896%2C2%2C2%2C2c1.104%2C0%2C2-0.896%2C2-2C9%2C6.396%2C8.104%2C5.5%2C7%2C5.5z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-carat-d:after,.ui-alt-icon.ui-icon-carat-d:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2211.949%2C3.404%207%2C8.354%202.05%2C3.404%20-0.071%2C5.525%207%2C12.596%2014.07%2C5.525%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-carat-l:after,.ui-alt-icon.ui-icon-carat-l:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2210.596%2C11.949%205.646%2C7%2010.596%2C2.05%208.475%2C-0.071%201.404%2C7%208.475%2C14.07%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-carat-r:after,.ui-alt-icon.ui-icon-carat-r:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%223.404%2C2.051%208.354%2C7%203.404%2C11.95%205.525%2C14.07%2012.596%2C7%205.525%2C-0.071%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-carat-u:after,.ui-alt-icon.ui-icon-carat-u:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%222.051%2C10.596%207%2C5.646%2011.95%2C10.596%2014.07%2C8.475%207%2C1.404%20-0.071%2C8.475%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-check:after,.ui-alt-icon.ui-icon-check:after,html .ui-alt-icon .ui-btn.ui-checkbox-on:after,html .ui-alt-icon.ui-btn.ui-checkbox-on:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C4%2011%2C1%205.003%2C6.997%203%2C5%200%2C8%204.966%2C13%204.983%2C12.982%205%2C13%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-clock:after,.ui-alt-icon.ui-icon-clock:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C0C3.134%2C0%2C0%2C3.134%2C0%2C7s3.134%2C7%2C7%2C7s7-3.134%2C7-7S10.866%2C0%2C7%2C0z%20M7%2C12c-2.762%2C0-5-2.238-5-5s2.238-5%2C5-5s5%2C2.238%2C5%2C5%20S9.762%2C12%2C7%2C12z%20M9%2C6H8V4c0-0.553-0.447-1-1-1S6%2C3.447%2C6%2C4v3c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1S9.553%2C6%2C9%2C6z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-cloud:after,.ui-alt-icon.ui-icon-cloud:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M14%2C9.5c0-0.793-0.465-1.473-1.134-1.795C12.949%2C7.484%2C13%2C7.249%2C13%2C7c0-1.104-0.896-2-2-2c-0.158%2C0-0.311%2C0.023-0.457%2C0.058%20C9.816%2C3.549%2C8.286%2C2.5%2C6.5%2C2.5c-2.33%2C0-4.224%2C1.777-4.454%2C4.046C0.883%2C6.76%2C0%2C7.773%2C0%2C9c0%2C1.381%2C1.119%2C2.5%2C2.5%2C2.5h10v-0.07%20C13.361%2C11.206%2C14%2C10.432%2C14%2C9.5z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-comment:after,.ui-alt-icon.ui-icon-comment:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M12%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2v7c0%2C1.104%2C0.896%2C2%2C2%2C2h1v3l3-3h6c1.104%2C0%2C2-0.896%2C2-2V2C14%2C0.896%2C13.104%2C0%2C12%2C0z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-delete:after,.ui-alt-icon.ui-icon-delete:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C3%2011%2C0%207%2C4%203%2C0%200%2C3%204%2C7%200%2C11%203%2C14%207%2C10%2011%2C14%2014%2C11%2010%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-edit:after,.ui-alt-icon.ui-icon-edit:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M1%2C10l-1%2C4l4-1l7-7L8%2C3L1%2C10z%20M11%2C0L9%2C2l3%2C3l2-2L11%2C0z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-eye:after,.ui-alt-icon.ui-icon-eye:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C2C3%2C2%2C0%2C7%2C0%2C7s3%2C5%2C7%2C5s7-5%2C7-5S11%2C2%2C7%2C2z%20M7%2C10c-1.657%2C0-3-1.344-3-3c0-1.657%2C1.343-3%2C3-3s3%2C1.343%2C3%2C3%20C10%2C8.656%2C8.657%2C10%2C7%2C10z%20M7%2C6C6.448%2C6%2C6%2C6.447%2C6%2C7c0%2C0.553%2C0.448%2C1%2C1%2C1s1-0.447%2C1-1C8%2C6.447%2C7.552%2C6%2C7%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-forbidden:after,.ui-alt-icon.ui-icon-forbidden:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M12.601%2C11.187C13.476%2C10.018%2C14%2C8.572%2C14%2C7c0-3.866-3.134-7-7-7C5.428%2C0%2C3.982%2C0.524%2C2.813%2C1.399L2.757%2C1.343L2.053%2C2.048%20L2.048%2C2.053L1.343%2C2.758l0.056%2C0.056C0.524%2C3.982%2C0%2C5.428%2C0%2C7c0%2C3.866%2C3.134%2C7%2C7%2C7c1.572%2C0%2C3.018-0.524%2C4.187-1.399l0.056%2C0.057%20l0.705-0.705l0.005-0.005l0.705-0.705L12.601%2C11.187z%20M7%2C2c2.761%2C0%2C5%2C2.238%2C5%2C5c0%2C1.019-0.308%2C1.964-0.832%2C2.754L4.246%2C2.832%20C5.036%2C2.308%2C5.981%2C2%2C7%2C2z%20M7%2C12c-2.761%2C0-5-2.238-5-5c0-1.019%2C0.308-1.964%2C0.832-2.754l6.922%2C6.922C8.964%2C11.692%2C8.019%2C12%2C7%2C12z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-forward:after,.ui-alt-icon.ui-icon-forward:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M13%2C4L9%2C0v3C6%2C3%2C1%2C4%2C1%2C8c0%2C5%2C7%2C6%2C7%2C6v-2c0%2C0-5-1-5-4s6-3%2C6-3v3L13%2C4z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-gear:after,.ui-alt-icon.ui-icon-gear:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M13.621%2C5.904l-1.036-0.259c-0.168-0.042-0.303-0.168-0.355-0.332c-0.092-0.284-0.205-0.559-0.339-0.82%20c-0.079-0.153-0.073-0.337%2C0.017-0.486l0.549-0.915c0.118-0.196%2C0.088-0.448-0.075-0.61l-0.862-0.863%20c-0.162-0.163-0.414-0.193-0.611-0.075l-0.916%2C0.55C9.844%2C2.182%2C9.659%2C2.188%2C9.506%2C2.109C9.244%2C1.975%2C8.97%2C1.861%2C8.686%2C1.77%20c-0.165-0.052-0.29-0.187-0.332-0.354L8.095%2C0.379C8.039%2C0.156%2C7.839%2C0%2C7.609%2C0H6.391c-0.229%2C0-0.43%2C0.156-0.485%2C0.379L5.646%2C1.415%20C5.604%2C1.582%2C5.479%2C1.718%2C5.313%2C1.77c-0.284%2C0.092-0.559%2C0.206-0.82%2C0.34C4.339%2C2.188%2C4.155%2C2.182%2C4.007%2C2.093L3.092%2C1.544%20c-0.196-0.118-0.448-0.087-0.61%2C0.075L1.619%2C2.481C1.457%2C2.644%2C1.426%2C2.896%2C1.544%2C3.093l0.549%2C0.914%20c0.089%2C0.148%2C0.095%2C0.332%2C0.017%2C0.486C1.975%2C4.755%2C1.861%2C5.029%2C1.77%2C5.314c-0.053%2C0.164-0.188%2C0.29-0.354%2C0.332L0.379%2C5.905%20C0.156%2C5.961%2C0%2C6.161%2C0%2C6.391v1.219c0%2C0.229%2C0.156%2C0.43%2C0.379%2C0.485l1.036%2C0.26C1.582%2C8.396%2C1.717%2C8.521%2C1.77%2C8.687%20c0.092%2C0.284%2C0.205%2C0.559%2C0.34%2C0.82C2.188%2C9.66%2C2.182%2C9.844%2C2.093%2C9.993l-0.549%2C0.915c-0.118%2C0.195-0.087%2C0.448%2C0.075%2C0.61%20l0.862%2C0.862c0.162%2C0.163%2C0.414%2C0.193%2C0.61%2C0.075l0.915-0.549c0.148-0.089%2C0.332-0.095%2C0.486-0.017%20c0.262%2C0.135%2C0.536%2C0.248%2C0.82%2C0.34c0.165%2C0.053%2C0.291%2C0.187%2C0.332%2C0.354l0.259%2C1.036C5.96%2C13.844%2C6.16%2C14%2C6.39%2C14h1.22%20c0.229%2C0%2C0.43-0.156%2C0.485-0.379l0.259-1.036c0.042-0.167%2C0.168-0.302%2C0.333-0.354c0.284-0.092%2C0.559-0.205%2C0.82-0.34%20c0.154-0.078%2C0.338-0.072%2C0.486%2C0.017l0.914%2C0.549c0.197%2C0.118%2C0.449%2C0.088%2C0.611-0.074l0.862-0.863%20c0.163-0.162%2C0.193-0.415%2C0.075-0.611l-0.549-0.915c-0.089-0.148-0.096-0.332-0.017-0.485c0.134-0.263%2C0.248-0.536%2C0.339-0.82%20c0.053-0.165%2C0.188-0.291%2C0.355-0.333l1.036-0.259C13.844%2C8.039%2C14%2C7.839%2C14%2C7.609V6.39C14%2C6.16%2C13.844%2C5.96%2C13.621%2C5.904z%20M7%2C10%20c-1.657%2C0-3-1.343-3-3s1.343-3%2C3-3s3%2C1.343%2C3%2C3S8.657%2C10%2C7%2C10z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-grid:after,.ui-alt-icon.ui-icon-grid:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M3%2C0H1C0.447%2C0%2C0%2C0.447%2C0%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C4%2C0.447%2C3.553%2C0%2C3%2C0z%20M8%2C0H6%20C5.447%2C0%2C5%2C0.447%2C5%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C9%2C0.447%2C8.553%2C0%2C8%2C0z%20M13%2C0h-2c-0.553%2C0-1%2C0.447-1%2C1v2%20c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V1C14%2C0.447%2C13.553%2C0%2C13%2C0z%20M3%2C5H1C0.447%2C5%2C0%2C5.447%2C0%2C6v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2%20c0.553%2C0%2C1-0.447%2C1-1V6C4%2C5.447%2C3.553%2C5%2C3%2C5z%20M8%2C5H6C5.447%2C5%2C5%2C5.447%2C5%2C6v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V6%20C9%2C5.447%2C8.553%2C5%2C8%2C5z%20M13%2C5h-2c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1V6C14%2C5.447%2C13.553%2C5%2C13%2C5z%20M3%2C10%20H1c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1v-2C4%2C10.447%2C3.553%2C10%2C3%2C10z%20M8%2C10H6c-0.553%2C0-1%2C0.447-1%2C1v2%20c0%2C0.553%2C0.447%2C1%2C1%2C1h2c0.553%2C0%2C1-0.447%2C1-1v-2C9%2C10.447%2C8.553%2C10%2C8%2C10z%20M13%2C10h-2c-0.553%2C0-1%2C0.447-1%2C1v2c0%2C0.553%2C0.447%2C1%2C1%2C1h2%20c0.553%2C0%2C1-0.447%2C1-1v-2C14%2C10.447%2C13.553%2C10%2C13%2C10z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-heart:after,.ui-alt-icon.ui-icon-heart:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C1.958c-2-3-7-2.128-7%2C1.872c0%2C3%2C4%2C7%2C4%2C7s2.417%2C2.48%2C3%2C3c0.583-0.52%2C3-3%2C3-3s4-4%2C4-7C14-0.169%2C9-1.042%2C7%2C1.958z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-home:after,.ui-alt-icon.ui-icon-home:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%227%2C0%200%2C7%202%2C7%202%2C14%205%2C14%205%2C9%209%2C9%209%2C14%2012%2C14%2012%2C7%2014%2C7%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-info:after,.ui-alt-icon.ui-icon-info:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C0C3.134%2C0%2C0%2C3.134%2C0%2C7s3.134%2C7%2C7%2C7s7-3.134%2C7-7S10.866%2C0%2C7%2C0z%20M7%2C2c0.552%2C0%2C1%2C0.447%2C1%2C1S7.552%2C4%2C7%2C4S6%2C3.553%2C6%2C3%20S6.448%2C2%2C7%2C2z%20M9%2C11H5v-1h1V6H5V5h3v5h1V11z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-location:after,.ui-alt-icon.ui-icon-location:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M7%2C0C4.791%2C0%2C3%2C1.791%2C3%2C4c0%2C2%2C4%2C10%2C4%2C10s4-8%2C4-10C11%2C1.791%2C9.209%2C0%2C7%2C0z%20M7%2C6C5.896%2C6%2C5%2C5.104%2C5%2C4s0.896-2%2C2-2%20c1.104%2C0%2C2%2C0.896%2C2%2C2S8.104%2C6%2C7%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-lock:after,.ui-alt-icon.ui-icon-lock:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M12%2C6V5c0-2.762-2.238-5-5-5C4.239%2C0%2C2%2C2.238%2C2%2C5v1H1v8h12V6H12z%20M7.5%2C9.848V12h-1V9.848C6.207%2C9.673%2C6%2C9.366%2C6%2C9%20c0-0.553%2C0.448-1%2C1-1s1%2C0.447%2C1%2C1C8%2C9.366%2C7.793%2C9.673%2C7.5%2C9.848z%20M10%2C6H4V5c0-1.657%2C1.343-3%2C3-3s3%2C1.343%2C3%2C3V6z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-mail:after,.ui-alt-icon.ui-icon-mail:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M0%2C3.75V12h14V3.75L7%2C9L0%2C3.75z%20M14%2C2H0l7%2C5L14%2C2z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-minus:after,.ui-alt-icon.ui-icon-minus:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Crect%20y%3D%225%22%20width%3D%2214%22%20height%3D%224%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-navigation:after,.ui-alt-icon.ui-icon-navigation:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2213%2C1%200%2C6%207%2C7%208%2C14%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-phone:after,.ui-alt-icon.ui-icon-phone:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M6.949%2C9.182C6.175%2C8.549%2C5.281%2C7.697%2C4.507%2C6.736C3.963%2C6.063%2C3.483%2C5.355%2C3.979%2C4.858l-3.482-3.48%20c-0.508%2C0.634-1.633%2C3.654%2C3.188%2C8.598c5.08%2C5.211%2C8.356%2C4.097%2C8.92%2C3.511l-3.396-3.399C8.734%2C10.561%2C8.123%2C10.139%2C6.949%2C9.182z%20%20M13.83%2C11.512v-0.004c0%2C0-2.648-2.646-2.649-2.647c-0.21-0.212-0.546-0.205-0.754%2C0.002L9.465%2C9.823l3.402%2C3.407%20c0%2C0%2C0.963-0.961%2C0.961-0.961l0.002-0.002C14.053%2C12.049%2C14.031%2C11.713%2C13.83%2C11.512z%20M5.202%2C3.636V3.634%20c0.222-0.222%2C0.2-0.557%2C0-0.758V2.873c0%2C0-2.726-2.725-2.727-2.726c-0.21-0.21-0.545-0.205-0.753%2C0.001L0.761%2C1.113L4.24%2C4.595%20C4.241%2C4.596%2C5.202%2C3.637%2C5.202%2C3.636z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-plus:after,.ui-alt-icon.ui-icon-plus:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C5%209%2C5%209%2C0%205%2C0%205%2C5%200%2C5%200%2C9%205%2C9%205%2C14%209%2C14%209%2C9%2014%2C9%20%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-power:after,.ui-alt-icon.ui-icon-power:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M11.243%2C2.408c-0.392-0.401-1.024-0.401-1.415%2C0c-0.391%2C0.401-0.391%2C1.054%2C0%2C1.455C10.584%2C4.642%2C11%2C5.675%2C11%2C6.773%20s-0.416%2C2.133-1.172%2C2.91c-1.512%2C1.558-4.145%2C1.558-5.656%2C0C3.416%2C8.904%2C3%2C7.872%2C3%2C6.773C3%2C5.673%2C3.416%2C4.64%2C4.172%2C3.863%20c0.39-0.401%2C0.39-1.054%2C0-1.455c-0.391-0.401-1.024-0.401-1.415%2C0C1.624%2C3.574%2C1%2C5.125%2C1%2C6.773c0%2C1.647%2C0.624%2C3.199%2C1.757%2C4.365%20c1.134%2C1.166%2C2.64%2C1.809%2C4.243%2C1.809c1.604%2C0%2C3.109-0.645%2C4.243-1.811C12.376%2C9.975%2C13%2C8.423%2C13%2C6.773%20C13%2C5.125%2C12.376%2C3.574%2C11.243%2C2.408z%20M7%2C8.053c0.553%2C0%2C1-0.445%2C1-1v-6c0-0.553-0.447-1-1-1c-0.553%2C0-1%2C0.447-1%2C1v6%20C6%2C7.604%2C6.447%2C8.053%2C7%2C8.053z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-recycle:after,.ui-alt-icon.ui-icon-recycle:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M3%2C7h1L2%2C4L0%2C7h1c0%2C3.313%2C2.687%2C6%2C6%2C6c0.702%2C0%2C1.374-0.127%2C2-0.35v-2.205C8.41%2C10.789%2C7.732%2C11%2C7%2C11C4.791%2C11%2C3%2C9.209%2C3%2C7z%20%20M13%2C7c0-3.313-2.688-6-6-6C6.298%2C1%2C5.626%2C1.127%2C5%2C1.349v2.206C5.59%2C3.211%2C6.268%2C3%2C7%2C3c2.209%2C0%2C4%2C1.791%2C4%2C4h-1l2%2C3l2-3H13z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-refresh:after,.ui-alt-icon.ui-icon-refresh:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214.001px%22%20height%3D%2214.002px%22%20viewBox%3D%220%200%2014.001%2014.002%22%20style%3D%22enable-background%3Anew%200%200%2014.001%2014.002%3B%22%20%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M14.001%2C6.001v-6l-2.06%2C2.06c-0.423-0.424-0.897-0.809-1.44-1.122C7.153-0.994%2C2.872%2C0.153%2C0.939%2C3.501%20c-1.933%2C3.348-0.786%2C7.629%2C2.562%2C9.562c3.348%2C1.933%2C7.629%2C0.785%2C9.562-2.562l-1.732-1c-1.381%2C2.392-4.438%2C3.211-6.83%2C1.83%20s-3.211-4.438-1.83-6.83s4.438-3.211%2C6.83-1.83c0.389%2C0.225%2C0.718%2C0.506%2C1.02%2C0.81l-2.52%2C2.52H14.001z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-search:after,.ui-alt-icon.ui-icon-search:after,.ui-input-search:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M10.171%2C8.766c0.617-0.888%2C0.979-1.964%2C0.979-3.126c0-3.037-2.463-5.5-5.5-5.5s-5.5%2C2.463-5.5%2C5.5s2.463%2C5.5%2C5.5%2C5.5%20c1.152%2C0%2C2.223-0.355%2C3.104-0.962l3.684%2C3.683l1.414-1.414L10.171%2C8.766z%20M5.649%2C9.14c-1.933%2C0-3.5-1.567-3.5-3.5%20c0-1.933%2C1.567-3.5%2C3.5-3.5c1.933%2C0%2C3.5%2C1.567%2C3.5%2C3.5C9.149%2C7.572%2C7.582%2C9.14%2C5.649%2C9.14z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-shop:after,.ui-alt-icon.ui-icon-shop:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M10%2C4V3c0-1.657-1.343-3-3-3S4%2C1.343%2C4%2C3v1H1v10h12V4H10z%20M4.5%2C6C4.224%2C6%2C4%2C5.776%2C4%2C5.5S4.224%2C5%2C4.5%2C5S5%2C5.224%2C5%2C5.5%20S4.776%2C6%2C4.5%2C6z%20M5%2C3c0-1.104%2C0.896-2%2C2-2c1.104%2C0%2C2%2C0.896%2C2%2C2v1H5V3z%20M9.5%2C6C9.225%2C6%2C9%2C5.776%2C9%2C5.5S9.225%2C5%2C9.5%2C5S10%2C5.224%2C10%2C5.5%20S9.775%2C6%2C9.5%2C6z%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-star:after,.ui-alt-icon.ui-icon-star:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20points%3D%2214%2C5%209%2C5%207%2C0%205%2C5%200%2C5%204%2C8%202.625%2C13%207%2C10%2011.375%2C13%2010%2C8%20%22%2F%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-tag:after,.ui-alt-icon.ui-icon-tag:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M5%2C0H0v5l9%2C9l5-5L5%2C0z%20M3%2C4C2.447%2C4%2C2%2C3.553%2C2%2C3s0.447-1%2C1-1s1%2C0.447%2C1%2C1S3.553%2C4%2C3%2C4z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-user:after,.ui-alt-icon.ui-icon-user:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%20style%3D%22enable-background%3Anew%200%200%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M8.851%2C10.101c-0.18-0.399-0.2-0.763-0.153-1.104C9.383%2C8.49%2C9.738%2C7.621%2C9.891%2C6.465C10.493%2C6.355%2C10.5%2C5.967%2C10.5%2C5.5%20c0-0.437-0.008-0.804-0.502-0.94C9.999%2C4.539%2C10%2C4.521%2C10%2C4.5c0-2.103-1-4-2-4C8%2C0.5%2C7.5%2C0%2C6.5%2C0C5%2C0%2C4%2C1.877%2C4%2C4.5%20c0%2C0.021%2C0.001%2C0.039%2C0.002%2C0.06C3.508%2C4.696%2C3.5%2C5.063%2C3.5%2C5.5c0%2C0.467%2C0.007%2C0.855%2C0.609%2C0.965%20C4.262%2C7.621%2C4.617%2C8.49%2C5.303%2C8.997c0.047%2C0.341%2C0.026%2C0.704-0.153%2C1.104C1.503%2C10.503%2C0%2C12%2C0%2C12v2h14v-2%20C14%2C12%2C12.497%2C10.503%2C8.851%2C10.101z%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.ui-alt-icon .ui-icon-video:after,.ui-alt-icon.ui-icon-video:after{background-image:url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22iso-8859-1%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%20-2%2014%2014%22%20style%3D%22enable-background%3Anew%200%20-2%2014%2014%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpath%20d%3D%22M8%2C0H2C0.896%2C0%2C0%2C0.896%2C0%2C2v6c0%2C1.104%2C0.896%2C2%2C2%2C2h6c1.104%2C0%2C2-0.896%2C2-2V5V2C10%2C0.896%2C9.104%2C0%2C8%2C0z%20M10%2C5l4%2C4V1L10%2C5z%22%2F%3E%3C%2Fsvg%3E)}.ui-nosvg .ui-icon-action:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/action-white.png)}.ui-nosvg .ui-icon-alert:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/alert-white.png)}.ui-nosvg .ui-icon-arrow-d-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-l-white.png)}.ui-nosvg .ui-icon-arrow-d-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-r-white.png)}.ui-nosvg .ui-icon-arrow-d:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-white.png)}.ui-nosvg .ui-icon-arrow-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-l-white.png)}.ui-nosvg .ui-icon-arrow-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-r-white.png)}.ui-nosvg .ui-icon-arrow-u-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-l-white.png)}.ui-nosvg .ui-icon-arrow-u-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-r-white.png)}.ui-nosvg .ui-icon-arrow-u:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-white.png)}.ui-nosvg .ui-icon-audio:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/audio-white.png)}.ui-nosvg .ui-icon-back:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/back-white.png)}.ui-nosvg .ui-icon-bars:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/bars-white.png)}.ui-nosvg .ui-icon-bullets:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/bullets-white.png)}.ui-nosvg .ui-icon-calendar:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/calendar-white.png)}.ui-nosvg .ui-icon-camera:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/camera-white.png)}.ui-nosvg .ui-icon-carat-d:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-d-white.png)}.ui-nosvg .ui-icon-carat-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-l-white.png)}.ui-nosvg .ui-icon-carat-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-r-white.png)}.ui-nosvg .ui-icon-carat-u:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-u-white.png)}.ui-nosvg .ui-icon-check:after,html.ui-nosvg .ui-btn.ui-checkbox-on:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/check-white.png)}.ui-nosvg .ui-icon-clock:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/clock-white.png)}.ui-nosvg .ui-icon-cloud:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/cloud-white.png)}.ui-nosvg .ui-icon-comment:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/comment-white.png)}.ui-nosvg .ui-icon-delete:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/delete-white.png)}.ui-nosvg .ui-icon-edit:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/edit-white.png)}.ui-nosvg .ui-icon-eye:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/eye-white.png)}.ui-nosvg .ui-icon-forbidden:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/forbidden-white.png)}.ui-nosvg .ui-icon-forward:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/forward-white.png)}.ui-nosvg .ui-icon-gear:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/gear-white.png)}.ui-nosvg .ui-icon-grid:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/grid-white.png)}.ui-nosvg .ui-icon-heart:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/heart-white.png)}.ui-nosvg .ui-icon-home:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/home-white.png)}.ui-nosvg .ui-icon-info:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/info-white.png)}.ui-nosvg .ui-icon-location:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/location-white.png)}.ui-nosvg .ui-icon-lock:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/lock-white.png)}.ui-nosvg .ui-icon-mail:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/mail-white.png)}.ui-nosvg .ui-icon-minus:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/minus-white.png)}.ui-nosvg .ui-icon-navigation:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/navigation-white.png)}.ui-nosvg .ui-icon-phone:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/phone-white.png)}.ui-nosvg .ui-icon-plus:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/plus-white.png)}.ui-nosvg .ui-icon-power:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/power-white.png)}.ui-nosvg .ui-icon-recycle:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/recycle-white.png)}.ui-nosvg .ui-icon-refresh:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/refresh-white.png)}.ui-nosvg .ui-icon-search:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/search-white.png)}.ui-nosvg .ui-icon-shop:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/shop-white.png)}.ui-nosvg .ui-icon-star:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/star-white.png)}.ui-nosvg .ui-icon-tag:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/tag-white.png)}.ui-nosvg .ui-icon-user:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/user-white.png)}.ui-nosvg .ui-icon-video:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/video-white.png)}.ui-nosvg .ui-alt-icon .ui-icon-action:after,.ui-nosvg .ui-alt-icon.ui-icon-action:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/action-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-alert:after,.ui-nosvg .ui-alt-icon.ui-icon-alert:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/alert-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-d:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-d:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-d-l:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-d-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-l-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-d-r:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-d-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-d-r-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-l:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-l-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-r:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-r-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-u:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-u:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-u-l:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-u-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-l-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-arrow-u-r:after,.ui-nosvg .ui-alt-icon.ui-icon-arrow-u-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/arrow-u-r-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-audio:after,.ui-nosvg .ui-alt-icon.ui-icon-audio:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/audio-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-back:after,.ui-nosvg .ui-alt-icon.ui-icon-back:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/back-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-bars:after,.ui-nosvg .ui-alt-icon.ui-icon-bars:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/bars-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-bullets:after,.ui-nosvg .ui-alt-icon.ui-icon-bullets:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/bullets-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-calendar:after,.ui-nosvg .ui-alt-icon.ui-icon-calendar:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/calendar-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-camera:after,.ui-nosvg .ui-alt-icon.ui-icon-camera:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/camera-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-carat-d:after,.ui-nosvg .ui-alt-icon.ui-icon-carat-d:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-d-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-carat-l:after,.ui-nosvg .ui-alt-icon.ui-icon-carat-l:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-l-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-carat-r:after,.ui-nosvg .ui-alt-icon.ui-icon-carat-r:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-r-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-carat-u:after,.ui-nosvg .ui-alt-icon.ui-icon-carat-u:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/carat-u-black.png)}.ui-nosvg .ui-alt-icon .ui-btn.ui-checkbox-on:after,.ui-nosvg .ui-alt-icon .ui-icon-check:after,.ui-nosvg .ui-alt-icon.ui-btn.ui-checkbox-on:after,.ui-nosvg .ui-alt-icon.ui-icon-check:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/check-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-clock:after,.ui-nosvg .ui-alt-icon.ui-icon-clock:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/clock-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-cloud:after,.ui-nosvg .ui-alt-icon.ui-icon-cloud:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/cloud-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-comment:after,.ui-nosvg .ui-alt-icon.ui-icon-comment:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/comment-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-delete:after,.ui-nosvg .ui-alt-icon.ui-icon-delete:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/delete-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-edit:after,.ui-nosvg .ui-alt-icon.ui-icon-edit:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/edit-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-eye:after,.ui-nosvg .ui-alt-icon.ui-icon-eye:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/eye-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-forbidden:after,.ui-nosvg .ui-alt-icon.ui-icon-forbidden:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/forbidden-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-forward:after,.ui-nosvg .ui-alt-icon.ui-icon-forward:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/forward-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-gear:after,.ui-nosvg .ui-alt-icon.ui-icon-gear:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/gear-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-grid:after,.ui-nosvg .ui-alt-icon.ui-icon-grid:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/grid-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-heart:after,.ui-nosvg .ui-alt-icon.ui-icon-heart:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/heart-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-home:after,.ui-nosvg .ui-alt-icon.ui-icon-home:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/home-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-info:after,.ui-nosvg .ui-alt-icon.ui-icon-info:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/info-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-location:after,.ui-nosvg .ui-alt-icon.ui-icon-location:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/location-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-lock:after,.ui-nosvg .ui-alt-icon.ui-icon-lock:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/lock-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-mail:after,.ui-nosvg .ui-alt-icon.ui-icon-mail:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/mail-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-minus:after,.ui-nosvg .ui-alt-icon.ui-icon-minus:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/minus-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-navigation:after,.ui-nosvg .ui-alt-icon.ui-icon-navigation:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/navigation-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-phone:after,.ui-nosvg .ui-alt-icon.ui-icon-phone:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/phone-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-plus:after,.ui-nosvg .ui-alt-icon.ui-icon-plus:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/plus-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-power:after,.ui-nosvg .ui-alt-icon.ui-icon-power:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/power-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-recycle:after,.ui-nosvg .ui-alt-icon.ui-icon-recycle:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/recycle-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-refresh:after,.ui-nosvg .ui-alt-icon.ui-icon-refresh:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/refresh-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-search:after,.ui-nosvg .ui-alt-icon.ui-icon-search:after,.ui-nosvg .ui-input-search:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/search-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-shop:after,.ui-nosvg .ui-alt-icon.ui-icon-shop:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/shop-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-star:after,.ui-nosvg .ui-alt-icon.ui-icon-star:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/star-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-tag:after,.ui-nosvg .ui-alt-icon.ui-icon-tag:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/tag-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-user:after,.ui-nosvg .ui-alt-icon.ui-icon-user:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/user-black.png)}.ui-nosvg .ui-alt-icon .ui-icon-video:after,.ui-nosvg .ui-alt-icon.ui-icon-video:after{background-image:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/icons-png/video-black.png)}html{font-size:100%}.ui-btn,body,button,input,select,textarea{font-size:1em;line-height:1.3;font-family:sans-serif}.ui-input-search input,.ui-input-text input,legend{color:inherit;text-shadow:inherit}.ui-mobile label,div.ui-controlgroup-label{font-weight:400;font-size:16px}.ui-field-contain{border-bottom-color:#828282;border-bottom-color:rgba(0,0,0,.15);border-bottom-width:1px;border-bottom-style:solid}.table-stripe tbody tr:last-child,.table-stripe thead th,.table-stroke thead th{border-bottom:1px solid #d6d6d6;border-bottom:1px solid rgba(0,0,0,.1)}.table-stroke tbody td,.table-stroke tbody th{border-bottom:1px solid #e6e6e6;border-bottom:1px solid rgba(0,0,0,.05)}.table-stripe.table-stroke tbody tr:last-child td,.table-stripe.table-stroke tbody tr:last-child th{border-bottom:0}.table-stripe tbody tr:nth-child(odd) td,.table-stripe tbody tr:nth-child(odd) th{background-color:#eee;background-color:rgba(0,0,0,.04)}.ui-btn,label.ui-btn{font-weight:700;border-width:1px;border-style:solid}.ui-btn:link{text-decoration:none!important}.ui-btn-active{cursor:pointer}.ui-corner-all{-webkit-border-radius:.3125em;border-radius:.3125em}.ui-btn-corner-all,.ui-btn.ui-corner-all,.ui-flipswitch.ui-corner-all,.ui-li-count,.ui-slider-track.ui-corner-all{-webkit-border-radius:.3125em;border-radius:.3125em}.ui-btn-icon-notext.ui-btn-corner-all,.ui-btn-icon-notext.ui-corner-all{-webkit-border-radius:1em;border-radius:1em}.ui-btn-corner-all,.ui-corner-all{-webkit-background-clip:padding;background-clip:padding-box}.ui-popup.ui-corner-all>.ui-popup-arrow-guide{left:.6em;right:.6em;top:.6em;bottom:.6em}.ui-shadow{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);-moz-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}.ui-shadow-inset{-webkit-box-shadow:inset 0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:inset 0 1px 3px rgba(0,0,0,.2);box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}.ui-overlay-shadow{-webkit-box-shadow:0 0 12px rgba(0,0,0,.6);-moz-box-shadow:0 0 12px rgba(0,0,0,.6);box-shadow:0 0 12px rgba(0,0,0,.6)}.ui-btn-icon-bottom:after,.ui-btn-icon-left:after,.ui-btn-icon-notext:after,.ui-btn-icon-right:after,.ui-btn-icon-top:after{background-color:#666;background-color:rgba(0,0,0,.3);background-position:center center;background-repeat:no-repeat;-webkit-border-radius:1em;border-radius:1em}.ui-alt-icon .ui-btn:after,.ui-alt-icon.ui-btn:after,html .ui-alt-icon .ui-checkbox-off:after,html .ui-alt-icon .ui-radio-off:after,html .ui-alt-icon.ui-checkbox-off:after,html .ui-alt-icon.ui-radio-off:after{background-color:#666;background-color:rgba(0,0,0,.15)}.ui-nodisc-icon .ui-btn:after,.ui-nodisc-icon.ui-btn:after{background-color:transparent}.ui-shadow-icon .ui-btn:after,.ui-shadow-icon.ui-btn:after{-webkit-box-shadow:0 1px 0 rgba(255,255,255,.3);-moz-box-shadow:0 1px 0 rgba(255,255,255,.3);box-shadow:0 1px 0 rgba(255,255,255,.3)}.ui-btn.ui-checkbox-off:after,.ui-btn.ui-checkbox-on:after,.ui-btn.ui-radio-off:after,.ui-btn.ui-radio-on:after{display:block;width:18px;height:18px;margin:-9px 2px 0 2px}.ui-btn.ui-radio-off:after,.ui-checkbox-off:after{filter:Alpha(Opacity=30);opacity:.3}.ui-btn.ui-checkbox-off:after,.ui-btn.ui-checkbox-on:after{-webkit-border-radius:.1875em;border-radius:.1875em}.ui-radio .ui-btn.ui-radio-on:after{background-image:none;background-color:#fff;width:8px;height:8px;border-width:5px;border-style:solid}.ui-alt-icon .ui-btn.ui-radio-on:after,.ui-alt-icon.ui-btn.ui-radio-on:after{background-color:#000}.ui-icon-loading{background:url(jspm_packages/npm/jquery-mobile@1.4.1/dist/images/ajax-loader.gif);background-size:2.875em 2.875em}.ui-bar-a,.ui-page-theme-a .ui-bar-inherit,html .ui-bar-a .ui-bar-inherit,html .ui-body-a .ui-bar-inherit,html body .ui-group-theme-a .ui-bar-inherit{background:#e9e9e9;border-color:#ddd;color:#333;text-shadow:0 1px 0 #eee;font-weight:700}.ui-bar-a{border-width:1px;border-style:solid}.ui-overlay-a,.ui-page-theme-a,.ui-page-theme-a .ui-panel-wrapper{background:#f9f9f9;border-color:#bbb;color:#333;text-shadow:0 1px 0 #f3f3f3}.ui-body-a,.ui-page-theme-a .ui-body-inherit,html .ui-bar-a .ui-body-inherit,html .ui-body-a .ui-body-inherit,html .ui-panel-page-container-a,html body .ui-group-theme-a .ui-body-inherit{background:#fff;border-color:#ddd;color:#333;text-shadow:0 1px 0 #f3f3f3}.ui-body-a{border-width:1px;border-style:solid}.ui-page-theme-a a,html .ui-bar-a a,html .ui-body-a a,html body .ui-group-theme-a a{color:#38c;font-weight:700}.ui-page-theme-a a:visited,html .ui-bar-a a:visited,html .ui-body-a a:visited,html body .ui-group-theme-a a:visited{color:#38c}.ui-page-theme-a a:hover,html .ui-bar-a a:hover,html .ui-body-a a:hover,html body .ui-group-theme-a a:hover{color:#059}.ui-page-theme-a a:active,html .ui-bar-a a:active,html .ui-body-a a:active,html body .ui-group-theme-a a:active{color:#059}.ui-page-theme-a .ui-btn,.ui-page-theme-a .ui-btn:visited,html .ui-bar-a .ui-btn,html .ui-bar-a .ui-btn:visited,html .ui-body-a .ui-btn,html .ui-body-a .ui-btn:visited,html body .ui-group-theme-a .ui-btn,html body .ui-group-theme-a .ui-btn:visited,html head+body .ui-btn.ui-btn-a,html head+body .ui-btn.ui-btn-a:visited{background:#f6f6f6;border-color:#ddd;color:#333;text-shadow:0 1px 0 #f3f3f3}.ui-page-theme-a .ui-btn:hover,html .ui-bar-a .ui-btn:hover,html .ui-body-a .ui-btn:hover,html body .ui-group-theme-a .ui-btn:hover,html head+body .ui-btn.ui-btn-a:hover{background:#ededed;border-color:#ddd;color:#333;text-shadow:0 1px 0 #f3f3f3}.ui-page-theme-a .ui-btn:active,html .ui-bar-a .ui-btn:active,html .ui-body-a .ui-btn:active,html body .ui-group-theme-a .ui-btn:active,html head+body .ui-btn.ui-btn-a:active{background:#e8e8e8;border-color:#ddd;color:#333;text-shadow:0 1px 0 #f3f3f3}.ui-btn.ui-checkbox-on.ui-btn-a:after,.ui-page-theme-a .ui-btn.ui-btn-active,.ui-page-theme-a .ui-checkbox-on:after,.ui-page-theme-a .ui-flipswitch-active,.ui-page-theme-a .ui-slider-track .ui-btn-active,html .ui-bar-a .ui-btn.ui-btn-active,html .ui-bar-a .ui-checkbox-on:after,html .ui-bar-a .ui-flipswitch-active,html .ui-bar-a .ui-slider-track .ui-btn-active,html .ui-body-a .ui-btn.ui-btn-active,html .ui-body-a .ui-checkbox-on:after,html .ui-body-a .ui-flipswitch-active,html .ui-body-a .ui-slider-track .ui-btn-active,html body .ui-flipswitch.ui-bar-a.ui-flipswitch-active,html body .ui-group-theme-a .ui-btn.ui-btn-active,html body .ui-group-theme-a .ui-checkbox-on:after,html body .ui-group-theme-a .ui-flipswitch-active,html body .ui-group-theme-a .ui-slider-track .ui-btn-active,html body div.ui-slider-track.ui-body-a .ui-btn-active,html head+body .ui-btn.ui-btn-a.ui-btn-active{background-color:#38c;border-color:#38c;color:#fff;text-shadow:0 1px 0 #059}.ui-btn.ui-radio-on.ui-btn-a:after,.ui-page-theme-a .ui-radio-on:after,html .ui-bar-a .ui-radio-on:after,html .ui-body-a .ui-radio-on:after,html body .ui-group-theme-a .ui-radio-on:after{border-color:#38c}.ui-page-theme-a .ui-btn:focus,.ui-page-theme-a .ui-focus,html .ui-bar-a .ui-btn:focus,html .ui-bar-a .ui-focus,html .ui-body-a .ui-btn:focus,html .ui-body-a .ui-focus,html body .ui-group-theme-a .ui-btn:focus,html body .ui-group-theme-a .ui-focus,html head+body .ui-body-a.ui-focus,html head+body .ui-btn-a.ui-focus,html head+body .ui-btn.ui-btn-a:focus{-webkit-box-shadow:0 0 12px #38c;-moz-box-shadow:0 0 12px #38c;box-shadow:0 0 12px #38c}.ui-bar-b,.ui-page-theme-b .ui-bar-inherit,html .ui-bar-b .ui-bar-inherit,html .ui-body-b .ui-bar-inherit,html body .ui-group-theme-b .ui-bar-inherit{background:#1d1d1d;border-color:#1b1b1b;color:#fff;text-shadow:0 1px 0 #111;font-weight:700}.ui-bar-b{border-width:1px;border-style:solid}.ui-overlay-b,.ui-page-theme-b,.ui-page-theme-b .ui-panel-wrapper{background:#252525;border-color:#454545;color:#fff;text-shadow:0 1px 0 #111}.ui-body-b,.ui-page-theme-b .ui-body-inherit,html .ui-bar-b .ui-body-inherit,html .ui-body-b .ui-body-inherit,html .ui-panel-page-container-b,html body .ui-group-theme-b .ui-body-inherit{background:#2a2a2a;border-color:#1d1d1d;color:#fff;text-shadow:0 1px 0 #111}.ui-body-b{border-width:1px;border-style:solid}.ui-page-theme-b a,html .ui-bar-b a,html .ui-body-b a,html body .ui-group-theme-b a{color:#2ad;font-weight:700}.ui-page-theme-b a:visited,html .ui-bar-b a:visited,html .ui-body-b a:visited,html body .ui-group-theme-b a:visited{color:#2ad}.ui-page-theme-b a:hover,html .ui-bar-b a:hover,html .ui-body-b a:hover,html body .ui-group-theme-b a:hover{color:#08b}.ui-page-theme-b a:active,html .ui-bar-b a:active,html .ui-body-b a:active,html body .ui-group-theme-b a:active{color:#08b}.ui-page-theme-b .ui-btn,.ui-page-theme-b .ui-btn:visited,html .ui-bar-b .ui-btn,html .ui-bar-b .ui-btn:visited,html .ui-body-b .ui-btn,html .ui-body-b .ui-btn:visited,html body .ui-group-theme-b .ui-btn,html body .ui-group-theme-b .ui-btn:visited,html head+body .ui-btn.ui-btn-b,html head+body .ui-btn.ui-btn-b:visited{background:#333;border-color:#1f1f1f;color:#fff;text-shadow:0 1px 0 #111}.ui-page-theme-b .ui-btn:hover,html .ui-bar-b .ui-btn:hover,html .ui-body-b .ui-btn:hover,html body .ui-group-theme-b .ui-btn:hover,html head+body .ui-btn.ui-btn-b:hover{background:#373737;border-color:#1f1f1f;color:#fff;text-shadow:0 1px 0 #111}.ui-page-theme-b .ui-btn:active,html .ui-bar-b .ui-btn:active,html .ui-body-b .ui-btn:active,html body .ui-group-theme-b .ui-btn:active,html head+body .ui-btn.ui-btn-b:active{background:#404040;border-color:#1f1f1f;color:#fff;text-shadow:0 1px 0 #111}.ui-btn.ui-checkbox-on.ui-btn-b:after,.ui-page-theme-b .ui-btn.ui-btn-active,.ui-page-theme-b .ui-checkbox-on:after,.ui-page-theme-b .ui-flipswitch-active,.ui-page-theme-b .ui-slider-track .ui-btn-active,html .ui-bar-b .ui-btn.ui-btn-active,html .ui-bar-b .ui-checkbox-on:after,html .ui-bar-b .ui-flipswitch-active,html .ui-bar-b .ui-slider-track .ui-btn-active,html .ui-body-b .ui-btn.ui-btn-active,html .ui-body-b .ui-checkbox-on:after,html .ui-body-b .ui-flipswitch-active,html .ui-body-b .ui-slider-track .ui-btn-active,html body .ui-flipswitch.ui-bar-b.ui-flipswitch-active,html body .ui-group-theme-b .ui-btn.ui-btn-active,html body .ui-group-theme-b .ui-checkbox-on:after,html body .ui-group-theme-b .ui-flipswitch-active,html body .ui-group-theme-b .ui-slider-track .ui-btn-active,html body div.ui-slider-track.ui-body-b .ui-btn-active,html head+body .ui-btn.ui-btn-b.ui-btn-active{background-color:#2ad;border-color:#2ad;color:#fff;text-shadow:0 1px 0 #08b}.ui-btn.ui-radio-on.ui-btn-b:after,.ui-page-theme-b .ui-radio-on:after,html .ui-bar-b .ui-radio-on:after,html .ui-body-b .ui-radio-on:after,html body .ui-group-theme-b .ui-radio-on:after{border-color:#2ad}.ui-page-theme-b .ui-btn:focus,.ui-page-theme-b .ui-focus,html .ui-bar-b .ui-btn:focus,html .ui-bar-b .ui-focus,html .ui-body-b .ui-btn:focus,html .ui-body-b .ui-focus,html body .ui-group-theme-b .ui-btn:focus,html body .ui-group-theme-b .ui-focus,html head+body .ui-body-b.ui-focus,html head+body .ui-btn-b.ui-focus,html head+body .ui-btn.ui-btn-b:focus{-webkit-box-shadow:0 0 12px #2ad;-moz-box-shadow:0 0 12px #2ad;box-shadow:0 0 12px #2ad}.ui-disabled,.ui-select .ui-btn.ui-state-disabled,.ui-state-disabled,button[disabled]{filter:Alpha(Opacity=30);opacity:.3;cursor:default!important;pointer-events:none}.ui-btn.ui-focus,.ui-btn:focus{outline:0}.ui-noboxshadow .ui-btn:focus,.ui-noboxshadow .ui-focus,.ui-noboxshadow .ui-overlay-shadow,.ui-noboxshadow .ui-panel,.ui-noboxshadow .ui-shadow,.ui-noboxshadow .ui-shadow-icon .ui-btn:after,.ui-noboxshadow .ui-shadow-icon.ui-btn:after,.ui-noboxshadow .ui-shadow-inset,.ui-noboxshadow input:focus{-webkit-box-shadow:none!important;-moz-box-shadow:none!important;box-shadow:none!important}.ui-noboxshadow .ui-btn:focus,.ui-noboxshadow .ui-focus{outline-width:1px;outline-style:auto}.ui-mobile,.ui-mobile body{height:99.9%}.ui-mobile fieldset,.ui-page{padding:0;margin:0}.ui-mobile a img,.ui-mobile fieldset{border-width:0}.ui-mobile fieldset{min-width:0}@-moz-document url-prefix(){.ui-mobile fieldset{display:table-column;vertical-align:middle}}.ui-mobile-viewport{margin:0;overflow-x:visible;-webkit-text-size-adjust:100%;-ms-text-size-adjust:none;-webkit-tap-highlight-color:transparent}body.ui-mobile-viewport,div.ui-mobile-viewport{overflow-x:hidden}.ui-mobile [data-role=dialog],.ui-mobile [data-role=page],.ui-page{top:0;left:0;width:100%;min-height:100%;position:absolute;display:none;border:0}.ui-page{outline:0}.ui-mobile .ui-page-active{display:block;overflow:visible;overflow-x:hidden}@media screen and (orientation:portrait){.ui-mobile .ui-page{min-height:420px}}@media screen and (orientation:landscape){.ui-mobile .ui-page{min-height:300px}}.ui-mobile-rendering>*{visibility:hidden}.ui-nojs{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-loading .ui-loader{display:block}.ui-loader{display:none;z-index:9999999;position:fixed;top:50%;left:50%;border:0}.ui-loader-default{background:0;filter:Alpha(Opacity=18);opacity:.18;width:2.875em;height:2.875em;margin-left:-1.4375em;margin-top:-1.4375em}.ui-loader-verbose{width:12.5em;filter:Alpha(Opacity=88);opacity:.88;box-shadow:0 1px 1px -1px #fff;height:auto;margin-left:-6.875em;margin-top:-2.6875em;padding:.625em}.ui-loader-default h1{font-size:0;width:0;height:0;overflow:hidden}.ui-loader-verbose h1{font-size:1em;margin:0;text-align:center}.ui-loader .ui-icon-loading{background-color:#000;display:block;margin:0;width:2.75em;height:2.75em;padding:.0625em;-webkit-border-radius:2.25em;border-radius:2.25em}.ui-loader-verbose .ui-icon-loading{margin:0 auto .625em;filter:Alpha(Opacity=75);opacity:.75}.ui-loader-textonly{padding:.9375em;margin-left:-7.1875em}.ui-loader-textonly .ui-icon-loading{display:none}.ui-loader-fakefix{position:absolute}.ui-bar,.ui-body{position:relative;padding:.4em 1em;overflow:hidden;display:block;clear:both}.ui-bar h1,.ui-bar h2,.ui-bar h3,.ui-bar h4,.ui-bar h5,.ui-bar h6{margin:0;padding:0;font-size:1em;display:inline-block}.ui-footer,.ui-header{border-width:1px 0;border-style:solid;position:relative}.ui-footer:empty,.ui-header:empty{min-height:2.6875em}.ui-footer .ui-title,.ui-header .ui-title{font-size:1em;min-height:1.1em;text-align:center;display:block;margin:0 30%;padding:.7em 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;outline:0!important}.ui-footer .ui-title{margin:0 1em}.ui-content{border-width:0;overflow:visible;overflow-x:hidden;padding:1em}.ui-corner-all>.ui-content:first-child,.ui-corner-all>.ui-footer:first-child,.ui-corner-all>.ui-header:first-child{-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit;-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit}.ui-corner-all>.ui-content:last-child,.ui-corner-all>.ui-footer:last-child,.ui-corner-all>.ui-header:last-child{-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit;-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit}.ui-btn{font-size:16px;margin:.5em 0;padding:.7em 1em;display:block;position:relative;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-btn-icon-notext{padding:0;width:1.75em;height:1.75em;text-indent:-9999px;white-space:nowrap!important}.ui-mini{font-size:12.5px}.ui-mini .ui-btn{font-size:inherit}.ui-footer .ui-btn,.ui-header .ui-btn{font-size:12.5px;display:inline-block;vertical-align:middle}.ui-header .ui-btn-left,.ui-header .ui-btn-right{font-size:12.5px}.ui-footer .ui-btn-icon-notext,.ui-header .ui-btn-icon-notext,.ui-mini .ui-btn-icon-notext,.ui-mini.ui-btn-icon-notext{font-size:16px;padding:0}.ui-btn-inline{display:inline-block;vertical-align:middle;margin-right:.625em}.ui-btn-icon-left{padding-left:2.5em}.ui-btn-icon-right{padding-right:2.5em}.ui-btn-icon-top{padding-top:2.5em}.ui-btn-icon-bottom{padding-bottom:2.5em}.ui-footer .ui-btn-icon-bottom,.ui-footer .ui-btn-icon-top,.ui-header .ui-btn-icon-bottom,.ui-header .ui-btn-icon-top{padding-left:.3125em;padding-right:.3125em}.ui-btn-icon-bottom:after,.ui-btn-icon-left:after,.ui-btn-icon-notext:after,.ui-btn-icon-right:after,.ui-btn-icon-top:after{content:\"\";position:absolute;display:block;width:22px;height:22px}.ui-btn-icon-left:after,.ui-btn-icon-notext:after,.ui-btn-icon-right:after{top:50%;margin-top:-11px}.ui-btn-icon-left:after{left:.5625em}.ui-btn-icon-right:after{right:.5625em}.ui-footer .ui-btn-icon-left:after,.ui-header .ui-btn-icon-left:after,.ui-mini .ui-btn-icon-left:after,.ui-mini.ui-btn-icon-left:after{left:.37em}.ui-footer .ui-btn-icon-right:after,.ui-header .ui-btn-icon-right:after,.ui-mini .ui-btn-icon-right:after,.ui-mini.ui-btn-icon-right:after{right:.37em}.ui-btn-icon-bottom:after,.ui-btn-icon-notext:after,.ui-btn-icon-top:after{left:50%;margin-left:-11px}.ui-btn-icon-top:after{top:.5625em}.ui-btn-icon-bottom:after{top:auto;bottom:.5625em}.ui-btn-left>[class*=ui-],.ui-btn-right>[class*=ui-],.ui-header .ui-btn-left,.ui-header .ui-btn-right{margin:0}.ui-btn-left,.ui-btn-right{position:absolute;top:.24em}.ui-btn-left{left:.4em}.ui-btn-right{right:.4em}.ui-btn-icon-notext.ui-btn-left{top:.3125em;left:.3125em}.ui-btn-icon-notext.ui-btn-right{top:.3125em;right:.3125em}.ui-controlgroup-controls button.ui-btn-icon-notext,button.ui-btn{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;width:100%}button.ui-btn-inline{width:auto}button.ui-btn::-moz-focus-inner{border:0}.ui-controlgroup-horizontal .ui-controlgroup-controls button.ui-btn,button.ui-btn-icon-notext{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;width:1.75em}.ui-controlgroup-label,.ui-mobile label{display:block;margin:0 0 .4em}.ui-hidden-accessible,.ui-hide-label .ui-controlgroup-label,.ui-hide-label .ui-rangeslider label,.ui-hide-label>label{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-screen-hidden{display:none!important}.ui-mobile-viewport-transitioning,.ui-mobile-viewport-transitioning .ui-page{width:100%;height:100%;overflow:hidden;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ui-page-pre-in{opacity:0}.in{-webkit-animation-timing-function:ease-out;-webkit-animation-duration:350ms;-moz-animation-timing-function:ease-out;-moz-animation-duration:350ms;animation-timing-function:ease-out;animation-duration:350ms}.out{-webkit-animation-timing-function:ease-in;-webkit-animation-duration:225ms;-moz-animation-timing-function:ease-in;-moz-animation-duration:225ms;animation-timing-function:ease-in;animation-duration:225ms}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@keyframes fadeout{from{opacity:1}to{opacity:0}}.fade.out{opacity:0;-webkit-animation-duration:125ms;-webkit-animation-name:fadeout;-moz-animation-duration:125ms;-moz-animation-name:fadeout;animation-duration:125ms;animation-name:fadeout}.fade.in{opacity:1;-webkit-animation-duration:225ms;-webkit-animation-name:fadein;-moz-animation-duration:225ms;-moz-animation-name:fadein;animation-duration:225ms;animation-name:fadein}.pop{-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;transform-origin:50% 50%}.pop.in{-webkit-transform:scale(1);-webkit-animation-name:popin;-webkit-animation-duration:350ms;-moz-transform:scale(1);-moz-animation-name:popin;-moz-animation-duration:350ms;transform:scale(1);animation-name:popin;animation-duration:350ms;opacity:1}.pop.out{-webkit-animation-name:fadeout;-webkit-animation-duration:.1s;-moz-animation-name:fadeout;-moz-animation-duration:.1s;animation-name:fadeout;animation-duration:.1s;opacity:0}.pop.in.reverse{-webkit-animation-name:fadein;-moz-animation-name:fadein;animation-name:fadein}.pop.out.reverse{-webkit-transform:scale(.8);-webkit-animation-name:popout;-moz-transform:scale(.8);-moz-animation-name:popout;transform:scale(.8);animation-name:popout}@-webkit-keyframes popin{from{-webkit-transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);opacity:1}}@-moz-keyframes popin{from{-moz-transform:scale(.8);opacity:0}to{-moz-transform:scale(1);opacity:1}}@keyframes popin{from{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes popout{from{-webkit-transform:scale(1);opacity:1}to{-webkit-transform:scale(.8);opacity:0}}@-moz-keyframes popout{from{-moz-transform:scale(1);opacity:1}to{-moz-transform:scale(.8);opacity:0}}@keyframes popout{from{transform:scale(1);opacity:1}to{transform:scale(.8);opacity:0}}@-webkit-keyframes slideinfromright{from{-webkit-transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(0,0,0)}}@-moz-keyframes slideinfromright{from{-moz-transform:translateX(100%)}to{-moz-transform:translateX(0)}}@keyframes slideinfromright{from{transform:translateX(100%)}to{transform:translateX(0)}}@-webkit-keyframes slideinfromleft{from{-webkit-transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(0,0,0)}}@-moz-keyframes slideinfromleft{from{-moz-transform:translateX(-100%)}to{-moz-transform:translateX(0)}}@keyframes slideinfromleft{from{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes slideouttoleft{from{-webkit-transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(-100%,0,0)}}@-moz-keyframes slideouttoleft{from{-moz-transform:translateX(0)}to{-moz-transform:translateX(-100%)}}@keyframes slideouttoleft{from{transform:translateX(0)}to{transform:translateX(-100%)}}@-webkit-keyframes slideouttoright{from{-webkit-transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(100%,0,0)}}@-moz-keyframes slideouttoright{from{-moz-transform:translateX(0)}to{-moz-transform:translateX(100%)}}@keyframes slideouttoright{from{transform:translateX(0)}to{transform:translateX(100%)}}.slide.in,.slide.out{-webkit-animation-timing-function:ease-out;-webkit-animation-duration:350ms;-moz-animation-timing-function:ease-out;-moz-animation-duration:350ms;animation-timing-function:ease-out;animation-duration:350ms}.slide.out{-webkit-transform:translate3d(-100%,0,0);-webkit-animation-name:slideouttoleft;-moz-transform:translateX(-100%);-moz-animation-name:slideouttoleft;transform:translateX(-100%);animation-name:slideouttoleft}.slide.in{-webkit-transform:translate3d(0,0,0);-webkit-animation-name:slideinfromright;-moz-transform:translateX(0);-moz-animation-name:slideinfromright;transform:translateX(0);animation-name:slideinfromright}.slide.out.reverse{-webkit-transform:translate3d(100%,0,0);-webkit-animation-name:slideouttoright;-moz-transform:translateX(100%);-moz-animation-name:slideouttoright;transform:translateX(100%);animation-name:slideouttoright}.slide.in.reverse{-webkit-transform:translate3d(0,0,0);-webkit-animation-name:slideinfromleft;-moz-transform:translateX(0);-moz-animation-name:slideinfromleft;transform:translateX(0);animation-name:slideinfromleft}.slidefade.out{-webkit-transform:translateX(-100%);-webkit-animation-name:slideouttoleft;-webkit-animation-duration:225ms;-moz-transform:translateX(-100%);-moz-animation-name:slideouttoleft;-moz-animation-duration:225ms;transform:translateX(-100%);animation-name:slideouttoleft;animation-duration:225ms}.slidefade.in{-webkit-transform:translateX(0);-webkit-animation-name:fadein;-webkit-animation-duration:.2s;-moz-transform:translateX(0);-moz-animation-name:fadein;-moz-animation-duration:.2s;transform:translateX(0);animation-name:fadein;animation-duration:.2s}.slidefade.out.reverse{-webkit-transform:translateX(100%);-webkit-animation-name:slideouttoright;-webkit-animation-duration:.2s;-moz-transform:translateX(100%);-moz-animation-name:slideouttoright;-moz-animation-duration:.2s;transform:translateX(100%);animation-name:slideouttoright;animation-duration:.2s}.slidefade.in.reverse{-webkit-transform:translateX(0);-webkit-animation-name:fadein;-webkit-animation-duration:.2s;-moz-transform:translateX(0);-moz-animation-name:fadein;-moz-animation-duration:.2s;transform:translateX(0);animation-name:fadein;animation-duration:.2s}.slidedown.out{-webkit-animation-name:fadeout;-webkit-animation-duration:.1s;-moz-animation-name:fadeout;-moz-animation-duration:.1s;animation-name:fadeout;animation-duration:.1s}.slidedown.in{-webkit-transform:translateY(0);-webkit-animation-name:slideinfromtop;-webkit-animation-duration:250ms;-moz-transform:translateY(0);-moz-animation-name:slideinfromtop;-moz-animation-duration:250ms;transform:translateY(0);animation-name:slideinfromtop;animation-duration:250ms}.slidedown.in.reverse{-webkit-animation-name:fadein;-webkit-animation-duration:150ms;-moz-animation-name:fadein;-moz-animation-duration:150ms;animation-name:fadein;animation-duration:150ms}.slidedown.out.reverse{-webkit-transform:translateY(-100%);-webkit-animation-name:slideouttotop;-webkit-animation-duration:.2s;-moz-transform:translateY(-100%);-moz-animation-name:slideouttotop;-moz-animation-duration:.2s;transform:translateY(-100%);animation-name:slideouttotop;animation-duration:.2s}@-webkit-keyframes slideinfromtop{from{-webkit-transform:translateY(-100%)}to{-webkit-transform:translateY(0)}}@-moz-keyframes slideinfromtop{from{-moz-transform:translateY(-100%)}to{-moz-transform:translateY(0)}}@keyframes slideinfromtop{from{transform:translateY(-100%)}to{transform:translateY(0)}}@-webkit-keyframes slideouttotop{from{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(-100%)}}@-moz-keyframes slideouttotop{from{-moz-transform:translateY(0)}to{-moz-transform:translateY(-100%)}}@keyframes slideouttotop{from{transform:translateY(0)}to{transform:translateY(-100%)}}.slideup.out{-webkit-animation-name:fadeout;-webkit-animation-duration:.1s;-moz-animation-name:fadeout;-moz-animation-duration:.1s;animation-name:fadeout;animation-duration:.1s}.slideup.in{-webkit-transform:translateY(0);-webkit-animation-name:slideinfrombottom;-webkit-animation-duration:250ms;-moz-transform:translateY(0);-moz-animation-name:slideinfrombottom;-moz-animation-duration:250ms;transform:translateY(0);animation-name:slideinfrombottom;animation-duration:250ms}.slideup.in.reverse{-webkit-animation-name:fadein;-webkit-animation-duration:150ms;-moz-animation-name:fadein;-moz-animation-duration:150ms;animation-name:fadein;animation-duration:150ms}.slideup.out.reverse{-webkit-transform:translateY(100%);-webkit-animation-name:slideouttobottom;-webkit-animation-duration:.2s;-moz-transform:translateY(100%);-moz-animation-name:slideouttobottom;-moz-animation-duration:.2s;transform:translateY(100%);animation-name:slideouttobottom;animation-duration:.2s}@-webkit-keyframes slideinfrombottom{from{-webkit-transform:translateY(100%)}to{-webkit-transform:translateY(0)}}@-moz-keyframes slideinfrombottom{from{-moz-transform:translateY(100%)}to{-moz-transform:translateY(0)}}@keyframes slideinfrombottom{from{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes slideouttobottom{from{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(100%)}}@-moz-keyframes slideouttobottom{from{-moz-transform:translateY(0)}to{-moz-transform:translateY(100%)}}@keyframes slideouttobottom{from{transform:translateY(0)}to{transform:translateY(100%)}}.viewport-flip{-webkit-perspective:1000;-moz-perspective:1000;perspective:1000;position:absolute}.flip{-webkit-backface-visibility:hidden;-webkit-transform:translateX(0);-moz-backface-visibility:hidden;-moz-transform:translateX(0);backface-visibility:hidden;transform:translateX(0)}.flip.out{-webkit-transform:rotateY(-90deg) scale(.9);-webkit-animation-name:flipouttoleft;-webkit-animation-duration:175ms;-moz-transform:rotateY(-90deg) scale(.9);-moz-animation-name:flipouttoleft;-moz-animation-duration:175ms;transform:rotateY(-90deg) scale(.9);animation-name:flipouttoleft;animation-duration:175ms}.flip.in{-webkit-animation-name:flipintoright;-webkit-animation-duration:225ms;-moz-animation-name:flipintoright;-moz-animation-duration:225ms;animation-name:flipintoright;animation-duration:225ms}.flip.out.reverse{-webkit-transform:rotateY(90deg) scale(.9);-webkit-animation-name:flipouttoright;-moz-transform:rotateY(90deg) scale(.9);-moz-animation-name:flipouttoright;transform:rotateY(90deg) scale(.9);animation-name:flipouttoright}.flip.in.reverse{-webkit-animation-name:flipintoleft;-moz-animation-name:flipintoleft;animation-name:flipintoleft}@-webkit-keyframes flipouttoleft{from{-webkit-transform:rotateY(0)}to{-webkit-transform:rotateY(-90deg) scale(.9)}}@-moz-keyframes flipouttoleft{from{-moz-transform:rotateY(0)}to{-moz-transform:rotateY(-90deg) scale(.9)}}@keyframes flipouttoleft{from{transform:rotateY(0)}to{transform:rotateY(-90deg) scale(.9)}}@-webkit-keyframes flipouttoright{from{-webkit-transform:rotateY(0)}to{-webkit-transform:rotateY(90deg) scale(.9)}}@-moz-keyframes flipouttoright{from{-moz-transform:rotateY(0)}to{-moz-transform:rotateY(90deg) scale(.9)}}@keyframes flipouttoright{from{transform:rotateY(0)}to{transform:rotateY(90deg) scale(.9)}}@-webkit-keyframes flipintoleft{from{-webkit-transform:rotateY(-90deg) scale(.9)}to{-webkit-transform:rotateY(0)}}@-moz-keyframes flipintoleft{from{-moz-transform:rotateY(-90deg) scale(.9)}to{-moz-transform:rotateY(0)}}@keyframes flipintoleft{from{transform:rotateY(-90deg) scale(.9)}to{transform:rotateY(0)}}@-webkit-keyframes flipintoright{from{-webkit-transform:rotateY(90deg) scale(.9)}to{-webkit-transform:rotateY(0)}}@-moz-keyframes flipintoright{from{-moz-transform:rotateY(90deg) scale(.9)}to{-moz-transform:rotateY(0)}}@keyframes flipintoright{from{transform:rotateY(90deg) scale(.9)}to{transform:rotateY(0)}}.viewport-turn{-webkit-perspective:200px;-moz-perspective:200px;-ms-perspective:200px;perspective:200px;position:absolute}.turn{-webkit-backface-visibility:hidden;-webkit-transform:translateX(0);-webkit-transform-origin:0;-moz-backface-visibility:hidden;-moz-transform:translateX(0);-moz-transform-origin:0;backface-visibility:hidden;transform:translateX(0);transform-origin:0}.turn.out{-webkit-transform:rotateY(-90deg) scale(.9);-webkit-animation-name:flipouttoleft;-webkit-animation-duration:125ms;-moz-transform:rotateY(-90deg) scale(.9);-moz-animation-name:flipouttoleft;-moz-animation-duration:125ms;transform:rotateY(-90deg) scale(.9);animation-name:flipouttoleft;animation-duration:125ms}.turn.in{-webkit-animation-name:flipintoright;-webkit-animation-duration:250ms;-moz-animation-name:flipintoright;-moz-animation-duration:250ms;animation-name:flipintoright;animation-duration:250ms}.turn.out.reverse{-webkit-transform:rotateY(90deg) scale(.9);-webkit-animation-name:flipouttoright;-moz-transform:rotateY(90deg) scale(.9);-moz-animation-name:flipouttoright;transform:rotateY(90deg) scale(.9);animation-name:flipouttoright}.turn.in.reverse{-webkit-animation-name:flipintoleft;-moz-animation-name:flipintoleft;animation-name:flipintoleft}@-webkit-keyframes flipouttoleft{from{-webkit-transform:rotateY(0)}to{-webkit-transform:rotateY(-90deg) scale(.9)}}@-moz-keyframes flipouttoleft{from{-moz-transform:rotateY(0)}to{-moz-transform:rotateY(-90deg) scale(.9)}}@keyframes flipouttoleft{from{transform:rotateY(0)}to{transform:rotateY(-90deg) scale(.9)}}@-webkit-keyframes flipouttoright{from{-webkit-transform:rotateY(0)}to{-webkit-transform:rotateY(90deg) scale(.9)}}@-moz-keyframes flipouttoright{from{-moz-transform:rotateY(0)}to{-moz-transform:rotateY(90deg) scale(.9)}}@keyframes flipouttoright{from{transform:rotateY(0)}to{transform:rotateY(90deg) scale(.9)}}@-webkit-keyframes flipintoleft{from{-webkit-transform:rotateY(-90deg) scale(.9)}to{-webkit-transform:rotateY(0)}}@-moz-keyframes flipintoleft{from{-moz-transform:rotateY(-90deg) scale(.9)}to{-moz-transform:rotateY(0)}}@keyframes flipintoleft{from{transform:rotateY(-90deg) scale(.9)}to{transform:rotateY(0)}}@-webkit-keyframes flipintoright{from{-webkit-transform:rotateY(90deg) scale(.9)}to{-webkit-transform:rotateY(0)}}@-moz-keyframes flipintoright{from{-moz-transform:rotateY(90deg) scale(.9)}to{-moz-transform:rotateY(0)}}@keyframes flipintoright{from{transform:rotateY(90deg) scale(.9)}to{transform:rotateY(0)}}.flow{-webkit-transform-origin:50% 30%;-webkit-box-shadow:0 0 20px rgba(0,0,0,.4);-moz-transform-origin:50% 30%;-moz-box-shadow:0 0 20px rgba(0,0,0,.4);transform-origin:50% 30%;box-shadow:0 0 20px rgba(0,0,0,.4)}.ui-dialog.flow{-webkit-transform-origin:none;-webkit-box-shadow:none;-moz-transform-origin:none;-moz-box-shadow:none;transform-origin:none;box-shadow:none}.flow.out{-webkit-transform:translateX(-100%) scale(.7);-webkit-animation-name:flowouttoleft;-webkit-animation-timing-function:ease;-webkit-animation-duration:350ms;-moz-transform:translateX(-100%) scale(.7);-moz-animation-name:flowouttoleft;-moz-animation-timing-function:ease;-moz-animation-duration:350ms;transform:translateX(-100%) scale(.7);animation-name:flowouttoleft;animation-timing-function:ease;animation-duration:350ms}.flow.in{-webkit-transform:translateX(0) scale(1);-webkit-animation-name:flowinfromright;-webkit-animation-timing-function:ease;-webkit-animation-duration:350ms;-moz-transform:translateX(0) scale(1);-moz-animation-name:flowinfromright;-moz-animation-timing-function:ease;-moz-animation-duration:350ms;transform:translateX(0) scale(1);animation-name:flowinfromright;animation-timing-function:ease;animation-duration:350ms}.flow.out.reverse{-webkit-transform:translateX(100%);-webkit-animation-name:flowouttoright;-moz-transform:translateX(100%);-moz-animation-name:flowouttoright;transform:translateX(100%);animation-name:flowouttoright}.flow.in.reverse{-webkit-animation-name:flowinfromleft;-moz-animation-name:flowinfromleft;animation-name:flowinfromleft}@-webkit-keyframes flowouttoleft{0%{-webkit-transform:translateX(0) scale(1)}60%,70%{-webkit-transform:translateX(0) scale(.7)}100%{-webkit-transform:translateX(-100%) scale(.7)}}@-moz-keyframes flowouttoleft{0%{-moz-transform:translateX(0) scale(1)}60%,70%{-moz-transform:translateX(0) scale(.7)}100%{-moz-transform:translateX(-100%) scale(.7)}}@keyframes flowouttoleft{0%{transform:translateX(0) scale(1)}60%,70%{transform:translateX(0) scale(.7)}100%{transform:translateX(-100%) scale(.7)}}@-webkit-keyframes flowouttoright{0%{-webkit-transform:translateX(0) scale(1)}60%,70%{-webkit-transform:translateX(0) scale(.7)}100%{-webkit-transform:translateX(100%) scale(.7)}}@-moz-keyframes flowouttoright{0%{-moz-transform:translateX(0) scale(1)}60%,70%{-moz-transform:translateX(0) scale(.7)}100%{-moz-transform:translateX(100%) scale(.7)}}@keyframes flowouttoright{0%{transform:translateX(0) scale(1)}60%,70%{transform:translateX(0) scale(.7)}100%{transform:translateX(100%) scale(.7)}}@-webkit-keyframes flowinfromleft{0%{-webkit-transform:translateX(-100%) scale(.7)}30%,40%{-webkit-transform:translateX(0) scale(.7)}100%{-webkit-transform:translateX(0) scale(1)}}@-moz-keyframes flowinfromleft{0%{-moz-transform:translateX(-100%) scale(.7)}30%,40%{-moz-transform:translateX(0) scale(.7)}100%{-moz-transform:translateX(0) scale(1)}}@keyframes flowinfromleft{0%{transform:translateX(-100%) scale(.7)}30%,40%{transform:translateX(0) scale(.7)}100%{transform:translateX(0) scale(1)}}@-webkit-keyframes flowinfromright{0%{-webkit-transform:translateX(100%) scale(.7)}30%,40%{-webkit-transform:translateX(0) scale(.7)}100%{-webkit-transform:translateX(0) scale(1)}}@-moz-keyframes flowinfromright{0%{-moz-transform:translateX(100%) scale(.7)}30%,40%{-moz-transform:translateX(0) scale(.7)}100%{-moz-transform:translateX(0) scale(1)}}@keyframes flowinfromright{0%{transform:translateX(100%) scale(.7)}30%,40%{transform:translateX(0) scale(.7)}100%{transform:translateX(0) scale(1)}}.ui-field-contain,.ui-mobile fieldset.ui-field-contain{display:block;position:relative;overflow:visible;clear:both;padding:.8em 0}.ui-field-contain .ui-controlgroup-controls,.ui-field-contain>label~[class*=ui-]{margin:0}.ui-field-contain:last-child{border-bottom-width:0}@media (min-width:28em){.ui-field-contain,.ui-mobile fieldset.ui-field-contain{padding:0;margin:1em 0;border-bottom-width:0}.ui-field-contain:after,.ui-field-contain:before{content:\"\";display:table}.ui-field-contain:after{clear:both}.ui-field-contain .ui-controlgroup-label,.ui-field-contain>.ui-rangeslider>label,.ui-field-contain>label{float:left;width:20%;margin:.5em 2% 0 0}.ui-popup .ui-field-contain .ui-controlgroup-label,.ui-popup .ui-field-contain>.ui-rangeslider>label,.ui-popup .ui-field-contain>label{float:none;width:auto;margin:0 0 .4em}.ui-field-contain .ui-controlgroup-controls,.ui-field-contain>label~[class*=ui-]{float:left;width:78%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.ui-hide-label .ui-controlgroup-controls,.ui-hide-label>label~[class*=ui-],.ui-popup .ui-field-contain .ui-controlgroup-controls,.ui-popup .ui-field-contain>label~[class*=ui-]{float:none;width:100%}.ui-field-contain>label~.ui-btn-inline{width:auto;margin-right:.625em}}.ui-grid-a,.ui-grid-b,.ui-grid-c,.ui-grid-d,.ui-grid-solo{overflow:hidden}.ui-block-a,.ui-block-b,.ui-block-c,.ui-block-d,.ui-block-e{margin:0;padding:0;border:0;float:left;min-height:1px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ui-block-a{clear:left}li.ui-block-a,li.ui-block-b,li.ui-block-c,li.ui-block-d,li.ui-block-e,ul.ui-grid-a,ul.ui-grid-b,ul.ui-grid-c,ul.ui-grid-d,ul.ui-grid-solo{margin-left:0;margin-right:0;padding:0;list-style:none}[class*=ui-block-]>button.ui-btn{margin-right:0;margin-left:0}[class*=ui-block-]>.ui-btn,[class*=ui-block-]>.ui-checkbox,[class*=ui-block-]>.ui-radio,[class*=ui-block-]>.ui-select,[class*=ui-block-]>button.ui-btn-icon-notext,[class*=ui-block-]>button.ui-btn-inline{margin-right:.3125em;margin-left:.3125em}.ui-grid-a>.ui-block-a,.ui-grid-a>.ui-block-b{width:50%}.ui-grid-b>.ui-block-a,.ui-grid-b>.ui-block-b,.ui-grid-b>.ui-block-c{width:33.333%}.ui-grid-c>.ui-block-a,.ui-grid-c>.ui-block-b,.ui-grid-c>.ui-block-c,.ui-grid-c>.ui-block-d{width:25%}.ui-grid-d>.ui-block-a,.ui-grid-d>.ui-block-b,.ui-grid-d>.ui-block-c,.ui-grid-d>.ui-block-d,.ui-grid-d>.ui-block-e{width:20%}.ui-grid-solo>.ui-block-a{width:100%;float:none}@media (max-width:35em){.ui-responsive>.ui-block-a,.ui-responsive>.ui-block-b,.ui-responsive>.ui-block-c,.ui-responsive>.ui-block-d,.ui-responsive>.ui-block-e{width:100%;float:none}}.ui-footer-fixed,.ui-header-fixed{left:0;right:0;width:100%;position:fixed;z-index:1000}.ui-header-fixed{top:-1px;padding-top:1px}.ui-header-fixed.ui-fixed-hidden{top:0;padding-top:0}.ui-header-fixed .ui-btn-left,.ui-header-fixed .ui-btn-right{margin-top:1px}.ui-header-fixed.ui-fixed-hidden .ui-btn-left,.ui-header-fixed.ui-fixed-hidden .ui-btn-right{margin-top:0}.ui-footer-fixed{bottom:-1px;padding-bottom:1px}.ui-footer-fixed.ui-fixed-hidden{bottom:0;padding-bottom:0}.ui-footer-fullscreen,.ui-header-fullscreen{filter:Alpha(Opacity=90);opacity:.9}.ui-page-header-fixed{padding-top:2.8125em}.ui-page-footer-fixed{padding-bottom:2.8125em}.ui-page-footer-fullscreen>.ui-content,.ui-page-header-fullscreen>.ui-content{padding:0}.ui-fixed-hidden{position:absolute}.ui-footer-fixed.ui-fixed-hidden{display:none}.ui-page .ui-footer-fixed.ui-fixed-hidden{display:block}.ui-page-footer-fullscreen .ui-fixed-hidden,.ui-page-header-fullscreen .ui-fixed-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-footer-fixed .ui-btn,.ui-header-fixed .ui-btn{z-index:10}.ui-android-2x-fixed .ui-li-has-thumb{-webkit-transform:translate3d(0,0,0)}.ui-navbar{max-width:100%}.ui-navbar ul:after,.ui-navbar ul:before{content:\"\";display:table}.ui-navbar ul:after{clear:both}.ui-navbar ul{list-style:none;margin:0;padding:0;position:relative;display:block;border:0;max-width:100%;overflow:visible}.ui-navbar li .ui-btn{font-size:12.5px;display:block;margin:0;border-right-width:0}.ui-navbar .ui-btn:focus{z-index:1}.ui-navbar li:last-child .ui-btn{margin-right:-4px}.ui-navbar li:last-child .ui-btn:after{margin-right:4px}.ui-content .ui-navbar .ui-grid-duo .ui-block-b .ui-btn,.ui-content .ui-navbar li:last-child .ui-btn{border-right-width:1px;margin-right:0}.ui-content .ui-navbar .ui-grid-duo .ui-block-b .ui-btn:after,.ui-content .ui-navbar li:last-child .ui-btn:after{margin-right:0}.ui-navbar .ui-grid-duo .ui-block-a:last-child .ui-btn{border-right-width:1px;margin-right:-1px}.ui-navbar .ui-grid-duo .ui-block-a:last-child .ui-btn:after{margin-right:1px}.ui-navbar .ui-grid-duo .ui-btn{border-top-width:0}.ui-navbar .ui-grid-duo .ui-block-a:first-child .ui-btn,.ui-navbar .ui-grid-duo .ui-block-a:first-child+.ui-block-b .ui-btn{border-top-width:1px}.ui-footer .ui-navbar .ui-btn,.ui-header .ui-navbar .ui-btn{border-top-width:0;border-bottom-width:0}.ui-footer .ui-navbar .ui-grid-duo .ui-block-a:first-child .ui-btn,.ui-footer .ui-navbar .ui-grid-duo .ui-block-a:first-child+.ui-block-b .ui-btn,.ui-header .ui-navbar .ui-grid-duo .ui-block-a:first-child .ui-btn,.ui-header .ui-navbar .ui-grid-duo .ui-block-a:first-child+.ui-block-b .ui-btn{border-top-width:0}.ui-footer .ui-navbar .ui-grid-duo .ui-btn,.ui-footer .ui-title~.ui-navbar .ui-btn,.ui-footer .ui-title~.ui-navbar .ui-grid-duo .ui-block-a:first-child .ui-btn,.ui-footer .ui-title~.ui-navbar .ui-grid-duo .ui-block-a:first-child+.ui-block-b .ui-btn,.ui-header .ui-navbar .ui-grid-duo .ui-btn,.ui-header .ui-title~.ui-navbar .ui-btn,.ui-header .ui-title~.ui-navbar .ui-grid-duo .ui-block-a:first-child .ui-btn,.ui-header .ui-title~.ui-navbar .ui-grid-duo .ui-block-a:first-child+.ui-block-b .ui-btn{border-top-width:1px}.ui-input-btn input{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;border:0;outline:0;-webkit-border-radius:inherit;border-radius:inherit;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;background:#fff;background:rgba(255,255,255,0);filter:Alpha(Opacity=0);opacity:.1;font-size:1px;text-indent:-9999px;z-index:2}.ui-input-btn.ui-state-disabled input{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-collapsible{margin:0 -1em}.ui-collapsible-inset,.ui-collapsible-set{margin:.5em 0}.ui-collapsible-heading{display:block;margin:0;padding:0;position:relative}.ui-collapsible-heading .ui-btn{text-align:left;margin:0;border-left-width:0;border-right-width:0}.ui-collapsible-heading .ui-btn-icon-bottom,.ui-collapsible-heading .ui-btn-icon-top{text-align:center}.ui-collapsible-inset .ui-collapsible-heading .ui-btn{border-right-width:1px;border-left-width:1px}.ui-collapsible-collapsed+.ui-collapsible:not(.ui-collapsible-inset)>.ui-collapsible-heading .ui-btn{border-top-width:0}.ui-collapsible-set .ui-collapsible:not(.ui-collapsible-inset) .ui-collapsible-heading .ui-btn{border-top-width:1px}.ui-collapsible-heading-status{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-collapsible-content{display:block;margin:0;padding:.5em 1em}.ui-collapsible-themed-content .ui-collapsible-content{border-left-width:0;border-right-width:0;border-top-width:0;border-bottom-width:1px;border-style:solid}.ui-collapsible-inset.ui-collapsible-themed-content .ui-collapsible-content{border-left-width:1px;border-right-width:1px}.ui-collapsible-inset .ui-collapsible-content{margin:0}.ui-collapsible-content-collapsed{display:none}.ui-collapsible-set>.ui-collapsible.ui-corner-all{-webkit-border-radius:0;border-radius:0}.ui-collapsible-heading,.ui-collapsible-heading>.ui-btn{-webkit-border-radius:inherit;border-radius:inherit}.ui-collapsible-set .ui-collapsible.ui-first-child{-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit;-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit}.ui-collapsible-content,.ui-collapsible-set .ui-collapsible.ui-last-child{-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit;-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit}.ui-collapsible-themed-content:not(.ui-collapsible-collapsed)>.ui-collapsible-heading{-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0}.ui-collapsible-set .ui-collapsible{margin:-1px -1em 0}.ui-collapsible-set .ui-collapsible-inset{margin:-1px 0 0}.ui-collapsible-set .ui-collapsible.ui-first-child{margin-top:0}.ui-controlgroup,fieldset.ui-controlgroup{padding:0;margin:.5em 0}.ui-field-contain .ui-controlgroup,.ui-field-contain fieldset.ui-controlgroup{margin:0}.ui-mini .ui-controlgroup-label{font-size:16px}.ui-controlgroup .ui-mini.ui-btn-icon-notext,.ui-controlgroup.ui-mini .ui-btn-icon-notext{font-size:inherit}.ui-controlgroup-controls .ui-btn,.ui-controlgroup-controls .ui-checkbox,.ui-controlgroup-controls .ui-radio,.ui-controlgroup-controls .ui-select{margin:0}.ui-controlgroup-controls .ui-btn.ui-focus,.ui-controlgroup-controls .ui-btn:focus{z-index:1}.ui-controlgroup-controls li{list-style:none}.ui-controlgroup-horizontal .ui-controlgroup-controls{display:inline-block;vertical-align:middle}.ui-controlgroup-horizontal .ui-controlgroup-controls:after,.ui-controlgroup-horizontal .ui-controlgroup-controls:before{content:\"\";display:table}.ui-controlgroup-horizontal .ui-controlgroup-controls:after{clear:both}.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-checkbox,.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-radio,.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-select,.ui-controlgroup-horizontal .ui-controlgroup-controls li>.ui-btn,.ui-controlgroup-horizontal .ui-controlgroup-controls>.ui-btn{float:left;clear:none}.ui-controlgroup-controls .ui-btn-icon-notext,.ui-controlgroup-horizontal .ui-controlgroup-controls button.ui-btn{width:auto}.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-btn-icon-notext,.ui-controlgroup-horizontal .ui-controlgroup-controls button.ui-btn-icon-notext{width:1.5em}.ui-controlgroup-controls .ui-btn-icon-notext{height:auto;padding:.7em 1em}.ui-controlgroup-vertical .ui-controlgroup-controls .ui-btn{border-bottom-width:0}.ui-controlgroup-vertical .ui-controlgroup-controls .ui-btn.ui-last-child{border-bottom-width:1px}.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-btn{border-right-width:0}.ui-controlgroup-horizontal .ui-controlgroup-controls .ui-btn.ui-last-child{border-right-width:1px}.ui-controlgroup-controls .ui-btn-corner-all,.ui-controlgroup-controls .ui-btn.ui-corner-all{-webkit-border-radius:0;border-radius:0}.ui-controlgroup-controls,.ui-controlgroup-controls .ui-checkbox,.ui-controlgroup-controls .ui-radio,.ui-controlgroup-controls .ui-select,.ui-controlgroup-controls li{-webkit-border-radius:inherit;border-radius:inherit}.ui-controlgroup-vertical .ui-btn.ui-first-child{-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit;-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit}.ui-controlgroup-vertical .ui-btn.ui-last-child{-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit;-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit}.ui-controlgroup-horizontal .ui-btn.ui-first-child{-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit;-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit}.ui-controlgroup-horizontal .ui-btn.ui-last-child{-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit;-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit}.ui-controlgroup-controls a.ui-shadow:not(:focus),.ui-controlgroup-controls button.ui-shadow:not(:focus),.ui-controlgroup-controls div.ui-shadow:not(.ui-focus){-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none}.ui-controlgroup-label legend{max-width:100%}.ui-controlgroup-controls>label{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-dialog{background:0 0!important}.ui-dialog-contain{width:92.5%;max-width:500px;margin:10% auto 1em;padding:0;position:relative;top:-1em}.ui-dialog-contain>.ui-content,.ui-dialog-contain>.ui-footer,.ui-dialog-contain>.ui-header{display:block;position:relative;width:auto;margin:0}.ui-dialog-contain>.ui-header{overflow:hidden;z-index:10;padding:0;border-top-width:0}.ui-dialog-contain>.ui-footer{z-index:10;padding:0 1em;border-bottom-width:0}.ui-popup-open .ui-footer-fixed,.ui-popup-open .ui-header-fixed{position:absolute!important}.ui-popup-screen{background-image:url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);top:0;left:0;right:0;bottom:1px;position:absolute;filter:Alpha(Opacity=0);opacity:0;z-index:1099}.ui-popup-screen.in{opacity:.5;filter:Alpha(Opacity=50)}.ui-popup-screen.out{opacity:0;filter:Alpha(Opacity=0)}.ui-popup-container{z-index:1100;display:inline-block;position:absolute;padding:0;outline:0}.ui-popup{position:relative}.ui-popup.ui-body-inherit{border-width:1px;border-style:solid}.ui-popup-hidden{left:0;top:0;position:absolute!important;visibility:hidden}.ui-popup-truncate{height:1px;width:1px;margin:-1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-popup .ui-content,.ui-popup.ui-content{overflow:visible}.ui-popup>.ui-header{border-top-width:0}.ui-popup>.ui-footer{border-bottom-width:0}.ui-popup>h1,.ui-popup>h2,.ui-popup>h3,.ui-popup>h4,.ui-popup>h5,.ui-popup>h6,.ui-popup>p{margin:.5em .4375em}.ui-popup>span{display:block;margin:.5em .4375em}.ui-popup-container .ui-content>h1,.ui-popup-container .ui-content>h2,.ui-popup-container .ui-content>h3,.ui-popup-container .ui-content>h4,.ui-popup-container .ui-content>h5,.ui-popup-container .ui-content>h6,.ui-popup-container .ui-content>p{margin:.5em 0}.ui-popup-container .ui-content>span{margin:0}.ui-popup-container .ui-content>h1:first-child,.ui-popup-container .ui-content>h2:first-child,.ui-popup-container .ui-content>h3:first-child,.ui-popup-container .ui-content>h4:first-child,.ui-popup-container .ui-content>h5:first-child,.ui-popup-container .ui-content>h6:first-child,.ui-popup-container .ui-content>p:first-child{margin-top:0}.ui-popup-container .ui-content>h1:last-child,.ui-popup-container .ui-content>h2:last-child,.ui-popup-container .ui-content>h3:last-child,.ui-popup-container .ui-content>h4:last-child,.ui-popup-container .ui-content>h5:last-child,.ui-popup-container .ui-content>h6:last-child,.ui-popup-container .ui-content>p:last-child{margin-bottom:0}.ui-popup>img{max-width:100%;max-height:100%;vertical-align:middle}.ui-popup:not(.ui-content)>.ui-btn-left:first-child+img:last-child,.ui-popup:not(.ui-content)>.ui-btn-right:first-child+img:last-child,.ui-popup:not(.ui-content)>img:only-child{-webkit-border-radius:inherit;border-radius:inherit}.ui-popup iframe{vertical-align:middle}.ui-popup>.ui-btn-left,.ui-popup>.ui-btn-right{position:absolute;top:-11px;margin:0;z-index:1101}.ui-popup>.ui-btn-left{left:-11px}.ui-popup>.ui-btn-right{right:-11px}.ui-popup-arrow-container{width:20px;height:20px}.ui-popup-arrow-container.ui-popup-arrow-l{left:-10px;clip:rect(-1000px,10px,2000px,-1000px)}.ui-popup-arrow-container.ui-popup-arrow-t{top:-10px;clip:rect(-1000px,2000px,10px,-1000px)}.ui-popup-arrow-container.ui-popup-arrow-r{right:-10px;clip:rect(-1000px,2000px,2000px,10px)}.ui-popup-arrow-container.ui-popup-arrow-b{bottom:-10px;clip:rect(10px,2000px,1000px,-1000px)}.ui-popup-arrow-container .ui-popup-arrow{width:28.28px;height:28.28px;border-width:1px;border-style:solid}.ui-popup-arrow-container.ui-popup-arrow-t .ui-popup-arrow{left:-4.14px;top:5.86px}.ui-popup-arrow-container.ui-popup-arrow-b .ui-popup-arrow{left:-4.14px;top:-14.14px}.ui-popup-arrow-container.ui-popup-arrow-l .ui-popup-arrow{left:5.86px;top:-4.14px}.ui-popup-arrow-container.ui-popup-arrow-r .ui-popup-arrow{left:-14.14px;top:-4.14px}.ui-popup-arrow-container.ui-popup-arrow-t.ie .ui-popup-arrow{margin-left:-5.86px;margin-top:-7.07px}.ui-popup-arrow-container.ui-popup-arrow-b.ie .ui-popup-arrow{margin-left:-5.86px;margin-top:-4.14px}.ui-popup-arrow-container.ui-popup-arrow-l.ie .ui-popup-arrow{margin-left:-7.07px;margin-top:-5.86px}.ui-popup-arrow-container.ui-popup-arrow-r.ie .ui-popup-arrow{margin-left:-4.14px;margin-top:-5.86px}.ui-popup>.ui-popup-arrow-guide{position:absolute;left:0;right:0;top:0;bottom:0;visibility:hidden}.ui-popup-arrow-container{position:absolute}.ui-popup-arrow{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:absolute;overflow:hidden;box-sizing:border-box}.ui-popup-arrow-container.ie .ui-popup-arrow{-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.7071067811865474, M12=-0.7071067811865477, M21=0.7071067811865477, M22=0.7071067811865474, SizingMethod='auto expand')\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.7071067811865474, M12=-.7071067811865477, M21=.7071067811865477, M22=.7071067811865474, SizingMethod='auto expand')}.ui-checkbox,.ui-radio{margin:.5em 0;position:relative}.ui-checkbox .ui-btn,.ui-radio .ui-btn{margin:0;text-align:left;white-space:normal;z-index:2}.ui-controlgroup .ui-checkbox .ui-btn.ui-focus,.ui-controlgroup .ui-radio .ui-btn.ui-focus{z-index:3}.ui-checkbox .ui-btn-icon-bottom,.ui-checkbox .ui-btn-icon-top,.ui-radio .ui-btn-icon-bottom,.ui-radio .ui-btn-icon-top{text-align:center}.ui-controlgroup-horizontal .ui-checkbox .ui-btn:after,.ui-controlgroup-horizontal .ui-radio .ui-btn:after{content:none;display:none}.ui-checkbox input,.ui-radio input{position:absolute;left:.466em;top:50%;width:22px;height:22px;margin:-11px 0 0 0;outline:0!important;z-index:1}.ui-controlgroup-horizontal .ui-checkbox input,.ui-controlgroup-horizontal .ui-radio input{left:50%;margin-left:-9px}.ui-checkbox input:disabled,.ui-radio input:disabled{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-select{margin-top:.5em;margin-bottom:.5em;position:relative}.ui-select>select{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-select .ui-btn{margin:0;opacity:1}.ui-select .ui-btn select{position:absolute;top:0;left:0;width:100%;min-height:1.5em;min-height:100%;height:3em;max-height:100%;outline:0;-webkit-border-radius:inherit;border-radius:inherit;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;filter:Alpha(Opacity=0);opacity:0;z-index:2}@-moz-document url-prefix(){.ui-select .ui-btn select{opacity:.0001}}.ui-select .ui-state-disabled select{display:none}.ui-select span.ui-state-disabled{filter:Alpha(Opacity=100);opacity:1}.ui-select .ui-btn.ui-select-nativeonly{border-radius:0;border:0}.ui-select .ui-btn.ui-select-nativeonly select{opacity:1;text-indent:0;display:block}.ui-select .ui-li-has-count.ui-btn{padding-right:2.8125em}.ui-select .ui-li-has-count.ui-btn-icon-right{padding-right:4.6875em}.ui-select .ui-btn-icon-right .ui-li-count{right:3.2em}.ui-select .ui-btn>span:not(.ui-li-count){display:block;text-overflow:ellipsis;overflow:hidden!important;white-space:nowrap}.ui-selectmenu.ui-popup{min-width:11em}.ui-selectmenu .ui-dialog-contain{overflow:hidden}.ui-selectmenu .ui-header{margin:0;padding:0;border-width:0}.ui-selectmenu.ui-dialog .ui-header{z-index:1;position:relative}.ui-selectmenu.ui-popup .ui-header{-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0}.ui-selectmenu.ui-popup .ui-header h1:after{content:'.';visibility:hidden}.ui-selectmenu .ui-header .ui-title{margin:0 2.875em}.ui-selectmenu.ui-dialog .ui-content{overflow:visible;z-index:1}.ui-selectmenu .ui-selectmenu-list{margin:0;-webkit-border-radius:inherit;border-radius:inherit}.ui-header:not(.ui-screen-hidden)+.ui-selectmenu-list{-webkit-border-top-right-radius:0;border-top-right-radius:0;-webkit-border-top-left-radius:0;border-top-left-radius:0}.ui-header.ui-screen-hidden+.ui-selectmenu-list li.ui-first-child .ui-btn{border-top-width:0}.ui-selectmenu .ui-selectmenu-list li.ui-last-child .ui-btn{border-bottom-width:0}.ui-selectmenu .ui-btn.ui-li-divider{cursor:default}.ui-selectmenu .ui-selectmenu-placeholder{display:none}.ui-listview,.ui-listview>li{margin:0;padding:0;list-style:none}.ui-content .ui-listview,.ui-panel-inner>.ui-listview{margin:-1em}.ui-content .ui-listview-inset,.ui-panel-inner>.ui-listview-inset{margin:1em 0}.ui-collapsible-content>.ui-listview{margin:-.5em -1em}.ui-collapsible-content>.ui-listview-inset{margin:.5em 0}.ui-listview>li{display:block;position:relative;overflow:visible}.ui-listview>.ui-li-divider,.ui-listview>.ui-li-static,.ui-listview>li>a.ui-btn{margin:0;display:block;position:relative;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ui-listview>li>.ui-btn:focus{z-index:1}.ui-listview>.ui-li-divider,.ui-listview>.ui-li-static,.ui-listview>li>a.ui-btn{border-width:1px 0 0;border-style:solid}.ui-listview-inset>.ui-li-divider,.ui-listview-inset>.ui-li-static,.ui-listview-inset>li>a.ui-btn{border-right-width:1px;border-left-width:1px}.ui-listview>.ui-li-divider.ui-last-child,.ui-listview>.ui-li-static.ui-last-child,.ui-listview>li.ui-last-child>a.ui-btn{border-bottom-width:1px}.ui-collapsible-content>.ui-listview:not(.ui-listview-inset)>li.ui-first-child,.ui-collapsible-content>.ui-listview:not(.ui-listview-inset)>li.ui-first-child>a.ui-btn{border-top-width:0}.ui-collapsible-themed-content .ui-listview:not(.ui-listview-inset)>li.ui-last-child,.ui-collapsible-themed-content .ui-listview:not(.ui-listview-inset)>li.ui-last-child>a.ui-btn{border-bottom-width:0}.ui-listview>li.ui-first-child,.ui-listview>li.ui-first-child>a.ui-btn{-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit;-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit}.ui-listview>li.ui-last-child,.ui-listview>li.ui-last-child>a.ui-btn{-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit;-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit}.ui-listview>li.ui-li-has-alt>a.ui-btn{-webkit-border-top-right-radius:0;border-top-right-radius:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0}.ui-listview>li.ui-first-child>a.ui-btn+a.ui-btn{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-top-right-radius:inherit;border-top-right-radius:inherit}.ui-listview>li.ui-last-child>a.ui-btn+a.ui-btn{-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:inherit;border-bottom-right-radius:inherit}.ui-listview>li.ui-first-child img:first-child:not(.ui-li-icon){-webkit-border-top-left-radius:inherit;border-top-left-radius:inherit}.ui-listview>li.ui-last-child img:first-child:not(.ui-li-icon){-webkit-border-bottom-left-radius:inherit;border-bottom-left-radius:inherit}.ui-collapsible-content>.ui-listview:not(.ui-listview-inset){-webkit-border-radius:inherit;border-radius:inherit}.ui-listview>.ui-li-static{padding:.7em 1em}.ui-listview>.ui-li-divider{padding:.5em 1.143em;font-size:14px;font-weight:700;cursor:default;outline:0}.ui-listview>.ui-li-divider.ui-li-has-count,.ui-listview>.ui-li-has-count>.ui-btn,.ui-listview>.ui-li-static.ui-li-has-count{padding-right:2.8125em}.ui-listview>.ui-li-has-count>.ui-btn-icon-right{padding-right:4.6875em}.ui-listview>.ui-li-has-thumb>.ui-btn,.ui-listview>.ui-li-static.ui-li-has-thumb{min-height:3.625em;padding-left:6.25em}.ui-listview>.ui-li-has-icon>.ui-btn,.ui-listview>.ui-li-static.ui-li-has-icon{min-height:1.25em;padding-left:2.5em}.ui-li-count{position:absolute;font-size:12.5px;font-weight:700;text-align:center;border-width:1px;border-style:solid;padding:0 .48em;line-height:1.6em;min-height:1.6em;min-width:.64em;right:.8em;top:50%;margin-top:-.88em}.ui-listview .ui-btn-icon-right .ui-li-count{right:3.2em}.ui-listview .ui-li-has-thumb .ui-li-thumb,.ui-listview .ui-li-has-thumb>.ui-btn>img:first-child,.ui-listview .ui-li-has-thumb>img:first-child{position:absolute;left:0;top:0;max-height:5em;max-width:5em}.ui-listview>.ui-li-has-icon>.ui-btn>img:first-child,.ui-listview>.ui-li-has-icon>img:first-child{position:absolute;left:.625em;top:.9em;max-height:1em;max-width:1em}.ui-listview>li h1,.ui-listview>li h2,.ui-listview>li h3,.ui-listview>li h4,.ui-listview>li h5,.ui-listview>li h6{font-size:1em;font-weight:700;display:block;margin:.45em 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ui-listview>li p{font-size:.75em;font-weight:400;display:block;margin:.6em 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ui-listview .ui-li-aside{position:absolute;top:1em;right:3.333em;margin:0;text-align:right}.ui-listview>li.ui-li-has-alt>.ui-btn{margin-right:2.5em;border-right-width:0}.ui-listview>li.ui-li-has-alt>.ui-btn+.ui-btn{position:absolute;width:2.5em;height:100%;min-height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-left-width:1px;top:0;right:0;margin:0;padding:0;z-index:2}.ui-listview-inset>li.ui-li-has-alt>.ui-btn+.ui-btn{border-right-width:1px}.ui-listview>li.ui-li-has-alt>.ui-btn+.ui-btn:focus{z-index:3}ol.ui-listview,ol.ui-listview>.ui-li-divider{counter-reset:listnumbering}ol.ui-listview>li.ui-li-static,ol.ui-listview>li>.ui-btn{vertical-align:middle}ol.ui-listview>li.ui-field-contain>.ui-controlgroup-label:before,ol.ui-listview>li.ui-field-contain>label:before,ol.ui-listview>li.ui-li-static:before,ol.ui-listview>li>.ui-btn:before{display:inline-block;font-size:.9em;font-weight:400;padding-right:.3em;min-width:1.4em;line-height:1.5;vertical-align:middle;counter-increment:listnumbering;content:counter(listnumbering) \".\"}ol.ui-listview>li.ui-field-contain:before{content:none;display:none}ol.ui-listview>li h1:first-child,ol.ui-listview>li h2:first-child,ol.ui-listview>li h3:first-child,ol.ui-listview>li h4:first-child,ol.ui-listview>li h5:first-child,ol.ui-listview>li h6:first-child,ol.ui-listview>li img:first-child+*,ol.ui-listview>li p:first-child{display:inline-block;vertical-align:middle}ol.ui-listview>li h1:first-child~*,ol.ui-listview>li h2:first-child~*,ol.ui-listview>li h3:first-child~*,ol.ui-listview>li h4:first-child~*,ol.ui-listview>li h5:first-child~*,ol.ui-listview>li h6:first-child~*,ol.ui-listview>li img:first-child+*~*,ol.ui-listview>li p:first-child~*{margin-top:0;text-indent:2.04em}html .ui-filterable+.ui-listview,html .ui-filterable.ui-listview{margin-top:.5em}.ui-collapsible-content>form.ui-filterable{margin-top:-.5em}.ui-collapsible-content>.ui-input-search.ui-filterable{margin-top:0}.ui-collapsible-content>.ui-filterable+.ui-listview:not(.ui-listview-inset)>li.ui-first-child,.ui-collapsible-content>.ui-filterable+.ui-listview:not(.ui-listview-inset)>li.ui-first-child>a.ui-btn,.ui-collapsible-content>.ui-filterable.ui-listview:not(.ui-listview-inset)>li.ui-first-child,.ui-collapsible-content>.ui-filterable.ui-listview:not(.ui-listview-inset)>li.ui-first-child>a.ui-btn{border-top-width:1px}div.ui-slider{height:30px;margin:.5em 0;padding:0;-ms-touch-action:pan-y pinch-zoom double-tap-zoom}div.ui-slider:after,div.ui-slider:before{content:\"\";display:table}div.ui-slider:after{clear:both}input.ui-slider-input{display:block;float:left;font-size:14px;font-weight:700;margin:0;padding:4px;width:40px;height:20px;line-height:20px;border-width:1px;border-style:solid;outline:0;text-align:center;vertical-align:text-bottom;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;-ms-box-sizing:content-box;box-sizing:content-box}.ui-slider-input::-webkit-inner-spin-button,.ui-slider-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ui-slider-track{position:relative;overflow:visible;border-width:1px;border-style:solid;height:15px;margin:0 15px 0 68px;top:6px}.ui-slider-track.ui-mini{height:12px;top:8px}.ui-slider-track .ui-slider-bg{height:100%}.ui-slider-track .ui-btn.ui-slider-handle{position:absolute;z-index:1;top:50%;width:28px;height:28px;margin:-15px 0 0 -15px;outline:0;padding:0}.ui-slider-track.ui-mini .ui-slider-handle{height:14px;width:14px;margin:-8px 0 0 -8px}select.ui-slider-switch{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}div.ui-slider-switch{display:inline-block;height:32px;width:5.8em;top:0}div.ui-slider-switch:after,div.ui-slider-switch:before{display:none;clear:none}div.ui-slider-switch.ui-mini{height:29px;top:0}.ui-slider-inneroffset{margin:0 16px;position:relative;z-index:1}.ui-slider-switch.ui-mini .ui-slider-inneroffset{margin:0 15px 0 14px}.ui-slider-switch .ui-btn.ui-slider-handle{margin:1px 0 0 -15px}.ui-slider-switch.ui-mini .ui-slider-handle{width:25px;height:25px;margin:1px 0 0 -13px;padding:0}.ui-slider-handle-snapping{-webkit-transition:left 70ms linear;-moz-transition:left 70ms linear;transition:left 70ms linear}.ui-slider-switch .ui-slider-label{position:absolute;text-align:center;width:100%;overflow:hidden;font-size:16px;top:0;line-height:2;min-height:100%;white-space:nowrap;cursor:pointer}.ui-slider-switch.ui-mini .ui-slider-label{font-size:14px}.ui-slider-switch .ui-slider-label-a{z-index:1;left:0;text-indent:-1.5em}.ui-slider-switch .ui-slider-label-b{z-index:0;right:0;text-indent:1.5em}.ui-slider-handle,.ui-slider-switch .ui-slider-inneroffset,.ui-slider-switch .ui-slider-label,.ui-slider-track .ui-slider-bg{-webkit-border-radius:inherit;border-radius:inherit}.ui-field-contain div.ui-slider-switch{margin:0}@media (min-width:28em){.ui-field-contain div.ui-slider-switch,.ui-field-contain.ui-hide-label div.ui-slider-switch{display:inline-block;width:5.8em}}.ui-slider-popup{width:64px;height:64px;font-size:36px;padding-top:14px;opacity:.8}.ui-slider-popup{position:absolute!important;text-align:center;z-index:100}.ui-slider-track .ui-btn.ui-slider-handle{font-size:.9em;line-height:30px}.ui-rangeslider{margin:.5em 0}.ui-rangeslider:after,.ui-rangeslider:before{content:\"\";display:table}.ui-rangeslider:after{clear:both}.ui-rangeslider .ui-slider-input.ui-rangeslider-last{float:right}.ui-rangeslider .ui-rangeslider-sliders{position:relative;overflow:visible;height:30px;margin:0 68px}.ui-rangeslider .ui-rangeslider-sliders .ui-slider-track{position:absolute;top:6px;right:0;left:0;margin:0}.ui-rangeslider.ui-mini .ui-rangeslider-sliders .ui-slider-track{top:8px}.ui-rangeslider .ui-slider-track:first-child .ui-slider-bg{display:none}.ui-rangeslider .ui-rangeslider-sliders .ui-slider-track:first-child{background-color:transparent;background:0;border-width:0;height:0}html>body .ui-rangeslider .ui-rangeslider-sliders .ui-slider-track:first-child{height:15px;border-width:1px}html>body .ui-rangeslider.ui-mini .ui-rangeslider-sliders .ui-slider-track:first-child{height:12px}div.ui-rangeslider label{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.ui-field-contain .ui-rangeslider .ui-rangeslider-sliders,.ui-field-contain .ui-rangeslider input.ui-slider-input,.ui-field-contain .ui-rangeslider.ui-mini .ui-rangeslider-sliders,.ui-field-contain .ui-rangeslider.ui-mini input.ui-slider-input{margin-top:0;margin-bottom:0}.ui-input-search,.ui-input-text{margin:.5em 0;border-width:1px;border-style:solid}.ui-input-search input,.ui-input-text input,textarea.ui-input-text{padding:.4em;line-height:1.4em;display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;outline:0}.ui-input-search input,.ui-input-text input{margin:0;min-height:2.2em;text-align:left;border:0;background:transparent none;-webkit-appearance:none;-webkit-border-radius:inherit;border-radius:inherit}textarea.ui-input-text{overflow:auto;resize:vertical}.ui-input-search.ui-mini input,.ui-input-text.ui-mini input,.ui-mini .ui-input-search input,.ui-mini .ui-input-text input,.ui-mini textarea.ui-input-text,textarea.ui-mini{font-size:14px}.ui-mini textarea.ui-input-text,textarea.ui-mini{margin:.446em 0}.ui-input-has-clear,.ui-input-search{position:relative}.ui-input-has-clear{padding-right:2.375em}.ui-mini.ui-input-has-clear{padding-right:2.923em}.ui-input-has-clear input{padding-right:0;-webkit-border-top-right-radius:0;border-top-right-radius:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0}.ui-input-search input{padding-left:1.75em}.ui-input-search:after{position:absolute;left:.3125em;top:50%;margin-top:-7px;content:\"\";background-position:center center;background-repeat:no-repeat;width:14px;height:14px;filter:Alpha(Opacity=50);opacity:.5}.ui-input-search.ui-input-has-clear .ui-btn.ui-input-clear,.ui-input-text.ui-input-has-clear .ui-btn.ui-input-clear{position:absolute;right:0;top:50%;margin:-14px .3125em 0;border:0;background-color:transparent}.ui-input-search .ui-input-clear-hidden,.ui-input-text .ui-input-clear-hidden{display:none}.ui-input-search input::-moz-placeholder,.ui-input-text input::-moz-placeholder,textarea.ui-input-text::-moz-placeholder{color:#aaa}.ui-input-search input:-ms-input-placeholder,.ui-input-text input:-ms-input-placeholder,textarea.ui-input-text:-ms-input-placeholder{color:#aaa}.ui-input-text input[type=number]::-webkit-outer-spin-button{margin:0}.ui-input-search input::-ms-clear,.ui-input-text input::-ms-clear{display:none}.ui-input-search input:focus,.ui-input-text input:focus{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}textarea.ui-input-text.ui-textinput-autogrow{overflow:hidden}.ui-textinput-autogrow-resize{-webkit-transition:height .25s;-o-transition:height .25s;-moz-transition:height .25s;transition:height .25s}.ui-flipswitch{display:inline-block;vertical-align:middle;width:5.875em;height:1.875em;border-width:1px;border-style:solid;margin:.5em 0;overflow:hidden;-webkit-transition-property:padding,width,background-color,color,border-color;-moz-transition-property:padding,width,background-color,color,border-color;-o-transition-property:padding,width,background-color,color,border-color;transition-property:padding,width,background-color,color,border-color;-webkit-transition-duration:.1s;-moz-transition-duration:.1s;-o-transition-duration:.1s;transition-duration:.1s;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.ui-flipswitch.ui-flipswitch-active{padding-left:4em;width:1.875em}.ui-flipswitch-input{position:absolute;height:1px;width:1px;margin:-1px;overflow:hidden;clip:rect(1px,1px,1px,1px);border:0;outline:0;filter:Alpha(Opacity=0);opacity:0}.ui-flipswitch .ui-btn.ui-flipswitch-on,.ui-flipswitch .ui-flipswitch-off{float:left;height:1.75em;margin:.0625em;line-height:1.65em}.ui-flipswitch .ui-btn.ui-flipswitch-on{width:1.75em;padding:0;text-indent:-2.6em;text-align:left;border-width:1px;border-style:solid;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border-radius:inherit;overflow:visible;color:inherit;text-shadow:inherit}.ui-flipswitch .ui-flipswitch-off{padding:1px;text-indent:1em}@media (min-width:28em){.ui-field-contain>label+.ui-flipswitch{display:inline-block;width:5.875em;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;-ms-box-sizing:content-box;box-sizing:content-box}.ui-field-contain .ui-flipswitch.ui-flipswitch-active{width:1.875em}}.ui-table{border:0;border-collapse:collapse;padding:0;width:100%}.ui-table td,.ui-table th{line-height:1.5em;text-align:left;padding:.4em .5em;vertical-align:top}.ui-table td .ui-btn,.ui-table th .ui-btn{line-height:normal}.ui-table th{font-weight:700}.ui-table caption{text-align:left;margin-bottom:1.4em;opacity:.5}.ui-table-columntoggle-btn{float:right;margin-bottom:.8em}.ui-table-columntoggle-popup fieldset{margin:0}.ui-table-columntoggle{clear:both}@media only all{td.ui-table-priority-1,td.ui-table-priority-2,td.ui-table-priority-3,td.ui-table-priority-4,td.ui-table-priority-5,td.ui-table-priority-6,th.ui-table-priority-1,th.ui-table-priority-2,th.ui-table-priority-3,th.ui-table-priority-4,th.ui-table-priority-5,th.ui-table-priority-6{display:none}}@media screen and (min-width:20em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-1,.ui-table-columntoggle.ui-responsive th.ui-table-priority-1{display:table-cell}}@media screen and (min-width:30em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-2,.ui-table-columntoggle.ui-responsive th.ui-table-priority-2{display:table-cell}}@media screen and (min-width:40em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-3,.ui-table-columntoggle.ui-responsive th.ui-table-priority-3{display:table-cell}}@media screen and (min-width:50em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-4,.ui-table-columntoggle.ui-responsive th.ui-table-priority-4{display:table-cell}}@media screen and (min-width:60em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-5,.ui-table-columntoggle.ui-responsive th.ui-table-priority-5{display:table-cell}}@media screen and (min-width:70em){.ui-table-columntoggle.ui-responsive td.ui-table-priority-6,.ui-table-columntoggle.ui-responsive th.ui-table-priority-6{display:table-cell}}.ui-table-columntoggle td.ui-table-cell-hidden,.ui-table-columntoggle th.ui-table-cell-hidden,.ui-table-columntoggle.ui-responsive td.ui-table-cell-hidden,.ui-table-columntoggle.ui-responsive th.ui-table-cell-hidden{display:none}.ui-table-columntoggle td.ui-table-cell-visible,.ui-table-columntoggle th.ui-table-cell-visible,.ui-table-columntoggle.ui-responsive td.ui-table-cell-visible,.ui-table-columntoggle.ui-responsive th.ui-table-cell-visible{display:table-cell}.ui-table-reflow td .ui-table-cell-label,.ui-table-reflow th .ui-table-cell-label{display:none}@media only all{.ui-table-reflow thead td,.ui-table-reflow thead th{display:none}.ui-table-reflow td,.ui-table-reflow th{text-align:left;display:block}.ui-table-reflow tbody th{margin-top:3em}.ui-table-reflow td .ui-table-cell-label,.ui-table-reflow th .ui-table-cell-label{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em}.ui-table-reflow td .ui-table-cell-label-top,.ui-table-reflow th .ui-table-cell-label-top{display:block;padding:.4em 0;margin:.4em 0;text-transform:uppercase;font-size:.9em;font-weight:400}}@media (min-width:35em){.ui-table-reflow.ui-responsive{display:table-row-group}.ui-table-reflow.ui-responsive tbody td,.ui-table-reflow.ui-responsive tbody th,.ui-table-reflow.ui-responsive td,.ui-table-reflow.ui-responsive th,.ui-table-reflow.ui-responsive thead td,.ui-table-reflow.ui-responsive thead th{display:table-cell;margin:0}.ui-table-reflow.ui-responsive td .ui-table-cell-label,.ui-table-reflow.ui-responsive th .ui-table-cell-label{display:none}}@media (max-width:35em){.ui-table-reflow.ui-responsive td,.ui-table-reflow.ui-responsive th{width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;float:left;clear:left}}.ui-panel{width:17em;min-height:100%;max-height:none;border-width:0;position:absolute;top:0;display:block}.ui-panel-closed{width:0;max-height:100%;overflow:hidden;visibility:hidden}.ui-panel-fixed{position:fixed;bottom:-1px;padding-bottom:1px}.ui-panel-display-reveal{z-index:1}.ui-panel-display-push{z-index:999}.ui-panel-display-overlay{z-index:1001}.ui-panel-inner{padding:1em}.ui-panel-page-container{overflow-x:visible}.ui-panel-page-container-themed .ui-page-active{background:0}.ui-panel-wrapper{position:relative;min-height:inherit;border:0;overflow-x:hidden;z-index:999}.ui-panel-fixed-toolbar{overflow-x:hidden}.ui-panel-dismiss{position:absolute;top:0;left:0;right:0;height:100%;z-index:1002;display:none}.ui-panel-dismiss-open{display:block}.ui-panel-animate{-webkit-transition:-webkit-transform .3s ease;-webkit-transition-duration:.3s;-moz-transition:-moz-transform .3s ease;transition:transform .3s ease}@media screen and (max-device-width:768px){.ui-page-footer-fixed .ui-panel-animate.ui-panel-wrapper,.ui-page-header-fixed .ui-panel-animate.ui-panel-wrapper,.ui-panel-animate.ui-panel-fixed-toolbar{-ms-transition:none}.ui-panel-animate.ui-panel-fixed-toolbar{-ms-transition:-ms-transform 1ms;-ms-transform:rotate(0)}}.ui-panel-animate.ui-panel:not(.ui-panel-display-reveal){-webkit-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0)}.ui-panel-position-left{left:-17em}.ui-panel-animate.ui-panel-position-left.ui-panel-display-overlay,.ui-panel-animate.ui-panel-position-left.ui-panel-display-push{left:0;-webkit-transform:translate3d(-17em,0,0);-moz-transform:translate3d(-17em,0,0);transform:translate3d(-17em,0,0)}.ui-panel-open.ui-panel-position-left,.ui-panel-position-left.ui-panel-display-reveal{left:0}.ui-panel-animate.ui-panel-open.ui-panel-position-left.ui-panel-display-overlay,.ui-panel-animate.ui-panel-open.ui-panel-position-left.ui-panel-display-push{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-moz-transform:none}.ui-panel-position-right{right:-17em}.ui-panel-animate.ui-panel-position-right.ui-panel-display-overlay,.ui-panel-animate.ui-panel-position-right.ui-panel-display-push{right:0;-webkit-transform:translate3d(17em,0,0);-moz-transform:translate3d(17em,0,0);transform:translate3d(17em,0,0)}.ui-panel-position-right.ui-panel-display-reveal,.ui-panel-position-right.ui-panel-open{right:0}.ui-panel-animate.ui-panel-open.ui-panel-position-right.ui-panel-display-overlay,.ui-panel-animate.ui-panel-open.ui-panel-position-right.ui-panel-display-push{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-moz-transform:none}.ui-panel-page-content-position-left{left:17em;right:-17em}.ui-panel-animate.ui-panel-page-content-position-left{left:0;right:0;-webkit-transform:translate3d(17em,0,0);-moz-transform:translate3d(17em,0,0);transform:translate3d(17em,0,0)}.ui-panel-page-content-position-right{left:-17em;right:17em}.ui-panel-animate.ui-panel-page-content-position-right{left:0;right:0;-webkit-transform:translate3d(-17em,0,0);-moz-transform:translate3d(-17em,0,0);transform:translate3d(-17em,0,0)}.ui-panel-dismiss-open.ui-panel-dismiss-position-left{left:17em}.ui-panel-dismiss-open.ui-panel-dismiss-position-right{right:17em}.ui-panel-display-reveal{-webkit-box-shadow:inset -5px 0 5px rgba(0,0,0,.15);-moz-box-shadow:inset -5px 0 5px rgba(0,0,0,.15);box-shadow:inset -5px 0 5px rgba(0,0,0,.15)}.ui-panel-position-right.ui-panel-display-reveal{-webkit-box-shadow:inset 5px 0 5px rgba(0,0,0,.15);-moz-box-shadow:inset 5px 0 5px rgba(0,0,0,.15);box-shadow:inset 5px 0 5px rgba(0,0,0,.15)}.ui-panel-display-overlay{-webkit-box-shadow:5px 0 5px rgba(0,0,0,.15);-moz-box-shadow:5px 0 5px rgba(0,0,0,.15);box-shadow:5px 0 5px rgba(0,0,0,.15)}.ui-panel-position-right.ui-panel-display-overlay{-webkit-box-shadow:-5px 0 5px rgba(0,0,0,.15);-moz-box-shadow:-5px 0 5px rgba(0,0,0,.15);box-shadow:-5px 0 5px rgba(0,0,0,.15)}.ui-panel-open.ui-panel-position-left.ui-panel-display-push{border-right-width:1px;margin-right:-1px}.ui-panel-page-content-position-left.ui-panel-page-content-display-push{margin-left:1px;width:auto}.ui-panel-open.ui-panel-position-right.ui-panel-display-push{border-left-width:1px;margin-left:-1px}.ui-panel-page-content-position-right.ui-panel-page-content-display-push{margin-right:1px;width:auto}@media (min-width:55em){.ui-responsive-panel .ui-panel-page-content-open.ui-panel-page-content-position-left{margin-right:17em}.ui-responsive-panel .ui-panel-page-content-open.ui-panel-page-content-position-right{margin-left:17em}.ui-responsive-panel .ui-panel-page-content-open{width:auto}.ui-responsive-panel .ui-panel-dismiss-display-push,.ui-responsive-panel.ui-page-active~.ui-panel-dismiss-display-push{display:none}}.ui-tabs{position:relative;padding:.2em}");
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle-sfx.js.map