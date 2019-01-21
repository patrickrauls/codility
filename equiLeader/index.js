const solution = A => {
  let leader, remaining;
  let leaders = [];
  let candidates = {};
  let seen = 0;
  for (let i = 0; i < A.length; i++) {
    if (!candidates[A[i]]) candidates[A[i]] = 1;
    else candidates[A[i]]++;
    if (candidates[A[i]] > A.length / 2) leader = A[i];
  };
  remaining = candidates[leader];
  A.forEach((integer, index) => {
    if (integer === leader) {
      seen++; remaining--;
    }
    if (seen > (index + 1) / 2 && remaining > (A.length - index - 1) / 2) {
      leaders.push(index);
    }
  })
  return leaders.length;
};

module.exports = solution;