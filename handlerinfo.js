/**
  Builds URL handler lists based on discovery and info JSON/dict information.
  */
export function HandlerInfo() {
  /* The JSON dictionary of the handler information. */
  this.info = {};
  /**
    @param {Object} data a dictionary of the handler info.
    */
  this.load = function(data) {
    this.info = data;
  };
  /**
    Creates listview of based on the handlers
    * @return {Object} a HTML list of handlers
    modified from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
    */
  this.listview = function() {
    // Create the list element:
    var list = document.createElement("ul");

    for (var i = 0; i < this.info.length; i++) {
      // Create the list item:
      var item = document.createElement('li');
      // Set its contents:
      var handler = this.info[i].handler;
      var name = this.info[i].name;
      var path = this.info[i].path;

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
}
