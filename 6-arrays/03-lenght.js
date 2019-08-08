

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let color = ['red', 'blue', 'yellow']
console.log(color.length);
console.log(color.toString());
console.log(typeof color.toString());


let arr = [1,2,3,4,5]
// let newArr = [];
console.log(arr instanceof Array);

if(arr instanceof Array === true){
    let revNumbers = arr.reverse();
    revNumbers.forEach(number => console.log(number));
};



// for(let i = arr.length-1; i >= 0; i -= 1){
//     console.log(arr[i]);
// newArr.push(arr[i])
// return newArr;
// };
// console.log(newArr);

