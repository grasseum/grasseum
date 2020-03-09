exports.log=function(content){
    console.log(content);
}

exports.is_exist_function_class = function(key,func,json_arg){
    
    if(typeof(func[key])!="Undefined"){
        func[key](json_arg)
    }else{
        console.log("Function does not exist");
    }

}
exports.load_require=function(path,arg){
    try{
        if (typeof(arg) == "undefined"){
            return require(path)
        }else{
            return require(path)(arg)
        }
        
    }catch(e){
        console.log(e)
    }

} 


exports.data_from_cmd_intrpettion=function(arg){
    
        var arg_json = {}
        arg_json["json"]={}
        arg_json["array"]=[]
        arg.forEach((ind)=>{
            var ind_spl = ind.split("=");
           
            if (ind_spl.length>1){
                arg_json["json"][ind_spl[0]] = ind_spl[1]
            }else{
                arg_json["array"].push(ind_spl[0]);
            }
            
        })
    
        return arg_json
    }
exports.arrange_command = function(val){
    var arg_list = {};
   
    for(var i in val){
        var fer_str =val[i].split("=") 

        if(fer_str.length>1){
             arg_list[fer_str[0]] = fer_str[1]
        }else{
            arg_list[val[i]] = true
        }
       
    }

    return arg_list;
}    