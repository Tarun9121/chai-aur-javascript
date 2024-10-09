/**
 * NOTE: by using any methods of the string the original value does not change.
 * It just generates another string based on the function used.
 */

const name = "tarun"
const rep_count = 50

console.log(`Hii my name is ${name} and my age is ${rep_count}`);

const name1 = new String("tarun")           // it is now string object, and can access string methods

console.log(`Hii ${name1} \nProto: ${name1.__proto__} \nfullName: ${name1.toUpperCase()}`);

console.log(name1.charAt(3))
console.log(name1.indexOf('t'))

/**
 * both the methods "substring and slice" are used to get the substrings but in the slice method we can use the negitive indexes
 */

const new_string = name1.substring(0, 4)
console.log(new_string)

const another_string = name1.slice(0, -1)
console.log(another_string)


/**
 * to remove the white space at the starting point or ending of the string we use the trim() method
 */
const trimmed_string = "    tarun swaroop    "
console.log(trimmed_string.trim());

let url = "www.googgle.com"
if(url.includes("googgle"))
    url = url.replace("googgle", "google")
console.log(url)

const split_words = "the split method is used to seperate the words based on any character"
const words = split_words.split(" ")
console.log(words);