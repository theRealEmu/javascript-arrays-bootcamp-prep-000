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
  //return array.unshift(element) gives somehow only the array.length.  Don't know why yet
  
}


//4 addElementToEndOfArray
function addElementToEndOfArray(array, element) {

  var nuArray = [...array, element];
  return nuArray;

}


//5 destructivelyaddElementToEndOfArray
function destructivelyAddElementToEndOfArray(array, element) {

   array.push(element);
   return array;
   
   //Same behaviuour like Task 3
 
}



