

//Arrays are containers that hold lists of items of carious dataTypes

let list = [ 'item 1', ' item 2', 'item 3']
//   (1)  (2)  (3)

//1- name of the Array or list;
//2- The Array is inside of these square brackets
//3- each item, regardsless of datatype, is separated by commas

console.log (list [1]);


let students = ['tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['josh', 'eric', 'sam']];

console.log(typeof students);
console.log(students instanceof Array);

console.log(students[6][2]);

let name = students[6][2];
console.log(`${name}`);


//population

let food = ['spaghetti', 'linguini', 'chicken wings', 'pizza', 'popcorn'];

food.push(' taco');
food.splice(1, 1, ' Bananas');
food.splice(2, 0, ' sweetpotato pie');
food.pop();
food.shift();
food.unshift('fruit snakes')

for (pasta of food) {
    console.log(pasta);
}

