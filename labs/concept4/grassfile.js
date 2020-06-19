

var rename = require("gulp-rename");
const uglify = require('gulp-uglify');
exports.module=function(grassconf){   

   


 

  grassconf.load("test2",function(test){
    
    return grassconf.src(["src/*.js"])
    //grassconf.download(["https://nodejs.org/api/stream.html",
   // "https://en.wikipedia.org/wiki/Gundam",
   // "http://codehyouka.xyz/pfexp/frame/pf-ui/css/pf-ui-themes-one.css"])
    .pipe(uglify())
    .pipe(rename({"extname":".min.js"}))
    .pipe(grassconf.dest("dest" ))
    
  })

   
} 

exports.execute=function(lib){   


  lib.default=function(strm){
      strm.series("test2")//.parallel("test1","test2")
  }

  lib.thread=function(strm){
      strm.watch(["src/*"],["test2"])//.watch(["src1/*"])    
  }
  return lib;
}     
  
exports.setting=function(lib){   


  return  {
    isLogFolderGenerate:true
  }
} 