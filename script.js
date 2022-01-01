'use strict';

// calcAge is defined in a global scope
//This also creates it's own scope, which is equivalent to it's variable environment
// // of it's execution context
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   const firstName = 'Sheroze'; // This variable is actually different from
//   // the firstName = 'Jonas'
//   console.log(firstName);
//   // firstName is a global variable, and although
//   // declared after, because of the scope chain it can be accessed as it's a global scope

//   // firstName in this block would also change to Sheroze, as the computer looks upward
//   // in the scope, and this is the first bit in the scope

//   function printAge() {
//     let output = `you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     output = `NEW OUTPUT`;

//     console.log(millenial); // var will still print.. because it ignores the block
//     // vars are function scopes! so they will still work outside of the block!
//     //    console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// firstName was printed to the console
// it was looked up in the scope chain to see if the variable was there..
// and indeed in the parent chain of the calcAge is the global scope
// and therefore JS could use that.

// HOISTING EXAMPLES:
console.log('NEW --------------------');

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Sheroze';
let job = 'teacher';
const year = 1997;

// Functions
console.log(addDec1(2,3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));

function addDec1(a,b) { 
  return a + b;
}


// this const function expression won't work either because it's literally a const..
// the function is basically contained inside of a variable, so the hoistin that applies
// to the type of function is what applies to the expression

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a,b) => a + b;
// The above will say, addArrow is not a function
// Again the hoisting rule is taken dependent on the actual variable itself
// In this case it's a var. So the value of the var before it's defined will be 
// undefined. So the addArrow basically = undefined ..
// That's why we receive the error of 'addArrow' is not a function in the cl.