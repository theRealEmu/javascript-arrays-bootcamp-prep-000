//1 chocolateBars
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


//2 addElementToBeginningOfArray
function addElementToBeginningOfArray(array, element) {
  
  var nuArray = [element, ...array];
  return nuArray;
  
}

//3 destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray(array, element) {
  
  return array.unshift(element);
  
}

//4 addElementToEndOfArray
function addElementToEndOfArray(array, element) {
  
  var nuArray = [...array, element];
  return nuArray;
  
}


//5 destructivelyaddElementToEndOfArray
function destructivelyAddElementToEndOfArray(array, element) {
  
   return array.push(element);
   
}


//6 accessElementInArray
function accessElementInArray(array, index) {
  
  return array[index];
  
}


//7 destructivelyRemoveElementFromBeginningOfArray
function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  return array.shift(0);
  
}


//8 removeElementFromBeginningOfArray
function removeElementFromBeginningOfArray(array) {
  
  return nuArray = array.slice(1);
  
}


//9 destructivelyRemoveElementFromEndOfArray 
function destructivelyRemoveElementFromEndOfArray (array) {
  
  return array.pop(1);
  
}


//10 removeElementFromEndOfArray
function removeElementFromEndOfArray(array){
  
  return array.slice(0, array.length - 1);
  
}



