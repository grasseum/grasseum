
///module.exports=function(grassconf){ 
 exports.module=function(grassconf){   

  

  grassconf.load("test1",function(test){ 
    test.config({
      "url":"gundam"
    })

    })

    
    } 

exports.execute=function(){   


  return ['test1']
}     
  

exports.config=function(){   


  return {
    
  }
}     