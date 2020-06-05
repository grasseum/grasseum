
 
var grass_concat = require("grass_concat")

var grass_composer = require("grass_composer");


 exports.module=function(grassconf){   


  
  
 

grassconf.load("test1",function(){
    
      return grassconf.src(["src/*","src1/*"])
     
    
    .pipe(grassconf.dest("dest" ))
    .pipe(grass_composer( {
      "data":{"ggg":"&&&3&&&"},
      "directory_replace_content":__dirname+"/src/"
    } ) )
     .pipe(grass_concat("dest/test.com.js") )
     

 })

grassconf.load("test23",function(test){



    });
 } 

exports.execute=function( lib ){   

   
    return lib.series("test1")//.parallel("test1","test2")
}       
  
