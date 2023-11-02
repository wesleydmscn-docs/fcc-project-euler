def multiples_three_and_five(number)
  sum = 0

  (3...number).each do |n|
    if n % 3 == 0 || n % 5 == 0
      sum += n
    end
  end

  sum
end

multiples_three_and_five(1000) # 233168
