
const para = document.querySelector('div p');
console.log(para);

const div = document.querySelector('div.error p');
console.log(div);

// multiple selectors

const p = document.querySelectorAll('p');
console.log(p);

/* querySelectorAll return reference of the all matching element but it's not an array */
console.log(p[0]);

p.forEach(ele => {
    console.log(ele);
});