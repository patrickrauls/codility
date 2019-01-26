const expect = require('chai').expect;
const minPerimeterRectangle = require('../minPerimeterRectange');

describe('Min Perimeter Rectangle', () => {
  it('returns a number', () => {
    expect(minPerimeterRectangle(1)).to.be.a('number');
  });
  describe('example cases', () => {
    it('returns 22, given 30', () => {
      expect(minPerimeterRectangle(30)).to.equal(22);
    })
  })
})