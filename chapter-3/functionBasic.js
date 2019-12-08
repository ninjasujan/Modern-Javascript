
// function declaration
// support function hoisting
// function definition be placed after declaration in normal flow
function greet() {
    console.log('hello there..! at function declaration');
}

greet();


// function expression
// doesn't support function hoisting
const speak = function() {
    console.log('hello there..! at function expression');
};




speak();
