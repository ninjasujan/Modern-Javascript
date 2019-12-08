
const scores = [10, 30, 25, 50, 40, 5];


// filter method
/*  if each time filter method returns true that element will be kept in array  */
const filterSCores = scores.filter(score => {
    return score >= 30;
});

console.log(filterSCores);

const users = [
    {name: 'shuan', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);




