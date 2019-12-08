
// reduce method

/* reduce method helps to keep track the count of specific element in array */

const score = [10, 30, 58, 70, 34, 56, 90];

const result = score.reduce((acc, curr) => {
    if(curr > 50) acc += 1;
    return acc;
}, 0);

console.log(result);

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {palyer: 'crystal', score: 60}
];

const marioScore = scores.reduce((acc, curr) => {
    if(curr.player === 'mario') acc += curr.score;
    return acc;
}, 0);

console.log(marioScore);



