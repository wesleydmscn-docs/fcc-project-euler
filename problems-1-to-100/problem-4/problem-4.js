function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("")
}

function largestPalindromeProduct(n) {
  const maxNumber = Math.pow(10, n) - 1
  const minNumber = Math.pow(10, n - 1)

  let largestPalindrome = 0

  for (let i = maxNumber; i >= minNumber; i--) {
    for (let j = i; j >= minNumber; j--) {
      const product = i * j

      if (product <= largestPalindrome) {
        break
      }

      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product
      }
    }
  }

  return largestPalindrome
}

largestPalindromeProduct(3) // 906609
