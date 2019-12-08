
// primitive and reference type

const userOne = {name: 'sujan', age: 21};
const userTwo = userOne; 

/* when we copy the object only pointer will be copied and both the pointer
points to the same location in heap
*/

console.log(userOne, userTwo);

userOne.name = 'ryu';


console.log(userOne, userTwo);  