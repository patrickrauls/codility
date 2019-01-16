const expect = require('chai').expect;
const brackets = require('../brackets');

describe('Brackets', () => {
    it('returns a number', () => {
        expect(brackets('')).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 1 given {[()()]}', () => {
            expect(brackets('{[()()]}')).to.equal(1);
        });
        it('returns 0 given ([)()]', () => {
            expect(brackets('([)()]')).to.equal(0);
        });
    });
});