
const calArea = (radius) => {
    let result = 3.142 * radius**2;
    return result;
};

const calArea2 = radius => {
    return 3.142 * radius**2;
}

const showTime = time => "Time is " + time

console.log(showTime('3:00 am'))
console.log("Area is ", calArea(20));

const calculateTax = (store, taxRate) => {
    let tax = 0;
    for(let i = 0; i < store.length; i += 1) {
        tax += store[i] * taxRate;
    }
    return tax;
};

console.log("Tax is:", calculateTax([45, 67, 34, 78], 0.1));

const showArray = (array) => {
	for(let i = 0; i < array.length; i += 1)
		console.log(array[i]);	
	array.forEach((ele, index) => {
		console.log('For each loop of ', index);
	});
}

showArray([10, 20, 30, 40]);



