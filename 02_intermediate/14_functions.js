function calculate_nums(...no) {
    let sum = 0
    for(let i = 0; i < no.length; i++) {
        sum += no[i]
    }
    return sum;
}

let total = calculate_nums(1,2,3,4,5,6,8)

let user = {
    username: "tarun",
    age: 23
}

function details(obj) {
    if(typeof obj === "object" && !Array.isArray(obj)) 
        console.log(`the name is ${obj.username} and age is ${obj.age}`)
    else 
        console.log("this funtion only accepts object type argument")
    
}

details(user)