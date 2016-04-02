import bowser from 'bowser';

export var browserinfo = new function() {
  this.detection = bowser;

  /**
   @return {Strings} a short text string with the browser name and version.
   */
  this.shortinfo = function() {
    return "Browser: " + this.detection.name + " " + this.detection.version;
  };

  /**
   @return {Object} a HTML inputs for the controlgroup based on the flags
   */
  this.flaginputs = function() {
    var result = document.createElement("div");

    for (var i = 0; i < 5; i++) {
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", "checkbox" + i);
      input.setAttribute("id", "checkbox" + i);
      result.appendChild(input);

      var label = document.createElement("label");
      label.setAttribute("for", "checkbox" + i);
      var labelText = document.createTextNode(i);
      label.appendChild(labelText);
      result.appendChild(label);
    }
    return result;
  };
};
