const bowling = require('./bowling');

describe('Calculate scores for only Open frame inputs', () => {
  it('All non zero inputs', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
  it('All zero inputs', () => {
    expect(bowling.score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
  it('Comnbination of zero and non zero inputs', () => {
    expect(bowling.score([3, 0, 3, 6, 3, 6, 0, 6, 3, 6, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6])).toBe(75);
  });
  it('Comnbination of zero and non zero inputs and zero inputs in last frame', () => {
    expect(bowling.score([3, 0, 3, 6, 3, 6, 0, 6, 3, 6, 3, 6, 3, 6, 3, 0, 3, 6, 3, 0])).toBe(69);
  });
});

describe('Calculate scores for only Open frame inputs and spares', () => {
  it('Single spare and other open frames', () => {
    expect(bowling.score([3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
  });
  it('Single spare in the end and other open frames', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 3])).toBe(94);
  });
  it('Multiple spares and open frames', () => {
    expect(bowling.score([3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(98);
  });
});

