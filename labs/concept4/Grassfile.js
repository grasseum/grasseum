
///module.exports=function(grassconf){ 
 exports.module=function(grassconf){   

  
  

  grassconf.load("test1",function(test){
        console.log(test.get_content_from_pre_load(),"test1");
        test.setDirectory({
          "srcDir":[
        
            __dirname+"/src1/",
          ],
          "destDir":__dirname+"/dest/"
        });
        var local_filename = __dirname+"/";
       // test.pipe("grass_minify",local_filename+"test.min.js",2)
      // test.pipe("grass_composer",{
      //   "data":{"ggg":"&&&3&&&"}
      // })
        test.pipe("grass_web_assets",'http://codehyouka.xyz/pfexp/frame/pf-ui/css/pf-ui-themes-one.css',local_filename+"test2.min.js",2)
        //grss_concat
    })

    grassconf.load("test23",function(test){



    });
    } 

exports.execute=function(){   


  return ['test1','test23']
}     
  
