const solution = (A, B) => {
  let downstream = [];
  let upstream = [];
  let fight = true;
  A.forEach((size, place) => {
    fight = true;
    if (B[place]) downstream.push(size);
    else {
      upstream.push(size);
      while (fight && downstream.length) {
        if (size > downstream[downstream.length - 1]) downstream.pop();
        else {
          fight = false;
          upstream.pop();
        }
      }
    }
  });
  return upstream.length + downstream.length;
};

module.exports = solution;