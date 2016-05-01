import 'jquery-mobile/dist/jquery.mobile.min.css!';
import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';

$(document).ready(function() {
  $("body").css("visibility", "visible");
});

import {BrowserInfo} from './browserinfo';
var browserinfo = new BrowserInfo();

$.getJSON("db/browserinfo.json", function(data) {
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

  $('#browserinfogroup input[type=checkbox]').change(function() {
    browserinfo.detection[this.name] = this.checked;
    $("#browserinfobody").html(browserinfo.body());
  });
});

import {HandlerInfo} from './handlerinfo';
var handlerlist = new HandlerInfo();

$.getJSON("handlers.json", function(data) {
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

var handlerinfolist = new HandlerInfo();

$.getJSON("db/handlerinfo.json", function(data) {
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

$.getJSON("db/handlerurls.json", function(data) {
  $.each(data, function(i, handler) {
    var key = i;
    $("#urllist").append('<li data-role="list-divider">' + key + '</li>');

    $.each(handler.urls, function(i, url) {
      var description = "";
      if (url.description) {
        description = url.description;
      } else {
        description = url.value;
      }
      $("#urllist").append('<li data-filtertext="' + key +
        '"><a href="' + url.value + '">' +
        description + '</li>');
    });
  });
  $("#urllist").listview("refresh");
});

$.getJSON("db/handlerpresets.json", function(data) {
  $.each(data, function(i, handler) {
    var key = i;
    $("#presetlist").append('<li data-role="list-divider">' + key + '</li>');

    $.each(handler.presets, function(i, preset) {
      var description = "";
      if (preset.description) {
        description = preset.description;
      } else {
        description = preset.value;
      }
      $("#presetlist").append('<li data-filtertext="' + key +
        '"><a href="' + preset.value + '">' +
        description + '</li>');
    });
  });
  $("#presetlist").listview("refresh");
});
