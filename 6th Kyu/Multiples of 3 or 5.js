// Multiples of 3 or 5
function solution(number){
  if(number != Math.abs(number) || number === 0){
    return 0
  }else{
  let arr = []
for (let i = 0; i < number; i++){
   arr.push(+i)

}
let second = arr.filter(x=> x % 3 ===0 || x % 5 === 0)
let final = second.reduce((a,b)=> a+b)
return final
}
  }


//   DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)