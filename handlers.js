import 'jquery-mobile/dist/jquery.mobile.min.css!';
import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';

$(document).ready(function() {
  $("body").css("visibility", "visible");
});

import {BrowserInfo} from './browserinfo';
var browserinfo = new BrowserInfo();

$.getJSON("browserinfo.json", function(data) {
  browserinfo.load(data);

  $("#browserinfohead").text(browserinfo.head());
  $("#browserinfotweet").html(browserinfo.tweet());
  $("#browserinfonavbar").navbar("destroy");
  $("#browserinfonavbar").navbar();

  var inputs = browserinfo.flaginputs();
  $("#browserinfogroup").controlgroup("container").append(inputs);
  $("#browserinfogroup [type=checkbox]").checkboxradio();
  $("#browserinfogroup").controlgroup("refresh");

  $("#browserinfobody").html(browserinfo.body());

  $('#browserinfogroup input[type=checkbox]').change(function() {
    browserinfo.detection[this.name] = this.checked;
    $("#browserinfobody").html(browserinfo.body());
  });
});

import {HandlerInfo} from './handlerinfo';
var handlerinfo = new HandlerInfo();

$.getJSON("handlers.json", function(data) {
  // handlerinfo.load(data);

  $("#handlerlist").append(handlerinfo.listview(data));
  $("#handlerlist").listview("refresh");
});

$.getJSON("handlerinfo.json", function(data) {
  // handlerinfo.load(data);

  $("#handlerinfolist").append(handlerinfo.listview(data));
  $("#handlerinfolist").listview("refresh");
});
