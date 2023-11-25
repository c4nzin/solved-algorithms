// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(i1: number, i2: number): boolean {
  if (!i1 || !i2) {
    i1 = Math.abs(i1)
    i2 = Math.abs(i2)
  }

  if(i1.toString().length !== i2.toString().length) return false

  const input1Frequency: Record<string, number> = {};
  const input2Frequency: Record<string, number> = {};

  //add frequency 1
  for (const key of i1.toString()) {
    input1Frequency[key] = (input1Frequency[key] || 1) + 1;
  }

  for (const key of i2.toString()) {
    input2Frequency[key] = (input2Frequency[key] || 1) + 1;
  }

  for (const key of i1.toString()) {
    if (input1Frequency[key] !== input2Frequency[key]) return false;
  }

  return true;
}
