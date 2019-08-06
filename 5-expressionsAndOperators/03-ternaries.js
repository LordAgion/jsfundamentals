

let number = 6;

if (number > 0) {
        console.log(true);
} else {
       console.log(false);
};

let number = 6;
(number > 0) ? console.log(true) : console.log(false);

if (number == 0) {
    console.log('number is 0');
} else if (number >= 5) {
    console.log('number is bigger than 5');
} else {
    console.log('nope');
}

let number = 6;
(number == 0) ? console.log('number is 0') : (number >= 5) ? console.log(' number is bigger than 5') : (number < 0) ? console.log('number is smaller than 0') : console.log('nope');

let number = 25;
(number < 18) ? console.log('too young') : (number >=18 && number < 21) ? console.log(' you can vote') : (number >=21 && number < 25) ? console.log('you can drink') : console.log('rent a car')