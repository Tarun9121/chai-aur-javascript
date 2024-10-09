// Object destruct

/**
 * In JavaScript, object destructuring is a syntax that allows you to extract properties from objects and assign them to variables.
 *  This feature is part of ES6 (ECMAScript 2015) and is widely used because it makes working with objects more concise and readable.
 */

const course = {
    course_name: "JS in hindhi",
    price: 999,
    course_instructor: "Me"
}

// Deconstructing
// syntax:
// const {property1, property2} = obj_name
const {course_name, price} = course

// Nested Deconstructing
const user = {
    full_name : {
        first_name: "tarun",
        last_name: "swaroop"
    },
    age: 23
}

// const {property1: short_name, propery2...} = object
const {age, full_name: {first_name: fname, last_name: lname}} = user

console.log(`${age} ${fname} ${lname}`)