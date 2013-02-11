// ==UserScript==
// @name            Fix A List Apart
// @description     Unclip clipped title
// @version         1.0
// @include         htt*://alistapart*
// ==/UserScript==

// the following jQuery load script was taken from http://stackoverflow.com/questions/2246901/how-can-i-use-jquery-in-greasemonkey-scripts-in-google-chrome
// a function that loads jQuery and calls a callback function when jQuery has finished loading
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

// the guts of this userscript
// Note, jQ replaces jQ to avoid conflicts.
function main() {
	// if we are not on the homepage, remove the title
  if(jQ("body > .global-nav").length !== 0){
    jQ(".killer-logo").remove();
	} else {
		jQ(".killer-logo a").css({"margin-top": "10px"});
		jQ("figure.wide-hero").css({"margin-top": "40px"});
	}

	// fix the footer
	jQ(".deadly-subtitle").css({height:"65px"});
	jQ(".global-footer").css({"padding-bottom": "75px"});
}

// load jQuery and execute the main function
addJQuery(main);