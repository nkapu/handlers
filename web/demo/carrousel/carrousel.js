/*

Usage: ?dataurl=<json url>&delay=<delay in secs>

dataurl default is "urls.json"
delay default is 5 seconds

default camo iframe URL has to be changed from the code itself

*/

/*
Query string parser copied from:

http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
*/

var qs = (function(a) {
  if (a === "") {
    return {};
  }
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length === 1) {
      b[p[0]] = "";
    } else {
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
  }
  return b;
})(window.location.search.substr(1).split('&'));

/* fetch the urls and set the delay */

var req = new XMLHttpRequest();
var dataurl = "urls.json";
var delay = 5 * 1000;

if (qs.dataurl) {
  dataurl = qs.dataurl;
}

if (qs.delay) {
  delay = qs.delay * 1000;
}

var urls = [];
var urlindex = 0;
var rounds = 0;

req.onreadystatechange = function() {
  if (req.readyState === 4 && req.status === 200) {
    urls = JSON.parse(req.responseText);
    window.setInterval(nexttarget, delay);
  }
};
req.open("GET", dataurl, true);
req.send();

/** iterate through the array of urls (with delay) */
function nexttarget() {
  document.getElementById("myframe").src = urls[urlindex++];
  if (urlindex >= urls.length) {
    urlindex = 0;
    rounds++;
    /* do it quick on the second round  */
    if (rounds === 1) {
      window.setInterval(nexttarget, 0.5 * 1000);
    } else {
      window.setInterval(nexttarget, delay);
    }
  }
}
