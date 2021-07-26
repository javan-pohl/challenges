const maxArea = function(heightsArr) {
	let max = 0
	for (let i in heightsArr) {
		for (let j in heightsArr) {
			let area = Math.min(heightsArr[i], heightsArr[j]) * Math.abs(j - i) || 1
			area > max ? max = area : null
		}
	}
	return max
}

let test = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(test))

test = [1,2,1]
console.log(maxArea(test))

test = [0,2]
console.log(maxArea(test))
