const score = 400
const balance = new Number(100)

// console.log(score)
// console.log(balance)
// console.log(`${score} : ${balance}`);

/**
 * to get the length of the number
 */

// console.log(balance.toString().length)
console.log(`${balance}.toFixed(2): ${balance.toFixed(2)}`) // it rounds the decimal part to the specified positions

/**
 * round of the value to certain numbers
 */

const no1 = 123.8371
console.log(`${no1}.toPrecision(3): ${no1.toPrecision(5)}`)

const no2 = 100000000
// console.log(no2.toLocaleString()) // it returns by default us-standards
// console.log(no2.toLocaleString("en-IN")) // now we are using the Indian standards

//==========================================   Maths   ===========================================================================//

// console.log(Math.abs(-4)) // make it absolute
// console.log(Math.round(4.6)); // rounds the value
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))

// how to use the random number
const min = 10
const max = 20
const random = Math.random()

console.log(Math.floor(random * (max - min + 1) + min))