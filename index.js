// Detecting button pressed

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

});

  }


document.addEventListener("keydown", function(event){

    makeSound(event.key);

});

// Detecting keyboard pressed

function makeSound(key) {
  switch (key) {
   case "s":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
   break;

   case "a":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
   break;

   case "y":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
   break;

   case "u":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
   break;

   case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
   break;

   case "p":
      var crash = new Audio("crash.mp3");
      crash.play();
   break;

   case "l":
      var kickBass = new Audio("kick-bass.mp3");
      kickBass.play();
   break;

    default: console.log(buttonInnerHTML);
  }

}
