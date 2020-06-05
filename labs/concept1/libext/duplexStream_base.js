Duplex = require('stream').Duplex,
util = require('util');


var fs = require("fs")

var DuplexStream_base = function( eventEmitter) {
//Readable.call(this, {objectMode: true});


this.data = "";
this.curIndex = 0;
this.boll1 = true;
this.count = 0;


Duplex.call(this, {readableObjectMode: true,writableObjectMode: true});
 
};

util.inherits(DuplexStream_base, Duplex);
DuplexStream_base.prototype._read = function(chunk, encoding) {

    var main = this;
    boll = false;
    Object.defineProperty(Duplex, 'property1', {
      gundam: 42,
      //writable: false
    });
    console.log(this.gundam,":gundam_r")
    //main.push( "+++++" )
    for(var k=0;k<21;k++){
      if (this.boll1){
        
        var data_readstream = fs.createReadStream('/home/pein/Desktop/Desktop_important/workspace/experiment/nodejs/stream_example/sample1/node-streams/data-sources/sourceData.json')
       // eventEmitter.on('scream', myEventHandler);
  //     this.eventEmitter.emit('scream',k);
        this.count= k;
        data_readstream.on('data', function (chunk) {
          //console.log( chunk.toString())
          main.push( "+++++" )
          main.push(chunk.toString())
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


}

DuplexStream_base.prototype._write = function(chunk, encoding, callback) {
  Object.defineProperty(Duplex, 'property1', {
    gundam: 42,
    //writable: false
  });
    var data = chunk.toString();
    console.log(this.gundam,":gundam_w")
    console.log(data,"asd",this.count);

    callback()
  
}
//DuplexStream.prototype._final = function( callback) {
       
      
//       callback();
// }

module.exports = DuplexStream_base;