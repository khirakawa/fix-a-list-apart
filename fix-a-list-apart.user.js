// ==UserScript==
// @name            Fix A List Apart
// @description     Unclip clipped title
// @version         1.1
// @include         *://alistapart.com/*
// @match           *://alistapart.com/*
// ==/UserScript==

// Helper function that loads jQuery and calls a callback function when it has finished loading
// Taken from http://stackoverflow.com/questions/2246901/how-can-i-use-jquery-in-greasemonkey-scripts-in-google-chrome
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// The guts of this userscript.
// Note, jQ replaces jQ to avoid conflicts.
function main() {
  // If we are not on the homepage, remove the title
  if(jQ("body > .global-nav").length !== 0){
    jQ(".killer-logo").remove();
  } else {
    jQ(".killer-logo a").css({"margin-top": "10px"});
    jQ("figure.wide-hero").css({"margin-top": "40px"});
  }

  // Fix the footer
  jQ(".deadly-subtitle").css({height:"65px"});
  jQ(".global-footer").css({"padding-bottom": "75px"});
}

// Load jQuery, then execute the main function
addJQuery(main);
