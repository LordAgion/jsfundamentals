

let  student = {name: "Philip", awsome : true, degree: "Javascript", week: 1};

for(let item in student) {
    console.log(item);
}


let  student = {name: "Philip", awsome : true, degree: "Javascript", week: 1};

for(let item in student) {
    console.log(student[item]);
}

//names
let catArray = [ 'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(let cat in catArray){
    console.log(catArray[cat]);
};

//numbers
let catArray = [ 'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(let cat in catArray){
    console.log(cat);
};


let name = 'philip';
let capName;


for(let x in name){
    if (x == 0) {
        capName = name[x].toUpperCase();
    }else {
        capName += name[x].toLowerCase();
    }
}

console.log(capName);