const expect = require('chai').expect;
const dominator = require('../dominator');

describe('Dominator', () => {
  it('returns a number', () => {
    expect(dominator([])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 0, 2, 4, 6 or 7, given [3, 4, 3, 2, 3, -1, 3, 3]', () => {
      expect(dominator([3, 4, 3, 2, 3, -1, 3, 3])).to.be.oneOf([0, 2, 4, 6, 7]);
    });
  });
});