const solution = H => {
  let stones = 0;
  let queue = [];
  H.forEach(stone => {
    if (stone > queue[queue.length - 1] || !queue.length) stones++;
    else if (stone < queue[queue.length - 1]) {
      while (queue.length && stone < queue[queue.length - 1])
        queue.pop();
      if (!queue.length || queue[queue.length - 1] < stone) stones++;
    }
    queue.push(stone);
  });
  return stones;
};

module.exports = solution;