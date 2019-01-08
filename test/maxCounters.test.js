const expect = require('chai').expect;
const maxCounters = require('../maxCounters');

describe('Max Counters', () => {
    it('returns an array', () => {
        expect(maxCounters(1, [1, 2])).to.be.an('array');
    });
    describe('example cases', () => {
        it('returns [3, 2, 2, 4, 2] given 5 and [3, 4, 4, 6, 1, 4, 4]', () => {
            expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).to.deep.equal([3, 2, 2, 4, 2]);
        });
    });
});