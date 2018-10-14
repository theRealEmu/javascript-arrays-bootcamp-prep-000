//1 chocolateBars
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


//2 addElementToBeginningOfArray
function addElementToBeginningOfArray(array, element) {

  var nuArray = [element, ...array];
  return nuArray;

}
