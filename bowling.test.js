const bowling = require('./bowling');

describe('Calculate scores for only Open frame inputs', () => {
  it('All non zero inputs', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
  it('All zero inputs', () => {
    expect(bowling.score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
});

