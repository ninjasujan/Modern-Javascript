// string method

// last index of the character
let email = 'mario@netninja.co.uk';
console.log(email.lastIndexOf('.'));

// slicing string
let result = email.slice(2,5);
console.log("email:", result);

// substring
let sub = email.substr(5, 10); // index and No.of character we want 
console.log(sub);

// replace 
let replacedStr = email.replace('n', 'z');
console.log(replacedStr);
