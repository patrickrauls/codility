// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (N, A) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let floor = 0;
    let ceiling = 0;
    let counters = new Array(N).fill(0);
    A.forEach(el => {
        if (el === N + 1) {
            floor = ceiling;
        } else {
            counters[el - 1] = Math.max(floor, counters[el - 1]) + 1;
            ceiling = Math.max(counters[el - 1], ceiling);
        }
    });
    return counters.map(count => Math.max(floor, count));
}

module.exports = solution;
