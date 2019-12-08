

let age = 20; // redifining same variable within the scope is error 
var name = 'Ninja';

if(true) {
    var name = 'Shaun';
    let age = 40;
    console.log('age is ', age);
    console.log('name ', name);
    if(true) {
        let age = 35;
        console.log('Inside second code block', age);
    }

    console.log('In first block last statement', age);

}

console.log('Name', name);
console.log('age is', age);

