const expect = require('chai').expect;
const cyclicRotation = require('../cyclicRotation');

describe('Cyclic Rotation', () => {
    it('returns an array', () => {
        expect(cyclicRotation([])).to.be.a('array');
    });
    describe('example cases', () => {
        it('returns [6, 3, 8, 9, 7] given [3, 8, 9, 7, 6], and 1', () => {
            expect(cyclicRotation([3, 8, 9, 7, 6], 1)).to.deep.equal([6, 3, 8, 9, 7]);
        });
        it('returns [9, 7, 6, 3, 8] given [3, 8, 9, 7, 6], and 3', () => {
            expect(cyclicRotation([3, 8, 9, 7, 6], 3)).to.deep.equal([9, 7, 6, 3, 8]);
        });
        it('returns [0, 0, 0] given [0, 0, 0], and 1', () => {
            expect(cyclicRotation([0, 0, 0], 1)).to.deep.equal([0, 0, 0]);
        });
        it('returns [1, 2, 3, 4] given [1, 2, 3, 4], and 4', () => {
            expect(cyclicRotation([1, 2, 3, 4], 4)).to.deep.equal([1, 2, 3, 4]);
        });
    });
});