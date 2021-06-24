const lcm = require('./lcm')

test('should return the least common multiple of 2520 for array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
	expect(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2520)
})