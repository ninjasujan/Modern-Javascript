
const users = [
    {name: 'mario', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'ryu', premium: false},
    {name: 'peach', premium: false}
];

export const getPremiumUsers = (users) => {
    return users.filter(user => user.premium);
};


export default users;


    
