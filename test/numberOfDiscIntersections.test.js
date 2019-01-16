const expect = require('chai').expect;
const numberOfDiscIntersections = require('../numberOfDiscIntersections');

describe('Number Of Disc Intersections', () => {
    it('returns a number', () => {
        expect(numberOfDiscIntersections([])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 11 given [1, 5, 2, 1, 4, 0]', () => {
            expect(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])).to.equal(11);
        });
    describe('edge cases', () => {
        it('returns 4 given [1, 3, 0, 1]', () => {
            expect(numberOfDiscIntersections([1, 3, 0, 1])).to.equal(4);
        });
        it('returns 2 given [1, 0, 1]', () => {
            expect(numberOfDiscIntersections([1, 0, 1])).to.equal(2);
        });
        it('returns 13 given [6, 1, 0, 2, 0, 5]', () => {
            expect(numberOfDiscIntersections([6, 1, 0, 2, 0, 5])).to.equal(13);
        });
        it('returns 0, given [0, 0]', () => {
            expect(numberOfDiscIntersections([0, 0])).to.equal(0);
        });
    });
    });
});