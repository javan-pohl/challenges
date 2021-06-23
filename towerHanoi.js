function towerHanoi(discs) {
  // this function is to go through the process of moving the rings in the process of completing the game in the fewest steps possible
  // (if we just want the formula for min num of moves it's 2^N - 1)
  // if the number of discs is even, you always move the lowest piece to the right; if odd, to the left
  // the next lowest piece will only have one legal move

  // 'discs' is number of discs
	if (!Number.isInteger(discs)) {
		throw new Error('Input value must be a positive integer')
	}
	if (discs < 3) {
		throw new Error('Input value must be 3 or larger')
	}	
  let discsEven = discs % 2 === 0 ? true : false;
  let testTower = [];
  let towers = [[], [], []];
  let moveCount = 0;

  for (let i = discs; i >= 1; i -= 1) {
    towers[0].push(i);
    testTower.push(i);
  }
  while (JSON.stringify(testTower) !== JSON.stringify(towers[2])) {
    towers = moveLowest(towers, discsEven);
    moveCount += 1;
    // console.log(towers);
    // the while loop only tests at the beginning. We need to test prior to moving next lowest piece
    if (JSON.stringify(testTower) === JSON.stringify(towers[2])) {
      break;
    }
    towers = moveNextLowest(towers);
    moveCount += 1;
    // console.log(towers);
  }

  return moveCount;
}

function moveLowest(myTowers, discsAreEven) {
  let lowestTower, moveToTower;
  for (let i = 0; i < 3; i += 1) {
    if (myTowers[i].includes(1)) {
      lowestTower = i;
      myTowers[i].pop();
    }
  }
  if (discsAreEven) {
    moveToTower = lowestTower === 2 ? 0 : (lowestTower += 1);
  } else {
    moveToTower = lowestTower === 0 ? 2 : (lowestTower -= 1);
  }
  myTowers[moveToTower].push(1);
  return myTowers;
}
function moveNextLowest(myTowers, n) {
  let highestVal = 2,
    hasEmptySlot = false,
    middle,
    highest,
    lowest;
  for (let i = 0; i < 3; i += 1) {
    if (myTowers[i][0] === undefined) {
      hasEmptySlot = true;
      middle = i;
    }
    if (myTowers[i].includes(1)) {
      lowest = i;
    } else if (myTowers[i][myTowers[i].length - 1] >= highestVal) {
      highest = i;
      highestVal = myTowers[i][myTowers[i].length - 1];
    }
  }
  middle = hasEmptySlot
    ? middle
    : [0, 1, 2].filter((x) => ![lowest, highest].includes(x))[0];
  hasEmptySlot
    ? myTowers[middle].push(myTowers[highest].pop())
    : myTowers[highest].push(myTowers[middle].pop());
  return myTowers;
}
// console.log(towerHanoi(5));
// console.log(towerHanoi('five'))

module.exports = towerHanoi;
