const expect = require('chai').expect;
const binaryGap = require('../binaryGap');

describe('Binary Gap', () => {
    it('returns a value', () => {
        expect(binaryGap(0)).to.equal(0);
    });
    describe('example cases', () => {
        it('returns 2 given 9', () => {
            expect(binaryGap(9)).to.equal(2);
        });
        it('returns 4 given 529', () => {
            expect(binaryGap(529)).to.equal(4);
        });
        it('returns 1 given 20', () => {
            expect(binaryGap(20)).to.equal(1);
        });
        it('returns 0 given 15', () => {
            expect(binaryGap(15)).to.equal(0);
        });
        it('returns 0 given 32', () => {
            expect(binaryGap(32)).to.equal(0);
        });
        it('returns 5 given 1041', () => {
            expect(binaryGap(1041)).to.equal(5);
        });
    })
})