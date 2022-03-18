const numbers = [3, 4];

// ADDING NEW ELEMENTS
// Add new elements to the beggining, middle or end of the array

// Beggining
// .unshift method: Pushes current elements to the right and add new elements to the array
numbers.unshift(1, 2);

// Middle
//.splice method: add or remove elements at a specific position
// parameters are start(starting position)
// Second parameter is to define the number of positions we want to delete
// Thir parameter onwards is what we're going to add
numbers.splice(2, 0, 'a', 'b'); 


// End
// .push method: arguments will be placed at the end of the array
numbers.push(5,6);
console.log (numbers);

// Finding elements (primitives)
const findingElements = [1, 2, 3, 4, 1];

// indexOf(method) we paste the element were looking for, and if that
// element exist, its gonna return the first index of that element
// otherwise it returns -1. Its type sensistive. The second parameter
// allows us to select the starting point
// lastIndexOf() does the same but it starts from the last one towards the first

numbers.indexOf();

console.log(findingElements.indexOf(1))
console.log(findingElements.lastIndexOf(1))

// If we need to check if an element exists in one array, use this function

console.log(findingElements.indexOf(1) !== -1);
// OR (THIS ONE IS WAY BETTER)
console.log(findingElements.includes(1));


// Finding elemenets (reference types)

const courses = [
    {id: 1, name:'a'},
    {id: 2, name:'b'}
];

console.log(courses.includes({id: 1, name: 'a'}));

// Includes doesnt work with objects, as they have two different references.
// In this case, we're going to use the .find method.
// For more info, check documentation.
// A function that is part of a method, is called predicate
// It returns the first element that matches the criteria inside the predicate

const course = courses.find(function(course){
    return course.name === 'a';
})

console.log(course);

// .findIndex is the same as indexOf but for objects, use the same predicate than before

const course2 = courses.findIndex(function(course){
    return course.name === 'b';
})
console.log(course2);

// ARROW FUNCTIONS
// You remove the function keyword and add a fat arrow to separate the parameters
// If you only have 1 parameter you can get rid of the parentheses
// If you have no parameters, you can use empty parentheses ()

//           It reads as: course goes to course.name equals 'a'
const found = courses.find(course => course.name === 'a');

console.log(found);


// REMOVING ELEMENT FROM AN ARRAY

const rmElements = [1, 2, 3, 4, 5, 6];

// Removing from
// Beggining
console.log('Beggining')
const firstOne = rmElements.shift();

// Middle
console.log('Middle')
rmElements.splice(2, 2);

// End
console.log('End');
const last = rmElements.pop();
console.log(rmElements);
console.log(last);

// EMPTYING AN ARRAY

let array = ['a','b', 'c', 'd'];
let array2 = ['e','f', 'g', 'h'];
let array3 = ['i','j', 'k', 'l'];
let array4 = ['m','n', 'o', 'p'];
console.log(array, array2, array3, array4);
// Solution 1: change the contents of the array if its a variable
// This is the second best
array = [];
console.log(array);

// Solution 2 set length to 0, this is the best one
array2.length = 0;

console.log(array2)

// Solution 3: .splice method

array3.splice(0, array3.length)
console.log(array3)

// Solution 4: .pop method, dont use this anyway

while(array4.lenght > 0)
    array4.pop();
    console.log(array4);


// COMBINING AND SLICING ARRAYS FOR PRIMITIVES

// Combining an array
const first =[1, 2, 3, 4];
const second = [5, 6, 7, 8];
const combined = first.concat(second);

console.log(combined);

// Slicing an array
// Here you define the start and the end of the slice
const sliceStartEnd = combined.slice(2, 4);
 // Here you define the start of the slice, and everything else will show
const sliceStart = combined.slice(2);
// Here you create a copy of the array
const sliceCopy = combined.slice();
console.log(sliceStartEnd);
console.log(sliceStart);
console.log(sliceCopy);

// Combining and Slicing Arrays for Objects

const firstObj = [{
    id: 1
}]

firstObj[0].id = 10;
// console.log(firstObj);

let objAndElement = first.concat(firstObj);

console.log(objAndElement)

let slicedObj = objAndElement.slice(2)

console.log(slicedObj)


// The Spread Operator ...Element

// Easier to combine arrays
const combinedArray = [...first, ...second];

console.log(combinedArray)

// Easier to create a copy

const copy = [...combinedArray];
console.log(copy);

// ITERATING AN ARRAY

const iterate = [1, 2, 3];
for(let key of iterate)
console.log(key);


// forEach()

iterate.forEach((iterate, index) => console.log(index, iterate));

//  JOINING ARRAYS

// Join fusions an array into a string using the parameter as a separator
const joined = first.join(' ');
console.log(joined);

// Split separates a string into an array using the parameter as separator if parameter === separator, separe string
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const joinedParts= parts.join('-');
console.log(joinedParts);

// SORTING ARRAYS

// Primitives
// .sort method: sorts items from lowest to highest
const listNumber = [2, 3, 1]

