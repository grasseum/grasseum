var directory = require("../core/directory");
var fs = require('fs');
var str_template = ""
str_template +="exports.module=function(grassconf){ \n"

str_template +='grassconf.module("test1",function(test){ \n \n';


str_template +='}) \n';




str_template +="    } \n"
str_template +="exports.execute=function(){ \n"
str_template +="\n"    
str_template +=' return "test1"; \n   } \n';

exports.execute = function(value){
    console.log("Create a file now")
    var dir = new directory();
    fs.writeFile(dir.excuted_directory()+"/Grassconf.js",str_template, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
}
exports.help = function(){
    return "Creating your Grassconf.js"
}
 