
///module.exports=function(grassconf){ 
 exports.module=function(grassconf){   

   


  grassconf.before_load("test1",function(test){
    
     test.execute();
     
 });

  grassconf.load("test1",function(test){
        console.log(test.get_content_from_pre_load(),"test1");
        test.setDirectory({
          "srcDir":[
        
            __dirname+"/src/html",
          ],
          "destDir":__dirname+"/dest/"
        });
        var local_filename = __dirname+"/";
       // test.pipe("grass_minify",local_filename+"test.min.js",2)
       test.pipe("grass_composer",{
         "data":{"ggg":"&&&3&&&"},
         "directory_replace_content":__dirname+"/src/"
       })
      //  test.pipe("grass_concat",local_filename+"test2.min.js",2)
        //grss_concat
    })

   
    } 

exports.execute=function(){   


  return ['test1']
}     
  
