// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let decumulator = A.slice(1).reduce((acc, val) => val + acc, 0);
    let accumulator = A[0];
    let equilibrium = Math.abs(accumulator - decumulator);
    let difference;
    for (let i = 1; i < A.length - 1; i++) {
        accumulator += A[i];
        decumulator -= A[i];
        difference = Math.abs(accumulator - decumulator);
        equilibrium = equilibrium > difference ? difference : equilibrium;
    }
    return equilibrium;
};

module.exports = solution;