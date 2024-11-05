/*
 The forEach method in JavaScript is used to iterate over an array and 
 execute a function once for each element in the array. 
 The function passed to forEach can take up to three arguments: value, index, and array
 */

 let words = ['a','b','c','d','e']

 words.forEach((value, index) => {
    console.log(`Index of ${value} is ${index}`);
    
 })
 /* OUTPUT
    Index of a is 0
    10 Index of b is 1
    10 Index of c is 2
    10 Index of d is 3
    10 Index of e is 4
  */

let number = [1,2,3,4,5]

function display(params) {
    console.log(params); 
        
}
function getSquare(value,index, array){
   array[index] = Math.pow(value,2) // This line will square the value and return to array at same index
}
number.forEach(getSquare) 
number.forEach(display) // Will display number array, line30 will update number array with square

/* OUTPUT
1
4
9
16
25
*/

document.getElementById('sumBtn').onclick = () => {
    let result=[];
    let userInput = document.getElementById('userInput').value.split('').map(Number);
    userInput.forEach(userInput => {
        result.push(userInput)
    });
    document.getElementById('sum').textContent = result
}

document.getElementById('squareBtn').onclick = () => {
    let result=[]
    let userInput = document.getElementById('userInput').value.split('').map(Number);
    userInput.forEach((value, index) => {
        result[index] = Math.pow(value,2)
    });
    document.getElementById('square').textContent = result
}

document.getElementById('cubeBtn').onclick = () => {
    let result=[]
    let userInput = document.getElementById('userInput').value.split('').map(Number);
    userInput.forEach((value, index) => {
        result[index] = Math.pow(value,3)
    });
    document.getElementById('cube').textContent = result
}