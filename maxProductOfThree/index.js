const solution = A => {
    const array = A.sort((a, b) => a - b);
    const len = array.length;
    return Math.max(array[0] * array[1] * array[len - 1], array[len - 1] * array[len - 2] * array[len - 3]);
}

module.exports = solution;
