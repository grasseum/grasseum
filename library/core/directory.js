var fs = require('fs');

var nopte_directory = require('nopte_directory');
var logg = require("./logging");
var pathss = require('path');
 
function Directory(){

   
    this.dir = ".";
        
    
    this.set_list_files = function(dir){ 
        this.dir = dir
    }

    this.get_list_files = function(){
       var dir_sync =  fs.readdirSync( this.dir)
    
       return dir_sync;
    }
    this.getListPackage=function(){
        var list_pack = this.get_list_files();
        var lists = {}
        for(var i in list_pack){
     
            lists["-"+list_pack[i].split("")[0]]=list_pack[i]
        }
        return lists
    }

    this.isGrassconfExist=function(){
        var gt_list_file = this.get_list_files()

        return gt_list_file.indexOf("Grassconf.js")>-1
    }
    this.root_directory =function(){
        return require.main.filename.replace(/(bin\/grasseum|library\/grassconf.js)/g,"");
    }

    this.excuted_directory = function(){
       
        return process.cwd()
    }

    this.package_directory = function(){
       
        return this.root_directory()+"library/package";
    }

    
}

module.exports = Directory