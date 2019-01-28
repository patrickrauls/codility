// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = A => {
    A.sort((a, b) => a - b);
    return A.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);
}

module.exports = solution;
