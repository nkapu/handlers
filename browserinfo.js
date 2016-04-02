import bowser from 'bowser';

export var browserinfo = new function() {
  this.detection = bowser;

  /**
   @return {String} a short text string with the browser name and version.
   */
  this.shortinfo = function() {
    return "Browser: " + this.detection.name + " " + this.detection.version;
  };

  /**
   @return {Object} a HTML inputs for the controlgroup based on the flags
   */
  this.flaginputs = function() {
    var result = document.createElement("div");

    var flags = [
      "opera", "yandexbrowser", "windowsphone", "msedge",
      "msie", "chromeBook", "chrome", "sailfish",
      "seamonkey", "firefox", "silk", "phantom",
      "blackberry", "webos", "bada", "tizen", "safari",
      "webkit", "gecko", "android", "ios",
      "tablet", "mobile"
    ];
    flags.sort();

    for (var i = 0; i < flags.length; i++) {
      var myflag = flags[i];
      var inputname = "checkbox-" + myflag;
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", inputname);
      input.setAttribute("id", inputname);
      input.setAttribute("data-mini", "true");
      if (this.detection[myflag] === true) {
        input.setAttribute("checked", "checked");
      }
      result.appendChild(input);

      var label = document.createElement("label");
      label.setAttribute("for", inputname);
      var labelText = document.createTextNode(myflag);
      label.appendChild(labelText);
      result.appendChild(label);
    }

    return result.innerHTML;
  };
};
