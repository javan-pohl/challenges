const persistence = require('./persistence')

test('should return 0 when it receives a single digit number', () => {
	expect(persistence(9)).toBe(0)
})