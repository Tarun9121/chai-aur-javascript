const account_id = 1443
let account_email = "tarun"
var account_password = "0000"
account_city = "Mexico"


// TypeError: Assignment to constant variable
// account_id = 23
account_email = "tarunswaroop199@gmail.com"
account_password = "00000"
account_city = "Banglore"
let account_state;

/**
 * Avoid using the var keyword due to the issue with the block scope and functional scope, 
 * It leads to the bugs and unexpected behaviour.
 * 
 * when you declare a variable but not assigned a value it will considered as undefined
 */

console.table([account_id, account_email, account_password, account_city, account_state])