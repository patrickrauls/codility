const expect = require('chai').expect;
const permMissingElem = require('../permMissingElem');

describe('Frog Jump', () => {
    it('returns a number', () => {
        expect(permMissingElem([2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 4 given [2,3,1,5]', () => {
            expect(permMissingElem([2, 3, 1, 5])).to.equal(4);
        });
    });
});