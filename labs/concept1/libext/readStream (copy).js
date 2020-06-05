var data = require('../data-sources/sourceData.json'),
    Readable = require('stream').Readable,
    util = require('util');


var fs = require("fs")
//var events = require('events');
//var eventEmitter = new events.EventEmitter(); 

//eventEmitter.setMaxListeners(10000)

//var myEventHandler = function (k) {
//  console.log('I hear a scream!',k);
//}    
function beforeFirstCall(instance,method,callback){
  //instance[]

}   
var ReadStream = function( eventEmitter) {
  //Readable.call(this, {objectMode: true});
  Readable.call(this, {objectMode: true});

  this.data = data;
  this.curIndex = 0;
  this.boll1 = true;

  this.eventEmitter = eventEmitter;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function(chunk, encoding) {
  var main = this;
  boll = false;
  
  console.log(chunk)
  //main.push( "+++++" )
  for(var k=0;k<21;k++){
    if (this.boll1){
      var glb = {};
      var data_readstream = fs.createReadStream('/home/pein/Desktop/Desktop_important/workspace/experiment/nodejs/stream_example/sample1/node-streams/data-sources/sourceData.json')
     // eventEmitter.on('scream', myEventHandler);
    // this.eventEmitter.emit('scream',k);
   // glb['stream'] = data_readstream;
   Object.defineProperty(this, 'property1', {
    gundam: 42,
    //writable: false
  });
      data_readstream.on('data', function (chunk) {
        console.log(k,":s")
   glb['counter'] = k;
        glb['content'] = "++++"+chunk.toString();
        //console.log( chunk.toString())
        main.push( "+++++" )
       // main.push(chunk.toString())
     //  console.log(JSON.stringify(glb))
       main.push(JSON.stringify(glb))
        boll =true;
        main.boll1 = false;
      })
      data_readstream.on("end",function(){
        console.log("end")
        boll =true;
       // boll1 = false;
    //    return main.push(null)
      })
     
    }
  }
  if (boll){
    this.boll1 = true;
    return main.push(null)
  }
  //return main.push(null)
};

module.exports = ReadStream;