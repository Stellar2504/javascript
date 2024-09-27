console.log(2>1);  // => true
console.log(2>=1); // => true
console.log(2<1);  // => false
console.log(2==1); // => false
console.log(2!=1); // => true


console.log("2">1);  // => true
console.log("02">1); // => true




console.log(null > 0);  //  => false
console.log(null == 0); //  => false
console.log(null >= 0); //  => true

/*
The reason is that an equality check and conparisons > < >= <= work differently.
Comparisons convert null to a number , treating it as 0 .
Thats why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0);  //=> false
console.log(undefined < 0);   //=> false
console.log(undefined > 0);   //=> false

// strict check ===    // strict check also checks for the same data type it don't convert string to numbar by default

console.log("2" === 2);  // => false















