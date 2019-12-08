
// object in javascript

let user = {
    name: 'crystal',
    age: 21,
    email: 'netninja.co.uk',
    location: 'new york',
    blogs: ['readers of m.g.s', 'square guarden', 'things of life.!']
};

console.log(user);

// acess each memeber of object using dot . operator or square brackets
console.log(user.email); // usage of dot operator
console.log(user['email']); // using square brackets helpful in acessing variable key pair

if(typeof user === 'object')
    console.log('we created object');
else
    console.log('undefined datatype..!');