const expect = require('chai').expect;
const maxSliceSum = require('../maxSliceSum');

describe('Max Slice Sum', () => {
  it('returns a number', () => {
    expect(maxSliceSum([1])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 5, given [3, 2, -6, 4, 0]', () => {
      expect(maxSliceSum([3, 2, -6, 4, 0])).to.equal(5);
    });
  });
});