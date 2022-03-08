// Invoking the functions, in this case the parameters are called 
// arguments
console.log('Invoking Functions')
greet('John', 'Smith');
greet('Mary Anne', 'Jones');


console.log(square(2))

//Basic Arithmetic Operators: Addition, Sustraction, Multiplication
// Division, Division Remainder and Exponentiation
let x = 10;
let y = 3;
console.log('Arithmetic Operators')

console.log('x = 10, y = 3')
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Advanced Arithmetic Operators: Increment and Decrement

// Increment (++) It increments the number by 1
// If the ++ is before the variable(++x), it first increment by 1
// and then it will be displayed on the console in this case 
// If we do this after the variable (x++), it first shows the current
// value for the variable, then it increments it by 1
console.log('Increment')
console.log(x++);
console.log(x);
console.log(++x);

// Decrement (--) the same characteristics previously stated
// also applies to --
console.log('Decrement')
console.log(x--);
console.log(x);
console.log(--x);

// Assignment Operators
// These allow us to increment the value of our variable
// easily and quickly. The value on the right
// is gonna be assigned (multiplied/additioned/etc) 
// to the value on the left 
console.log('Assignment Operators' )
let z = 15;

// z = z + 5
console.log(z += 5);

// z = z * 3
console.log(z *= 3);

// Comparison Operators:

// Relational Operators
// These allow to compare values (greater than, less than
// greater than or equal to, less than or equal to) and return a
// boolean value 
console.log('Relational Operators');

// Greater than / Greater than or equal to
console.log(x > 0);
console.log(x >= 0);
// Less than Less than or equal to 
console.log(x < 0);
console.log(x <= 0);

// Equality Operators
// These allow us to see if the values are equal in number
// lenght, characters or data types.

// Strict Equality
console.log('Strict Equality Operators')
// Strictly equal to checks if the value AND datatypes are the same
// or if they are NOT equal (Type + Vale are equals)
console.log(x === 0); /* Equal */
console.log(x !== 0); /* Not equal */
console.log(1 === 1); /* Equal, number and number */
console.log('1' === 1); /* Not equal, string and number */

// Loose Equality
console.log('Loose Equality Operators')
// Compares the values but not the datatypes, the value in the
// left converts the value in the right to the same datatype,
// then compares, e.g. boolean true is equal to 1 so true == 1 is true (values are equal)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
console.log(false == 0);

// Try to use strict equality since its better.

// Ternary Operators (Conditional Operators)
// Case: "If a customer has 100 points, they are a 'gold' customer
// otherwise, they're a 'silver' customer"
console.log('Ternary Operators');
// Glossary
// ? = 'If true'
// : = Otherwise
let points = 100;
let type = points >= 100 
? 'Gold' 
: 'Silver';
console.log(type);