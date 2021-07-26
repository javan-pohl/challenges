const mergeKLists = function(list) {
	// we will receive an array of sorted (in ascending order) arrays
	// we will return an array with the values sorted (also, presumably, in ascending order)
	// console.log('list length: ', list.length)
	if (list.length === 0) {
		return list
	}
	// let's start with the most basic solution: concat and then sort
	let myArr = []
	list.forEach( arr => {
		myArr = myArr.concat(arr)
	})
	return myArr.sort()
}

console.log(mergeKLists([[]]))
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))