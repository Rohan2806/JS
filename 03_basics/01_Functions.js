
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
console.log(LoginUser("rohan"))
