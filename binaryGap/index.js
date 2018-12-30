// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const binaryGap = (N) => {
    // write your code in JavaScript (Node.js 8.9.4)
    const bin = N.toString(2);
    let lastHit = 0;
    let gap = 0;
    let binaryGap = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            gap = i - lastHit - 1;
            lastHit = i;
        }
        if (gap > binaryGap) binaryGap = gap;
    };
    return binaryGap;
};

module.exports = binaryGap;

