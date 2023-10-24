function divideAndConquer(arr: number[], target: number): number | null {
  if (!arr.length) {
    return null;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const middleElement = arr[middleIndex];

  if (middleElement === target) {
    return middleIndex;
  } else if (middleElement < target) {
    const rightHalf = arr.slice(middleIndex + 1);
    const result = divideAndConquer(rightHalf, target);

    if (result === null) {
      return null;
      //Not found in the right side of array
    }

    return middleIndex + 1 + result;
  } else {
    //Check left side
    const leftHalf = arr.slice(0, middleIndex);
    return divideAndConquer(leftHalf, target);
  }
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetElement = 7;

let result = divideAndConquer(array, targetElement);
console.log(result);
