var userScore =0;
var computerScore =0;
var userScore_span = document.querySelector("#user-score");
var ComputerScore_span = document.querySelector("#computer-score");
var result_div = document.querySelector("#result");
var scoreboard = document.querySelector(".score-board");
var rock_div = document.querySelector("#r");
var paper_div = document.querySelector("#p");
var scissor_div = document.querySelector("#s");
var resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "Score verdict";
});

function getComputerChoice(){
 const choice = ['r','p','s'];
 const randomNumber = Math.floor(Math.random()*3);
 return choice[randomNumber];
}
function convertToWord(x)
{
  if(x === 'r')
  return "Rock";
  if(x === 'p')
  return "Paper";

  return "Scissors";
}
function win(userChoice,computerChoice){
  const userChoice_div = document.getElementById(userChoice);
 userScore++;
 userScore_span.innerHTML = userScore;
 ComputerScore_span.innerHTML = computerScore;
 result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
   computerChoice
 )}. You win🔥`;

  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}
function lost(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}. You lost! 👎`;
  
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}
function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a draw`;
  
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice)
{
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
   case "rs":
   case "pr":
   case "sp":
     win(userChoice,computerChoice);
     break;
   case "sr":
   case "rp":
   case "ps":
     lost(userChoice, computerChoice);
     break;
   case "rr":
   case "ss":
   case "pp":
     draw(userChoice,computerChoice);
     break;
 }
 
}

function main(){
rock_div.addEventListener('click',function(){
 game("r");
})
paper_div.addEventListener('click',function()
{
 game("p");
})
scissor_div.addEventListener("click", function(){
  game("s");
});
}



main();