
function sayname() {
   console.log("H");
   console.log("E");
   console.log("L");
   console.log("L");
   console.log("O");
}

// sayname()
        
// function Addnum(num1,num2) {
//     console.log(num1+num2);
// }
function Addnum(num1,num2) {
    let result =num1+num2
    return result
}

const result = Addnum(12,26)
// console.log("Result: ",result);

function LoginUser(Username = "Please enter a Username: ") {
    if (!Username) {
        // console.log();
        return
    }
    return `${Username} just logged in `
}
// console.log(LoginUser("rohan"))

// Syntax of rest operator and spread operator is same but their usage is different

function CalCartPrice(val1, val2, ...nume1) {
    return nume1    
}
// console.log(CalCartPrice(200));
// console.log(CalCartPrice(200,300,400,500,5000));

const guest={
    Username: "Vishnu",
    Post: "Creator"
}
function HandleObject(anyObject) {
    // console.log(`username is ${anyObject.Username} and post is ${anyObject.Post}`);
}
// HandleObject(guest);
// another way is given below to use an object

HandleObject({
    Username: "Shiva",
    Post: "Destroyer"
})

// we can use arrays also

const Myarrays = [100,500,300,650]

function returnarray(getArray) {
    return getArray[3]
}
console.log(returnarray(Myarrays));
// or we can simply pass array to the console log like this 
console.log(returnarray([400,980,200,600]));