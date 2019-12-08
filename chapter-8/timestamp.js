
// timestamp 

// create date for specific time using constructor
const before = new Date('march 1 2019 4:30:45');
const now = new Date();

const diff = now.getTime() - before.getTime();

console.log(diff);

const min = Math.round((diff / 1000/ 60));
const hours = Math.round((min / 60));
const days = Math.round((hours / 24));

console.log('difference in minute, hours and days');
console.log(min, hours, days);

console.log(`blog was written ${days} ago..`);

// ceating date using time stamp
const someDate = new Date(15000);
console.log('some random date created..', someDate);