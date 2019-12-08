
const scores = [50, 60, 30, 40, 45, 89];

const updatedScore = scores
    .filter(score =>score >= 50)
    .map(score => score + 10);


console.log(updatedScore);

