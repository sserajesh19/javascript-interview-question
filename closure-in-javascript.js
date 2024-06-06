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
