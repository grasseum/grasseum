var directory = require("../core/directory");
var logg = require("../core/logging");

exports.execute = function(value){
    

        var dir = new directory();
       dir.set_list_files(dir.package_directory())
       var list_package = dir.getListPackage()
       console.log("See the available command below:")


       for(var i in list_package){
           try{
               var help_class= logg.load_require(dir.package_directory()+"/"+list_package[i]);
               
                logg.log(i+"  ...  "+help_class.help())
           }
           catch(e){
             
               console.log("Error",e,list_package[i])
           }
           
       }
     //  var help_class= logg.load_require(dir.package_directory()+"/"+element);
}

exports.help = function(){
    return "Help"
}   
 