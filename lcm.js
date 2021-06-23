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

console.log(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(lcm([5, 7, 11, 35, 55, 77]))
