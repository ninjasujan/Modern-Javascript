

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'right hand punch', author: 'ryu'},
    {text: 'left hook', author: 'mario'}
];

console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));


