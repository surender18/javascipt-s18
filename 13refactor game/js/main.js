
// game
let playgame =confirm("shall we play rock,paper,scissor game?");
if(playgame){ 
    while(playgame){
    const playerChoice =prompt("please enter rock ,paper scissors");
if(playerChoice || playerChoice ===""){
const playerOne=playerChoice.trim().toLowerCase();
if(playerOne === "rock"|| playerOne ==="paper"|| playerOne==="scissors"){
 const computerchoice =Math.floor(Math.random()*3);
 const rpsarray =["rock","paper","scissors"];
const computer =rpsarray[computerchoice];

 const result = playerOne === computer
 ? "tie game"
 :playerOne === "rock"&&computer === "paper"
 ? 'playerOne: ${playerOne}\n computer: $ {computer}\nComputer wins'
 :playerOne ==="paper"&& computer === "scissors"
 ?'playerOne:${playerOne}\n computer:${computer}\n computer wins'
 :playerOne ==="scissors"&& computer === "rock"
 ?'playerOne:${playerOne}\n computer:${computer}\n computer wins'
 : 'playerOne:${playerOne}\n computer:${computer}\n playerOne wins';
 alert(result);
 playagain =confirm("play ag ain?");
 if(!playgame) alert("ok,thanks for playing.");
 continue;}
 else{


    alert("you didn't enter rock,paper,scissors");
    continue;
}
}   else{
    alert(" i think u doesn't want to play");
    break;
}

} 

}else{
    alert("ok no problem");
}