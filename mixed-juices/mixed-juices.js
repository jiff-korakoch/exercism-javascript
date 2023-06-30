// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeInMinutes = 0;
  
  switch(name){
    case "Pure Strawberry Joy":
      return timeInMinutes = 0.5;
      break;
    case "Energizer" :
    case "Green Garden":
      return timeInMinutes = 1.5;
      break;
    case "Tropical Island" :
      return timeInMinutes = 3;
      break;
    case "All or Nothing" :
      return timeInMinutes = 5;
      break;
    default:
      return timeInMinutes = 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  //let wedgesNeed = 25
  //let lime = ["small","small","large","medium","small"];
  let numberLimesCut = 0; 
  
  while(limes.length > 0 && wedgesNeeded > 0){
    switch(limes.shift()){
      case "small" : 
        wedgesNeeded -= 6;
        break;      
        case "medium" :
        wedgesNeeded -= 8;
        break;
      case "large" :
        wedgesNeeded -= 10;
        break;
    } numberLimesCut = numberLimesCut + 1;
      //console.log(wedgesNeed);
  } return numberLimesCut;
  
  
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  //let time = 7;
  //let order = ['Tropical Island','Energizer', 'Limetime','All or Nothing','Pure Strawberry Joy'];
    while (timeLeft > 0){
    switch (orders.shift()){
      case "Pure Strawberry Joy":
      timeLeft -= 0.5;
      break;
    case "Energizer" :
    case "Green Garden":
      timeLeft -= 1.5;
      break;
    case "Tropical Island" :
      timeLeft -= 3;
      break;
    case "All or Nothing" :
      timeLeft -= 5;
      break;
    default:
      timeLeft -= 2.5;
      
    }
      //  console.log(timeLeft,orders);
    }  return orders;
}