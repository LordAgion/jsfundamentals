

let isOn = true;

if (isOn == true) {
    console.log ('light is is on.')
};

if (isOn) {
    console.log('light is on')
};

let isOff = false;

if (isOff == false) {
    console.log ('light is is off.')
};

let weather = 5;

if (weather < 70) {
    console.log( 'wear a jacket')
};

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo()); 