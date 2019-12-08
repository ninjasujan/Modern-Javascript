
// Type conversion in Javascript


let score = '100'; // string type

console.log(score + 1); // string concatination not addition 

score = Number(score); // converts score(string) to number type

console.log(score + 10);

let str = String(50);

console.log(str, typeof str);

// Boolean conversion
let result = Boolean(-100);
console.log(result, typeof result);

// result = Boolean('str');
result = Boolean(NaN);
console.log(result, typeof result);

console.log('null...');
result = Boolean(null);
console.log(result, typeof result);

// truthy values number including negetive number and  strings
// falsy values empty string, 0, NaN, undefined





