
let likes = 10;
let person = 'Ryu';
let socialMedia = 'Instagram';

// Normal conactination way
let result = `The person ${person} got ${likes} likes in ${socialMedia}`;

console.log(result);

// use case of template string

let html = `
    <h3>${person}</h3>
    <p>${likes}</p>
    <p>${socialMedia}</p>
`;

console.log(html)
