const expect = require('chai').expect;
const passingCars = require('../passingCars');

describe('Missing Integer', () => {
    it('returns a number', () => {
        expect(passingCars([0])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 5 given [0, 1, 0, 1, 1]', () => {
            expect(passingCars([0, 1, 0, 1, 1])).to.equal(5);
        });
    });
});