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