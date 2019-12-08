
// fetch api

fetch('./todos/mario.json').then(response => {
    console.log('resolved: ', response);
    return response.json();
}).then(data => {
    console.log('resolved: ', data);
}).catch(err => {    /* catch handles network error not bad endpoints*/
    console.log('bad request check your endpoints', err);
});



