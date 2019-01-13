const expect = require('chai').expect
const maxProductOfThree = require('../maxProductOfThree');

describe('Max Product of Three', () => {
    it('returns a number', () => {
        expect(maxProductOfThree([0, 0, 0])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 60, given [-3, 1, 2, -2, 5, 6]', () => {
            expect(maxProductOfThree([-3, 1, 2, -2, 5, 6])).to.equal(60);
        });
        it('returns 60, given [-3, 1, 2, -2, 5, 6]', () => {
            expect(maxProductOfThree([-5, 5, -5, 4])).to.equal(125);
        });
    });
})