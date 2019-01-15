const expect = require('chai').expect;
const triangle = require('../triangle');

describe('Triangle', () => {
    it('returns a number', () => {
        expect(triangle([])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 1, given [10, 2, 5, 1, 8, 20]', () => {
            expect(triangle([10, 2, 5, 1, 8, 20])).to.equal(1);
        });
        it('returns 0, given [10, 50, 5, 1]', () => {
            expect(triangle([10, 50, 5, 1])).to.equal(0);
        });
    });
    describe('edge cases', () => {
        it('returns 0, given [-1, 0, 0]', () => {
            expect(triangle([-1, 0, 0])).to.equal(0);
        });
    });
})