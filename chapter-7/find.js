
const scores = [10, 5, 40, 30, 10, 90, 70];

const firstHeighScore = scores.find(score => {
    return score > 70;
});

console.log(firstHeighScore);