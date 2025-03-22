let myDate=new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toLocaleString())
//console.log(typeof myDate)

//let mycreatedDate=new Date(2025,0,20)
//console.log(mycreatedDate.toString())
let mycreatedDate=new Date("01-25-2025")
//console.log(mycreatedDate.toString())

//**************Time*************

let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(mycreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
//console.log(newDate)
//console.log(newDate.getFullYear())
//console.log(newDate.getMonth())  // In JavaScript month count start from 0 index (Ex Jan(0),Feb(1),March(2), etc.....)
//console.log(newDate.getMonth()+1)  //If We want to print as Jan(1),Feb(2) Then we Need To + 1
//console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "short",
    weekday: "long"
})
console.log(newDate)