/*A closure in JavaScript is a function that retains access to its lexical scope even when the function is executed outside that scope. Here's a simple example to illustrate closures:*/

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

const anotherCounter = createCounter();

console.log(anotherCounter()); // Output: 1
console.log(anotherCounter()); // Output: 2


//--------------------------------------------------------------------------

function add(a) {
    let count = a;  // Initialize count with the first argument
    return function sum(b) {
        if (b === undefined) {
            return count;
        } else {
            count += b;
            return sum;
        }
    };
}

console.log(add(2)(3)());  // 5
console.log(add(1)(2)(3)(4)());  // 10
