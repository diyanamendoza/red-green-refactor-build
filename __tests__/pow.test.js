const pow = require('../pow.js');

describe('pow', () => {
    it('takes a base and exponent and raises the base to the exponent power', () => {
        expect(pow(7, 3)).toEqual(343);
    })
});
