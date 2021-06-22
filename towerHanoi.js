function towerHanoi(discs) {
  // 'discs' is number of discs
  let discsEven = discs % 2 === 0 ? true : false;
  let testTower = [];
  let towers = [[0], [0], [0]];
  let moveCount = 0;

  // create tower1 and testTower
  for (let i = discs; i >= 1; i -= 1) {
    towers[0].push(i);
    testTower.push(i);
  }
  // while (JSON.stringify(testTower) !== JSON.stringify(towers[2])) {
  // 	// this will be our while loop that will keep going as long as the game is not complete
  // 	let lowestMove = true;
  // 	// find array with lowest value
  // 	// pop off lowest value
  // 	// if numDiscs is odd, move lowest value to the left
  // 	// if numDiscs is even, move lowest value to the right
  // 	// find array with next lowest value
  // }
  console.log(towers);
  towers = moveLowest(towers, discsEven);
  console.log(towers);
  moveNextLowest(towers, discsEven);
  console.log(towers);
}

function moveLowest(myTowers, discsAreEven) {
  // find array with lowest value
  let lowestTower, moveToTower;
  for (let i = 0; i < 3; i += 1) {
    if (myTowers[i].includes(1)) {
      lowestTower = i;
      myTowers[i].pop();
    }
  }
  if (discsAreEven) {
    // if is even, we move to the right; odd, to the left
    moveToTower = lowestTower === 2 ? 0 : (lowestTower += 1);
  } else {
    moveToTower = lowestTower === 0 ? 2 : (lowestTower -= 1);
  }

  myTowers[moveToTower].push(1);
  return myTowers;
}
function moveNextLowest(myTowers, n) {
  console.log("moveNextLowest", myTowers);
  // let twoHighest = [...myTowers];
  let highestVal = 2,
    middle,
    highest,
    lowest;
  for (let i = 0; i < 3; i += 1) {
		console.log('beginning of loop, array: ', myTowers[i])
    if (myTowers[i].includes(1)) {
      lowest = i;
    } else if (myTowers[i][myTowers.length - 1] >= highestVal) {
			console.log('highest: ', myTowers[i][myTowers.length - 1], highest)
			highest = i;
			highestVal = myTowers[i]
		}
  }
	middle = [0,1,2].filter( x => ![lowest, highest].includes(x))[0]
  console.log(lowest, middle, highest)
}

towerHanoi(5);
