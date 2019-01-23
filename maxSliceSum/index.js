const solution = A => {
  let max = A[0];
  let slice = A[0];
  for (let i = 1; i < A.length; i++) {
    slice = Math.max(slice + A[i], A[i]);
    max = Math.max(max, slice);
  }
  return max;
}

module.exports = solution;
