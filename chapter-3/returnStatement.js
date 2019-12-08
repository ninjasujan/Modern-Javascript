

const areaCalculation = function(radius) {
    return 3.142 * radius**2;
};

let radius = 7;
let area = areaCalculation(radius);

const showArea = function(area) {
    console.log(`area of circle is ${area}`);
};

showArea(area);
