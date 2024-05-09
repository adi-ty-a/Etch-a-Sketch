let noofblock=16;
const grid = document.querySelector("#container");
//button 
const button = document.querySelector("#noofsquare");
button.addEventListener("click", () => {
    do{
    noofblock = prompt("enter the no of block per side under 100");
    }while(noofblock == 100);
    removediv();
    creatediv();
});

//remove 
function removediv(){
let main = document.querySelectorAll(".subdiv")
main.forEach((box) => {
    box.remove();
});
};

// 16*16 div to container;
function creatediv(){
for(let i=1;i<=noofblock;i++){
    let subdiv = document.createElement("div");
    subdiv.classList.add("subdiv");
    for(let j=1 ;j<=noofblock;j++){
        let div= document.createElement("div");
        div.classList.add("box");
        subdiv.appendChild(div);
    }
    grid.appendChild(subdiv);
}
// color
const newdiv = document.querySelectorAll(".box");

newdiv.forEach((button) => {
button.addEventListener("mouseover", () => {

    let clr = window.getComputedStyle(button);
    let clrbox = parseFloat(clr.opacity);
    clrbox += 0.1;
    button.style.opacity = clrbox;
});
});
};
// 1 cakk for grid 
creatediv();

