const twoSum = function(nums, target) {
	// find the indices of two values in nums (array) that add up to the value of target
	// we may assume that there is only ONE solution
	// may not use the same element twice
	// negative numbers are possible
	for (let i = 0; i < nums.length; i += 1) {
		for (let j = 0; j < nums.length; j += 1) {
			if (i === j) {
				continue
			}
			if (nums[i] + nums[j] === target) {
				return [i,j]
			}
		}
	}
}