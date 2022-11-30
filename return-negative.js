function makeNegative(num) {
  return (num === 0) ? 0:-Math.abs(num)
}
console.log(makeNegative(5))
console.log(makeNegative(0))
