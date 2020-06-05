var Writable = require('stream').Writable,
    util = require('util');
var fs = require("fs")
var data = fs.createWriteStream('/home/pein/Desktop/Desktop_important/workspace/experiment/nodejs/stream_example/sample1/node-streams/data-sources/sourceData_write-test.json')


//var events = require('events');
//var eventEmitter = new events.EventEmitter(); 


//eventEmitter.setMaxListeners(10000)


//var myEventHandler = function (k) {
//  console.log('I hear a scream!!',k);
//}    



var WriteStream = function() {
  //Writable.call(this, {objectMode: true});
  Writable.call(this, {objectMode: true});
//  this.eventEmitter = eventEmitter;
};

util.inherits(WriteStream, Writable);

WriteStream.prototype._write = function(chunk, encoding, callback) {
// 
var data = chunk//.toString();
if(data != null){
  var jsn_data =  data//.toString()
  console.log('write            : ',jsn_data )//JSON.stringify(chunk));
 // console.log("count:"+ this.curIndex)
 

//this.eventEmitter.on('scream', myEventHandler); 
//?var data = fs.createWriteStream('/home/pein/Desktop/Desktop_important/workspace/experiment/nodejs/stream_example/sample1/node-streams/data-sources/sourceData_test'+jsn_data['counter']+'.txt')
//? data.write( jsn_data['content']+"")
}
  //?callback();
};

module.exports = WriteStream;
