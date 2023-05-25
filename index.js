let selectedMessage=document.querySelector("#lang-select")
let h2text=document.querySelector("#msg")

selectedMessage.addEventListener("change",function (){

let selectedoption=selectedMessage.value;

h2text.innerHTML=selectedoption




})