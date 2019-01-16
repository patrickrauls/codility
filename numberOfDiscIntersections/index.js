const solution = A => {
    let answer = 0;
    let outstanding = 0;
    let starts = new Array(A.length);
    starts.fill(0);
    let ends = starts.slice();
    A.forEach((disc, index) => {
        starts[Math.max(index - disc, 0)]++;
        ends[Math.min(index + disc, A.length - 1)]++;
    });
    starts.forEach((start, index) => {
        if (start) {
            answer += outstanding * start + (start - 1) * start / 2;
        }
        outstanding += start - ends[index];
    });
    return answer > 10000000 ? -1 : answer;
};

module.exports = solution;