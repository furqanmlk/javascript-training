/*
1. Spread operator (...) unbox the iterables ( array )
2. Spread operator (...) expend the array into seperate elements 
so operations can be appliced on each element
*/

/* Adding arrays using spread (...)  */

const num1 = [1, 2, 3, 4, 5];
const newNum1 = [...num1, 6, 7, 8]; // Spreading the original array and adding more elements

// for...of loop
for (const num of newNumbers) {
   console.log(num); // Outputs each number one by one
 }

 // forEach loop
const num2 = [1, 2, 3, 4, 5];
const newNum2 = [...num2, 6, 7, 8]; // Spreading the original array and adding more elements

 newNumbers.forEach(num => {
    console.log(num); // Outputs each number one by one
  });

  // Using map()
  // If you need to perform an operation on each element and create a new array, you can use map():
const num3 = [1, 2, 3, 4, 5];
const newNum3 = [...num3, 6, 7, 8]; // Spreading the original array and adding more elements
const doubled = newNumbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10, 12, 14, 16]

// let number = [1,2,3,4,5]
// Math.max(number) // Will return NAN, cos number array is not unboxed
// Math.max(...number) // Will retrun 5


document.getElementById('mySubmit').onclick = () =>{
    let userInput = document.getElementById('numberInput').value; // 12345
    let numArray = userInput.split('').map(Number); // [1,2,3,4,5]
    let max = Math.max(...numArray); //5
    document.getElementById('number').textContent = max;

}
