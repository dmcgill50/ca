import { expect } from 'chai';
import { Example } from '../src/ca-vowel-string'

describe('Example', () => {
  it('can return the proper string', () => {
    const s = new Example('The stray cat was cool.', 'T1e s2y c1t w1s c1l.');
    expect(s.orig).to.equal('The stray cat was cool.');
    expect(s.expected).to.equal('T1e s2y c1t w1s c1l.');
  });
});