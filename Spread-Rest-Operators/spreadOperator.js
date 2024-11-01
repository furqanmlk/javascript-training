/*
1. Spread operator (...) unbox the iterables ( array )
2. Spread operator (...) expend the array into seperate elements 
so operations can be appliced on each element
*/

//let number = [1,2,3,4,5]
//let max = Math.max(number) // Will return NAN, cos number array is not unboxed


document.getElementById('mySubmit').onclick = () =>{
    let userInput = document.getElementById('numberInput').value; // 12345
    let numArray = userInput.split('').map(Number); // [1,2,3,4,5]
    let max = Math.max(...numArray); //5
    document.getElementById('number').textContent = max;

}
