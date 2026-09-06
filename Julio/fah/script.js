/*ordem de estudo:
form api
promises
fetch api
node
*/
const btn = document.querySelector("button");
const body = document.querySelector("body");
const mine = new Audio("./fah.mp3");
btn.addEventListener("click", ()=>{
body.classList.toggle("preto");
mine.play();
})