// Dates

let my_date = new Date()

// console.log(my_date);
// console.log(my_date.toString())
// console.log(my_date.toDateString())
// console.log(my_date.toISOString())
// console.log(my_date.toJSON())
// console.log(my_date.toLocaleDateString())
// console.log(my_date.toLocaleString())

// let my_created_date = new Date(2025, 6, 28) // month start from 0-JAN : if you are using this syntax
let my_created_date = new Date("2024-01-14") // yyyy-mm-dd
// let my_created_date = new Date("01-14-2024") // mm-dd-yyyy

// console.log(my_created_date.toDateString());

let time_stamp = Date.now()

console.log(time_stamp)
console.log(time_stamp.getTime)