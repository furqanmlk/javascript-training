 // ##### Get User input from windows prompt
/*
 let fullname = window.prompt("Your Name");
let age = window.prompt("Your Age")
let student = window.prompt("Are you a studnet ?")

// assinging user input to html elements 
document.getElementById("name").textContent = `Welcome ${fullname} !`
document.getElementById("age").textContent = `You are ${age} years old !`
if (student.toLocaleLowerCase()==='yes') {
    document.getElementById("isStudent").textContent = `Wow you are a student !`
}else{
    document.getElementById("isStudent").textContent = `Wow you are professional !`
} 
*/


// ###### Get user input using HTML text box
// Get submit button by id and add function when button is clicked
document.getElementById("mySubmit").onclick = () => {

    // assign values to paragraphs
    document.getElementById("name").textContent = document.getElementById("nameInput").value;
    document.getElementById("age").textContent = document.getElementById("ageInput").value;

    let student = document.getElementById("isStudentInput").value;
    if (student.toLocaleLowerCase()==='yes') {
        document.getElementById("isStudent").textContent = `Wow you are a student !`
    }else{
        document.getElementById("isStudent").textContent = `Wow you are professional !`
    } 
}