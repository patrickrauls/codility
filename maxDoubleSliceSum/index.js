const solution = A => {
  let prefixes = new Array(A.length).fill(0);
  let suffixes = prefixes.slice();
  let max = 0;

  for (let i = 1; i < A.length - 1; i++) {
    prefixes[i] = Math.max(prefixes[i - 1] + A[i], prefixes[i]);
  }
  for (let i = A.length - 2; i > 0; i--) {
    suffixes[i] = Math.max(suffixes[i + 1] + A[i], suffixes[i]);
  }
  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(max, prefixes[i - 1] + suffixes[i + 1]);
  }
  return max;
}

module.exports = solution;
