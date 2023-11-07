/*
  Primitive dataType

  7 Types : String, Number, Boolean, Symbol, null, Undefined, BigInt

  Non Primitive / Referenced dataType

  Arrays, Objects, Functions

  */

  // const score = 100;
  // const scoreValue = 110.5;

  // const isLoggedIn = true;
  // const OutsideTemp = null;
  
  // let userEmail;
  
  // const Id = Symbol("1234");
  // const AnotherId = Symbol("1234");

  // const BigNumber = 146876239129237912n;
  // console.log(Id === AnotherId);


  // const hero = ["Ironman" , "Captian" , "Hulk" , "Dr. Strange"];

  // let myObj ={
  //   name: "Rohan",
  //   age: 18,
  //   city: Dewas
  // }

  // let MyFunc1 = function name(String) {
  //   console.log("Hello");
  // }

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //

  // Stack (Primitive), Heap (Non-Primitive)

  let MyChannelName = "rohanpalasedotcom"

  let AnotherName = MyChannelName;
  AnotherName = "Rohanrathoredotcom"

  console.log(MyChannelName);
  console.log(AnotherName);
  
  let User1 = {
    email : "ronit@gogo.com",
    age : 21,
    upi: "roni@ybl"  
  }
  let User2 = User1
  
  User2.email = "JaiShreeRam.com"
  
  console.log(User2);
  console.log(User1);