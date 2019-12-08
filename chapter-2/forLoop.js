

let names = ['Ryu', 'Shaun', 'Merry'];

for(let i = 0; i < names.length; i +=1) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// for of loop
console.log("For of loop....")
for(let name of names) {
    console.log(name);
}

// while loop
console.log("While loop.....")
let index = 0;
while(index < names.length) {
    console.log(names[index]);
    index += 1;
}

// do while loop
console.log("Do loop.........")
let i = 6;
do {
    console.log("Do loop", i)
} while(i < 5);