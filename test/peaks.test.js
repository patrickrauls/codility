const expect = require('chai').expect;
const peaks = require('../peaks');

describe('Peaks', () => {
  it('returns a number', () => {
    expect(peaks([0])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 3, given [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]', () => {
      expect(peaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).to.equal(3);
    });
  });
});