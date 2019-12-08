
 // handling JSON data
 // convert json to javascript object notation
 // handling promise 

 const getTodos = (path) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState == 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('bad request check your API end points');
            }
        });
        request.open('GET', path);
        request.send();

    });
};


// getting todos using promise and chaining
getTodos('./todos/luige.json').then(data => {
    console.log('promise resolved: ', data);
    return getTodos('./todos/mario.json')
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('./todos/ryu.json')
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('error in fetching data: ', err);
});


/*
const getSomeThing = () => {

    return new Promise((resolve, reject) => {
        // fetch data and send
        //resolve('some data resolved by promise');
        // in case error reject('some error);
         reject('rejected err through promise');
    });
}
*/

// getSomeThing().then((data) => {
//     console.log(data);             /* fires when promise resolved */
// }, (err) => {
//     console.log(err);              /* fires when promise rejected */
// });

/*
getSomeThing().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/
