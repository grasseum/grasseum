var directory = require("../core/directory");
var logg = require("../core/logging");

var grasseum = require("grasseum_core");
var pasteur = require("pasteur")._;
exports.execute = function(value){
     var dir = new directory();
    var local_data = {}
    var main_dir = dir.excuted_directory()


  var presyntax = require("../core/precompiler")(local_data,grasseum,value);
  var exec_class= logg.load_require(main_dir+"/Grassconf.js");

//  if(pasteur.getTypeof)
if(pasteur.has(exec_class,"module") == false){
  logg.log("Method `module` is missing in your Grassconf.js script");
}else{
  exec_class.module(presyntax.modular())
}

if(pasteur.has(exec_class,"execute") == false){
  logg.log("Method `execute` is missing in your Grassconf.js script");
}else{
  
  presyntax.execute( exec_class.execute() )
}

  
}

exports.help = function(){
    return "Execute"    
}
