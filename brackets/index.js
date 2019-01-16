const solution = S => {
    const openers = ['(', '{', '['];
    const closers = [')', '}', ']'];
    let expects = [];
    let found;
    for (let i = 0; i < S.length; i++) {
        found = openers.findIndex(char => char === S[i]);
        if (found >= 0) {
            expects.push(closers[found])
        } else if (S[i] === expects[expects.length - 1]) {
            expects.pop();
        } else {
            return 0;
        }
    }
    return expects.length ? 0 : 1;
};

module.exports = solution;