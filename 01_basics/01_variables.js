const accountId = 12345
let accountEmail = "pavanmhaisne@gmail.com"
var accountPassword = "12345"  // Prefer not to use var because of issue in block scope and functional scope
accountCity = "Mumbai"
let accountState ; // Undefined

accountId = 2 // not allowed

accountEmail = "pawanmhaisne@gmail.com"
accountPassword = "9876"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])


