```javascript
function sum(a, b) {
  return a + b;
}
```

**Explanation:**

* **`function sum(a, b) { ... }`**: This defines a function named `sum`.
    * `function`:  Keyword used to declare a function in JavaScript.
    * `sum`: The name of the function.
    * `(a, b)`:  These are the parameters the function accepts.  `a` and `b` are variables that will hold the values passed in when the function is called.
* **`return a + b;`**:  This line does the core work.
    * `a + b`:  Adds the values of the two parameters `a` and `b`.
    * `return`:  This keyword sends the result of `a + b` back to the part of the code that called the function.  The function's execution stops after `return` is called.

**How to use the function:**

```javascript
let result = sum(5, 3);  // Calling the function with arguments 5 and 3.
console.log(result);      // Output: 8

let x = 10;
let y = 20;
let total = sum(x, y);    // Calling the function with variables.
console.log(total);       // Output: 30
```

**Key Concepts:**

* **Functions:** Reusable blocks of code that perform a specific task.  They help organize code, make it more readable, and prevent repetition.
* **Parameters:** Input values that a function receives when it's called.
* **Arguments:** The actual values you pass to a function when you call it.
* **Return Value:** The value that a function sends back to the calling code after it has finished executing.  If a function doesn't have a `return` statement, it implicitly returns `undefined`.
