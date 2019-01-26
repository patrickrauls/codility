const expect = require('chai').expect;
const countFactors = require('../countFactors');

describe('Count Factors', () => {
  it('returns a number', () => {
    expect(countFactors(1)).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 8, given 24', () => {
      expect(countFactors(24)).to.equal(8);
    });
  });
});