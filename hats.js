function hats(arr) {
  console.log(arr);
  let hatsTotal = arr[0];
  let productionTimes = arr[1];
  let hatsCurrent = 0;
  let minutes = 0;
  console.log(productionTimes);
  let minTime = Math.min(...productionTimes);
  // takes in an array of two elements: number of hats to make (int); an array of the times (int) each of the 5 production lines takes to create 1 hat (i.e. an array of 5 integers)
  // this function will find the number of minutes elapsed for exactly N hats to be made
  // // if exactly N hats cannot be made in any time frame, return "None"

  // while the count (of hats) is less than or equal to the num of hats we're wanting to make
  // ... we shall do a loop where the incremental counter is each minute
  // // for each iteration/minute, we shall compare each item in the production time array
  // // ... if e % pt === 0 then we add a hat to the counter

  while (hatsCurrent <= hatsTotal) {
    while (minutes < minTime * hatsTotal) {
      minutes += 1;
      for (i = 0; i < productionTimes.length; i += 1) {
        if (minutes % productionTimes[i] === 0) {
          hatsCurrent += 1;
        }
      }
			if (hatsCurrent === hatsTotal) {
				return minutes
			} else if (hatsCurrent >= hatsTotal) {
				return 'None'
			}
      console.log(
        "minutes, hatsCurrent, hatsTotal: ",
        minutes,
        hatsCurrent,
        hatsTotal
      );
    }
  }
  return minutes;
}

console.log(hats([6, [1, 1, 1, 1, 1]]));
