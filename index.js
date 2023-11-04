var num_drum=document.querySelectorAll(".drum").length;
for(var i=0;i<num_drum;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",Clicked);
}//thus applying event to only the buttons with class name drum

$("body").keypress(function(event){
    makesound(event.key);
    buttonanimation(event.key);
});


function Clicked()
{
    var letterr=this.innerHTML;
    makesound(letterr);
    buttonanimation(letterr);
}

function makesound(letter)
{
    switch(letter)
    {
        case "w":
            var aud=new Audio("sounds/crash.mp3");
        break;
        case "a":
            var aud=new Audio("sounds/kick-bass.mp3");
        break;
        case "s":
            var aud=new Audio("sounds/snare.mp3");
        break;
        case "d":
            var aud=new Audio("sounds/tom-1.mp3");
        break;
        case "j":
            var aud=new Audio("sounds/tom-2.mp3");
        break;
        case "k":
            var aud=new Audio("sounds/tom-3.mp3");
        break;
        case "l":
            var aud=new Audio("sounds/tom-4.mp3");
        break;
        default:
            console.log(letter);
    }
    aud.play();

}
function buttonanimation(clicked){
    var activeButton=document.querySelector("."+clicked);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},60);
}

