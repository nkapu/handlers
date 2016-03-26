//modified makeUL from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
    function makeUL(array) {
    // Create the list element:
        var list = document.getElementById('handlerlist');

        for(var i = 0; i < array.length; i++) {
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
      // Finally, return the constructed list:
      return list;
    }

    var xmlhttp = new XMLHttpRequest();
    var url = "handlers.json";

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var handlers = JSON.parse(xmlhttp.responseText);
        makeUL(handlers);
      //  document.getElementById('handlerlist').appendChild(makeUL(handlers));
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
