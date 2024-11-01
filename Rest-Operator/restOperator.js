/*
1. Rest operator (...) bundles seprate elements into array
2. Rest operator (...) allows a function to take seprate elements
   and make it array
*/

function printNumbers(...nums) {
    console.log(nums); // nums is an array: [1, 2, 3]
  
    // Loop through the array
    nums.forEach(num => {
      console.log(num); // Outputs each number: 1, 2, 3
    });
  }
  
  printNumbers(1, 2, 3); // Passing individual numbers
  
  /*
  Explanation
         ...nums: The ... in the function argument (...nums) is the rest operator. 
         It collects all the arguments passed to the function and puts them into an array named nums.
        Accessing Elements: Since nums is now an array, you can use array methods 
        like forEach(), map(), or a for...of loop to iterate over the numbers.
  */

 



let item1 = "Pizza";
let item2 = "Tea";
let item3 = "Coffee";
let item4 = "Burger";
let item5 = "Drink";

myOrder(item1,item2,item3,item4,item5);

function myOrder(...items){
    console.log(items); // It will display ['Pizza', 'Tea', 'Coffee', 'Burger', 'Drink']
    console.log(...items) // spread: It will spread items again > Pizza Tea Coffee Burger Drink
}

function sum(...params) { // converting passing elements into an array so loop can apply
    let result=0;
    params.forEach(element => {
        console.log(element);
        result+=element
    });
    return result;
    
}

document.getElementById('mySubmit').onclick = () =>{
    let numbers = document.getElementById('numberInput').value.split('').map(Number);
    document.getElementById('sumNumber').textContent = sum(...numbers) // passing as an individual elements
}
