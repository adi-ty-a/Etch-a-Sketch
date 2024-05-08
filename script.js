let noofblock=16;
const grid = document.querySelector("#container");
//button 
const button = document.querySelector("#noofsquare");
button.addEventListener("click", () => {
    noofblock = prompt("enter the no of block per side");
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
for(let i=0;i<=noofblock;i++){
    let subdiv = document.createElement("div");
    subdiv.classList.add("subdiv");
    for(let j=0 ;j<=noofblock;j++){
        let div= document.createElement("div");
        div.classList.add("box");
        subdiv.appendChild(div);
    }
    grid.appendChild(subdiv);
}
//red color
const newdiv = document.querySelectorAll(".box");
newdiv.forEach((button) => {
button.addEventListener("mouseover", () => {
  button.style["background-color"] = "red";
});
});
};
// 1 cakk for grid 
creatediv();

