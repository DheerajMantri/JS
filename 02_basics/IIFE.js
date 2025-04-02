// Immediately Invoked Function Expression (IIFE)

(function Chai(){
    console.log('DB CONNECTED')
})();  

/*It contains two major parts:
 // In this function we need to give ;
 
1)A function expression. This usually needs to be enclosed in parentheses in order to be parsed correctly.
2)Immediately calling the function expression. Arguments may be provided, though IIFEs without arguments are more common.*/

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Dheeraj')
