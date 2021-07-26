const hats = require('./hats')

let testArray = [5,[1,1,1,1,1]]  
let testResult = 1
test(`expects that hats(${testArray}) will return ${testResult}`, () => {
	expect(hats(testArray)).toBe(testResult)
})

testArray = [3, [23, 11, 19, 9, 36]]
testResult = 18
test(`expects that hats(${testArray}) will return ${testResult}`, () => {
	expect(hats(testArray)).toBe(testResult)
})

testArray = [650, [23, 11, 19, 9, 36]]
testResult = 2001
test(`expects that hats(${testArray}) will return ${testResult}`, () => {
	expect(hats(testArray)).toBe(testResult)
})

testArray = [9, [23, 11, 19, 9, 36]]
testResult = 'None'
test(`expects that hats(${testArray}) will return ${testResult}`, () => {
	expect(hats(testArray)).toBe(testResult)
})

test('should throw an array if function is sent a string', () => {
	expect(() => {
		hats('string')
	}).toThrow('Input argument must be an array where the first element is an integer and the second element is an array with five integers')
})

test('should throw an array if function is sent a an array with two strings', () => {
	expect(() => {
		hats(['string','string'])
	}).toThrow('Input argument must be an array where the first element is an integer and the second element is an array with five integers')
})

test('should throw an array if function is sent an array of an integer and an array of only four integers', () => {
	expect(() => {
		hats([1,[1,1,1,1]])
	}).toThrow('Input argument must be an array where the first element is an integer and the second element is an array with five integers')
})

test('should throw an array if function is sent an array of an integer and an array of  four integers and a string', () => {
	expect(() => {
		hats([1,[1,1,1,1, 'one']])
	}).toThrow('Input argument must be an array where the first element is an integer and the second element is an array with five integers')
})