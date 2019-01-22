const solution = A => {
  let dominator;
  let candidates = {};
  A.forEach(integer => {
    candidates[integer] = candidates[integer] ? candidates[integer] + 1 : 1;
    if (candidates[integer] > A.length / 2) dominator = integer;
  })
  return A.indexOf(dominator);
};

module.exports = solution;