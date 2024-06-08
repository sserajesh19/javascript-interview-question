/*
The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of the variables and the visibility of variables declared with let and const. 
*In the TDZ, a variable exists but it cannot be accessed until it is not declared.
*This prevents the variable from being used or accessed before a value is assigned to it.
*/

console.log(a);
a=12;
let a;
