

let ninjas = ['Ryu', 'Shaun', 'Marry', 'Peter'];

console.log(ninjas);

// Find lenght of array

console.log("Length: ", ninjas.length);

let result = ninjas.join("-") // join array elements with - as a single string
console.log(result)

// find the index of array element

let index = ninjas.indexOf('Ryu'); // case sensitive

console.log("Index of Ryu: ", index) 


let join = ninjas.concat(['suman', 'Harry']);

console.log(join)

let x = ninjas.push('Sujan') // adds sujan to the end of stack and returns length

let ele = ninjas.pop() // removes the element from end of stack

