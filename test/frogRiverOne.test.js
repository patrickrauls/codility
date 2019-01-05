const expect = require('chai').expect;
const frogRiverOne = require('../frogRiverOne');

describe('Frog River One', () => {
    it('returns a number', () => {
        expect(frogRiverOne(1, [1, 2])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 6 given 5, and [1, 3, 1, 4, 2, 3, 5, 4]', () => {
            expect(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).to.equal(6);
        });
    });
    describe('edge cases', () => {
        it('returns -1 if making it across is not possible', () => {
            expect(frogRiverOne(5, [1])).to.equal(-1);
        })
    })
});