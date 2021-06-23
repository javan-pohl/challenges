function towerHanoi(discs) {
  // 'discs' is number of discs
  let discsEven = discs % 2 === 0 ? true : false;
  let testTower = [];
  let towers = [[], [], []];
  let moveCount = 0;

  // create tower1 and testTower
  for (let i = discs; i >= 1; i -= 1) {
    towers[0].push(i);
    testTower.push(i);
  }
  while (JSON.stringify(testTower) !== JSON.stringify(towers[2])) {
    // 	// this will be our while loop that will keep going as long as the game is not complete
    // 	let lowestMove = true;
    // 	// find array with lowest value
    // 	// pop off lowest value
    // 	// if numDiscs is odd, move lowest value to the left
    // 	// if numDiscs is even, move lowest value to the right
    // 	// find array with next lowest value
    towers = moveLowest(towers, discsEven);
    console.log(towers);
    towers = moveNextLowest(towers);
    console.log(towers);
  }
  // for (let i = 0; i < 5; i++) {
  //   towers = moveLowest(towers, discsEven);
  //   console.log(towers);
  //   towers = moveNextLowest(towers);
  //   console.log(towers);
  // 	// ok, the issue is is that we're currently putting higher values on lower values
  // }
}

function moveLowest(myTowers, discsAreEven) {
  // find array with lowest value
  let lowestTower, moveToTower;
  // console.log('moveLowest: ', myTowers)
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
  // console.log("moveNextLowest", myTowers);
  // let twoHighest = [...myTowers];
  let highestVal = 2,
    hasEmptySlot = false,
    middle,
    highest,
    lowest;
  for (let i = 0; i < 3; i += 1) {
    // console.log("beginning of loop, array: ", myTowers[i]);
    // if (myTowers[i][myTowers[i].length - 1] === 0) {
    if (myTowers[i][0] === undefined) {
      hasEmptySlot = true;
      middle = i;
    }
    if (myTowers[i].includes(1)) {
      lowest = i;
    } else if (myTowers[i][myTowers[i].length - 1] >= highestVal) {
      // console.log("highest: ", myTowers[i][myTowers.length - 1], highestVal);
      highest = i;
      highestVal = myTowers[i][myTowers[i].length - 1];
      // console.log('highest, highestVal', highest, highestVal)
    }
  }
  middle = hasEmptySlot
    ? middle
    : [0, 1, 2].filter((x) => ![lowest, highest].includes(x))[0];
  console.log(myTowers);
  console.log(lowest, middle, highest);
  // now we pop off the highest and push to the middle
  // actually, no.
  // So the algorithm as it is now only works when there's an empty slot
  // myTowers[middle].push(myTowers[highest].pop())
  // myTowers[highest].push(myTowers[middle].pop())
  console.log("hasEmptySlot: ", hasEmptySlot);
  // hasEmptySlot ?  myTowers[highest].push(myTowers[middle].pop()) :  myTowers[middle].push(myTowers[highest].pop());
  hasEmptySlot
    ? myTowers[middle].push(myTowers[highest].pop())
    : myTowers[highest].push(myTowers[middle].pop());
  // console.log('end of moveNextLowest', myTowers);
  return myTowers;
}

towerHanoi(5);
