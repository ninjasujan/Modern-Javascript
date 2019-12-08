

// creating object prototypes

function User(userName, email) {
    this.userName = userName;
    this.email = email;
}


// add method in prototype
User.prototype.login = function() {
    console.log(`${this.userName} has logged in`);
};

User.prototype.logout = function() {
    console.log(`${this.userName} logged out`);
};

function Admin(userName, email, belt) {
    User.call(this, userName, email);
    this.belt = belt;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function() {
    console.log('delete user');
};

const userOne = new User('mario', 'netninja@ninja.co.uk');
const adminOne = new Admin('mario', 'mario@netninja.co.uk', 'black-belt-ninja');

console.log(userOne);
console.log(adminOne);

