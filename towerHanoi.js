function towerHanoi(discs) {
	// 'discs' is number of discs
	let tower1 = []
	let tower2 = []
	let tower3 = []
	let moveCount = 0
	for (let i = discs; i >= 1; i -= 1) {
		tower1.push(i)
	}
	console.log(tower1)
	// so we're going to create a recursive function that takes in the: 1) numofdiscs, 2) moveCount, 3) the three towers
	// each tower is going to be an array of numbers, each representing a disc (larger numbers will be larger discs)
	// our base case will be if all the discs are on the third tower in descending order
	// in every move, we never put a larger disc on top of a smaller disc
	// (from wiki) When moving the smallest piece, always move it ot hte next position in the same direction (to the right if the starting number of pieces is evne, to the left if the starting number of pieces i sodd).
	// If htere is no tower position inthe chosen direction, move the piece to the opposite end, but then continue to move in the correct direction
	function moveDiscs(numDiscs, numMoves, testTower, towerOne, towerTwo, towerThree) {
		if (JSON.stringify(testTower) === JSON.stringify(towerThree)) {
			return numMoves
		}
		numMoves += 1
	}
}

towerHanoi(5)