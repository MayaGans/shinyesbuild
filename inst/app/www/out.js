(() => {
  // src/getHeaderText.js
  var getHeaderText_default = getHeaderText = (conf) => {
    return "I'm so excited for " + conf;
  };

  // src/makeHeader.js
  var makeHeader_default = makeHeader = () => {
    current_conf = "R/Pharma";
    window.onload = function() {
      document.getElementById("title").innerHTML = getHeaderText_default(current_conf);
    };
  };

  // index.js
  makeHeader_default();
})();
