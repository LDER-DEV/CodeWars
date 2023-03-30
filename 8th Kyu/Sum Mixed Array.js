function sumMix(x){
  let sum = 0
  let total = x.map( y => Number(y))
    for(let i = 0; i < total.length; i++){
       sum += Number( total[i])
    }
    return sum
  }
    

//   Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.