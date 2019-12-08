
// fns-library 

const now = new Date();
const someDate = new Date('march 1 2019 10:4:23');
// dateFns is the object delivered by the dateFns CDN
console.log(dateFns.isToday(now));

// formatting
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'do'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd Do YYYY'));

//dateFns - comparing dates
console.log(dateFns.distanceInWords(now, someDate, {addSuffix: true}));
