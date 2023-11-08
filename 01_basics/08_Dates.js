//   dates

let mydate = new Date();
console.log(mydate.toString()); // output -> Wed Nov 08 2023 11:55:26 GMT+0000 (Coordinated Universal Time)

console.log(mydate.toDateString()); //output -> wed Nov 08 2023
console.log(mydate.toJSON()); // output -> 2023-11-08T11:43:45.856Z and for invalid input the output will be Null

console.log(mydate.toTimeString()); // output -> 11/08/23
console.log(mydate.toISOString());//output -> 2023-11-08T11:43:45.856Z and for invalid input the output will vary acc. to browsers

console.log(mydate.toLocaleString());  // output -> 11/08/23, 11:52:20 AM
console.log(mydate.toLocaleDateString()); // output -> 11/08/23