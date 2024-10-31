// There are two way to get User Input

// 1: EASY WAY: Window prompt
// 2: PROFESSIONAL WAY: HTML text box

// Get userinput using windows prompt

let fullName = window.prompt("Please Enter Your Full Name");

// Assign this full name to HTML paregraph element id:name
document.getElementById("name").textContent = fullName


// Get userinput using HTML text box
//  <label>FullName:</label>
//  <input id="nameInput">
let fName = document.getElementById("nameInput").value;

// Assign this full name to HTML paregraph element id:name
document.getElementById("name").textContent = fName