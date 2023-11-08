function removeDuplicates(nums: number[]) {
  const uniqueArray = Array.from(new Set(nums));
  return helper(uniqueArray);
}

function helper(numbers: number[]) {
  let array = numbers.slice();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(removeDuplicates([1, 2, 4, 5, 1, 2, 3, 5, 1, 2, 3, 1]));
