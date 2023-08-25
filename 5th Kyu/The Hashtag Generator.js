function generateHashtag (str) {
  const sentenceArray = str.split(' ')
  const capitalizer = sentenceArray.map(x=> x.charAt(0).toUpperCase() + x.slice(1))
  const tagPhrase = capitalizer.join('')

if(tagPhrase.length === 0 || tagPhrase.length >= 140){
  return false
}else{
  
  const completedTag = tagPhrase.split(' ')
 const  hashTag = `#${tagPhrase}`
 console.log(str.length)
 return hashTag
  
}
}

// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false