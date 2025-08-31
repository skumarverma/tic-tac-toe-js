let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true //playerO,playerX
const winPatterns =
[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame =()=>{//for start new game 
    turnO=true;
    enablebox();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            box.style.color = "blue"; 
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color = "red";
            turnO=true;

        }
        box.disabled = true;
        checkWinner();
    });
});

let enablebox =()=>{
for(box of boxes)
{
    box.disabled = false;
    box.innerText="";// for empty text after reset or start button clicked
    box.color="";
}
};



let boxdisabled=()=>{//after winner 1 person disable all buttons
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");// winner text hide 
    boxdisabled(); // not clickable 
}


const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);//call function to show winner
            }
            
        }
        
    }

};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);