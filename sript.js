const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const disableBoxes = () => {
  box.forEach((btn) => btn.disabled = true);
};
let resetBtn = document.querySelector(".reset");

const resetGame = () => {
  turn0 = true;
  box.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
};


let box = document.querySelectorAll(".box");
let turn0= true;
box.forEach((btn)=>{
btn.addEventListener("click",()=>{
  if(turn0){
    btn.innerText="O";
    turn0=false;
  }else{
    btn.innerText="X";
    turn0=true;
  }
  btn.disabled = true;
  checkWinner();
});
});
const checkWinner = () =>{
  for (let pattern of winPatterns){
  let pos1 =box[pattern[0]].innerText; 
  let pos2 =box[pattern[1]].innerText; 
  let pos3 =box[pattern[2]].innerText; 
  
  if(pos1!=""&& pos3!=""&& pos2!=""){
    if (pos1==pos2&&pos2==pos3){
      alert(pos1 + " " +"is Winner");
      disableBoxes();
    }
  }
}
};
resetBtn.addEventListener("click", resetGame);
 