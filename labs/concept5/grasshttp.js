

 exports.route=function(grassconf){   

  

  grassconf.load("test1",function(test){ 
    return grassconf.src(["src/*.js"])
    .pipe(grassconf.dest("dest" ))

    
    }); 
  }
exports.execute=function(){   


  return ['test1']
}     
  

exports.setting=function(lib){   


  return  {
    isLogFolderGenerate:true
  }
} 