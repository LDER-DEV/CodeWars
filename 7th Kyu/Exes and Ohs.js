function XO(str) {
  let xCount = []
  let oCount = []
  for(let i = 0 ; i < str.length; i++){
    if(str[i] == 'X' || str[i] == 'x'){
      xCount.push(str[i])
    }else if( str[i] == 'o' ||str[i] == 'O'){
      oCount.push(str[i])
    }
  }
  console.log(xCount, oCount, str)
if(xCount.length == oCount.length){
  return true
}else{
  return false
}
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false