// Function Declaration
function walk(){
  console.log('walk');
}

//Function Expression
// This means declaring a function inside a variable or constant
// It can be Anonymous: function(){};
// Or it can be named: function walk(){};
let run = function(){
  console.log('run');
};
let move = run;
run();
move();

// HOISTING
// We can call the function declaration before its been initialized
// but we cant do that with the function expression, it has to be defined first
// Hoisting meaning:
// Is the process of moving function declarations to the top of the file
// this is done automatically by the JS engine.

// ARGUMENTS
// Dynamic language
let x = 1;
x = 'a';

// arguments object calls every single argument indexed inside an object
// for...of loops can be used on any object that has an iterator
function sum(){
  let total = 0;
  for(value of arguments)
    total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5))

// THE REST OPERATOR ...
// It looks like the spread operator, but when we use it as a parameter of a function
// is called the REST OPERATOR
// When we apply the rest operator to a parameter of a function, we can pass a varying number
// of arguments and the rest operator will take all of them and put them in an array.
// For that, we can get the sum of all them we can use the reduce method
// Cant have any other parameter after "the rest" parameter, since it will take everything after it as part of it


// IMAGINE WE ARE CALCULATING THE PRICE OF A SHOPPING CART WITH A 10% DISCOUNT
function sum2(discount, ...prices){
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum2(0.1, 1, 2, 3, 4, 5, 10));

// IMAGINE WE WANT TO CALCULATE THE TOTAL INTEREST
// We can store default values inside the parameters as well, 
// but every parameter should have a default value after the first parameter with a value, or it could be the last one
function interest(principal, rate = 3.5, years = 5){
  // rate = rate || 3.5;
  // years = years || 5;
  return principal * rate / 100 * years;
}

console.log(interest(10000));

// GETTERS AND SETTERS

const person = {
  firstName: 'Mauro',
  lastName: 'Cantillo',
  get fullName(){
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value){
    // Error Handling
    if(typeof value !== 'string') /* return; */
    // Report an error by throwing an exception
      throw new Error('Value is not a string.');
         
    // This next code will return an array, so we store that in a constant (or variable)
    const parts = value.split(' ');
      this.firstName = parts [0];
      this.lastName = parts [1];
      if (parts.length <= 2);
        throw new Error('Enter a first and lastname');
    }
};
// Getters => Access Properties
// For this to work we prefix "get" to the method we want to invoke as a property
// Setters => Change Properties
// For this to work, we need to add a function outside the code block of the properties (as a new property)

// Now we can edit the property as it was a property and not a method
// If we get the property but its causing an error and we throw an exception because of it, we can test our code using try{} keyword
try{
  person.fullName = 'Mauricio Cantillo';
}
// and then the catch block after
catch(e){
  console.log(e)
}
console.log(person);

// ERROR HANDLING
// Typically we should do error handling at the beggining of a function or method
// This is called Defensive Programming
// For example, if in the last code block, the person.fullName we're trying to edit is not a string
// value.split will give us an error since .split is a method of strings, not anything else,
// For that, we can add an if (typeof !== 'string') return;
// So the rest of the code is not executed

// THROW AN EXCEPTION
// Sometimes we want to report an error in the app, thats called throwing an exception (technical jargon)
// use the throw keyword and create a new error object
// throw new Error('Value is not a string.');

// TRY AND CATCH AN EXCEPTION
// With try keyword we can test part of our code to make sure they are throwing exceptions or not
/* try {
    person.fullName = null;
} */ 
// And if THEY ARE are throwing an exception, we use the catch keyword to get that to do something
// e stands for error
/* catch(e){
  console.log(e)
} */

// LOCAL VS GLOBAL SCOPE
// Scoping a variable or a constant determines where that variable or constant is accessible
// The scope is limited to the code block of where theyre defined

/* function start(){
  const message = 'hi';
  if(true){
    const another = 'bye';
  
  }
  for(let i = 0; i < 5; i++){
    console.log(i)
  }
  console.log(i); //not accessible
}
console.log(message); //not accessible
start(); */

// GLOBAL SCOPE
// It means its accessible everywhere
// Try to avoid defining global variables or constants, its considered bad practice 
// Thats because their values can be accidentally changed, creating bugs and issues

const color = 'red';

// LOCAL SCOPE
// It means its accessible only inside that codeblock
// Local scopes have precedence over global scopes

function start() {
  const message = 'hi';
  const color = 'blue'
  console.log(color);
}

function stop(){
  const message = 'bye'
}

start();

// LET VS VAR
// When you declare a variable with var, its scope its not limited to the codeblock, its limited to the whole function
// var IS TRASH, DONT USE IT, it got replaced by let and const
// let and const are block-scoped
// var is function scoped
let a = 0;
const b = 0;
var c = 0;


function start2(){
  for(var i = 0; i < 5; i++){
    if (true){
      var color = 'red';
    }
  }
  console.log(color)
}
start2();


var color2 = 'red';
let age = 30;

// THE this KEYWORD

// method => obj
console.log('this keyword, method')

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags(){
    /* this.tags.forEach(function(tag){
      
      console.log(this.title, tag);
    }.bind(this)); */
    this.tags.forEach(tag => {
      
      console.log(this.title, tag);
    });
  }
};

video.stop = function(){
  console.log(this);
}
video.showTags();
video.stop();

console.log('global function')
// function => global (window, global)
function Video(title){
  this.title = title;
  console.log(this);
}
const v = new Video('abcd');

// CHANGING THIS.


function playVideo(a, b){
  console.log(this);
}

// call method allows to change 'this' value
playVideo.call({ name: 'Mosh'}, 1, 2);
// apply method does the same as call, but using an array
playVideo.apply({ name: 'Mosh'}, [1, 2]);
// bind method returns a new function and points to this object permanently, we store the result
// in a new constant or variable and we can call the function using (); at the end
// we use .bind at the of the property we want to point using .bind(this); (see showTag function above)
const fn = playVideo.bind({ name: 'Mosh'})();

// we can also use arrow function to do this (see showTag function above)
/* this.tags.forEach(tag => {
      
      console.log(this.title, tag);
    }); */

playVideo();


// EXERCISE 1
// Function called sum() takes varying number of args and return the sum of them all
// Array.isArray allows us to find out if the argument is an array
console.log('EXERCISE1')
sum3(1, 2, 3, 4);
console.log(sum4(1, 2, 3, 4));

// BASIC
function sum3(){
let total = 0;
for(let value of arguments)
total += value
console.log(total)
};

// PROFESSIONAL, USING REDUCE METHOD
function sum4(...items){
  // using this code below we can store the ...items, 
  // which is an array, inside a new array, instead of storing the whole array inside another array
  // So basically we copy the elements of the array to a new array, and then we can sum that
  if(items.length == 1 && Array.isArray(items[0]))
    items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

  // EXERCISE 2
  console.log('EXERCISE2');

  // Create circle object with the next properties
  // radius, area,

  // A getter (get property) without a setter, makes the property read-only
    
const circulo = {
  radius: 6,
  get area(){
    return Math.PI * (this.radius ** 2);
  }
}  

circulo.radius = 3;

circulo.area = 522;
console.log(circulo)
console.log(circulo.area)

// EXERCISE 3
console.log('EXERCISE3');

try{ 
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(numbers, 1);
  console.log(count);
}

catch(e){
  console.log(e);
}

function countOccurrences(array, searchElement){
  if(!Array.isArray(array))
    throw new Error('Unexpected input, use an Array')
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}




