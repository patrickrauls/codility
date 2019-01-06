// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = A => {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = [...new Set(A)];
    array = array.sort((a, b) => a - b);
    array = array.filter(integer => integer > 0);
    let xor = 0;
    let i = 0;
    while (xor === 0) {
        xor ^= array[i] ^ i + 1;
        i++;
    }
    return i;
}

module.exports = solution;