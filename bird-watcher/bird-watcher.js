// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for( let i = 0; i < birdsPerDay.length; i++){ // or i = i + 1
    sum += birdsPerDay[i]; //or sum = sum + birdsPerDay[i]
    //console.log(sum);
  }return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  //let a = [1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3];
  //let b = 2 * 7 - 7 ; 
  //let s = 0;
  //for(let i = b; i < 2*7; i++){
  //s += a[i];
  //console.log(i,s);
  let numWeek = week * 7 - 7;
  let countPerWeek = 0;
  for(let i = numWeek; i < week*7 ; i++) {
    countPerWeek += birdsPerDay[i];
    //console.log(i,countPerWeek);
  } return countPerWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let a = [2,1,2,3,2,5];
  let s = [];
  for(let i = 0; i < a.length ; i= i+2){
    a[i] = a[i] + 1;
    console.log(i,a[i]);
  } console.log(a);
  //for(let i = 0; i < birdsPerDay.length ; i = i+2){
  //  birdsPerDay[i] += 1; //birdsPerDay[i] = birdsPerDay[i] + 1;
  //  console.log(i,birdsPerDay[i]);
  //} return birdsPerDay;
}
