const solution = A => {
  const peaks = A.reduce((acc, val, index, array) => {
    return val > array[index - 1] && val > array[index + 1] ?
      [...acc, index + 1] :
      acc;
  }, []);
  let factors = [];
  let acc;
  for (let i = 1; i <= peaks.length; i++) {
    if (A.length % i === 0 && A.length / i > 2) {
      factors.unshift(i);
    }
  }
  for (let i = 0; i < factors.length; i++) {
    acc = 1;
    for (let j = 0; j < peaks.length; j++) {
      if (Math.ceil(peaks[j] / (A.length / factors[i])) === acc) {
        acc++
      }
    }
    if (acc > factors[i]) return factors[i]
  }
  return 0;
};

module.exports = solution;