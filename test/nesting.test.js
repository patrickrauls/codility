const expect = require('chai').expect;
const nesting = require('../nesting');

describe('Nesting', () => {
  it('returns a number', () => {
    expect(nesting('')).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 1, given "(()(())())"', () => {
      expect(nesting('(()(())())')).to.equal(1);
    });
    it('returns 0, given "())', () => {
      expect(nesting('())')).to.equal(0);
    })
  });
});