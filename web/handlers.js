import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';
import 'jquery-mobile/dist/jquery.mobile.min.css!';
import {browserinfo} from './browserinfo';
import {handlerinfo} from './handlerinfo';

$("#browserinfohead").text(browserinfo.shortinfo());
$("#browserinfogroup").html(browserinfo.flaginputs());
$("#browserinfogroup").controlgroup("refresh");
console.dir($("#browserinfogroup"));

var xmlhttp = new XMLHttpRequest();
var url = "handlers.json";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var handlers = JSON.parse(xmlhttp.responseText);
    $("#handlerlist").append(handlerinfo.listview(handlers));
    $("#handlerlist").listview("refresh");
    //  document.getElementById('handlerlist').appendChild(makeUL(handlers));
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
