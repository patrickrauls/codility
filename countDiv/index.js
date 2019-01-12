const solution = (A, B, K) => {
    let lowest = A % K ? A - A % K + K : A;
    return Math.floor((B - lowest) / K) + 1;
}

module.exports = solution;