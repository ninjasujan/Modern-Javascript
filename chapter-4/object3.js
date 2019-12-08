
// array of object

let user = {
    name: 'crystal',
    age: 21,
    email: 'netninja.co.uk',
    location: 'new york',
    blogs: [
        { title: 'square garden', likes: 59},
        { title: 'things of life', likes: 45}
    ],
    login: function() {
        console.log('sucessfull login by the user..!');
    },
    logout: function() {
        console.log('user loged out..');
    },
    logData: function() {
            this.blogs.forEach(blog => {
                console.log(blog.title, blog.likes);
            });
    }
};


user.logData();
