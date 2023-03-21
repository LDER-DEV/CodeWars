function solution(str){
  let splits = str.split('')
  let rev = splits.reverse('')
  let join = rev.join('')
  return join
}