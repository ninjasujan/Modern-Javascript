
const nameSet = new Set(['ryu', 'shun', 'ninja', 'ryu']);



const uniqueName = [...nameSet];

nameSet.add('sujan');
nameSet.delete('sujan');
//console.log(nameSet);

//console.log(nameSet.size);
//console.log(nameSet.has('ninja'));

nameSet.clear();

const person = new Set([
    {name: 'shaun', title: 'ninja'},
    {name: 'mario', title: 'manu'}
]);

person.forEach(element => {
    console.log(element.name);
});



