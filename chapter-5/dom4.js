
/* set and get attribute */

const link = document.querySelector('a ');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'ninja.co.uk');

link.innerText = 'Ninja web sites';