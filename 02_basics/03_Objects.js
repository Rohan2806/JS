// Singleton
// Object created

//  object literals

const sym = Symbol("key1")

const jsuser = {
    name: "Rohan",
    "full name": "Rohan Palase",
    [sym]: "key1",
    age: 21,
    location : "dewas",
    email: "rohanpalase@ogcc.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Friday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[sym]);

jsuser.email="rohan@gpt.com";
// Object.freeze(jsuser)
jsuser.email="rohan@hsbpt.com"; 
// console.log(jsuser);

jsuser.greeting = function () {
    console.log("Hello JS user");
}
jsuser.greeting2 = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());