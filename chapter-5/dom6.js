
const article = document.querySelector('article');

console.log(article.children);

// convert HTML collection into array

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
    console.log(child.parentElement);
});


const h2 = document.querySelector('h3');

console.log(h2.nextElementSibling);
console.log(h2.previousElementSibling);