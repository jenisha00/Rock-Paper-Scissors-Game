let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreboard_div= document.querySelector(".scoreboard");
const result_p1= document.querySelector(".result > p:nth-child(1)");
const result_p2= document.querySelector(".result > p:nth-child(2)");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function converttoword(letter){
	if (letter=="r") return "Rock";
	if (letter=="p") return "Paper";
	else return "Scissors";  
}
function win(userChoice, computerChoice){
	const smalluserword= "user".fontsize(2).sub();
	const smallcompword= "comp".fontsize(2).sub();
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;	
	result_p1.innerHTML = `${converttoword(userChoice)}${smalluserword} beats ${converttoword(computerChoice)}${smallcompword}`;
	result_p2.innerHTML = "You <b>WON!</b>";
	document.getElementById(userChoice).classList.add('green-glow');
	if(computerChoice == "r") document.getElementById('rock').classList.add('red-glow');	
	if(computerChoice == "p") document.getElementById('paper').classList.add('red-glow');
	if(computerChoice == "s") document.getElementById('scissors').classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},700);
	setTimeout(function(){
		if(computerChoice == "r") document.getElementById('rock').classList.remove('red-glow');	
		if(computerChoice == "p") document.getElementById('paper').classList.remove('red-glow');
		if(computerChoice == "s") document.getElementById('scissors').classList.remove('red-glow');
	},700);
}

function lose(userChoice, computerChoice){
	const smalluserword= "user".fontsize(2).sub();
	const smallcompword= "comp".fontsize(2).sub();
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;	
	result_p1.innerHTML = `${converttoword(userChoice)}${smalluserword} loses to ${converttoword(computerChoice)}${smallcompword}`;
	result_p2.innerHTML = "You <b>LOST!</b>";
	document.getElementById(userChoice).classList.add('red-glow');
	if(computerChoice == "r") document.getElementById('rock').classList.add('green-glow');	
	if(computerChoice == "p") document.getElementById('paper').classList.add('green-glow');
	if(computerChoice == "s") document.getElementById('scissors').classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},700);
	setTimeout(function(){
		if(computerChoice == "r") document.getElementById('rock').classList.remove('green-glow');	
		if(computerChoice == "p") document.getElementById('paper').classList.remove('green-glow');
		if(computerChoice == "s") document.getElementById('scissors').classList.remove('green-glow');
	},700);
}

function draw(userChoice, computerChoice){
	const smalluserword= "user".fontsize(2).sub();
	const smallcompword= "comp".fontsize(2).sub();
	result_p1.innerHTML = `${converttoword(userChoice)}${smalluserword} equals ${converttoword(computerChoice)}${smallcompword}`;
	result_p2.innerHTML = "Its a <b>DRAW!</b>";
	document.getElementById(userChoice).classList.add('gray-glow');
	if(computerChoice == "r") document.getElementById('rock').classList.add('gray-glow');	
	if(computerChoice == "p") document.getElementById('paper').classList.add('gray-glow');
	if(computerChoice == "s") document.getElementById('scissors').classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},700);
	setTimeout(function(){
		if(computerChoice == "r") document.getElementById('rock').classList.remove('gray-glow');	
		if(computerChoice == "p") document.getElementById('paper').classList.remove('gray-glow');
		if(computerChoice == "s") document.getElementById('scissors').classList.remove('gray-glow');
	},700);
}

function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener("click", function(){
		game("r");
	})
	paper_div.addEventListener("click", function(){
		game("p");		
	})
	scissors_div.addEventListener("click", function(){
		game("s");
	})
}

main();