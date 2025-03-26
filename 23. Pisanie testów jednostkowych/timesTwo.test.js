const timesTwo = require('./timesTwo');

test('returns double the number', () => {
    expect(timesTwo(10)).toBe(20);
});