
// rest parameter

const double = (...nums) => {
    console.log(nums);
}
double(1, 2, 3, 4);

// spread syntax(arrays)
const people = ['shaun', 'ryu', 'crysto'];
const memeber = ['mario', 'chunli', ...people];
console.log(memeber);

// spread syntax(object)

const person = {
    name: 'shaun',
    age: 30,
    job: 'net ninja'
}

const personClone = {...person};

console.log(personClone);