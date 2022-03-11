// console.log() prints whatever the parameter is into the console in a browser
// Function that performs a task
function greet(name, lastName){
    console.log('Hello World ' + name + ' ' + lastName);
}

// Function that calculates a value

function square(number){
   return number * number;
    
}

// Invoking the functions, in this case the parameters are called 
// arguments
console.log('Invoking Functions')
greet('John', 'Smith');
greet('Mary Anne', 'Jones');


console.log(square(2))

    