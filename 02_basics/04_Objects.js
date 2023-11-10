// const tinduser = new Object();  //Singleton Object
const tinduse = {};  //Non-Singleton Object

tinduse.id = "123abc00"
tinduse.name = "Raina"
tinduse.isLoggedIn = false

// console.log(tinduse);

const regularuser = {
    email: "Some@abcd.com",
    fullname:{

        userfullname : {
            firstName: "Rohan",
            lastName: "Palase",
        }
    }
    // console.log(regularuser.fullname?.userfullname); ? check krta h ki value exist krta bhi h ya nhi
  }
// console.log(regularuser.fullname.userfullname.firstName); 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"c",6:"b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users=[
    {
        id:1,
        email:"hsds@gmail.com"
    },
    {
        id:1,
        email:"hsds@gmail.com"
    },
    {
        id:1,
        email:"hsds@gmail.com"
    },
]
users[1].email
// console.log(tinduse);

// console.log(Object.keys(tinduse));
// console.log(Object.values(tinduse));
// console.log(Object.entries(tinduse));
// console.log(tinduse.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "123",
    courseInstructor: "Ronak"
}
const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);
