const user={
    userrname:"Dheeraj",
    price:1000,

    welcomeMessage: function(){
        console.log(`${this.userrname}, Weclcome to webSite`);
        //console.log(this)
    }
}

//console.log(this)
//user.welcomeMessage()
//user.userrname="Sneha"
//user.welcomeMessage()

//function chai(){
  //  let userrname="Dheeraj"
    //console.log (this.userrname)
//}
//chai()

//const chai=function(){
  //  let username="Dheeraj"
   // console.log(this.username)
//}
const chai=()=>{   
    let username="Dheeraj"
    console.log(this)
}
chai()

// ()=>{}  This Arrow function syntax

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

//This another method
const addnumber=(num1,num2)=>  num1+num2  
console.log(addnumber(3,4))

