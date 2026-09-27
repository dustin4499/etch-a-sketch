const container = document.querySelector("#container");
const gridAmount = document.querySelector("#gridBtn");

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
};

function createGrid(amount){
    for(let i = 0; i < (amount * amount); i++){
     let myCell=document.createElement("div");
     
        myCell.style.flexBasis= `${100 / amount}%`;
        myCell.classList= "cell";
        myCell.style.backgroundColor = getRandomRgb();
        myCell.style.outline= "1px solid";
        container.appendChild(myCell);
        
    }
}

createGrid(16);

gridAmount.addEventListener("click", () =>{
    let input =prompt("What size grid would you like!");
    console.log(input);
    input = Number(input);
    console.log(input);
    container.querySelectorAll(".cell").forEach(el => el.remove());
    createGrid(input);
})
container.addEventListener('mouseover', (e) =>{
  e.target.style.backgroundColor = "blue";
  

})
container.addEventListener('mouseout', e =>{
    setTimeout(() =>{e.target.style.backgroundColor = getRandomRgb();}, 300);
    
})