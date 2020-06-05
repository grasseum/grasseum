'use strict'
var Stream = require('stream'),
    util = require('util');

    

module.exports = function(){
 var TransformStream =  new Stream.Transform({objectMode:true});
    TransformStream._transform  = function(original,unused,callback){
      console.log( original,unused,":original@");  
      this.push(original)
      callback(null,original);
     //callback();
    }
    return TransformStream
};