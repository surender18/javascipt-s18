//game
let playgame =confirm("shall we play rock,paper,scissor game?");
if(playgame){
    let playerChoice =prompt("please enter rock ,paper scissors");
if(playerChoice){
let playerOne=playerChoice.trim().toLowerCase();
if(playerOne === "rock"|| playerOne ==="paper"|| playerOne==="scissors"){
 let computerchoice =Math.floor(Math.random()*3+1);
 let computer = computerchoice === 1? "rock"
 : computerchoice=== 2? "paper"
 :"scissors";
 let result = playerOne === computer
 ? "tie game"
 :playerOne === "rock"&&computer === "paper"
 ? 'playerOne: ${playerOne}\n computer: $ {computer}\nComputer wins'
 :playerOne ==="paper"&& computer === "scissors"
 ?'playerOne:${playerOne}\n computer:${computer}\n computer wins'
 :playerOne ==="scissors"&& computer === "rock"
 ?'playerOne:${playerOne}\n computer:${computer}\n computer wins'
 : 'playerOne:${playerOne}\n computer:${computer}\n playerOne wins';
 alert(result);
let playagain =confirm("play ahain?");
playagain ? location.reload():alert("ok thanks for playing");
}else{
    alert("you didn't enter rock,paper,scissors");
}
}   else{
    alert(" i think u doesn't want to play");
} 

}else{
    alert("ok no problem");
}