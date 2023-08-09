var randomNumber1 = randomNumber();

function randomNumber() {

    var fullNum;
    
    fullNum =  Math.random()*(7-1) + 1;
    
     return Math.trunc(fullNum)
}

var randomDiceImage="dice" + randomNumber1 +".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelector(".img1");

image1.setAttribute("src",randomImageSource)


var randomNumber2 = randomNumber();

var randomDiceImage="dice" + randomNumber2 +".png";

var randomImageSource = "images/"+randomDiceImage;

var image2 = document.querySelector(".img2");

image2.setAttribute("src",randomImageSource);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
    
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
else(
    document.querySelector("h1").innerHTML = "it's Draw"
)