const expect = require('chai').expect;
const tapeEquilibrium = require('../tapeEquilibrium');

describe('Tape Equilibrium', () => {
    it('returns a number', () => {
        expect(tapeEquilibrium([1, 2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 1 given [3, 1, 2, 4, 3]', () => {
            expect(tapeEquilibrium([3, 1, 2, 4, 3])).to.equal(1);
        });
    });
    describe('edge cases', () => {
        it('returns 2000 given [-1000, 1000]', () => {
            expect(tapeEquilibrium([-1000, 1000])).to.equal(2000);
        });
    });
});