const solution = A => {
    let answer = 0;
    let avg = (A[0] + A[1]) / 2;
    let tmpAvg;
    for (let i = 0; i < A.length - 1; i++) {
        sumTwo = A[i] + A[i + 1]
        tmpAvg = i < A.length - 2 ?
            Math.min((A[i] + A[i + 1] + A[i + 2]) / 3, (A[i] + A[i + 1]) / 2) :
            (A[i] + A[i + 1]) / 2;
        if (tmpAvg < avg) {
            avg = tmpAvg;
            answer = i;
        }
    }
    return answer;
}

module.exports = solution;