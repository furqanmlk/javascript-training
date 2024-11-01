/*
1. Rest operator (...) bundles seprate elements into array
2. Rest operator (...) allows a function to take seprate elements
   and make it array
*/

let item1 = "Pizza";
let item2 = "Tea";
let item3 = "Coffee";
let item4 = "Burger";
let item5 = "Drink";

function myOrder(...items){
    console.log(items); // It will display ['Pizza', 'Tea', 'Coffee', 'Burger', 'Drink']
    console.log(...items) // spread: It will spread items again > Pizza Tea Coffee Burger Drink
}

myOrder(item1,item2,item3,item4,item5);