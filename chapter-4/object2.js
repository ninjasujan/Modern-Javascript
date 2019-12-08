
let user = {
    name: 'crystal',
    age: 21,
    email: 'netninja.co.uk',
    location: 'new york',
    blogs: ['readers of m.g.s', 'square garden', 'things of life.!'],
    login: function() {
        console.log('sucessfull login by the user..!');
    },
    logout: function() {
        console.log('user loged out..');
    },
    logData: function() {
            this.blogs.forEach(blog => {
                console.log(blog);
            });
    }
};
// usage of this keyword inside the arrow function will results different behaviour
// properties of the object should be acessed with this keyword in the method which belongs to object
user.logData();

user.login();
user.logout();

