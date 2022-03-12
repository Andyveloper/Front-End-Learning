// If...else

// Hour
// If hour is between 6am and 12pm: Good Morning
// If hour is between 12pm and 6pm: Good Afternoon
// Otherwise: Good Evening

let hour = 13;

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else{
    console.log('Good Evening');
}

// Switch...case

let role = 'moderator';
switch (role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');
}

// Same logic as above but with if...else
if (role === 'guest')
    console.log('Guest User');

else if (role === 'moderator')
    console.log('Moderator User');

else
    console.log('Unknown User');

// You can use whichever you find better for you, since its
// up to personal preference, if...else kind of look cleaner and easier to write/read


// Loops
// For, While, Do...While, For...in, For...of

// For 

// Syntax
/* for (initialExpression; condition; incrementExpression){
    statement;

} 
*/
// We can use ++i or i++, --i or i-- and so on depeding on what's needed
// We can use as many statements as we
// i is short for 'index' and its a common convention to use in 'for' loops
// The variable declared here is only accesible to the for loop.
// Case: We want the loop to print only odd numbers
console.log('\'For\' Loops')
for (let i = 0; i <= 5; i++){
    if (i % 2 !== 0) 
        console.log(i);
}

// While

// In while loops, the variable has to be declared externally
// If condition evaluates to false, while loop is not executed.
// Syntax
/* while (condition;)
    statement;
    incrementExpression;
 */
console.log('\'While\' Loops')
let i = 0;
while (i <= 5){
    if (i % 2 !== 0)
        console.log(i)
    i++;
}

// Do...while

// Variable has to be declare externally, as it is "while"
// The diferences between do...while and while is that the
// do...while loops are always executed at least once, even if the
// condition evaluates to false

// Syntax
/* do {
    statement; 
    incrementExpression;
} while (condition);
 */
console.log('Do...While')
let i2 = 0;
do {
    if (i2 % 2 !== 0)
        console.log(i2);
    i2++;
} while(i2 <= 5);
// Not actually used that much practically

// Infinite Loops

// These are loops that run forever, crashing the browser or
// even the PC.
// This happens if you forget the increment expression, be aware
// e.g.
// let i3 = 0;
// while (i3 < 5){
//     console.log(i3);
//     i++; /* <--- DONT FORGET THAT! */
// }
// This can happen with every loop, DONT FORGET THE INCREMENT EXPRESSION!!!

/* _________________________________________________________________ */

// For...in 

// Its function is to show all properties of a variable
// Syntax
// for (let firstVariable in secondVariable )
//  function(firstVariable, secondVariable[firstVariable])
// The first variable is going to contain the properties of the second variable.
// This is done by statement(firstVariable)
// If we want to see the values of such properties, we need to call them by using
// firstVariable, secondVariable[firstVariable]
// We use the bracket notation instead of the dot notation here, to call those properties


// Variable with multiple properties
const person = { 
    name: 'Mauro',
    age: 27
};

for (let lmao in person)
    console.log(lmao, person[lmao]);

const color = ['red', 'green', 'blue']
for (let index in color)
    console.log(index, color[index]);


// For...of 
// same syntax as for...in but we change 'in' for 'of'
// Also we dont need to bracket notate anything, since it will get
// the strings in the array instead of their position.

// const color = ['red', 'green', 'blue']
for (let colorName of color)
    console.log(colorName);

/* ___________________________________________________________*/

// Keyworkds: Break and Continue
let x = 0;
while (x <= 10) {
    // if (x === 5) break;
    if (x % 2 === 0){
        x++;
        continue;
    }
    console.log (x);
    x++;
}
// Continue is not actually that much used 
// With Break we jump out of the loop.
// With Continue we jump to the next iteration.

// Exercise 1: 'Write a function that takes two numbers and returns
// the maximum of the two'

console.log('exercise1')
let number = [20, 25];


function maxNumber(){
    return Math.max(number[0], number[1]);
    
}

console.log(maxNumber());

let a = 20;
let b = 25;

function getMaxNumber(){
    if (a > b) return a;
    return b;
}

console.log(getMaxNumber());

// Exercise 2:

console.log('exercise 2')
let size = isLandscape(1366, 768);
console.log(size)

function isLandscape(width, height){
    return (width > height);
}

// Exercise 3:

console.log('exercise 3')
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 = FizzBuzz
// Not divisible by any => input
// Not a number = 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){ 
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    else if (input % 3 === 0)
        return 'Fizz';

    else if (input % 5 === 0)
        return 'Buzz';

    else if (typeof input !== 'number')
        return NaN;

    else
        return input;
    

}

// Exercise 4
console.log('exercise 4')
// Speed Limit = 70
// Every 5 over 70, you get 1 point
// Math.floor()
// 12 points means 'License suspended'

checkSpeed(180);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    }
        
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
            console.log('License Suspended');
        
    else 
            console.log('Points:', points);
    
    
}



// exercise 5:
console.log('exercise 5')
showNumbers(10);

function showNumbers(limit){
    for(i = 0; i <= limit; i++)
        if (i % 2 === 0)
        console.log(i, 'EVEN')
        else 
        console.log(i, 'ODD')
}

// exercise 6:
console.log('exercise 6')

const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array);
        if (value = true)
            count++;
        return count;
}

// exercise 7
console.log('exercise 7')
const movie = {
    title: 'a',
    releaseDate: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie)

function showProperties(object){
    for (let lmao2 in object)
    if (typeof object[lmao2] === 'string')
        console.log(lmao2, object[lmao2]);
}

// exercise 8
console.log('exercise 8');

// Multiples of 3: 3, 6, 9;
// Multiples of 5: 5, 10;
// Result must be 33

console.log(sum(10))


function sum(limit){
    let sum = 0

    for (let i = 0; i <= limit; i++);
        if(i % 3 === 0 || i % 5 === 0);
            sum += i;        

    return sum;
}

// exercise 9
console.log('exercise 9');

const marks = [40, 10, 10];


console.log(calculateGrade(marks))

function calculateGrade(marks){

    const average = calculateAverage(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';     
}

function calculateAverage(averageArray){

    let sum = 0;
    for (let value of averageArray)
        sum += value;
    return sum / averageArray.lenght;
    

}

// exercise 10
console.log('exercise 10')

showStars(10);

function showStars(rows){
    for (let row = 1; row <= rows; row++ ){
        let pattern = '';
        for(let i = 0; i < row; i++)
            pattern += '*'
        console.log(pattern);
    }
}

// exercise 11

showPrimes(20);

function showPrimes(limit){
    for(let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number); 
        
          
    
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}