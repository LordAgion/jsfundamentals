

let friend = 'Autumn';

switch (friend) {
    case 'Autumn':
        console.log("Hey Autumn, when are we going rock wall climbing")
        break; 
    case 'Dave':
        console.log("hello Dave");
        break;
    case 'Alecx':
        console.log("hey Alecx");
        break;
    default :
        console.log(`I am sorry, ${friend} I do not know you.`);
        console.log('I am sorry', friend, 'I do not know you.');
};

let dessert = 'ice'

switch (dessert) {
    case 'pie':
            console.log('pie, pie, me oh my.')
            break;
    case 'cake':
            console.log('The cake is a lie.')
            break;
    case 'ice cream':
            console.log('I scream for ice cream!');
            break;
    default :
            console.log('Not on the menu');
};


let age = 25

switch (true) {
    case (age <= 17):
            console.log('too young')
            break;
    case (age >= 18 && age < 21):
            console.log('voting age')
            break;
    case (age >= 21 && age < 25):
            console.log('Drinking age');
            break;
    case (age >= 25):
            console.log('Car renting age');
            break;
    default :
            console.log('Error');
};

