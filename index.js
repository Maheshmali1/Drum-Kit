
var drums = document.querySelectorAll(".drum");
var drumLength = drums.length;

function playSound(code){
    switch(code){
        case "w":
            var audio  =new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio  =new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "s":
            var audio  =new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio  =new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio  =new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio  =new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio  =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            alert("wrong key pressed!");
    }
}

// button animation function 
function buttonAnimation(key){
    var activeKey = document.querySelector("."+key);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}

// screen event 

for(var i=0;i<drumLength;i++){
    drums[i].addEventListener("click",function(){
        var drumName = this.innerHTML;
        playSound(drumName);
        buttonAnimation(drumName);  
    })
}

// keyboard press event 
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})




