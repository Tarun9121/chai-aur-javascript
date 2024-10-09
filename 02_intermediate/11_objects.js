const obj1 = new Object();

obj1.full_name = {
    first_name: "tarun", 
    last_name: "swaroop"
}

obj1.get_name = function() {
    return `${this.full_name.first_name} ${this.full_name.last_name}`;
}

const mini_obj1 = {a: 1, b: 2};
const mini_obj2 = {c: 3, d: 4};
const mini_obj3 = {e: 5, f: 6};

/**
 * const obj = Object.assign(target, ...sources)
 * 
 * the above method merges all the sources object to the target and returns back,
 * that's why we have to pass an empthy object so thet original didnt effect
 */

const mega_obj1 = Object.assign({}, mini_obj1, mini_obj2, mini_obj3);   // this method merges the all objects and returns back,

const mega_obj2 = Object.assign(mini_obj1, mini_obj2, mini_obj3);

// or you have to use the spread operator
const mega_obj3 = {...mini_obj2, ...mini_obj3}

// to return all the keys and values of an object then,
console.log(Object.keys(mega_obj1))
console.log(Object.values(mega_obj1));

// or you want all the key: value paris as array then
console.log(Object.entries(mega_obj1))

// Determines whether an object has a property with the specified name.
console.log(mega_obj1.hasOwnProperty('a'))                          // to check a key is available or not