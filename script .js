
let colors =["red", "blue", "green", "yellow", "black", "orange"];
let msg = document.getElementById("btn")
let body = document.getElementById("col")
 msg.addEventListener("click",myFunction);
 function myFunction(){
 let n = Math.floor(Math.random()*6)+1
 body.style.background = colors[n];
 }


 let msg1 = document.getElementById("btn1")
msg1.addEventListener("click", userFunction);
function userFunction(){
    colors.push(prompt("chose bacground color:"));
    body.style.background = colors [colors.length-1];
}


