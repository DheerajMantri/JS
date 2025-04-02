//objaect literals
const mySym=Symbol("key1")
const Jsuser={
    //(Note:In object we can deffine all type of data )
    name:"Dheeraj",
    email:"dheeraj@gmail.com",
   // mySym:"mykey1",// Using Symbol  (If we declare symbole that way is not showing symbole datatype )
    [mySym]:"mykey1",// this Correct way to define Symbol datatype
    "My Family":"Mantri",
    age:22, //ineger ype
    location:"Hyd", //string ype
    isLoggedIn:false,   //Boolean Type
    lastLogiedIn:["Mon","Tus","Wed","Thus","Fri","Sat","Sun"]  //Array Type  (Note:In object we can deffine all type of data )

}

//console.log(Jsuser);
// Access the element
//console.log(Jsuser.email)  //This One type 
//console.log(Jsuser["name"])  //This is Another type 
//console.log(Jsuser["My Family"])  // Access ("My Family") then only this one method only to access
//console.log(Jsuser.mySym)// if we access symbol type ths way then we get output but get in string format
//console.log(typeof Jsuser.mySym)
//console.log(Jsuser[mySym])
//console.log(typeof Jsuser[mySym]) // his is Correct way to access symbol datatype

Jsuser.email="Dheeraj.Google.com"
//console.log(Jsuser)
//Object.freeze(Jsuser)  // if we want o locke or dont change your values then use freeze with object 
Jsuser.email="Dheeraj.Chatgpt.com"
//console.log(Jsuser)

//Function

Jsuser.greeting=function(){
    console.log("Hello JS Users")

}
Jsuser.me=function(){
    console.log(`Hello JS Users ,${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.me())

