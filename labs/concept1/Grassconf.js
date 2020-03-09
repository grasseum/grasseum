
///module.exports=function(grassconf){ 
 exports.module=function(grassconf){   

  
  grassconf.before_load("test23",function(test){
     test.execute();
     console.log("d")
  });


  grassconf.after_load("test1",function(test){
     console.log("completed go!!!");
 });

  grassconf.load("test1",function(test){

        test.setDirectory({
          "srcDir":[
        //    __dirname+"/src/test (copy).js",
        //    __dirname+"/src/test.js",
        //    __dirname+"/src/test2.js",
            __dirname+"/src1/",
          ],
          "destDir":__dirname+"/dest/"
        });
        var local_filename = __dirname+"/";
       // test.pipe("grass_minify",local_filename+"test.min.js",2)
       test.pipe("grass_composer",{
         "ggg":"&&&3&&&"
       })
        test.pipe("grass_concat",local_filename+"test2.min.js",2)
        //grss_concat
    })

    grassconf.load("test23",function(test){



    });
    } 

exports.execute=function(){   


  return ['test1','test23']
}     
  
