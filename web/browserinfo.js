import bowser from 'bowser';

/**
  Provides information about the browser and its URL handling behaviour
  by combining Bowser detection with info JSON/dict */
export function BrowserInfo() {
  /* The Bowser browser detection object */
  this.detection = bowser;
  /* The JSON dictionary of the Browser behaviour information. */
  this.info = {};
  /* Bower detection flags */
  this.flags = [
    "opera", "yandexbrowser", "windowsphone", "msedge",
    "msie", "chromeBook", "chrome", "sailfish",
    "seamonkey", "firefox", "silk", "phantom",
    "blackberry", "webos", "bada", "tizen", "safari",
    "webkit", "gecko", "android", "ios",
    "tablet", "mobile"
  ];
  this.flags.sort();

  /**
    @param {String} data a JSON string to be parsed into the behaviour info.
    */
  this.loadjson = function(data) {
    this.info = JSON.parse(data);
  };

  /**
    @param {Object} data a dictionary of behaviour info.
    */
  this.load = function(data) {
    this.info = data;
  };

  /**
    @return {Number} number of entries in the browser info.
  */
  this.count = function() {
    return Object.keys(this.info).length;
  };

  /**
    @return {String} a short text string with the browser name and version.
    */
  this.head = function() {
    return "Browser: " + this.detection.name + " " + this.detection.version;
  };

  /**
    @return {String} the HTML inputs for the controlgroup based on the flags
    */
  this.flaginputs = function() {
    var result = document.createElement("div");

    for (var i = 0; i < this.flags.length; i++) {
      var myflag = this.flags[i];
      var inputid = "checkbox-" + myflag;
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", myflag);
      input.setAttribute("id", inputid);
      input.setAttribute("data-mini", "true");
      if (this.detection[myflag] === true) {
        input.setAttribute("checked", "checked");
      }
      if (!this.info[myflag]) {
        input.setAttribute("disabled", "true");
      }
      result.appendChild(input);

      var label = document.createElement("label");
      label.setAttribute("for", inputid);
      var labelText = document.createTextNode(myflag);
      label.appendChild(labelText);
      result.appendChild(label);
    }

    return result.innerHTML;
  };

  /**
    @param {array} info The JSON dictionary of the Browser behaviour information.
    @return {String} information about the Browser's URL handler behaviour.
    */
  this.body = function() {
    /*
    <div class="ui-corner-all custom-corners">
      <div class="ui-bar ui-bar-a">
        <h3>Heading</h3>
      </div>
      <div class="ui-body ui-body-a">
        <p>Content</p>
      </div>
    </div>
      */
    var result = document.createElement("div");

    Object.keys(this.info).forEach(key => {
      if (!(this.detection[key] === true)) {
        return;
      }

      var entryname = key;
      var entrybody = this.info[key];
      var entry = document.createElement("div");
      entry.setAttribute("class", "ui-bar ui-bar-a");
      var heading = document.createElement("h3");
      var headingText = document.createTextNode(entryname);
      heading.appendChild(headingText);
      entry.appendChild(heading);
      result.appendChild(entry);
      var body = document.createElement("div");
      body.setAttribute("class", "ui-body ui-body-a");
      var bodypara = document.createElement("p");
      var bodyparaText = document.createTextNode(entrybody);
      bodypara.appendChild(bodyparaText);
      body.appendChild(bodypara);
      result.appendChild(body);
    });

    if (!result.innerHTML) {
      var noresults = document.createElement("div");
      noresults.setAttribute("class", "ui-bar ui-bar-a");
      var noheading = document.createElement("h3");
      var noheadingText = document.createTextNode("No info about [" +
        this.detectionvector() +
        "]'s behaviour, please tweet your results!");
      noheading.appendChild(noheadingText);
      noresults.appendChild(noheading);
      result.appendChild(noresults);
    }

    return result.innerHTML;
  };

  /**
    @return {String} a vector of current Bowser detection flags
    */
  this.detectionvector = function() {
    var vector = "";

    for (var i = 0; i < this.flags.length; i++) {
      var myflag = this.flags[i];
      if (this.detection[myflag] === true) {
        if (vector.length > 0) {
          vector += ":";
        }
        vector += myflag;
      }
    }
    return vector;
  };

  /**
    @return {Object} a clickable tweet link with browser info vector filled in.
    */
  this.tweet = function() {
    /*
      <a href="http://twitter.com/intent/tweet?text=safari:webkit...&hashtags=urlhanders"
        title="Tweet" target="_blank" class="ui-btn-active">Tweet</a>
     */
    var link = document.createElement("a");
    var url = "https://twitter.com/intent/tweet";
    var vector = this.detectionvector();
    url += "?text=" + encodeURIComponent("My browser [" + vector +
      "] __eats weird URLs for breakfast__");
    url += "&hashtags=" + encodeURIComponent("urlhandlers");
    // url += "&url=http://hack.urlhanderlers.info/";
    link.setAttribute("href", url);
    link.setAttribute("title", "Tweet");
    link.setAttribute("target", "_blank");
    link.setAttribute("class", "ui-btn-active");
    link.setAttribute("data-icon", "action");
    var linkText = document.createTextNode("Tweet about [" +
      vector + "]'s behaviour");
    link.appendChild(linkText);
    return link;
  };
}
