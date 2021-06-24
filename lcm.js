function lcm(arr, multiple) {
  let max = Math.max(...arr);
  if (multiple === undefined) {
    multiple = max;
  }
  if (arr.every((e) => multiple % e === 0)) {
    return multiple;
  } else {
    return lcm(arr, multiple + max);
  }
}

module.exports = lcm
