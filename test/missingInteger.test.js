const expect = require('chai').expect;
const missingInteger = require('../missingInteger');

describe('Missing Integer', () => {
    it('returns a number', () => {
        expect(missingInteger([2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 5 given [1, 3, 6, 4, 1, 2]', () => {
            expect(missingInteger([1, 3, 6, 4, 1, 2])).to.equal(5);
        });
        it('returns 4 given [1, 2, 3]', () => {
            expect(missingInteger([1, 2, 3])).to.equal(4);
        });
        it('returns 1 given [−1, −3]', () => {
            expect(missingInteger([-1, -3])).to.equal(1);
        });
    });
});