//Player Name

var player1 = "Player 1";
var player2 = "Player 2";


// Function to Change Player names

function editNames() {
    player1 = prompt('Change Player 1 name');
    player2 = prompt("Change Player 2 name");
    
    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;
}


// Function to Roll Dice

function rollTheDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);
    
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1 + " Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML =  player2 + " Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    
}