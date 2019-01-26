const solution = N => {
  let i = Math.floor(Math.sqrt(N));
  while (i) {
    if (N % i) i--;
    else return (i + N / i) * 2;
  }
}

module.exports = solution;