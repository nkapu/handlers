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
    Creates an Apps list
    * @param {Object[]} apps array (name, path, flags)
    * @return {Object} a HTML list of the Apps or False if none
    */
  this.itemapps = function(apps) {
    if (!Array.isArray(apps)) {
      return false;
    }

    var div = document.createElement('div');
    div.setAttribute("data-role", "collapsible");
    div.setAttribute("data-corners", "false");
    div.setAttribute("data-collapsed-icon", "info");

    var head = document.createElement('h3');
    var headText = document.createTextNode("Apps:");
    head.appendChild(headText);
    div.appendChild(head);

    var list = document.createElement('ul');
    list.setAttribute("data-role", "listview");
    list.setAttribute("data-inset", "true");
    list.setAttribute("class", "dynamiclistview");

    for (var i = 0; i < apps.length; i++) {
      var appitem = document.createElement('li');
      var appinfo = document.createTextNode("Name: " +
                                            apps[i].name +
                                            " Path: " +
                                            apps[i].path);
      appitem.appendChild(appinfo);

      // If there are flags for this App then list them
      var flags = apps[i].flags;
      if (Array.isArray(flags)) {
        for (var j = 0; j < flags.length; j++) {
          var flag = document.createElement("span");
          flag.setAttribute("class", "custom-flag");
          var flagText = document.createTextNode(flags[j]);
          flag.appendChild(flagText);
          appitem.appendChild(flag);
        }
      }
      list.appendChild(appitem);
    }

    div.appendChild(list);
    return div;
  };
  /**
    Creates an URL list
    * @param {Object[]} urls array (value, description)
    * @return {Object} a HTML list of the URLs or False if none
    */
  this.itemurls = function(urls) {
    if (!Array.isArray(urls)) {
      return false;
    }

    var div = document.createElement('div');
    div.setAttribute("data-role", "collapsible");
    div.setAttribute("data-corners", "false");
    div.setAttribute("data-collapsed-icon", "info");

    var head = document.createElement('h3');
    var headText = document.createTextNode("More info:");
    head.appendChild(headText);
    div.appendChild(head);

    var list = document.createElement('ul');
    list.setAttribute("data-role", "listview");
    list.setAttribute("data-inset", "true");
    list.setAttribute("class", "dynamiclistview");

    for (var i = 0; i < urls.length; i++) {
      if (!urls[i].value) {
        continue;
      }
      var item = document.createElement('li');
      var a = document.createElement('a');
      var linkText;
      if (urls[i].description) {
        linkText = document.createTextNode(urls[i].description);
      } else {
        linkText = document.createTextNode(urls[i].value);
      }
      a.appendChild(linkText);
      a.setAttribute("href", urls[i].value);
      item.appendChild(a);
      list.appendChild(item);
    }
    div.appendChild(list);
    return div;
  };
  /**
    Creates individual handler list item
    * @param {Object} key for handler name
    * @param {Object} handler for value dict
    * @return {Object} a HTML list item of the handler
    */
  this.itemview = function(key, handler) {
    // Create the handler list item
    var item = document.createElement('li');

    var a = document.createElement('a');
    var linkText = document.createTextNode(key);
    a.appendChild(linkText);
    a.setAttribute("title", "direct link");
    a.setAttribute("href", key + "//localhost");
    item.appendChild(a);

    // If there are apps for this handler then list them
    var apps = this.itemapps(handler.apps);
    if (apps) {
      item.appendChild(apps);
    }

    // If there are urls for this handler then list them
    var urls = this.itemurls(handler.urls);
    if (urls) {
      item.appendChild(urls);
    }

    return item;
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
      // Create the list for the handler
      var item = this.itemview(key, this.info[key]);
      // Add it to the handler list
      list.appendChild(item);
    });
    return list.innerHTML;
  };
}
