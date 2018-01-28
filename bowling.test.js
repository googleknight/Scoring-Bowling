const bowling = require('./bowling');

let input;
describe('Calculate scores for only Open frame inputs', () => {
  it('All non zero inputs', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBe(90);
  });
  it('All zero inputs', () => {
    input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowling.score(input)).toBe(0);
  });
  it('Comnbination of zero and non zero inputs', () => {
    input = [3, 0, 3, 6, 3, 6, 0, 6, 3, 6, 3, 6, 3, 6, 3, 0, 3, 6, 3, 6];
    expect(bowling.score(input)).toBe(75);
  });
  it('Comnbination of zero and non zero inputs and zero inputs in last frame', () => {
    input = [3, 0, 3, 6, 3, 6, 0, 6, 3, 6, 3, 6, 3, 6, 3, 0, 3, 6, 3, 0];
    expect(bowling.score(input)).toBe(69);
  });
});

describe('Calculate scores for only Open frame inputs and spares', () => {
  it('Single spare and other open frames', () => {
    input = [3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBe(94);
  });
  it('Single spare in the end and other open frames', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 3];
    expect(bowling.score(input)).toBe(94);
  });
  it('Multiple spares and open frames', () => {
    input = [3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBe(98);
  });
  it('Spares and Open Frames alternated', () => {
    input = [4, 6, 3, 7, 4, 6, 4, 5, 3, 7, 2, 7, 4, 6, 3, 6, 4, 6, 3, 6];
    expect(bowling.score(input)).toBe(115);
  });
  it('All spares', () => {
    input = [4, 6, 3, 7, 4, 6, 4, 6, 3, 7, 3, 7, 4, 6, 4, 6, 4, 6, 4, 6, 5];
    expect(bowling.score(input)).toBe(138);
  });
});

describe('Calculate scores for open frames, strikes and spares', () => {
  it('Three strike in the end', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10, 10];
    expect(bowling.score(input)).toBe(111);
  });
  it('Single strike in the end', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6];
    expect(bowling.score(input)).toBe(100);
  });
  it('A strike and spare in the end', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 4, 6];
    expect(bowling.score(input)).toBe(101);
  });
  it('Two spares followed by strike in the end', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 3, 7, 10, 1, 6];
    expect(bowling.score(input)).toBe(113);
  });
  it('All strikes', () => {
    input = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(bowling.score(input)).toBe(300);
  });
  it('Strikes and spares alternating', () => {
    input = [10, 7, 3, 10, 6, 4, 10, 2, 8, 10, 9, 1, 10, 5, 5, 10];
    expect(bowling.score(input)).toBe(200);
  });
});
describe('Verification of invalid inputs', () => {
  it('Frames less than 10', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBeNull();
  });
  it('Frames greater than 10', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBeNull();
  });
  it('Invalid frames in the beginning', () => {
    input = [6, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBeNull();
  });
  it('Invalid frames in the end', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 5, 6];
    expect(bowling.score(input)).toBeNull();
  });
  it('Invalid frames in middle', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, 6, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBeNull();
  });
  it('Negative values', () => {
    input = [3, 6, 3, 6, 3, 6, 3, 6, -3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    expect(bowling.score(input)).toBeNull();
  });
});

