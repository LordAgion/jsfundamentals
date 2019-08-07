


let hi = () => {
    return 'hi';
    //1
}
;

let newName = hi();
//    (2)     (3)

console.log(newName);

// 1- thew keywork that brings our data out of our function
// 2- we need a new cariable to hold the calue of the reture
// 3- when called, the function becomes the value of the return



let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name){
    if(letter ==0) {
        capName+= name[letter].toUpperCase();

    }else {
        capName+= name[letter].toLowerCase();
    }
    
}
return capName;
}

const myName = capitalizedName('dAuGherty');
console.log(myName + ', how are you doing?');


console.log(tip);




let hi = () => {
    return 'hello';
}
;

let newName = hi();

console.log(newName);




let amount = () => {
    return 1.15*bill-bill
};

let bill = 5;
let tipPer =1.15
let tip = amount()

console.log(tip);