const solution = S => {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') stack.push('(');
    else if (stack.length) stack.pop();
    else return 0;
  }
  return stack.length ? 0 : 1;
};

module.exports = solution;