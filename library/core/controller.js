var logg = require("./logging");
var directory = require("./directory");



function Controller(){

   
        this.package = "-";
        this.command = [];
        this.view_file = [];
        

        this.main_directory = new directory();
        this.main_directory.set_list_files(this.main_directory.excuted_directory())
        this.package_directory = new directory();
        this.package_directory.set_list_files(this.main_directory.package_directory())
    this.set_command = function(cmd){
        this.command = cmd;
    }
 

    this.init = function(){
       

       if (this.main_directory.isGrassconfExist() == false){
           logg.log("Grassconf.js does not exist in your root directory");
           cmd_acs = "-h"

           if(this.command.length>0){
               cmd_acs =  this.command[0] =="-t"?"-t":"-h"
           }
       }else{
           var cmd_acs = "";
           if(this.command.length==0){
               cmd_acs = "-e"
           }else{
               cmd_acs = this.command[0]
           }
        
       }
  
        var list_package = this.package_directory.getListPackage()

           if (typeof(list_package[cmd_acs]) == "undefined"){
            //  console.log("Your command doest not exist in package")
              logg.log("Your command doest not exist in package");
               cmd_acs = "-h"
           }

           var help_class= logg.load_require(this.package_directory.package_directory()+"/"+list_package[cmd_acs]);
          var command_value_list = logg.arrange_command(this.command.splice(1))
           help_class.execute({command: command_value_list,cmd_directory:this.main_directory.excuted_directory() });
    }
}


module.exports = Controller