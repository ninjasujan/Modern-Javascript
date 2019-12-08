
// get an element by id

const err = document.getElementById('err-title');
console.log(err);

// get elements by class name

const errclass = document.getElementsByClassName('error');
console.log(errclass);
/* getElementsByClassName returns HTML collection forEach method will not work in this method */ 

// get elements by tag name 

const p = document.getElementsByTagName('p');
console.log(p);
/* returns html collections */

