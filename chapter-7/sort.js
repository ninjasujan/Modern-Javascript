// sort method

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {palyer: 'crystal', score: 60}
];

/* sort is distructive method */

scores.sort((a, b) => {
    console.log('1');
    if(a.score > b.score) return -1;
    else if(b.score > a.score) return 1;
    else return 0;
});

// scores.sort((a, b) => b.score - a.score);
// console.log(scores);

