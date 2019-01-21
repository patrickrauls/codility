const expect = require('chai').expect;
const equiLeader = require('../equiLeader');

describe('Equi Leader', () => {
  it('returns a number', () => {
    expect(equiLeader([0])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 2, given [4, 3, 4, 4, 4, 2]', () => {
      expect(equiLeader([4, 3, 4, 4, 4, 2])).to.equal(2);
    });
  });
});