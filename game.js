let ComputerChoice;
let UserChoice;
console.log("Hello world");
UserChoice = prompt("What's your choice?");
UserChoice = userSelection(UserChoice);
ComputerChoice = getComputerChoice(); //Changes to lowercase to compare the strings
console.log(round(UserChoice, ComputerChoice));

console.log(`User chose: ${UserChoice}`);
console.log(`Computer chose: ${ComputerChoice}`);
console.log(winner(round(UserChoice, ComputerChoice)));

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
function winner(a){
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

