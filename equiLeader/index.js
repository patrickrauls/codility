const solution = A => {
  let leader;
  let leaders = [];
  let remaining;
  let seen = 0;
  const candidates = A.reduce((acc, val) => {
    if (!acc[val]) {
      return { ...acc, [val]: 1 };
    } else if (acc[val] === Math.floor(A.length / 2)) {
      leader = val;
    }
    return { ...acc, [val]: acc[val] + 1 };
  }, {});
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