let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newGamebtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let body=document.querySelector("body");
let mode=document.querySelector(".mode");
let heading=document.querySelector(".white-h");

let count=0;

let playerO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame=()=>{
    playerO=true;
    enablebtns();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(playerO)
        {
            box.innerText="O"
            playerO=false;
            
        }
        else{
            
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;

        checkWinner();
        
    });

});


const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
}




   

const checkWinner=()=>{
    for(let patter of winPatterns){
        let posVal1=boxes[patter[0]].innerText;
        let posVal2=boxes[patter[1]].innerText;
        let posVal3=boxes[patter[2]].innerText;

        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                // alert(`${posVal1} is Winner!`);
                showWinner(posVal1);
                
            }
        }
    }
};

newGamebtn.addEventListener("click",(resetGame));
resetbtn.addEventListener("click",resetGame);



let currMod="light";

mode.addEventListener("click",()=>{
    if(currMod==="light"){
    currMod="dark";
    mode.classList.remove("mode");
    mode.classList.add("dark-mode");
    body.classList.remove("body1");
    body.classList.add("dark-body");
    boxes.forEach((box)=>{
        box.classList.add("dark-box");
        box.classList.remove("white-box");
    })
    resetbtn.classList.add("dark-reset-btn");
    resetbtn.classList.remove("reset-btn");
    heading.classList.add("dark-h");
    heading.classList.remove("white-h");
    newGamebtn.classList.add("dark-new-btn");
    newGamebtn.classList.remove("new-btn");
    msg.classList.remove("msg");
    msg.classList.add("dark-msg");

   
    }
    else{
        mode.classList.remove("dark-mode");
        mode.classList.add("mode");
        body.classList.add("body1");
        body.classList.remove("dark-body");
        boxes.forEach((box)=>{
            box.classList.remove("dark-box");
            box.classList.add("white-box");
        })
        resetbtn.classList.remove("dark-reset-btn");
        resetbtn.classList.add("reset-btn");
        heading.classList.remove("dark-h");
        heading.classList.add("white-h");
        newGamebtn.classList.remove("dark-new-btn");
        newGamebtn.classList.add("new-btn");
        msg.classList.add("msg");
        msg.classList.remove("dark-msg");

        currMod="light";
    }
})

