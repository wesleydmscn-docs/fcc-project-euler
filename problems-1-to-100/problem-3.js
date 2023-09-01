function largestPrimeFactor(number) {
  let largestPrime = 0

  while (number % 2 === 0) {
    largestPrime = 2
    number /= 2
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrime = i
      number /= i
    }
  }

  if (number > 2) {
    largestPrime = number
  }

  return largestPrime
}

largestPrimeFactor(13195) // 29
