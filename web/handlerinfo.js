export var handlerinfo = new function() {
  /**
    Creates listview of based on the handlers
    * @param {array} array The JSON array of the Handlers to be listed
    * @return {Object} a HTML list of handlers
    modified from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
    */
  this.listview = function(array) {
    // Create the list element:
    var list = document.createElement("ul");

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

      var Namepath = document.createTextNode(" Name: " +
                                              name + " Path: " + path);
      item.appendChild(Namepath);
      // Add it to the list:
      list.appendChild(item);
    }
    return list.innerHTML;
  };
};
