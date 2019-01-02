const expect = require('chai').expect;
const frogJmp = require('../frogJmp');

describe('Frog Jump', () => {
    it('returns a number', () => {
        expect(frogJmp(1,2,3)).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 3 given 10, 85, and 30', () => {
            expect(frogJmp(10, 85, 30)).to.equal(3);
        });
    });
});