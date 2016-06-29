import { dedent } from '../src';

describe('dedent()', () => {
  it('should return the input if it doesn\'t contain any newlines', () => {
    dedent('hello world').should.equal('hello world');
  });
});
