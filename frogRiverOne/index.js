// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (X, A) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = new Array(X);  
    A.forEach((integer, index) => {
        array[integer - 1] = array[integer -1] ? array[integer - 1] : index;
    });
    array = array.slice(0, X);
    return array.includes(undefined) ? -1 : Math.max(...array);
}

module.exports = solution;