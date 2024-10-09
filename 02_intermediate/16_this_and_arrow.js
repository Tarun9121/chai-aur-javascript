const user = {
    username: "tarun",
    age: 23,
    welcome_message: function() {
        console.log(this.username)                  // used to refer current object properties
    }
}

const add_nums = (no1, no2) => no1 + no2;

console.log(add_nums(23,45));

(function add_nums00(no1, no2) {
    console.log(no1 + no2);
})(1,2)