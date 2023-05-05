function abbrevName(name){
  const nameArray = name.toString().split(' ')
  const first = nameArray[0][0].toUpperCase()
  const last = nameArray[1][0].toUpperCase()
  console.log(last)
  return `${first}.${last}`
  
  }
//   DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// STRINGSFUNDAMENTALS