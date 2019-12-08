

// break; and continue;

let marks = [10, -50, 36, -8, 89, 13];

for(let i = 0; i < marks.length; i += 1) {
    if(marks[i] < 0) continue; // continue statement
    console.log('marks of student', marks[i]);
}

console.log('Continue statement.....');
for(let i = 0; i< marks.length; i +=1) {
    if(marks[i] < 0) break;   // break statement
    console.log('Marks of student', marks[i]);
}
