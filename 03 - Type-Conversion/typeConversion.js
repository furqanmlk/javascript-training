// User input is always in string 


// ******** Adding without conversion 

// when submit button is click assigne text box vlaue to paragraph "age"
/* document.getElementById('mySubmit').onclick = () => {

    let age = document.getElementById("ageInput").value;
    // assigned age value to age paragraph
    document.getElementById("age").textContent = age+1;
} */

/* If user enters age= 30, then Output will be 301
Because it is not adding 1 to age, but concatinating
we need to convert age into number in order to apply math operation */


// ******** Add conversion

// when submit button is click assigne text box vlaue to paragraph "age"
document.getElementById('mySubmit').onclick = () => {

    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    let isSt = document.getElementById("studentInput").value;

    // Check if user did not put data in all fields
    if(!Boolean(name) || !Boolean(age) || !Boolean(isSt)){
        document.getElementById('name').textContent = "Please fill out the all fields"
    }else {
        // convert age to number and assign value to age paragraph
        document.getElementById("name").textContent = `Welcome ${name}!`;
        document.getElementById("age").textContent = `You will be ${Number(age)+1} years old next year !`;
        
        // Checking if user is student
        isSt = isSt.toLocaleLowerCase() === 'yes' ? "Wow you're a student" : "wow you are professional"
        document.getElementById("isStudent").textContent = isSt;

    }

}