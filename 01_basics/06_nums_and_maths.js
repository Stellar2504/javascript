const score = 400
console.log(score);  //=> 400

const balance = new Number(100)
console.log(balance);  // => [Number: 100]

// toString() method coverts the numbers into string data types...
console.log(balance.toString().length); // =>3

// toFixed() method adds provided fixed value times zeros after decimal point... 
// Used in e-commerce websites
console.log(balance.toFixed(2));  // => 100.00


/* The toPrecision() method of Number values returns a string representing this number 
to the specified number of significant digits. */

// This number has exponent 4, so it will use exponential notation if precision is less than 5
const otherNumber = 12334.5;
console.log(otherNumber.toPrecision(1));  // => 1e+4
console.log(otherNumber.toPrecision(2));  // => 1.2e+4
console.log(otherNumber.toPrecision(3));  // => 1.23e+4
console.log(otherNumber.toPrecision(4));  // => 1.233e+4
console.log(otherNumber.toPrecision(7));  // =>  1.233e+4


// This method applies comma's between the digits
// This used for appling commas as per indian style , by default it applies commas as per american style..
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-In')); // => 10,00,00,000


//*************************************** Maths ****************************************************//

console.log(Math);

// This method convert the provided value into absolutely value
console.log(Math.abs(-4));  // => 4

// This method round of the values as we normally do in real life 
console.log(Math.round(4.3));  // => 4
console.log(Math.round(4.6));  // => 5

//This method round of the values to the upper limit, that is ceiling..
console.log(Math.ceil(4.1));  // => 5

//This method round of the values to the lower limit , that is floor..
console.log(Math.floor(4.9)); // => 4

//Return min value in the array
console.log(Math.min(2,3,5,7,4,6)); // =>2

//Return max value in the array
console.log(Math.max(3,6,9,4,6,4)); // => 9

//This method returns the random value between 0 to 1..
console.log(Math.random()); 


// Important Formula 
const max =6
const min=1
console.log(Math.floor(Math.random() * (max-min+1)+min)); // => from 1 to 6







