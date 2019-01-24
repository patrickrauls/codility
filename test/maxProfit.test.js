const expect = require('chai').expect;
const maxProfit = require('../maxProfit');

describe('Max Profit', () => {
  it('returns a number', () => {
    expect(maxProfit([])).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 356, given [23171, 21011, 21123, 21366, 21013, 21367]', () => {
      expect(maxProfit([23171, 21011, 21123, 21366, 21013, 21367])).to.equal(356);
    });
  });
})