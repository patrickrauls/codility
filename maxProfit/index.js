const solution = A => {
  let maxProfit = 0;
  let buy = A[0];
  for (let i = 1; i < A.length; i++) {
    maxProfit = Math.max(maxProfit, A[i] - buy);
    buy = Math.min(A[i], buy);
  }
  return maxProfit;
};

module.exports = solution;
