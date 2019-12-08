 
const correctAns = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q3.value];
    // check answear
    userAns.forEach((ans, index) => {
        if(ans === correctAns[index]) score += 25;
    });
    
    // show result on page
    
    result.classList.remove('d-none');
    //scroll page top
    scrollTo(0,0);

    // animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) clearInterval(timer);
        else output += 1;
    }, 20);

});

// window object global scope
//  window.alert();
//  window.console.log();

/* setInterval function */
// let time = 0;  
// const timer = setInterval(() => {
//     console.log('ninja logged to console');
//     if(++time == 3) clearInterval(timer);
// }, 1000);


 
 