const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 2, 1, 3, 5, 76, 8, 5, 4, 3, 5, 65, 43, 43, 54, 4, 4, 53, 345];

function detectRepeatedNumbersAndCollect(array: number[]): number[] {
  let repeatedNumbers: number[] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log(`Eşleşme sağlandı: j: ${array[j]} i : ${array[i]}`);
      }
      if (array[i] === array[j] && !repeatedNumbers.includes(array[i])) {
        repeatedNumbers.push(array[i]);
      }
    }
  }

  return repeatedNumbers;
}

console.log(detectRepeatedNumbersAndCollect(numbers));
