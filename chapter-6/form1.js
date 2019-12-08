
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-z]{6, 12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const usernamevalue = form.username.value;
    
    console.log(usernamevalue);

    if(usernamePattern.test(usernamevalue)) {
        feedback.textContent = 'that usename is valid.!';

    } else {
        feedback.textContent = 'usename doesn\'t match the criteria';
    }
});

// testing regex
// const username = 'shaunpp';
const pattern = /^[a-z]{6,}$/;

/*
username.addEventListener('keypress', e => {
    if(!pattern.test(username.value)) {
        username.style.border = 'solid red';
        console.log('no match');
    } else {
        username.style.border = 'none';
        console.log('match found');
    }
});

*/


// live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(pattern.test(e.target.value)) {
        console.log('passed');
        username.setAttribute('class', 'success');
    } else {
        console.log('failed');
        username.setAttribute('class', 'error');
    }
});
