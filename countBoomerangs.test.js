const countBoomerangs = require('./countBoomerangs')

test('should count the number of boomerangs in an array', () => {
	expect(countBoomerangs([1,2,1])).toBe(1)
})

test('should throw an array if function is sent a string', () => {
	expect(() => {
		countBoomerangs('string')
	}).toThrow('Input value must be an array with at least 3 elements')
})

test('should throw an array if function is sent an integer', () => {
	expect(() => {
		countBoomerangs(3)
	}).toThrow('Input value must be an array with at least 3 elements')
})