const expect = require('chai').expect;
const distinct = require('../distinct');

describe('Distinct', () => {
    it('returns a number', () => {
        expect(distinct([])).to.be.a('number');
    });
    describe('example cases', () => {
        it('returns 3, given [2, 1, 1, 2, 3, 1]', () =>{
            expect(distinct([2, 1, 1, 2, 3, 1])).to.equal(3);
        });
    });
})