// OBJECT ORIENTED PROGRAMMIN (OOP)

// Camel Notation: oneTwoThreeFour // first letter lowercase then uppercase instead of space
// Pascal Notation: OneTwoThreeFour // every single first letter uppercase instead of space, even the first one

// if a function is part of an object, its called "method"
// const circle = {
//     radius: 1,
//     location:{
//         x: 1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw')
//     }
// };
// We're calling the draw method of the circle object
// circle.draw();

const circle2 = {
    radius: 1,
    location:{
        x: 1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw')
    }
};
// We're calling the draw method of the circle object
circle2.draw();

// Factory functions & Constructor functions

// Factory Function

console.log('Factory Function')

function createCircle(radius, location) {
  return {
    radius,
    draw(){
      console.log('draw')
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle3 = createCircle(2);
console.log(circle3);

// Constructor Function

function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}

const circle = new Circle(1);
// keyword new; it creates an empty object
// new is the same as: const x = {};

// delete operator: it deletes properties from an object.property

// Constructor Property
// Every object has a constructor property and that references the function that was used to create the object
// use .constructor after an object name to call that, e.g. circle.constructor
/* just use the literals
new String(); '', "", `` // string literals
new Boolean(); true, false // boolean literals
new Number(); 1, 2, 3 // number literals

*/

// Functions are objects

// Value types (primitives)
// Number, String, Boolean, Symbol, undefined, null

// Reference types (objects)
// Object, Function, Array
// Primitives are copied by their value
// Objects are copied by their reference

let x = {
  value: 10
}
let y = x;

x.value = 20;

let obj = {value: 10}
function increase(obj){
  obj.value++
};

//  enumerate objects properties

increase(obj);
console.log(obj);
for (let key in circle)
  console.log(key, circle[key]);

for (let entry of Object.entries(circle))
  console.log(entry); // for of can be only used with iterables: arrays and maps
  
if ('color' in circle) console.log('yes');

// Cloning an object

// const another = {};

// for (let key in circle)
// another[key] = circle[key];

// another['radius'] = circle['radius']

// const another = Object.assign({}, circle);

const another = { ...circle};


console.log(another);

// Object.assign copies the properties and methods of one or more source objects
// into a target object and we can use it to clone an object or combine multiple
// objects into a single object
// spread operator ... get all properties and methods and put them into another object


// Garbage collector
// Finds variables or constant that are no longer used and deallocate the memory allocated in them
// It allocates and deallocates memory automatically


// Math object https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// String primitive
const message = ' This is my first message ';

// String object Look at documentation
const anotherOne = new String('hi');

// Escape notations
// Use \ before some things to make them not corrupt the string
// eg \' // \0 // \

// Template literals: You can format your text easier
// Using backticks ``

const userName = 'John'
const yetAnother = 
`Hi ${userName},
Thank you for joining my mailing list.

You're now a 'HERO'

Regards,
Mauro`;

console.log(yetAnother);

// Date Object, look documentation

const now = new Date();
const date1 = new Date('Mayo 11 2022 10:00');
const date2 = new Date(2022, 4, 11, 9);

now.setFullYear(2022);

// Exercise 1 Adress Object

const address = {
street: '434 Hickory Hill Rd',
city: 'Chadbourn, North Carolina',
zipCode: '28431'
};

showAdress(address);

function showAdress(address){
  for(let key in address)
  console.log(key, address[key])
}

// Exercise 2
function createAddress(street, city, zipCode){
  return{
    street,
    city,
    zipCode
  };

};

let address2 = createAddress('1251 Elijah Creek Rd', 'Hebron, Kentucky', '41048');
console.log(address2);

function CreateAddress2(street, city, zipCode){
  this.street = street
  this.city = city
  this.zipCode = zipCode
  
};

let address3 = new CreateAddress2('824 Lick Creek Rd', 'Danville, West Virginia(', '25053');
console.log(address3);

// Exercise 3

console.log('exercise3')

let newAddress1 = new CreateAddress2('a', 'b', 'c');
let newAddress2 = new CreateAddress2('a', 'b', 'c');
let newAddress3 = newAddress1;


function areSame(newAddress1, newAddress2){
  return newAddress1 === newAddress2;
  

}

areSame();

function areEqual(newAddress1, newAddress2){
  return newAddress1.street === newAddress2.street && 
  newAddress1.city === newAddress2.city &&
  newAddress1.zipCode === newAddress2.zipCode;
}

console.log(areEqual(newAddress1, newAddress2))
console.log(areSame(newAddress1, newAddress2))
console.log(areSame(newAddress1, newAddress3))

// exercise 4

// title, body, author, views, comments(author, body) isLive(boolean)

let blogPost = {
  title: 'Why anime waifus are better than 3d girls',
  body: `Since the beggining of time, 2d girls have been way better than their 3d counterpart, they're cuter, softer
  way more feminine, caring, loving, etc.
  While 3d women can give you sex, that's all about it and it's
  not actually worth it.
  
  What do you think?`,
  author: 'Zeraltz',
  views: 2985237,
  comments: [{
    author: 'Nami',
    body: `Youre literally correct
    I can't believe I found someone as enlightened as you
    
    XOXO`
  }],
  isLive: true

};

function showBlogPost(blogPost){
  for (let key in blogPost)
  console.log(key, blogPost[key]);
};

showBlogPost(blogPost);

// Exercise 5

 function BloggingEngine(title, body, author){
 this.title = title;
 this.body = body;
 this.author = author;
 this.views = 0;
 this.comments = [];
 this.isLive = false;
 };

 let postPublished = new BloggingEngine('Catgirls', 'I love them', 'Zeraltz');

console.log(postPublished);

// Exercise 6 
console.log('exercise 6')

let priceRangeObject = [{
  title: 'Inexpensive',
  tag: '$',
  minPrice: 0,
  maxPrice: 200
}, 
{
  title: 'Moderate',
  tag: '$$',
  minPrice: 201,
  maxPrice: 400
},
{
  title: 'Pricey',
  tag: '$$$',
  minPrice: 401,
  maxPrice: 600
  
}]

let restaurants = [{
  averagePrice: 5
}]

console.log(priceRangeObject)