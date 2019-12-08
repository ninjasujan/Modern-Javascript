

let age = 25;

// Loose comparision (different type can be still equal)
console.log(age == '25');

console.log(age != '25');

// strict comparision
console.log(age === 25);

console.log(age === '25'); // No implicit conversion in background

console.log(age !== 25);

console.log(age !== '25');
