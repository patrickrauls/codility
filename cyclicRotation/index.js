// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A, K) => {
    // write your code in JavaScript (Node.js 8.9.4)
    const rotations = K % A.length;
    return A.map((integer, index, array) => array[(index - rotations + array.length) % array.length]);
}

module.exports = solution;