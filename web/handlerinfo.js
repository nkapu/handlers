/**
  Builds URL handler lists based on discovery and info JSON/dict information.
  */
export function HandlerInfo() {
  /* The JSON dictionary of the handler information. */
  this.info = {};
  /**
    Loads the handler info into the handler info object.
    @param {Object} data a dictionary of the handler info.
    */
  this.load = function(data) {
    this.info = data;
  };
  /**
    @return {Number} number of entries in the handler info.
  */
  this.count = function() {
    return Object.keys(this.info).length;
  };
  /**
    Creates listview of based on the handlers
    * @return {Object} a HTML list of handlers
    modified from http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
    */
  this.listview = function() {
    // Create the list element:
    var list = document.createElement("ul");

    Object.keys(this.info).forEach(key => {
      var handler = this.info[key];
      // Create the handler list item
      var item = document.createElement('li');

      var a = document.createElement('a');
      var linkText = document.createTextNode(key);
      a.appendChild(linkText);
      a.title = "direct link";
      a.href = key + "//localhost";
      item.appendChild(a);

      // If there are apps for this handler then list them
      var apps = handler.apps;
      if (Array.isArray(apps)) {
        var applist = document.createElement('ul');

        for (var i = 0; i < apps.length; i++) {
          var appitem = document.createElement('li');
          var appinfo = document.createTextNode("Name: " +
                                                apps[i].name +
                                                " Path: " +
                                                apps[i].path);
          appitem.appendChild(appinfo);

          // If there are apps for this handler then list them
          var flags = handler.apps[i].flags;
          if (Array.isArray(flags)) {
            var flagtext = " Flags:";
            for (var j = 0; j < flags.length; j++) {
              flagtext += " " + flags[j];
            }
            var flaginfo = document.createTextNode(flagtext);
            appitem.appendChild(flaginfo);
          }
          applist.appendChild(appitem);
        }

        item.appendChild(applist);
      }
      // Add it to the handler list
      list.appendChild(item);
    });
    return list.innerHTML;
  };
}
