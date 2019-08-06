//scope
//Local: Indianaoplis
//Global: Earth
// Scope Refers to where a variable is defined and accessible.
// -JavaScript has function scope: each Funtion creates a new scope
// -Scope determines the cisibility of these cariables
// -cariablis defined inscide a funtion are not visibble from outside the fuction


var x = 12 ;

function scope() {
    var x = 33;
    console.log('scope', x);
}

scope();
console.log('outside', x);

/*  Var vs Let
var can bleed out while let does not.
*/

var x = 12;
function varTest() {
  var x = 33;
  if (1 == 2) {
    var x = 45;
    console.log(x);
  }
  console.log(x)
};
varTest();
console.log(x);
var x = 12;
function letTest() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log(x);
  }
  console.log(x);
}
letTest();
console.log(x);
function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log(scope);
  }
  console.log(scope);
}
constTest();