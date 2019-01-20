const solution = H => {
  let stones = 0;
  let queue = [];
  let last = 0;
  H.forEach(stone => {
    if (stone > last) {
      stones++;
      queue.push(stone);
    } else if (stone < last) {
      queue = queue.filter(height => height <= stone);
      if (!queue.length) stones++;
      else if (!queue.includes(stone)) stones++;
      queue.push(stone);
    }
    last = stone;
  });
  return stones;
};

module.exports = solution;