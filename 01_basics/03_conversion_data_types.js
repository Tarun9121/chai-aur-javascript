let score = "33"

console.log(typeof(score));

// convert String to Number
let score_in_int = Number(score) 

console.log(score_in_int + " " + typeof(score_in_int))

/**
 * But what happens if the string got words with numbers
 */

let some_string = "33abc"
let convert_it = Number(some_string)

console.log(typeof(convert_it) + " " + convert_it); // it tells that the type is number, but when you print it, it tells that Not a Number

/**
 * number other than 0 will becomes true
 * "" -> it will become false, "any value" -> will become true
 */
let isLoggedIn = -2
let logged = Boolean(isLoggedIn)
console.log(logged)

/**
 * "123" -> 123
 * "123abc" -> NaN
 * null -> 0
 * undefined -> NaN
 * true -> 1
 * "string" -> NaN
 */