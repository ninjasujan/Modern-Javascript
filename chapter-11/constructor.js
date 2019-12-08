
// constructor under hood

function User(userName, email) {
    this.userName = userName;
    this.email = email;
    this.log = function() {
        console.log(`${this.userName} has logged in`);
    };
}

const userOne = new User('mario', 'mario@netninja.co.uk');
console.log(userOne);





