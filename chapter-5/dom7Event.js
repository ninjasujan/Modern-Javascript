const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    // ul.innerHTML += `<li>wash a car</li>`
    const li = document.createElement('li');
    li.textContent = 'something new to do..';
    // ul.appendChild(li);
    ul.prepend(li);
});

const list = document.querySelectorAll('li');

/* problem in event to fire for new element */
// list.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         console.log(li, e.target);
//         //e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//         console.log('event in LI');
//         e.stopPropagation();
//     });
// });

/* event propogation on the event objects helps to stop the event bubbling */

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI')
        e.target.remove();
});
