
// Math object

console.log(Math.PI);

// round method
const area = 5.6;
console.log(Math.round(area));

// floor method
console.log(Math.floor(area));

// trunc
console.log(Math.trunc(area));

// generate random number
console.log('Random numbers from  1 - 6');
for(let i = 0; i < 10; i += 1) {
    let random = Math.random();
    console.log(Math.round(random * 7));
}

   