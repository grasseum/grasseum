
 
var grass_concat = require("grass_concat")

var grass_composer = require("grass_composer");


exports.module=function(grassconf){   


        grassconf.load("test1",function(){
            
            return grassconf.src(["src/*","src1/*"])
            .pipe(grassconf.dest("dest/test1" ))
            .pipe(grass_composer( {
            "data":{"ggg":"&&&3&&&"},
            "directory_replace_content":__dirname+"/src/"
            } ) )
            .pipe(grass_concat("dest/test1.com.js",{
            istruncate:true
            }) )
            

        })

        grassconf.load("test23",function(){



            });
 } 

exports.execute=function( lib ){   
    lib.default=function(strm){
         strm.series("test1")//.parallel("test1","test2")
    }

    lib.thread=function(strm){
         strm.watch(["src/*"],"test1")//.watch(["src1/*"])    
    }
    return lib;
    
}       
  
