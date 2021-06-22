// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
	return arr.includes(7) ? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom([1,2,3,4,5,6]))
console.log(sevenBoom([1,2,3,4,5,7]))
