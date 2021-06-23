function persistence (n) {
	// the additive persistence of an integer is the number of times you have to replace n with the sum of its digits until n becomes a single digit
	if (n.toString().length === 1) {
		return 0
	}
}

module.exports = persistence