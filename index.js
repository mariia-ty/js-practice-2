// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", (event) => {
//   console.log("Keyup: ", event);
// });

// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

//task 1
// const clear = document.querySelector(".js-clear");
// const output = document.querySelector(".js-output");
// clear.addEventListener("click", () =>
// {
//     output.textContent = "";
// });

// document.addEventListener("keydown", (event) => {
//     output.textContent += event.key;
// });

//task 2
// const box = document.querySelector("#box");
// document.addEventListener("keydown", (event) => {
//   if (event.code === "KeyY") {
//     box.style.backgroundColor = "yellow";
//   } else if (event.code === "KeyG") {
//     box.style.backgroundColor = "green";
//   }
// });

// const box = document.querySelector("#box");
// document.addEventListener("keydown", (event) => {
//   if (event.code === "KeyY") {
//     box.style.backgroundColor = "yellow";
//   } else if (event.code === "KeyG") {
//     box.style.backgroundColor = "green";
//   }
// });

//review 
// const bl = true; 
// const num = 14; 
// const float = 17.557; 
// const str = "Hello";
// const char = 'h'; 
// const none = null; 

// alert("hello");
// prompt("Enter your name:");
// confirm("Do you agree?");

// let mult = 5 * 4; 
// let div = 1782 / 4; 
// console.log(mult);
// console.log(div);

// let strnum = "5"; 
// console.log(Number(strnum));

// let a = 1.2; 
// console.log(Math.round(a));

const name = "Lily";
const lastName = "Jeffery";
const hobby = "gaming";

const phrase = `Hello my name is ${name} ${lastName.toUpperCase()} my hobby is ${hobby}`;
console.log(phrase);

let a = 5; 
let b = 4; 

if (a === 5 && b === 4) {
  console.log(b);
}

console.log((a===5)? b : a);
