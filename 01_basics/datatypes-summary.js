// Primitive

// 7 types : String,Number, Boolean , null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedI=false
const outTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=76764886459673n


// Reference(Non-premitive)

// Arrays, Objects, Function

const heros=["shaktiman", "naagraj", "doga"];
let myObj= {
    name:"Rajdeep",
    age: 22,
}
const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber)

// Stack(Primitive), Heap(Non-Primitive)  

let myYoutubeName="Rajdeep Gupta"
let anotherName=myYoutubeName
anotherName="Rocky"

console.log(myYoutubeName);

console.log(anotherName);

let user={
    email:"user@gmail.com",
    upi:"User@ybl"
}
let userTwo=user

userTwo.email="Rajdeep@gmail"
console.log(user.email,userTwo.email );
