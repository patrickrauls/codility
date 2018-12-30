// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const binaryGap = (N) => {
    // write your code in JavaScript (Node.js 8.9.4)
    const bin = N.toString(2);
    let hits = [];
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            hits.push(i);
        }
    };
    let binaryGap = 0;
    let gap;
    for (let i = 0; i < hits.length - 1; i++) {
        gap = hits[i + 1] - hits[i] - 1;
        binaryGap = binaryGap < gap ? gap : binaryGap;
    };
    return binaryGap;
};

module.exports = binaryGap;