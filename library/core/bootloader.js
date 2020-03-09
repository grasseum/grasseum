
var logg = require("./logging");
var controller = require("./controller");
function BootLoader(){
    this.init = function(){
      
        var cntlr = new controller();
        
        var list_command = this.command();
      
        cntlr.set_command(list_command)
        cntlr.init()
     
    }
    
    this.command = function(){
        var list_command = process.argv.splice(2);
      

        return list_command;
    }
}

module.exports = BootLoader 