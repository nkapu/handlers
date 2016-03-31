import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';
import 'jquery-mobile/dist/jquery.mobile.min.css!';

/**
  Creates listview of based on the handlers
  * @param {array} array The JSON array of the Handlers to be listed.
  modified from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
  */
function makelistview(array) {
  // Create the list element:
  var list = document.getElementById('handlerlist');

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');
    // Set its contents:
    var handler = array[i].handler;
    var name = array[i].name;
    var path = array[i].path;

    var handlername = document.createTextNode(" Handler: ");
    item.appendChild(handlername);

    var a = document.createElement('a');
    var linkText = document.createTextNode(handler);
    a.appendChild(linkText);
    a.title = name + " link";
    a.href = handler + "//localhost";
    item.appendChild(a);

    var Namepath = document.createTextNode(" Name: " + name + " Path: " + path);
    item.appendChild(Namepath);
    // Add it to the list:
    list.appendChild(item);
  }
  $("#handlerlist").listview("refresh");
  return;
}

var xmlhttp = new XMLHttpRequest();
var url = "handlers.json";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var handlers = JSON.parse(xmlhttp.responseText);
    makelistview(handlers);
    //  document.getElementById('handlerlist').appendChild(makeUL(handlers));
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
