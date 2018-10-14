//1 chocolateBars
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


//2 addElementToBeginningOfArray
function addElementToBeginningOfArray(array, element) {

  var nuArray = [element, ...array];
  return nuArray;

}


//3 destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray(array, element) {

  array.unshift(element);
  return array; 
  
  //It wouldn't work in one line 
  //return array.unshift(element) gives somehow only the array.length
  

}