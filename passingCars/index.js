// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = A => {
    // write your code in JavaScript (Node.js 8.9.4)
    let passingCars = 0;
    let array = A.slice(A.findIndex(el => el === 0));
    let sum = array.reduce((prev, curr) => prev + curr, 0);
    array.forEach(car => car ? sum-- : passingCars += sum);
    return passingCars > 1000000000 ? -1 : passingCars;
}

module.exports = solution;