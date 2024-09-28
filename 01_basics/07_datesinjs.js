// Dates

let myDate = new Date()
console.log(typeof myDate);




console.log(myDate.toLocaleString('default', {
    weekday: "long"
})); // =>Saturday 

console.log(myDate.toLocaleString('default', {
    weekday: "short"
})); // => Sat

console.log(myDate.toLocaleString('default', {
    
    weekday: "short"
}));
