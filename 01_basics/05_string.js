const name = "Pavan"
const age = 20

console.log("my name is " + name + "and my age is " + age); // THis way is not prefered...

console.log(`Hello my name is ${name} ane my age is ${age}`); // This way is more readable and preferred...

const newString = new String('Pavan')

console.log(newString.indexOf('n')); // => 4

console.log(newString.charAt(3)) // => a


 // Last letter will not include in substring , that is letter at index 4 will not be in substring..
 console.log(newString.substring(0,4)); // => Pava


 // Last letter will not include in substring
 console.log(newString.slice(-5,3));   // => Pav
 const newStringOne = "   Pavan   "


 // Trim used for removing extra spaces at starting and ending...
 console.log(newStringOne);   // =>     Pavan   
 console.log(newStringOne.trim()); // =>Pavan


 // Replace method is used to replace the elements from the string...
 const url = "https://pavan.com/pavan%20mhaisne"
 console.log(url.replace('%20','__'));    // => https://pavan.com/pavan__mhaisne


 //This method checks did the provided string element is included in string of not , and returns a Boolean value
 console.log(url.includes('mhaisne'))  // => true

 // It splits the string on the basis of the provide element , e.g, spaces , letters , etc.
 console.log(newString.split('a')); // => [ 'P', 'v', 'n' ]
 
 
 




