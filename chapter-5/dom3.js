
// adding and changing page content

// inner text
const p = document.querySelector('p.error');
p.innerText = 'error in textbox valaidation';


// innerHTML

const para = document.querySelector('div.error');
console.log(para.innerHTML);

para.innerHTML += '<h5>this is an error show message</h5>';

// dynamic adding element

const people = ['mario', 'lugie', 'yoshi'];
const div = document.querySelector('div.people');
people.forEach(person => {
    div.innerHTML += `<p>${person} viewed error message</p>`
});