// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {  
 // let i = 0;
 // let j = 0;
 // let a = "";
 // let b = "";
 // while (i < array1.length) {
 //   a += String(array1[i]);
 //   i++;
 // }
 // while (j < array2.length) {
 //   b += String(array2[j]);
 //   j++;
 // }
 // return Number(String(a)) + Number(String(b));
  const a = array1.join('');
  const b = array2.join('');
  return Number(String(a)) + Number(String(b));
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
