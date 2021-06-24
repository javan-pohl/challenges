const hats = require('./hats')

let testArray = [5,[1,1,1,1,1]]  
let testResult = 1
test(`expects that hats(${testArray}) will return 1`, () => {
	expect(hats(testArray)).toBe(testResult)
})

testArray = [3, [23, 11, 19, 9, 36]]
testResult = 18
test(`expects that hats(${testArray}) will return 1`, () => {
	expect(hats(testArray)).toBe(testResult)
})