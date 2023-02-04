let olympic_average = function (values, discard_rate) {
  // discards equal amount of highest and lowest values
  for (let index = 0; index < discard_rate; index++)
    values = values.filter(
      (value) => value !== Math.min(...values) && value !== Math.max(...values)
    );
  // calculates the average value for the values
  let sum = 0;
  let x = values.forEach((value) => (sum += value));
  return sum / values.length;
};

// Example #1
console.log(olympic_average([5, 8, -100, 14, 23, 3000, 28], 1));
// Example #2
console.log(olympic_average([5, 8, -100, 14, -200, 23, 3000, 28, 400], 2));
