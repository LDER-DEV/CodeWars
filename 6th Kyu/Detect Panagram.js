// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// STRINGSDATA STRUCTURESFUNDAMENTALS

function isPangram(string){
  const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z']   
  const arr = string.toUpperCase().replaceAll(/[' ''.'123456789',']/g,'').split('').sort()
  let unique = [...new Set(arr)]  
  const final = []

  for (let i = 0 ; i <= 25; i++){
    if(alpha[i] === unique[i])
      final.push(unique[i])
  }
 if(final.join('') == alpha.join('')){
   return true
 }else{
   console.log(unique)
   return false
 }
}