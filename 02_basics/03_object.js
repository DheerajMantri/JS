const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"D"}
const obj3={5:"e",6:"F"}

//const obj4=Object.assign({},obj1,obj2,obj3)  //{} This curly brcket is called target & Obj1...etc is called source
//console.log(obj4)
//const obj5=Object.assign(obj1,obj2,obj3)
//console.log(obj5)

const obj6={...obj1,...obj2}
console.log(obj6)

