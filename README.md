# Grasseum

## What is grasseum?
- **Automation** - grasseum is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.




## Installation using npm
npm install grasseum -g


## Guidelines
- **Automation** - grasseum is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

## Sample code stream 
Create a file `grassfile.js` follow the sample code below.
The `module` and `execute` are default function that must have in your `grassfile.js`.
```js

exports.module=function(grassconf){   
    
    grassconf.load("test1",function(){
            
        return grassconf.src(["src/*"])
            .pipe(grassconf.dest("dest/" )); 

        })   
 } 

exports.execute=function( lib ){   

    lib.default=function(strm){
         strm.series("test1") 
    }
    lib.thread=function(strm){
         strm.watch(["src/*"],["test1"])    
    }
    return lib;
}       
  
```
This can found at folder `labs/concept1` 

## Available command you can use at your terminal
|Command type | Description|
|------------- | ------------- |
|script | Running stream at `grassfile.js`  |
|http | Running http at `grasshttp.js` |
|template | Creating a template either `grassfile.js` or `grasshttp.js`|
|help | See available command for grasseum |