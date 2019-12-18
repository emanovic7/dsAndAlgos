// Write two functions that finds the factorial of any number.
//One should use recursive, the other should just use a for loop


//Recursive
function findFactorialRecursive(number) {
  if(number === 0){
    return 1
  }
  for(let i=number; i>=1; i--){
     if(i === 0){
    return 1
  }
    return i * findFactorialRecursive(i-1)
  }
}


//Iterative
function findFactorialIterative(number) {
  //code here
  let answer = 1;
  if(number === 0){
    return 1;
  }
  for(let i=number; i>=1; i--){
    answer *= i;
  }
  return answer;
}

//Cleaning up iterative
const findFactorialIterative = (number) => {
  let answer = 1;
  for(let i=2; i<=number; i++){
    answer *= i;
  }

  return answer;
}

//Cleaning up recursive
const findFactorialRecursive = (number) => {
  let answer = 1;

  if(number === 2){
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}
