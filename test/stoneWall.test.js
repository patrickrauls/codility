const expect = require('chai').expect;
const stoneWall = require('../stoneWall');

describe('Manhattan Skyline', () => {
  it('returns a number', () => {
    expect(stoneWall([1])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 7, given [8, 8, 5, 7, 9, 8, 7, 4, 8]', () => {
      expect(stoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])).to.equal(7);
    })
  })
});