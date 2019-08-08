


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
    return tipPer*bill-bill
};

let bill = 5;
let tipPer =1.15
let tip = amount()

console.log(tip);

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

function loop(){
for(;i<=100; i += 1)
return i;
}
let i = 0;
loop()

switch (true) {
  case (i % 5 == 0 && i % 3 == 0) :
    console.log('fizz buzz');
    break;

  case (i % 3 == 0) :
      console.log('fizz');
    break;

  case (i % 5 == 0) :
      console.log('buzz');
    break;
      
  default : console.log(i);
}
