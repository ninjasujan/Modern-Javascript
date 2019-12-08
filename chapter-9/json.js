 
 // handling JSON data
 // convert json to javascript object notation

const getTodos = (path, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState == 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    
    request.open('GET', path);
    request.send();
};

getTodos('todos/luige.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/ryu.json', (err, data) => {
            console.log(data);
        });
    });
});

