const expect = require('chai').expect;
const oddOccurrencesInArray = require('../oddOccurrencesInArray');

describe('Odd Occurrences In Array', () => {
    it('returns a number', () => {
        expect(oddOccurrencesInArray([0])).to.be.a('number');
    });
    it('returns 1 given [1]', () => {
        expect(oddOccurrencesInArray([1])).to.equal(1);
    });
    describe('example cases', () => {
        it('returns 7 given [9, 3, 9, 3, 9, 7, 9]', () => {
            expect(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).to.equal(7);
        });
    });
});