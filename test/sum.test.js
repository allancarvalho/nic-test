const assert = require('assert');
const sum = require('../sum');
describe('Sum', () => {
    it('Deve somar', () => {
      const soma = sum(2, 5);
      assert.equal(soma, 7);
    });
});