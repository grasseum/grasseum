var Transform = require('stream').Transform,
    util = require('util');

var TransformFilterStream = function() {
  Transform.call(this, {objectMode: true});
};

util.inherits(TransformFilterStream, Transform);

TransformFilterStream.prototype._destroy = function (chunk, enc, cb) {
  // this.cork();
 
  
 
};



TransformFilterStream.prototype._transform = function(chunk, encoding, callback) {
  //console.log(this._readableState.pipes.path,"this.files")
  //if (chunk.value !== 0) this.push(chunk);

  setTimeout(function(){
    callback(null,chunk);
  },60000)
  
};

module.exports = TransformFilterStream;
