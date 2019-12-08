
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get the data from local storage

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(age);
console.log(name);


// update item
localStorage.setItem('name', 'luigi');

console.log('name: ', localStorage.getItem('name'));

// delete item from localstorage
localStorage.removeItem('name');
localStorage.clear();
console.log(localStorage.getItem('name'));
