let ComputerChoice;
let UserChoice;
let score;
console.log("ROCK PAPER SCISSORS");
console.log(game());


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3); //Randomly asigns a value between 0 and 2, 0=rock 1 = paper 2 = scissors
    if (choice===0){
        choice = "rock";
    }else if (choice===1){
        choice = "paper";
    }else choice = "scissors";
    return choice;
}
function userSelection(selection){
    selection = selection.toLowerCase();
    return selection;
    
}
function round(user, computer){//Returns a value according to the winner
    if(user==="rock" && computer==="scissors"){
        return 0;
    }else if(user==="paper" && computer==="rock"){
        return 1;
    }else if(user==="scissors" && computer==="paper"){
        return 2;
    }else if(computer==="rock" && user==="scissors"){
        return 3;
    }else if(computer==="paper" && user==="rock"){
        return 4;
    }else if(computer==="scissors" && user==="paper"){
        return 5;
    }
}
function RoundWinner(a){//acoording to the value returned on the function "round()" assings a message to display the winner
    switch(a){
    case 0:
        return "User won,rock beats paper";
    break;
    case 1:
        return "User won, paper beats rock";
    break;
    case 2:
        return "User won, scissors beats paper";
    break;
    case 3:
        return "Computer won rock beats paper";
    break;
    case 4:
        return "Computer won paper beats rock";
    break;
    case 5:
        return "Computer won scissors beats paper"
    break;

    default:
        return "tie";
    }
}
function game(){
    let UserWinCount=0;
    let ComputerWinCount=0;
    let score;
    for(let i=0; i<5; i++){
    console.log(`Round ${i + 1}`);
    UserChoice = prompt("What's your choice?");
    UserChoice = userSelection(UserChoice);//Changes to lowercase to compare the strings
    ComputerChoice = getComputerChoice(); 
    console.log(`User chose: ${UserChoice}`);
    console.log(`Computer chose: ${ComputerChoice}`);
    score = round(UserChoice, ComputerChoice);
    console.log(RoundWinner(round(UserChoice, ComputerChoice)));
    if(score < 3){
        UserWinCount++;
    }else if (score <=5 ){
        ComputerWinCount++;

    }else {//if tie both adds
        UserWinCount++;
        ComputerWinCount++;
    }
    console.log(`score user: ${UserWinCount} computer: ${ComputerWinCount}`);
    console.log('');
    }
    if(UserWinCount>ComputerWinCount){
        return "User wins";
    }else if(UserWinCount<ComputerWinCount){
        return "Computer wins"
    }else return "its a tie"
}

