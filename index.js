
function drumkit(stroke){

    switch(stroke){
        case "w":{
            var audio=new Audio("./sounds/tom-1.mp3");
       audio.play();
        }
        break;
        case "a":{
            var audio=new Audio("./sounds/tom-2.mp3");
       audio.play();
        }
        break;
        case "s":{
            var audio=new Audio("./sounds/tom-3.mp3");
       audio.play();
        }
        break;
        case "d":{
            var audio=new Audio("./sounds/tom-4.mp3");
       audio.play();
        }
        break;
        case "j":{
            var audio=new Audio("./sounds/snare.mp3");
       audio.play();
        }
        break;
        case "k":{
            var audio=new Audio("./sounds/crash.mp3");
       audio.play();
        }
        break;
        case "l":{
            var audio=new Audio("./sounds/kick-bass.mp3");
       audio.play();
    
        }
        default:
       }
    

}

function animation(kp){
    document.querySelector("."+kp).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+kp).classList.remove("pressed");
    },100);
}

var i=0;
for(i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

  var b=this.innerHTML;
    drumkit(b);
    animation(b);

   
});

}



document.addEventListener("keydown",(event)=>{
    const keyName=event.key;
   drumkit(keyName);
   animation(keyName);
    

});
