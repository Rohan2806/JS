const name = "rohan";
const repocount = 30;

// console.log(name + repocount + " value");

// below is the example of String interpolation and we can also use methods like toUpperCase, toLowerCase etc.

// console.log(`hello my name is ${name} and my repo count is ${repocount}.`);

const gameName = new String('Rohan_Palase');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));

// const str22= gameName.substring(4,6);
// console.log(str22);

// const str24= gameName.slice(-11,6);
// console.log(str24);

// const str23= gameName.includes("Ritik");
// console.log(str23);

const newstring= "     Ritik      ";
console.log(newstring.trim());
//console.log(newstring.trimStart());
//console.log(newstring.trimEnd());

const URL="https://rohan.in/rohan%25palase";

console.log(URL.replace('%25','-'));

console.log(gameName.split('_'));