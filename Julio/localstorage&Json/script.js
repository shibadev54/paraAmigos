/*ordem de estudo:
desestruturação
promises
form api
local storage api
fetch api
node
*/
const nome = document.getElementById('nome');
const form = document.getElementById('formulario');
const cidade = document.getElementById('cidade');
const idade = document.getElementById('idade');
const sv = document.getElementById('sv');
const clr = document.getElementById('clr')
const msg = document.getElementById('mensagem');

function add(){
sv.addEventListener('click', (e)=>{
e.preventDefault();
const user= {
"nome": nome.value,
"idade": idade.value,
"cidade": cidade.value
}
const usertxt= JSON.stringify(user);
localStorage.setItem("user", usertxt);
let getuser = JSON.parse(localStorage.getItem("user"));
msg.textContent=getuser.nome + getuser.idade + getuser.cidade;
})}
if(localStorage.length >=1){
const userget =JSON.parse(localStorage.getItem("user"));
msg.textContent=userget.nome + " " + userget.idade + " " + userget.cidade;
}
clr.addEventListener("click", ()=>{
msg.textContent=" ";
localStorage.removeItem("user");
})