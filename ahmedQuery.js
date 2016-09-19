;(function() {
  "use strict";
  var ahmedQuery = function(selector) {
    if(!(this instanceof ahmedQuery)){
      return new ahmedQuery(selector) //returns new object of ahmedQuery if not already
    }
}

if(typeof selector !== 'string'){  //returns the ahmedQuery object if selector is not a string.
  return this;
}
//Querying for elements
var nodes = document.querySelectorAll(selector); //stores list of all elements matching query in 'nodes'
javascript nodes.forEach(function(value, index){
  this[index] = value;
}, this);  //'this' refers to ahmedQuery object
this.length = nodes.length;

return this;

window.ahmedQuery = ahmedQuery;
window.$ = ahmedQuery;
})()
