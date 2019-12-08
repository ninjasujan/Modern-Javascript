
const title = document.querySelector('h2');
console.log(title.style.color);

title.style.margin = '50px';

title.style.fontSize = '70px';


const content = document.querySelector('p');
/* class list attribute helps to get the different class attached to it */
console.log(content.classList);

content.classList.add('sucess');

content.classList.remove('sucess');

const paras = document.querySelectorAll('div.err p');
console.log(paras);
paras.forEach(p => {
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    } if(p.textContent.includes('success')) {
        p.classList.add('success');
    }
});


