// let arr=[1,2,3,4,5]
// // ... spread operator
// let arr2= [1,2,3,4]
// let arr3=[...arr]

                              //spread operator
// let arr = [1,2,3,4]
// let arr2 =[... arr]
// console.log(arr2)
// let arr3=[0, ...arr]
// console.log(arr3)
// let arr4=[0, ...arr,5]
// console.log(arr4)

// let object = {
//     name :"shruti"
// }
// let obj1 = {...object}
// console.log(object)
// console.log(obj1)

// object.uid=1234;
// console.log(object)
// console.log(obj1)

                         //destructure operator
// let arr=[1,2,3,4,5]
// let [a,b,c,d,e]=arr
// console.log(a)           //normal way of printing
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)      

// let arr=[1,2,3,4,5]
// let [a,b,,d,e]=arr  //skip the 3rd element
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)   

// let arr=[1,2,3,4,5]
// const[first,second,...rest]=arr;
// console.log(first)
// console.log(second)
// console.log(rest)

// let object = {
//     name :"shruti"
// }
// let {name:shreya} = object;
// console.log(shreya);

//map function
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){  //not allowed
//     console.log(arr[i])
// }

//implicit return and explicit return

// let arr=[1,2,3,4,5]
// let arr2=arr.map((value,index)=>{
//     return value*2;
// })
// console.log(arr2)

// let arr3= arr.filter((value,index)=>{
//     return value>2; //explicit return
// })
// console.log(arr3)

// let arr5= arr.map(num=>(num*2))
// console.log(arr5) // implicit return