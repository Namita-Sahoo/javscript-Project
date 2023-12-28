let boxes=document.querySelectorAll(".box");
let result=document.querySelectorAll("#result");
let newbtn=document.querySelector("#newbtn");
let reset=document.querySelector("#reset");
let mgsContainer=document.querySelector(".mgsContainer");
let mgs=document.querySelector("#mgs");

let turn0= true;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const enabled =()=>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const resetGame =()=>{
       turn0=true;
        enabled();
        mgsContainer.classList.add("hide");
}

boxes.forEach((box) =>{

    box.addEventListener("click", () =>{

         if(turn0)               //player O
         {
            box.innerText= "O";
            turn0=false;
         }
         else
         {
            box.innerText= "X";         //player X
            turn0=true;
         }
         box.disable= true;
         checkWinner();
    });
});

const disabled =()=>{
    for (let box of boxes){
        box.disabled =true;
    }
};
const showWinner =(winner)=>{

    mgs.innerHTML =`Congratulation ,winner is ${winner}`;
    mgsContainer.classList.remove("hide");
    disabled();
};
const checkWinner =() =>{
    for(let pattern of winPatterns)
    {
       let pos1 = boxes[pattern[0]].innerHTML;
       let pos2 = boxes[pattern[1]].innerHTML;
       let pos3 = boxes[pattern[2]].innerHTML;

       if(pos1 != "" && pos2 !="" && pos3 !="")
       {
           if(pos1 === pos2 && pos2 == pos3)
           {
              showWinner(pos1);
           }
       }
    }
}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
