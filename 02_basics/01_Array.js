//const Arry=[2,85,9,4,6]
//console.log(Arry)
//console.log(Arry[2])

//Arry.push(220) // Push is use to add element in Arrya list
//console.log(Arry)
//Arry.pop() // POP is use to remove last element from Array List
//console.log(Arry)
//Arry.unshift(524)  // unshift is use to add elemant in front in array list
//console.log(Arry)
//Arry.shift()  // shift is use to remove first element from the arry list
//console.log(Arry)
//console.log(Arry.includes(5))
//console.log(Arry.includes(9))
//console.log(Arry.indexOf(55))
//console.log(Arry.indexOf(85))

//const newArr=Arry.join()
//console.log(Arry)
//console.log(typeof newArr)


// Slice, Splice
//const Arry=[2,85,9,4,6]
//console.log("A", Arry)   
//const my1 = Arry.slice(1,3)
//console.log(my1)
//const my2 = Arry.splice(1,3)  // Splice is use remove element from orignal array
//console.log(my2)
//console.log()

//const Family1=["Shivpradad","Shrikanwar","Dheeraj"]
// const Family2=["Bang","Laturiya","Chandak"]
// const Family3=["I Love My Family"]

//Family1.push(Family2)
//console.log(Family1)
//const AllFamily=Family1.concat(Family2)  // In Concat method we can add only two Array
//console.log(AllFamily)

//const AllFamily=[...Family1,...Family2,...Family3]  // This is Spread Method means Add two or more Array
//console.log(AllFamily)

const Array=[1,2,3,[8,9,5],7,[8,7,3,7]]
const realArray=Array.flat(Infinity)
console.log(realArray)
