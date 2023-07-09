// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {  
  const sumArrays1 = Array.from(array1);
  const sumArrays2 = Array.from(array2);
  const num1 = Number(sumArrays1.join(""));
  const num2 = Number(sumArrays2.join(""));
  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let a = String(value);
  let i = a.length-1;
  let b = "";
    while (i >=0) {
      b += a[i];
    i--;  
    }if  ( a === b) {
      return true;
    }else  {
      return false;
  }  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let a = input;
      a = a ?? null ?? undefined ;
  if( a === "" || a === undefined || a === null ){
    return "Required field";
  }else if(Number(input)){
    return ""; 
  }else{
    return "Must be a number besides 0";
  }
}
