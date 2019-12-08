
/* javascript datatype

    Number - 1, 2, 3, 7.8
    string - "name" "place"
    boolean - true, false
    null - explicitly specified for variable which doesn't have value
    undefined - variable not yet defined
    object - complex datastructure, arrays, dates
    symbol - used with object

*/

// string concatination
let firstName = 'Ryu';
let secondName = 'Peiling';

let fullName = firstName + ' ' + secondName;
console.log(fullName);

// getting the chracter
console.log(fullName[2])

// string length
let length = fullName.length;
console.log('No.Of character in full name:', length);

// string method
console.log(fullName.toUpperCase()); 
let result = fullName.toLowerCase();
console.log(result, fullName);

// finding index of character in string
let index = fullName.indexOf('w');
console.log('w present at loc', index);
