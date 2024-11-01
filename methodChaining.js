// without Method Chaining 

/* Tasks
1. Remove extra space
2. Make first letter upper case
3. Rest of letters should be lower case
*/



// Assigne it to paragraph "name" when Submit is clicked
// document.getElementById("mySubmit").onclick = () => {

//     let userName = document.getElementById("nameInput").value;
//     // Remove extra space
//     userName = userName.trim();

//     // Make first letter upper case
//     let firsLetter = userName.charAt(0);
//     firsLetter = firsLetter.toUpperCase();

//     // Make rest of the letters lower case
//     let restLetters = userName.slice(1);
//     restLetters = restLetters.toLowerCase();

//     let finalName = firsLetter + restLetters;

//     document.getElementById("name").textContent = finalName;

// }

// With Method Chaning
document.getElementById('mySubmit').onclick = () => {
    let userInput = document.getElementById('nameInput').value.trim();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    document.getElementById("name").textContent = userInput;

}