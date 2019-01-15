const solution = A => {
    const array = A.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] + array[i + 1] > array[i + 2]) return 1;
    }
    return 0;
};

module.exports = solution;