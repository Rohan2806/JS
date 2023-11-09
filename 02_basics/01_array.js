//  Array

const myarr = ['a','b','c','d','e','f']
const myarr2 = ["Thor","Hulk","Ironman","Captain America","Spider-man"]
const myarr3 = new Array(1,2,3,4,5);

// console.log(myarr[4]);

//  array methods

// myarr.push('g');
// console.log(myarr);
// myarr.pop();

// myarr3.unshift(9)
// myarr3.shift()
// console.log(myarr3);

// console.log(myarr3.includes(9));
// console.log(myarr3.indexOf(5));

const nayaArr = myarr3.join()

// console.log(myarr3);
// console.log(nayaArr);

// splice and slice

console.log("A",myarr2);
const mna = myarr2.slice(1,3);
console.log(mna);

console.log("B",myarr2);
const mna2 = myarr2.splice(1,3);
console.log("C",myarr2);
console.log(mna2);  
