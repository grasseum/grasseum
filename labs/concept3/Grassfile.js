
///module.exports=function(grassconf){ 

  var grass_composer = require("grass_composer")
 exports.module=function(grassconf){   

   


 

  grassconf.load("test2",function(test){
    return grassconf.download(["https://nodejs.org/api/stream.html","https://en.wikipedia.org/wiki/Gundam","http://codehyouka.xyz/pfexp/frame/pf-ui/css/pf-ui-themes-one.css"])
       
      .pipe(grassconf.dest("dest" ))
    })

   
    } 

exports.execute=function(lib){   


  return lib.series("test2")
}     
  
