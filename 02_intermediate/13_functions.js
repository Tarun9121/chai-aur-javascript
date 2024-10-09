// syntax:
/**
 * function function_name(params) {
 *      code
 * }
 * this is called function defination
 * 
 * function_name(params)    // this is called function_calling
 * function_name            // this is functions reference
 * 
 */

function say_my_name() {
    console.log("tarun swaroop")
}


function add_nums00(no1, no2) {
    console.log(no1 + no2)
}

// to give default values to function parameters, it we didn't pass arguments
function add_nums01(no1, no2 = 0) {
    return no1 + no2;
}

function login_user_message(username) {
    if(!username) {
        return `please enter your name`
    }
    return `${username} just logged in`
}

/**
 * Both functions you provided are designed to check if a `username` is provided and return appropriate messages.
 *  However, the way they check the condition is slightly different:

1. **First Function:**

    ```javascript
    function login_user_message(username) {
        if (username === undefined) {
            return `please enter your name`;
        }
        return `${username} just logged in`;
    }
    ```

    - **Condition Check:** `username === undefined`
    - This condition specifically checks if the `username` is `undefined`. It won't catch other falsy values like `null`,
     an empty string (`""`), `0`, `NaN`, or `false`.
    - If `username` is anything other than `undefined`, the function will proceed to the next line.

2. **Second Function:**

    ```javascript
    function login_user_message(username) {
        if (!username) {
            return `please enter your name`;
        }
        return `${username} just logged in`;
    }
    ```

    - **Condition Check:** `!username`
    - This condition checks if `username` is falsy. In JavaScript, falsy values include `undefined`, `null`, `false`, `0`, `NaN`,
     and an empty string (`""`).
    - If `username` is any of these falsy values, the function will return "please enter your name".

### Key Difference:

- **Specificity:** The first function only checks for `undefined`, while the second function checks for a broader range of falsy values.
- **Practical Impact:** If `username` is `null`, an empty string, or any other falsy value,
the first function would not trigger the `if` condition, but the second function would. 

In summary, the second function is more general and will catch more cases where `username` is not a valid input.
 */

console.log(login_user_message("tarun"))