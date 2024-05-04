const grid = document.querySelector("#container");

for(let i=0;i<=16;i++){
    let subdiv = document.createElement("div");
    subdiv.classList.add(i);
    
    for(let j=0 ;j<=16;j++){
        let div= document.createElement("div");
        div.classList.add("box");
        subdiv.appendChild(div);
    }
    grid.appendChild(subdiv);
}