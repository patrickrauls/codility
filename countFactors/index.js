const solution = N => {
  let sqrt = Math.sqrt(N);
  let factors = sqrt % 1 ? 0 : 1;
  for (let i = 1; i < sqrt; i++) {
    if (N % i === 0) factors += 2;
  }
  return factors;
};

module.exports = solution;
