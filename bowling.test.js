const bowling = require('./bowling');

describe('Calculate scores for only Open frame inputs', () => {
  it('All non zero inputs', () => {
    expect(bowling.score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
});

