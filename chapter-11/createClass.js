
/* creating class */

class User {
    constructor(userName, email) {
        // setup property of object
        this.userName = userName,
        this.email = email,
        this.score = 0;
    }
    login() {
        console.log(`${this.userName} is logged in`);
        return this;
    }
    logout() {
        console.log(`${this.userName} just logged out.!`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.userName} has score of ${this.score}`);
        return this;
    }
}


// object creation
const userOne = new User('mario', 'mario@netninja.co.uk');
const userTwo = new User('luigi', 'luigi@netninja.co.uk');

// accessing memebrs and method
console.log(userOne, userTwo);
// userOne.login();
// userTwo.logout();

// method chaining
userTwo.login().incScore().incScore().logout();

/* new keyword 
    1 - it creates a new empty object
    2 - it binds the value of 'this' to new empty object
    3 - call the constructor function to 'build' new object 
*/
