

let user=confirm("shall we play {'Rock, Paper,Scissor}");

if (user){
    let playerchoice=prompt("Enter Rock, Paper or Scissor");
    if (playerchoice){
        let palyer=playerchoice.trim().toLocaleLowerCase();
        if (palyer==="rock" || 
            palyer==="paper" ||
            palyer==="scissor"
        ){
            let computer=Math.floor(Math.random()*3+1);
            let computerchoices=  computer===1 
            ?"rock"
            :computer===2 
            ?"paper"
            : "scissor";

            let result=
            palyer===computerchoices
            ?"tie"
            :palyer==="rock" && computerchoices==="paper"
            ?`player:${palyer}\n computer:${computerchoices}\ncomputer winz `
            :palyer==="paper" && computerchoices==="scissor"
            ?`player:${palyer}\n computer:${computerchoices}\ncomputer winz`
            :palyer==="scissor" && computer==="rock"
            ?`player:${palyer}\n computer:${computerchoices}\n computer Winz`
            :`player:${palyer}\n computer:${computerchoices}\n player winz` ;
            alert(result)
            
            let playagain=confirm("Play Again");
            playagain? location.reload():alert("thanks for playing") ;

        }else{
            alert("you did't enter rock, paper, scissor")
        }

    }else{
        alert("you changed your mind! play next time")
    }
    
}else{
    alert("let's play next time");
}



