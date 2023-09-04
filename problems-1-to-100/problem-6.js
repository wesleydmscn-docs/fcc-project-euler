function getRange(n) {
  return Array.from({ length: n }).map((item, i) => i + 1)
}

function sumSquareDifference(n) {
  const numbers = getRange(n)

  const sumSquares = numbers.reduce((acc, curr) => curr ** 2 + acc, 0)
  const squareSum = numbers.reduce((acc, curr) => curr + acc, 0) ** 2

  return squareSum - sumSquares
}

sumSquareDifference(10) // 2640
