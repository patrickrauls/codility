const expect = require('chai').expect;
const countDiv = require('../countDiv');

describe('Count Div', () => {
    it('returns a number', () => {
        expect(countDiv(1, 1, 1)).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 3, given 6, 11, and 2', () => {
            expect(countDiv(6, 11, 2)).to.equal(3);
        });
    });
    describe('edge cases', () => {
        it('returns 12 given 6, 17, and 1', () => {
            expect(countDiv(6, 17, 1)).to.equal(12);
        });
    });
});