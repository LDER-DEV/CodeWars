function getGrade (s1, s2, s3) {
  let sum = s1 + s2 + s3
  let final = sum / 3
  if(final >= 90 && final <=100){
    console.log(final)
    return 'A'
  }else if(final >= 80 && final < 90){
    return 'B'
  }else if(final >= 70 && final < 80){
    return 'C'
  }else if( final >= 60 && final < 70){
    return 'D'
  }else if( final >= 0 && final < 60){
    return 'F'
  }
 }

//  DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.