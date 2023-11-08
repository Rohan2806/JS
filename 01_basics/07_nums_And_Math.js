const score=300;
// console.log(score); // output -> 300

const anotherscore=new Number(500);
// console.log(anotherscore); // output -> [Number: 500]

// console.log(anotherscore.toString().length); // output -> 3
// console.log(anotherscore.toFixed(2)); // Output -> 500.00

const others=23.8589;
// console.log(others.toPrecision(4)); // Output -> 23.86


const hundred=10000000;
// console.log(hundred.toLocaleString('en-IN')); // output -> 1,00,00,000

// +++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++++ //

// console.log(Math);
// console.log(Math.abs(5));  // output -> 5
// console.log(Math.round(5.5));  // output -> 6
// console.log(Math.ceil(3.2));  // output -> 4 (always round-off to upper value)
// console.log(Math.floor(2.8));  // output -> 2 (always round-off to lower value)

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min =10;
const max =20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);