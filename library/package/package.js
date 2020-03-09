var directory = require("../core/directory");
var logg = require("../core/logging");

var grasseum = require("grasseum_core");
var support_package = require("../support/package");


exports.execute = function(value){
    grasseum.command_package(value);
}

exports.help = function(){
    return "Package"    
}
 