const expect = require('chai').expect;
const minAvgTwoSlice = require('../minAvgTwoSlice');

describe('Max Counters', () => {
    it('returns an array', () => {
        expect(minAvgTwoSlice([1, 2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 1 given [4, 2, 2, 5, 1, 5, 8]', () => {
            expect(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])).to.deep.equal(1);
        });
    });
    describe('edge cases', () => {
        it('returns 1 given [4, 2, 2, 5, 1, 5, 8, -100]', () => {
            expect(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8, -100])).to.deep.equal(6);
        });
    });
});