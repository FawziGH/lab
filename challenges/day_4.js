// Warm Up Challenge for day 4
// Create an array of numbers
// Create a functions that returns a new array, with only numbers less than 5 from the previous array
// Your code here:
var myArray = [1,20,-3,4,5];
//var myArray2 = [1,2,9];
var twenty = myArray[1];
var five = myArray[4];
console.log(twenty);
console.log(five);

function lessthan5(list){
	//console.log(list)
	var array2 = [];
	// start at 0, continue for the length of list
	for(let i=0;  i < list.length; i++) {
		console.log(list[i])
		if (list[i] < 5) {
			
		}
	}
}
	
lessthan5(myArray)
//lessthan5(myArray2)
// Extra Credit: use .forEach to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Your code here:







// Extra Extra Credit: Use .filter to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Your code here: