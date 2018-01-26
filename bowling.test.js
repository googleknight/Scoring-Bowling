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
  it('All spares', () => {
    expect(bowling.score([4, 6, 3, 7, 4, 6, 4, 6, 3, 7, 3, 7, 4, 6, 4, 6, 4, 6, 4, 6, 5])).toBe(138);
  });
});

describe('Calculate scores for open frames, strikes and spares', () => {
  it('Three strike in the end', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10, 10])).toBe(111);
  });
  it('Single strike in the end', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6])).toBe(100);
  });
  it('A strike and spare in the end', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 4, 6])).toBe(101);
  });
});
