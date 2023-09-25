const exampleNumbers = [7, 6, 4, 1, 23, 5, 67];

function bubbleSort(array: number[]): number[] {
  array = array.slice();

  console.log(`Default : ${array}`);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(bubbleSort(exampleNumbers));
