function solution(str, ending){
  if(str.slice(-ending.length) === ending){
    return true
  }else if(str.length === 0 || ending.length === 0){
    return true
  }else{
    return false
  }
  }

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false