function pigIt(str){
  const strArray = str.split(' ')
  const pigLatinArray = strArray.map(x => x === '!' || x ==='?' ? x : x.slice(1) + `${x.charAt(0)}ay`)
  const pigLatinTranslation = pigLatinArray.join(' ')
  return pigLatinTranslation
 }

//  DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !