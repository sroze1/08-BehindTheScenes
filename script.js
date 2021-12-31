'use strict';

  // calcAge is defined in a global scope 
    //This also creates it's own scope, which is equivalent to it's variable environment
    // of it's execution context
function calcAge(birthYear) {  

    const age = 2037 - birthYear;
    console.log(firstName); 
    // firstName is a global variable, and although
    // declared after, because of the scope chain it can be accessed as it's a global scope

       function printAge() {
         const output = `you are ${age}, born in ${birthYear}`;
         console.log(output);

         if(birthYear >= 1981 && birthYear <= 1996) { 
             var millenial = true;
             const str = `Oh, and you're a millenial, ${firstName}`;
             console.log(str);
         }
       


       console.log(millenial); // var will still print.. because it ignores the block
       // vars are function scopes! so they will still work outside of the block!
        }
       printAge();


    return age;
}

const firstName = 'Jonas';
calcAge(1991);


// firstName was printed to the console
// it was looked up in the scope chain to see if the variable was there..
// and indeed in the parent chain of the calcAge is the global scope
// and therefore JS could use that.


// 