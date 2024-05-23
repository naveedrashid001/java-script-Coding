const container =document.getElementById("container")
const btn=document.querySelector("button");

function ChangeBackgroundColor(){
    container.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    
    
}
setInterval(function(){
    container.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    console.log(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)
},3000)

btn.addEventListener("click",ChangeBackgroundColor)