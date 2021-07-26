const twoSum = function(nums, target) {
	// find the indices of two values in nums (array) that add up to the value of target
	// we may assume that there is only ONE solution
	// may not use the same element twice
	// negative numbers are possible
	let hash = {}

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i]
		if (hash[target - n] !== undefined) {
			return [hash[target - n], i]
		}
		hash[n] = i
	}
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))