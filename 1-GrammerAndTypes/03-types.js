/*
booleans
True or false
yes or no
on or off
*/

let i = true;
let j = false;

// ture =/ 'true'//
let on = true
let off = false

console.log(on, off);

//null = empty value//

let empty = null;
console.log(empty);

// undefined does not extist//

let undef = undefined
console.log(undef);

let x;
console.log(x);

//numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999
console.log(rounded);

let notquite = 0.2 + 0.1;
console.log(notquite);

let numbersAreHard = (0.2 *10 + .1 *10) / 10;
console.log(numbersAreHard);

let a = number('123');

/*Strings

*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 +100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);


//objects
//containter that hold muiltiple items

let car = {
    coolor: 'red',
    tires: 4,
    extras: 'ac and radio',
    cool: true
};
console.log(car);
console.log(typeof car);

// Array

let list = ['item1', 'item 2', 'item 3'];
// list is name of array
// [] not {} are arrays
// 3 each item regardless of dataype is seperated by a comma

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

// addition vs concatenation
/* when JS see combing two or more numbers, it adds the values together using the built in math functionality. 
when it sees adding together one of more strings it changes and the pluse sighn bemoces an assigment operator.
*/

let third = 1050 +'100';
console.log(third);
console.log(typeof third);

let firstname = 'Philip';
let lastname = 'Daugherty';
let houseNumber = '6957';
let street = 'Celese Rd';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = '46260';
let name = [firstname, lastname];
let postal = [houseNumber, street];
let adress = [city, state, zipcode];
console.log(name, postal, adress);

//strings
let myname = 'Daugherty';
console.log(myname.length);

//method

let myname = 'Daugherty';
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

let home = 'indiana';
console.log(home.includes('indiana'))

let sent = 'This sentence will be split into individual parts';

console.log(sent.split(' '));

let x = 'hello';
console.log(typeof x);