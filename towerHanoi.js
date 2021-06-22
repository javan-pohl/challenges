function towerHanoi(discs) {
	// 'discs' is number of discs
	let discsEven = discs % 2 === 0 ? true : false;
	let testTower = []
	let towers = [[],[],[]]
	let moveCount = 0
	
	// create tower1 and testTower
	for (let i = discs; i >= 1; i -= 1) {
		towers[0].push(i)
		testTower.push(i)
	}
	while (JSON.stringify(testTower) !== JSON.stringify(towers[2])) {
		// this will be our while loop that will keep going as long as the game is not complete
		let lowestMove = true;
		// find array with lowest value
		// pop off lowest value
		// if numDiscs is odd, move lowest value to the left
		// if numDiscs is even, move lowest value to the right
		// find array with next lowest value
	}
	console.log(tower1)
	function moveLowest(towers, discsAreEven) {
		// find array with lowest value
		let lowestTower, moveToTower
		for (let i = 0; i < 3; i += 1) {
			if (towers[i].includes(1)) {
				lowestTower = i
				towers[i].pop()
			}
		}
		if (discsAreEven) {
			// if is odd, we move to the left
			moveToTower = lowestTower === 2 ? 0 : lowestTower += 1;
		} else {
			moveToTower = lowestTower === 0 ? 2 : lowestTower -= 1;
		}
		return towers[moveToTower].push(1)
	}

}

towerHanoi(5)