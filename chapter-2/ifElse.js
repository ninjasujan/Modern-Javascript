

let password = 'sujan@;';

if(password.length >= 12 && password.includes('@')) {
    console.log("The password is mighty strong..!");
} else if(password.length >= 8 || password.includes('@')) {
    console.log("Password is long enough");
}  else {
    console.log("Password is week...!");
}


// NOT opertaor in javascript - !
// Toggle the boolean result 

let isLoggedIn = false;

if(!isLoggedIn) {
    console.log('Login to your account first to acess servicess');
}