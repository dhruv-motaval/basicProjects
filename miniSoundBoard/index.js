var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        console.log(this.innerHTML);

        var buttonInnerHTML = this.innerHTML;

       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);

    });
}


document.addEventListener("keypress", function(event) {
    console.log(event.key)

    makeSound(event.key);
    buttonAnimation(event.key);

    
})

function makeSound(key) {
    switch (key) {
        case "w":
            var breach = new Audio('sounds/BreachUlt.mp3')
            breach.play();

            break;
        case "a":
            var chamber = new Audio('sounds/ChamberUlt.mp3')
            chamber.play();

            break;
        case "s":
            var deadlock = new Audio('sounds/DeadlockUlt.mp3')
            deadlock.play();

            break;
        case "d":
            var fade = new Audio('sounds/FadeUlt.mp3')
            fade.play();

            break;
        case "j":
            var omen = new Audio('sounds/OmenUlt.mp3')
            omen.play();

            break;
        case "k":
            var reyna = new Audio('sounds/ReynaUlt.mp3')
            reyna.play();

            break;
        case "l":
            var sova = new Audio('sounds/SovaUlt.mp3')
            sova.play();

            break;

        default:
            break;
    }
    
}
 
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 800);
    
}