function countBoomerangs(arr) {
	// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

	// count the number of boomerangs in an array
	// console.log('arr: ', arr)
	if (!Array.isArray(arr)) {
		throw new Error('Input value must be an array with at least 3 elements')
	}
	if (arr.length < 3) {
		return 0
	}
	if (arr[0] === arr[2] && arr[0] !== arr[1]) {
		return 1 + countBoomerangs(arr.slice(1))
	}	else {
		return 0 + countBoomerangs(arr.slice(1))
	}
}
console.log(countBoomerangs([1,2,1,2]))
module.exports = countBoomerangs