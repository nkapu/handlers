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
  /** Creates testing "widget" for the handler
   * @param {string} key for handler name
   * @return {Object} a HTML div with the  or False if none
   */
  this.itemtester = function(key) {
    /*
    <form>
      <div class="ui-field-contain">
        <input type="url" data-clear-btn="true" name="url-1" id="url-1" value="steam://">
        <select name="select-native-1" id="select-native-1" data-corners="false" data-mini="true">
          <option value="1">steam://AddNonSteamGame</option>
          <option value="2">steam://appnews/666</option>
          <option value="3">steam://connect/127.0.0.1:27015</option>
          <option value="4">steam://installaddon/halflifehd</option>
        </select>
        <fieldset class="ui-grid-b">
          <div class="ui-block-a"><button type="submit" data-corners="false" data-mini="true">direct</button></div>
          <div class="ui-block-b"><button type="submit" data-corners="false" data-mini="true">local redirect</button></div>
          <div class="ui-block-c"><button type="submit" data-corners="false" data-mini="true">remote redirect</button></div>
        </fieldset>
      </div>
    </form>
    */
    var form = document.createElement("form");
    var div = document.createElement("div");
    div.setAttribute("class", "ui-field-contain");

    // URL input
    var urlinput = document.createElement("input");
    urlinput.setAttribute("type", "url");
    urlinput.setAttribute("data-clear-btn", "true");
    urlinput.setAttribute("value", key + "//");
    div.appendChild(urlinput);

    // URL preset selector
    var select = document.createElement("select");
    select.setAttribute("data-corners", "false");
    select.setAttribute("data-mini", "true");
    var presets = ["presetA", "presetB", "presetC"];
    for (var i = 0; i < presets.length; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", i);
      var optionText = document.createTextNode(presets[i]);
      option.appendChild(optionText);
      select.appendChild(option);
    }
    div.appendChild(select);

    // Actions
    var fieldset = document.createElement("fieldset");
    fieldset.setAttribute("class", "ui-grid-b");
    var actions = [
      ["a", "direct"],
      ["b", "local redirect"],
      ["c", "remote redirect"]
    ];
    for (var j = 0; j < actions.length; j++) {
      var actiondiv = document.createElement("div");
      actiondiv.setAttribute("class", "ui-block-" + actions[j][0]);
      var actionbutton = document.createElement("button");
      actionbutton.setAttribute("type", "submit");
      actionbutton.setAttribute("data-corners", "false");
      actionbutton.setAttribute("data-mini", "true");
      actionbutton.setAttribute("data-enhanced", "true");
      actionbutton.setAttribute("class", "ui-btn ui-shadow ui-mini");

      var actionbuttonText = document.createTextNode(actions[j][1]);
      actionbutton.appendChild(actionbuttonText);
      actiondiv.appendChild(actionbutton);
      fieldset.appendChild(actiondiv);
      console.log(actiondiv);
    }
    div.appendChild(fieldset);

    form.appendChild(div);
    return form;
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

    var div = document.createElement("div");
    // div.setAttribute("data-role", "collapsible");
    // div.setAttribute("data-corners", "false");
    // div.setAttribute("data-collapsed-icon", "info");

    var list = document.createElement("ul");
    list.setAttribute("data-role", "listview");
    list.setAttribute("data-inset", "true");
    list.setAttribute("class", "dynamiclistview");

    for (var i = 0; i < apps.length; i++) {
      var appitem = document.createElement("li");
      var appinfo = document.createTextNode(apps[i].name +
                                            " [" + apps[i].path + "]");
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

    var div = document.createElement("div");
    div.setAttribute("data-role", "collapsible");
    div.setAttribute("data-corners", "false");
    div.setAttribute("data-collapsed-icon", "info");

    var head = document.createElement("h3");
    var headText = document.createTextNode("More info:");
    head.appendChild(headText);
    div.appendChild(head);

    var list = document.createElement("ul");
    list.setAttribute("data-role", "listview");
    list.setAttribute("data-inset", "true");
    list.setAttribute("class", "dynamiclistview");

    for (var i = 0; i < urls.length; i++) {
      if (!urls[i].value) {
        continue;
      }
      var item = document.createElement("li");
      var a = document.createElement("a");
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
    var item = document.createElement("li");
    var collapsible = document.createElement("div");
    collapsible.setAttribute("data-role", "collapsible");
    collapsible.setAttribute("data-corners", "false");
    var head = document.createElement("h3");
    var headText = document.createTextNode(key);
    head.appendChild(headText);
    collapsible.appendChild(head);

    // Add the testing widget
    collapsible.appendChild(this.itemtester(key));

    // If there are apps for this handler then list them
    var apps = this.itemapps(handler.apps);
    if (apps) {
      collapsible.appendChild(apps);
    }

    // If there are urls for this handler then list them
    var urls = this.itemurls(handler.urls);
    if (urls) {
      collapsible.appendChild(urls);
    }

    item.appendChild(collapsible);
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
