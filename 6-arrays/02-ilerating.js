

//forEach()  method executins a provided function once for each array element.

//forEach() has three arguments: currentValue, the index, and the entire aarray
// CurrentValue = the current element being processed in the arry
//index = the index of the current element being processed
// array = the array the forEach() method was called upon

let food = ['spaghetti', 'linguini', 'chicken wings', 'pizza', 'popcorn'];

// food.forEach(f => {console.log(f)});
;
//food.forEach((f, number) => {console.log(f, number)});

food.forEach((f, number, array) => {console.log(f, number, array)});


let movie = ['one', 'two', 'three'];
movie.push('four');
movie.splice(1,1, 'movie2');
movie.forEach(f => {console.log(f)});

// write your code here