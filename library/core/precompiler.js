
module.exports = function(glb,grasseum,value){
  var execute_stream = grasseum.execute_stream(value)
  var terminal_watch = grasseum.terminal_watch(value) 
     var cls_ext ={

        before_load:function(name,func){
           
            execute_stream.before_loadModule(name,func)
        },        
        after_load:function(name,func){
           
            execute_stream.after_loadModule(name,func)
        },                    
        load:function(name,func){
           
        execute_stream.loadModule(name,func)
        },
         watch:function(name){ 
            testropt.watchModule(name)
        }
        
        
    };    


    return {
        
        modular:function(){
           return cls_ext; 
        },
        execute:function(name){ 
            execute_stream.executeModule(name)
           },
    }
} 
