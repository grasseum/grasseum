
///module.exports=function(grassconf){ 

  var grass_composer = require("grass_composer")
 exports.module=function(grassconf){   

   


 

  grassconf.load("test1",function(test){
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


  return lib.series("test1")
}     
  
