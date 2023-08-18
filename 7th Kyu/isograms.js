function isIsogram(str){
  let lowerCaseStr = str.toLowerCase()
  let array = []
  for( let i = 0; i < lowerCaseStr.length; i++){
    if(!array.includes(lowerCaseStr[i])){
       array.push(lowerCaseStr[i])
       }
  }
  let completedStr = array.join('')
  if(completedStr === lowerCaseStr){
    console.log(completedStr, lowerCaseStr)
    return true
  }else{
    console.log(completedStr, lowerCaseStr)
    return false
  }
}


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false