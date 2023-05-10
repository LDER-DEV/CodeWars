function highAndLow(numbers){
  let numbArr = numbers.split(' ').map(x=> +x)
  let minNumber = Math.min(...numbArr)
  let maxNumber = Math.max(...numbArr)
  return `${maxNumber} ${minNumber}`
  }
  
  
  //given a string of space sperated numbers
  // returning a string with the lowest and higehst number
  // will always be atleast one number in the input string
  //oput must have two numbers seperated by a single space and the highest number first
  //sort()? strings - array,  join() by the space
  //numbers can be negative

//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.