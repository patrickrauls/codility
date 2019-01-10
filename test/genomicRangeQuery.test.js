const expect = require('chai').expect;
const genomicRangeQuery = require('../genomicRangeQuery');

describe('Genomic Range Query', () => {
    it('returns an array', () => {
        expect(genomicRangeQuery('A', [0], [0])).to.be.an('array');
    });
    describe('example cases', () => {
        it('returns [2, 4, 1] given CAGCCTA, [2, 5, 0], and [4, 5, 6]', () => {
            expect(genomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6])).to.deep.equal([2, 4, 1]);
        });
    });
    describe('edge cases', () => {
        it('returns [1] given A, [0], and [0]', () => {
            expect(genomicRangeQuery('A', [0], [0])).to.deep.equal([1]);
        });
    });
});