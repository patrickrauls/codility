// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (S, P, Q) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = {A: 0, C: 0, G: 0, T: 0};
    let genome = [{...count}];
    for (let i = 0; i < S.length; i++) {
        count[S[i]]++
        genome.push({...count});
    }
    return P.map((integer, index) => {
        if (genome[Q[index] + 1].A - genome[integer].A) {
            return 1;
        } else if (genome[Q[index] + 1].C - genome[integer].C) {
            return 2;
        } else if (genome[Q[index] + 1].G - genome[integer].G) {
            return 3;
        } else {
            return 4;
        }
    });
}

module.exports = solution;