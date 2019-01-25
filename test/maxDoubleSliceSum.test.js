const expect = require('chai').expect;
const maxDoubleSliceSum = require('../maxDoubleSliceSum');

describe('Max Double Slice Sum', () => {
  it('returns a number', () => {
    expect(maxDoubleSliceSum([0, 1, 2])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 17, given [3, 2, 6, -1, 4, 5, -1, 2]', () => {
      expect(maxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])).to.equal(17);
    });
  });
})