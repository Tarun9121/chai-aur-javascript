// singleton
// Object.create 

// object litereals
const my_sym1 = Symbol("myKey1")

const obj1 = {
    name: "tarun",
    [my_sym1]: "value1",            // to use the symbol as key
    age: 23,
    mail: "tarunswaroop@gmail.com",
}

// access object
console.log(obj1.name)
console.log(obj1["mail"])

// to access the keys that uses symbols
console.log(obj1.my_sym1);          //returns undefined
console.log(obj1[my_sym1]);         // returns value

// to override the values
obj1.mail = "tarun@google.com"      // to change the values use = 
// Object.freeze(obj1)                 // if you want your object to be safe and not to change then use this
obj1.mail = "tarun@microsoft.com"   // so the changes you made after will not effect and does not returns any error

obj1.greeting = function() {
    return `${this.name} ${this.age}`   // this backticks syntax is called string interpolation
}

console.log(obj1.greeting());