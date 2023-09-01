function getSum(a, b)
{
  let solution = []
  if(b < a){
   for (let i = b; i <=a; i++){
     solution.push(i)
   }
      }else if(a === b){
        return a || b
      }
        else if(a < b){
   for (let i = a; i <=b; i++){
     solution.push(i)
   }
      }
  let final = solution.join('+')
  let evaluation = eval(final)
  console.log(a,b, eval(final), solution)
return evaluation
  }

  
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.