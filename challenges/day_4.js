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


var numbers = [5, 1, 7, 5, 3, 12, 9, 6, -5, 2.5];
var list2 = [3, 1, -5, 2.5, 9];
// Input: myList
// Output: [1, 3, -5, 2.5]
function lessThanFive(list){
	// create an empty array to put the items less than 5
	var newArray = [];
	//for loops that goes through each of the item
	for (let i=0; i<list.length; i++){
		// If statement that checks if each item is less than 5
		if (list[i]<5){
			// Push item to new array
			newArray.push(list[i]);
		}
	}
	// Return new array
	return newArray;

}


console.log(lessThanFive(numbers));


// Extra Credit: use .forEach to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Your code here:







// Extra Extra Credit: Use .filter to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Your code here: