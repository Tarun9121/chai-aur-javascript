// array

const arr1 = [1,2,3,4,5]
const arr2 = ["tarun", "swaroop"]
const arr3 = new Array(1,2,3,4,5)

// console.log(arr1[0]);

// array basic methods
arr1.push(6) // adds the element to the last index
// console.log(arr1);

arr1.pop() // removes the last indexed element

arr1.unshift(0) // adds the element at the starting index

arr1.shift(); // removes the first indexed element

arr1.indexOf(1) // returns the index of spedcified element if it is not present then -1

arr1.includes(1) // returns boolean

const newArr = arr1.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// slice, splice

const sliceArr = arr1.slice(1,4); // returns a portion of an array, without changing the original array
console.log(sliceArr);
console.log(arr1);

const spliceArr = arr1.splice(1, 4); // returns a portion of an array and removes them from original array
console.log(spliceArr);
console.log(arr1)