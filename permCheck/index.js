// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = A => {
    // write your code in JavaScript (Node.js 8.9.4)
    let xor;
    A.forEach((integer, index) => xor ^= integer ^ index + 1);
    return xor === 0 ? 1 : 0;
}

module.exports = solution;