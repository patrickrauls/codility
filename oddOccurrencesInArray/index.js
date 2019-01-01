// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A) => {
    // write your code in JavaScript (Node.js 8.9.4)
    return A.reduce((acc, integer) => acc ^= integer, 0);
}

module.exports = solution;
