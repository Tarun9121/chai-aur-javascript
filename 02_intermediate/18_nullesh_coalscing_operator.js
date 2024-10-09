/**
 * The `??` operator in JavaScript is known as the **nullish coalescing operator**. 
 * It provides a way to assign default values to variables when dealing with `null` or `undefined` values.

### How It Works

The `??` operator returns the right-hand side operand when the left-hand side operand is `null` or `undefined`.
If the left-hand side operand is any other value (including `false`, `0`, `NaN`, or an empty string `""`), 
it returns the left-hand side operand.

### Syntax

```javascript
let result = operand1 ?? operand2;
```

- **operand1**: The value to be checked.
- **operand2**: The default value to be used if `operand1` is `null` or `undefined`.

### Example

```javascript
let name = null;
let defaultName = "Guest";

let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"
```

In this example, `name` is `null`, so `displayName` is assigned the value of `defaultName`, which is `"Guest"`.

### Another Example

```javascript
let userInput = "";
let defaultInput = "Default Value";

let finalInput = userInput ?? defaultInput;
console.log(finalInput); // Output: ""
```

Here, `userInput` is an empty string `""`. Since `""` is neither `null` nor `undefined`, `finalInput` 
is assigned the value of `userInput` which is `""`.

### Comparison with `||` (Logical OR)

The `??` operator is similar to the logical OR (`||`) operator, but with a key difference:

- The `||` operator returns the right-hand side operand if the left-hand side operand is **falsy** 
(which includes `false`, `0`, `NaN`, `""`, `null`, and `undefined`).
- The `??` operator returns the right-hand side operand only if the left-hand side operand is **null or undefined**.

### Example with `||`

```javascript
let value = 0;
let defaultValue = 5;

let result = value || defaultValue;
console.log(result); // Output: 5
```

With `||`, since `value` is `0` (which is falsy), `result` becomes `5`.

### Example with `??`

```javascript
let value = 0;
let defaultValue = 5;

let result = value ?? defaultValue;
console.log(result); // Output: 0
```

With `??`, `value` is `0` but not `null` or `undefined`, so `result` remains `0`.

### Use Cases

The `??` operator is particularly useful when you want to provide a default value only if a variable is `null` or `undefined`, 
without treating other falsy values like `0`, `""`, or `false` as "missing" values.
 */

let val1;
let val2 = val1 ?? 10;

let val3 = "" || 20

console.log(`${val2} ${val3}`)

/**
 * Generally ?? operator checks the first val is null or undefined
 * and || operator checks if the first val is flasy value
 */