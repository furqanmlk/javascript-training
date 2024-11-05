/*
            "I will call back later!"

1. A callback is a function passed as an argument to another function

2. This technique allows a function to call another function

3. A callback function can run after another function has finished
*/

// Call myFunction after 3000ms
setTimeout(myFunction, 3000);

function myFunction(value) {
  document.getElementById("text").innerHTML = "I waited 3000ms before got displayed!";
}
// myFunction is callback as it will be executed after 3000ms wait

// Call myFunction after every 1000ms
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("time").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }