;(function() {
  "use strict";
  var ahmedQuery = function(selector) {
    if(!(this instanceof ahmedQuery)){
      return new ahmedQuery(selector) //returns new object of ahmedQuery if not already
    }
}

window.ahmedQuery = ahmedQuery;
window.$ = ahmedQuery;
})()
