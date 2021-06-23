function additivePersistence (num, count = 0) {
	// the additive persistence of an integer is the number of times you have to replace n with the sum of its digits until n becomes a single digit
	if (!Number.isInteger(num)) {
		throw new Error('Input value must be an integer')
	}
	if (num.toString().length === 1) {
		return count 
	}
	count += 1
	let val = num.toString().split('').reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0)
	return additivePersistence(val, count)
}
function multiplicativePersistence (num, count = 0) {
	// the multiplicative persistence of an integer is the number of times you have to replace n with the product of its digits until n becomes a single digit
	if (!Number.isInteger(num)) {
		throw new Error('Input value must be an integer')
	}
	if (num.toString().length === 1) {
		return count 
	}
	count += 1
	let val = num.toString().split('').reduce((accumulator, currentValue) => accumulator * parseInt(currentValue), 1)
	return multiplicativePersistence(val, count)
}
module.exports =  { additivePersistence, multiplicativePersistence }