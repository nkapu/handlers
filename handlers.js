import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';
import 'jquery-mobile/dist/jquery.mobile.min.css!';

import {browserinfo} from './browserinfo';

var browserinfoloader = new XMLHttpRequest();

browserinfoloader.onreadystatechange = function() {
  var xmlhttp = browserinfoloader;
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    browserinfo.loadjson(xmlhttp.responseText);

    $("#browserinfohead").text(browserinfo.head());
    $("#browserinfotweet").html(browserinfo.tweet());
    $("#browserinfonavbar").navbar("destroy");
    $("#browserinfonavbar").navbar();

    console.log($("#browserinfonavbar"));

    var inputs = browserinfo.flaginputs();
    $("#browserinfogroup").controlgroup("container").append(inputs);
    $("#browserinfogroup [type=checkbox]").checkboxradio();
    $("#browserinfogroup").controlgroup("refresh");

    $("#browserinfobody").html(browserinfo.body());
  }
  $('#browserinfogroup input[type=checkbox]').change(function() {
    browserinfo.detection[this.name] = this.checked;
    $("#browserinfobody").html(browserinfo.body());
  });
};

browserinfoloader.open("GET", "browserinfo.json", true);
browserinfoloader.send();

import {handlerinfo} from './handlerinfo';

var handlersloader = new XMLHttpRequest();

handlersloader.onreadystatechange = function() {
  var xmlhttp = handlersloader;
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var handlersdata = JSON.parse(xmlhttp.responseText);
    $("#handlerlist").append(handlerinfo.listview(handlersdata));
    $("#handlerlist").listview("refresh");
  }
};

handlersloader.open("GET", "handlers.json", true);
handlersloader.send();