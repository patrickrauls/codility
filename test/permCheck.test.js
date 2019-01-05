const expect = require('chai').expect;
const permCheck = require('../permCheck');

describe('Permutation Check', () => {
    it('returns a number', () => {
        expect(permCheck([2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 1 given [4, 1, 3, 2]', () => {
            expect(permCheck([4, 1, 3, 2])).to.equal(1);
        });
        it('returns 0 given [4, 1, 3]', () => {
            expect(permCheck([4, 1, 3])).to.equal(0);
        });
    });
});