//   Dates

let mydate = new Date();
/*
console.log(typeof (mydate)); // output -> object
console.log(mydate.toString()); // output -> Wed Nov 08 2023 11:55:26 GMT+0000 (Coordinated Universal Time)

console.log(mydate.toDateString()); //output -> wed Nov 08 2023
console.log(mydate.toJSON()); // output -> 2023-11-08T11:43:45.856Z and for invalid input the output will be Null

console.log(mydate.toTimeString()); // output -> 11/08/23
console.log(mydate.toISOString());//output -> 2023-11-08T11:43:45.856Z and for invalid input the output will vary acc. to browsers

console.log(mydate.toLocaleString());  // output -> 11/08/23, 11:52:20 AM
console.log(mydate.toLocaleDateString()); // output -> 11/08/23

*/

let mynewdate1 = new Date(2023,5,28)
// console.log(mynewdate1.toDateString());

let myotherdate = new Date(2023,5,28,0,0)
// console.log(myotherdate.toLocaleString());

let myodate = new Date("2023-02-14")
// console.log(myodate.toLocaleString());

let myfdate = new Date("02-14-2901")
// console.log(myfdate.toLocaleString());

let Timestamp1 = Date.now()
// console.log(Timestamp1);
// console.log(myodate.getTime());
// console.log((Date.now()/1000));
// console.log(Math.floor(Date.now()/1000));
let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getDate());
// console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday : "long"
    
})