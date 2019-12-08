// async and wait
// fucntion with async returns promise
// await holds the execution till promise to be written

const getTodos = async () => {
    const response = await fetch('todos/mario.json');
    if(response.status != 200) {
        throw new Error('bad request, check your API end points');
    }
    const data = await response.json();
    return data;
};

console.log('1');
console.log('2');

getTodos()
    .then(data => {
        console.log('async promise resolved', data);
    })
    .catch(err => {
        console.log(err.message);
    });
                   
console.log('3');
console.log('4');
