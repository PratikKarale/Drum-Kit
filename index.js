//creating array of all the buttons

var buttons = document.querySelectorAll(".drum");

//looping through all the buttons and adding an eventListener

for(var i = 0; i<buttons.length; i++){

    //this is evnetListener when we clicked by mouse

    buttons[i].addEventListener("click", function(){

        var innerHTMLcontent = this.innerHTML;
        makeSound(innerHTMLcontent);
        addAnimation(innerHTMLcontent);
    })

    
}

// adding event listener by keyboard keys
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

// this function will be triggered when button is clicked or key is pressed

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    }
}

//adding animation to the button

function addAnimation(currentKey){

    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 150);

}
