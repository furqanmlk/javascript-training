// function hello(){
//     console.log("Hello")
// }

// Arrow function - other way to write above function
const hello = ()=> {
    console.log("hello")
}
hello();

// Arrow function with parameter single line
const hello1 = (name1) => console.log(`hello ${name1}`);
hello1("Ali");

// Arrow function with parameters and multi lines
const hello2 = (name2, age) => {
    console.log(`Hello ${name2}`);
    console.log(`You are ${age} years old`);
};

hello2('Ali',32)

// Arrow function in setTimeout function
function hello3() {
    console.log("Hello there!")
}
setTimeout(hello3, 3000) // hello3 will be executed after 3000ms

// or
setTimeout(()=> console.log("I am back!"), 3000)

// or
setTimeout(() =>{
    console.log("Line1");
    console.log("Line02");
    
    
}, 5000)
