/*

Usage: ?dataurl=<json url>&interval=<secs>&delay=<secs>

dataurl default is "urls.json"
delay default is 15 seconds
interval default is 3 seconds

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
var delay = 15 * 1000;
var interval = 3 * 1000;
var timer;

if (qs.dataurl) {
  dataurl = qs.dataurl;
}

if (qs.delay) {
  delay = qs.delay * 1000;
}

if (qs.interval) {
  interval = qs.interval * 1000;
}

var urls = [];
var urlindex = 0;
var direction = 1;

req.onreadystatechange = function() {
  if (req.readyState === 4 && req.status === 200) {
    urls = JSON.parse(req.responseText);
    timer = window.setInterval(nexttarget, delay);
  }
};
req.open("GET", dataurl, true);
req.send();

/** iterate through the array of urls (with delay) */
function nexttarget() {
  document.getElementById("myframe").src = urls[urlindex];
  urlindex += direction;
  if (urlindex >= urls.length) {
    urlindex -= 1;
    direction = -1;
  } else if (urlindex < 0) {
    urlindex = 0;
    direction = 1;
  }

  /* do it quicker backwards  */
  window.clearInterval(timer);
  if (direction < 0) {
    timer = window.setInterval(nexttarget, 500);
  } else {
    timer = window.setInterval(nexttarget, interval);
  }
}
