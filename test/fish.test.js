const expect = require('chai').expect;
const fish = require('../fish');

describe('Fish', () => {
  it('returns a number', () => {
    expect(fish([1, 1], [1, 1])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 2, given [4, 3, 2, 1, 5] and [0, 1, 0, 0, 0]', () => {
      expect(fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).to.equal(2);
    });
  });
});