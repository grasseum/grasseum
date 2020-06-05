
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
var ReadStream = function( filename) {
  //Readable.call(this, {objectMode: true});
  Readable.call(this, {objectMode: true,highWaterMark:16});
  Object.defineProperty(ReadStream.prototype,"read_filename",{
    "filename":filename 
  })
  this.filename = filename;
  this.content = "";
  this.is_valid = false;
 var main = this;
  var data_readstream = fs.createReadStream(this.filename);
      
     data_readstream.on('data', function (chunk) {
   //       console.log("asd:",chunk.toString() ,":")
      //    main.push({
      //      "filname":this.filename,
      //      "content":chunk.toString()
      //    });
      main.content=chunk.toString()
         
     })
     data_readstream.on("end",function(){
  //    console.log("end")
      main.is_valid = true;
     // boll1 = false;
  //    return main.push(null)
    })

};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function(chunk, encoding) {
    main = this;
    setTimeout(function(){
      if(main.is_valid){
       
        main.push({
          "filname":main.filename,
          "content": main.content
        });
        main.destroy(); 
      } 
    },5)
   
      
    //return this.push(null)
  //  if(main.is_valid ){
   //   this.destroy(); 
    //}
   //   return main.push({
   //     "filname":this.filename,
   //     "content": this.content
   //   })
   // }
    
};

module.exports = ReadStream;