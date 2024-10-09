// const obj1 = {
//     game1: "cricekt",
//     game2: "baseball",
//     game3: "basketball"
// }

// const array1 = ["tarun", 23, true]

// const map1 = new Map()
// map1.set("fr", "france")
// map1.set("in", "india")
// map1.set("us", "usa")

// // for in loop, generally used to loop objects
// // if you use for in loop for arrays it retrives keys i.e., index values
// for(const key in obj1) {
//     console.log(`${key} : ${obj1[key]}`)
// }

// // for of loop, for arrays
// for(const val of array1) {
//     console.log(val)
// }

// // consider the [key, value] as array deconstruct
// // this is the way to loop the maps
// for(const [key, value] of map1) {
//     console.log(`${key} : ${value}`)
// }

// for(const key in map1) {
//     console.log(key)
// }


// let printMe = (item) => {
//     console.log(item)
// }

// array1.forEach(printMe)

// // forEach loop also have another params
// array1.forEach((item, index, array) => {
//     console.log(`${item} ${index} ${array}`)
// })

const array2 = [
    {
        language: "javascript",
        extension: "js"
    },
    {
        language: "java",
        extension: "java"
    },
    {
        language: "python",
        extension: "py"
    }
]

array2.forEach((item) => {
    for(const key in item) {
        console.log(`${key} : ${item[key]}`)
    }
})