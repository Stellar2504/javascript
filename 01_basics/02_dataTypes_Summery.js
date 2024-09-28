// Primitive

// 7 Types : Number , String , Boolean , null , undefined , BigInt , Symbol ;

const score = 100
const scoreValue = 1000.33

const isLoggedIn = false
const outSideTemp = null
let userEmail ;

const id = Symbol('1223')
const anotherId = Symbol('1223')

console.log(id ===anotherId);

const bigNumber = 123243575734534265473n



// Non Primitive or Reference

// Array , Objects , Functions

const heros = ["shaktiman", "nagraj", "doga"];

let myobj = {
    name:"pavan",
    age:"20"
}

function myFunction(){
console.log("This is a function");

}



//*************************************************************************************************************************/

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Pavanm"

let anotherName = myYoutubeName;
anotherName = "PavanMhaisne";

console.log(myYoutubeName); // => "pavanm"
console.log(anotherName);   // => "PavanMhaisne"

// Because in Primitive data types a copy of the memory value is provided .....

let userOne = {
    email: "user@gmail.com",
    upi : "3584477@ibl"
}

let userTwo = userOne ;

userTwo.email = "userTwo@gmail.com" ;

console.log(userOne.email)  // => userTwo@gmail.com
console.log(userTwo.email);  // => userTwo@gmail.com

// because in non primitive data types direct reference of memory value is provided.....
