
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', e => {
    console.log('OI! my content is copy right');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    console.log('x: ',e.offsetX);
    console.log('y: ',e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});


document.addEventListener('wheel', e => {
    
});

