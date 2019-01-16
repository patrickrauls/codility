const solution = A => {
    let answer;
    let starts = new Array(A.length);
    starts.fill(0);
    A.forEach((disc, index) => {
        starts[Math.max(index - disc, 0)]++;
    });
    answer = starts.length * (starts.length + 1) / 2 - starts.length - starts[0];
    return answer > 10000000 ? -1 : answer;
};

module.exports = solution;