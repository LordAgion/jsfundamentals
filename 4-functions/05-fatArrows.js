

let hi = () => {
//    (1)   (2)
    console.log('hello')
}

hi();

//-> does not equal =>

// 1- we need to set the fat arrow gunction to a variable
//2- We use the 'fat arrow' to signify its a function

// block body
let hi = () => {
        console.log('hello')
    } 
    hi();
    

// consice body

let hi = () => console.log('hello')

hi();

let apples = x =>console.log(` there are ${x} in the basket`) 

apples(10);

// more than one parameter will require parentthesis
//reture (if one-line fat arrow function) is implied

let apples = x => {
    console.log(`there are ${x} in the basket`) 
}
apples(10);

//no line breaks......................................................................................

