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

const box = document.querySelector("#box");
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyY") {
    box.style.backgroundColor = "yellow";
  } else if (event.code === "KeyG") {
    box.style.backgroundColor = "green";
  }
});