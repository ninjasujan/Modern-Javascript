
class User {
    constructor(userName, email) {
        // setup property of object
        this.userName = userName,
        this.email = email,
        this.score = 0
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

class Admin extends User {
    constructor(userName, email, title) {
        super(userName, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(person => person.userName !== user.userName);
    }
}

const userOne = new User('ninja', 'ninja@gmail.com');
const userTwo = new User('mario', 'mario@netninja.co.uk');
const AdminOne = new Admin('Ryu', 'ryu@netnnja.co.uk', 'black-belt-ninja');

// const newAdmin = new Admin('admin', 'netninja.co.uk');
// console.log(newAdmin);

let users = [userOne, userTwo, AdminOne];
//console.log(users);

//AdminOne.deleteUser(userTwo);

//console.log('after deleting user', users);

console.log(AdminOne);