/**
 * The Array.map() method allows you to iterate over an array and modify its elements using a callback function. 
 * The callback function will then be executed on each of the array's elements
 */

/**
 * Now imagine you are required to multiply each of the array's elements by 3. 
 * You might consider using a for loop as follows:
 */

let arr1 = [3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++){
  arr1[i] = arr1[i] * 3;
}
console.log(arr1); // [9, 12, 15, 18]


// We can do above task using forEach method
let arr2 = [3, 4, 5, 6];
arr2.forEach(element => Math.pow(element,2))
console.log(arr2); // [9, 12, 15, 18]

// We can do above task using map method, but it will return new array
// The map method in JavaScript is used to create a new array by applying a function to each element of the original array
let arr3 = [3, 4, 5, 6];
let newArray = arr3.map(elemet => Math.pow(elemet,2))
console.log(newArray);

// Anonymous Function
arr3.map(function(element) {
    return element * 3;
});

// Arrow Function (shorter and more concise):
arr3.map(element => element * 3);

// Named Function (more explicit)
function multiplyByThree(element) {
    return element * 3;
}
arr3.map(multiplyByThree);


// Let's make first letter capitcal of each element
let fruits = ['apple','banana','cherry','mango','graps']

let newArr =  fruits.map(makeFirstLetterCap)
console.log(newArr); // ['Apple', 'Banana', 'Cherry', 'Mango', 'Graps']

function makeFirstLetterCap(element){
    return element.charAt(0).toUpperCase() + element.slice(1)
}

// Let's change the formate of date to mm-dd-yyyy
let dates = ['2024-29-12','2024-15-10','2024-20-10']

let newDates = dates.map(changeDateFormat)
console.log(`Old Dates Formate (yyyy-dd=mm)`)
console.log(dates);
console.log(`new Dates Formate (mm-dd-yyyy)`) 
console.log(newDates);

function changeDateFormat(element){
    let parse = element.split('-'); // each element will be converted to three item array, i.e [2024,29,12] 
    return `${parse[2]}-${parse[1]}-${parse[0]}`

}

