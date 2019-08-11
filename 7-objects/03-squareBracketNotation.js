let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };
  
  console.log(garden['vegetable']) //'zucchini'

let x = 'vegetable';
//console.log(garden.x, garden[x]); //undefined 'zucchini'

let baking = {};
baking ['zucchini'] = 'better make some bread'; // we can also set a value pair with square brackets

console.log(baking[garden['vegetable']]); //'better make some bread'

  
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };  

  
