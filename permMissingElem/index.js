// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let xor;
    for (let i = 0; i < A.length; i++) {
        xor ^= i + 1 ^ A[i];
    }
    return xor ^ A.length + 1;
}

module.exports = solution;