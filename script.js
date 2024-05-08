const grid = document.querySelector("#container");

// 16*16 div to container;
for(let i=0;i<=16;i++){
    let subdiv = document.createElement("div");
    subdiv.classList.add("subdiv");
    
    for(let j=0 ;j<=16;j++){
        let div= document.createElement("div");
        div.classList.add("box");
        subdiv.appendChild(div);
    }
    
    grid.appendChild(subdiv);
}