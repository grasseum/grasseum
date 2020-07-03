var grass_composer = require("grass_composer")
exports.module=function(grassconf){   
 
    grassconf.load("test1",function(){
      return grassconf.src(["src/html/*"])
        .pipe(grass_composer({
          "data":{"ggg":"&&&3&&&"},
          "directory_replace_content":__dirname+"/src/"
        }) )
      //  .pipe(grassconf.dest("dest/*" ))
        .pipe(grassconf.dest("dest" ))
      })

   
} 

exports.execute=function(lib){   

 
  lib.default=function(strm){
      strm.series("test1")//.parallel("test1","test2")
  }

  lib.thread=function(strm){
      strm.watch(["src/*"],["test1"])//.watch(["src1/*"])    
  }
  return lib;

}     
  
