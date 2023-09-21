var number=function(array){
  let solution = []
 if(array.length === 0){
   return []
 }else {
   for (let i = 0; i < array.length; i++){
     solution.push(`${i + 1}: ${array[i]}`)
   }
   
 }
return solution
}