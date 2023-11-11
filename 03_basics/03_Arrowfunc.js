const user = {
    username: "Rohan",
    post: "Full-Stack developer",

    welcomeMsg: function ( ) {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomeMsg()
user.username="Ram"
// user.welcomeMsg()

// console.log(this);

// arrow function -->

const chai = () =>{
    let character ="a"
    // console.log(this);
}
// chai()
const addtwonum = (num1, num2) =>{
    return num1 + num2
}
console.log(addtwonum(14,7));

//  implicit return i.e it is having a single line statement

const addnum = (num1, num2) => num1 + num2
console.log(addnum(37,7));

const addnud = (num1, num2) => (num1 + num2)
// when we have to return a object
const addnu = (num1, num2) => ({username: "Ronak"})
console.log(addnu(3,4));