listNumber.sort();

console.log(listNumber);

// .reverse method: sorts items from highest to lowest

listNumber.reverse();
console.log(listNumber);

// Objects

const curso = [{
    id: 1,
    name: 'Node.js'
},
{
    id: 2,
    name: 'javascript'
}]

curso.sort(function(a, b){
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
    // How to exclude case sensitivity

});
console.log(curso);


// TESTING THE ELEMENTS OF AN ARRAY

// Imagine you wanna check if they all are positive

// .every It checks if the criteria is matched by every element in the array, and stops
// once one of them doesnt match with it
const moreNumbers = [1, -1,  2, 3];

const allPositive = moreNumbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// .some It checks if you have at least one element that matches the criteria
// As soon as it finds one element that matches the criteria, will return true 
// and the search will terminate

const atLeastOnePositive = moreNumbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// FILTERING AN ARRAY

// .filter Filters based on a search criteria
// n = number
const filtered = moreNumbers.filter(n => n >= 0);


console.log(filtered);

// MAPPING AN ARRAY
// .map method allows us to map each element in an array into something else
// We're mapping them to strings here

const items = filtered.map(n => '<li>' + n + '</li>')
console.log(items);

const html = '<ul>' + items.join(' ') + '</ul>';

console.log(html);

// Map them to objects
// When coding objects in callback functions, they have to be in parentheses

const items2 = filtered.map(n => ({value: n}));

console.log(items2);

// We can chain filter and map methods
const chaining = moreNumbers
    // First we need the result of the filter
    .filter(n => n >= 0)
    // Then we map that result
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(chaining);

// REDUCING AN ARRAY

let sum = 0;
// Now we get the numbers in the array and then add them into the sum variable
for(let n of moreNumbers)
 sum += n;

 console.log(sum);

//  .reduce allows us to convert all of the array items into a single value
// They could be numbers, strings, an object, etc.

const theSum = moreNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(theSum)


// exercise 1
// Make a function that lists every number between min and max

const numeros = arrayFromRange(-9, 7);
console.log(numeros);

function arrayFromRange(min, max){
    const output = [];
    for (let i = min; i <= max; i++)
     output.push(i);
    return output;
}

// Exercise 2
// Make a function that works the same as .includes method
console.log ('exercise 2')

const masNumeros = [1, 2, 3, 4, 5]

function includes(array, searchElement){
    for(let n of masNumeros)
        if(n == searchElement)
            return true;
    return false;
}

console.log(includes(masNumeros, 5));

// Exercise 3
// Make a function that deletes an element from an array

console.log('exercise 3')

const output = except(masNumeros, [6]);
console.log(output);

function except(array, excluded){
    const output = [];
    for (let element of array)
        if(!excluded.includes(element))
        output.push(element);
    return output
          
}

// Exercise 4
// 
console.log('exercise 4');

const numbers2 = [1, 2, 3, 4];

const output2 = move(numbers2, 0, 2);

console.log(output2);

function move(array, index, offset){
    
  const position = index + offset;
  if(position >= array.length || position < 0){
    console.error('invalid offset')
    return;
  }
  
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;

}
// We copy the array using spread operator ...
// Then we remove the element from the array and place it on the correct position using splice
// To add it, we use splice again
// we return the output
// Add validation for errors

// Exercise 5
console.log('exercise5')

const numbers3 = [1, 2, 3, 4, 1, 3, 3, 3, 3];

const count = countOccurrences(numbers3, 3);
const count2 = countOccurrences2(numbers3, 3);

console.log(count);
console.log(count2);

// MY VERSION

function countOccurrences(array, searchElement){
  const occurrences = array.filter(n => n === searchElement)
  return occurrences.length;

}

// SOLUTION

function countOccurrences2(array, searchElement){
  let count = 0;
  for (let element of array)
    if (element === searchElement)
    count++;
    return count;
}

// Exercise 6 - Get max
console.log('exercise6');

const getMaxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = getMax(getMaxNumber);
console.log(max);

function getMax(array){
  // Basic
  // for (let key in array)
  //     return Math.max(...array);
  // return undefined;
   
  // Reduce method 
  return array.reduce((accumulator, currentValue)=> {
    if(currentValue > accumulator) 
      return currentValue
    return accumulator;
  }); 
}


// Exercise 7 - Movies
console.log('exercise7');

const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'b', year: 2018, rating: 4.7},
  {title: 'c', year: 2018, rating: 3},
  {title: 'd', year: 2017, rating: 4.5},
];

console.log(sortMovies(movies))
// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Only pick their title property and display
// result should be a and b


function sortMovies(array){
 const pickMovie = array.filter(element => element.year === 2018 && element.rating >= 4)
 const sortedByRating = pickMovie.sort((a, b) => {
  if(a.rating < b.rating) return 1;
  if(a.rating > b.rating) return -1;
  return 0;
 });
 return sortedByRating.map(element => element.title);
}