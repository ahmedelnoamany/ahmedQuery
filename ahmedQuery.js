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

//high order for-loop function
ahmedQuery.prototype.each = function(callback, context){
  for (var i = 0; i< this.length; i++){
    callback.call(context || this, this[i], i, this);  //context sets default as this
  }
  return this; //Allows chaining this function
}

//Get, set attributes
ahmedQuery.prototype.attr = function(attribute){
  if(attribute === 'class'){
    attribute = 'className';
  }
  if(this[0]){
    if(value){
    this[0][attribute] = value; //setting attribute value
    return this;
  }else{
      return this[0][attribute];  //returning value of attribute of first element.
  }
}
  return undefined;  //if attribute doesnt exist, returns undefined
}

//Event listening
ahmedQuery.prototype.on = function(eventName, callback){
  this.each(function(target){  //using above .each
    target.addEventListener(eventName, callback, false);  //adds a listener to every element returned in query
  });
  return this;
}

window.ahmedQuery = ahmedQuery;
window.$ = ahmedQuery;
})()
