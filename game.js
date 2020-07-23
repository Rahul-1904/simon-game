var buttoncolors = ["red","blue","green","yellow"];
var pattern = [];

function audioplay(randomColor){
    if(randomColor=="red"){
        var audio = new Audio("sounds/red.mp3");
        audio.play();
    }else if(randomColor=="blue"){
        var audio = new Audio("sounds/blue.mp3");
        audio.play();
    }else if(randomColor=="green"){
        var audio = new Audio("sounds/green.mp3");
        audio.play();
    }else{
        var audio = new Audio("sounds/yellow.mp3");
        audio.play();
    }
}

    var userClicked = [];

     $(".btn").click(function(){
         $(this).fadeOut(100).fadeIn(100);
         var userrclickedButton = $(this).attr("id");
         audioplay(userrclickedButton);
         userClicked.push(userrclickedButton);
         checkAnswer(userClicked.length-1);
     })

     function checkAnswer(current){
     if(userClicked[current]===pattern[current]){
         console.log("success");
         if(userClicked.length === pattern.length){
          setTimeout(function(){
              nxtsequence();
          },1000);
         }
     }else{
         console.log("wrong");
         var audio = new Audio("sounds/wrong.mp3");
         audio.play();
         $("#level-title").text("wrong pattern ,press any key to restart");
         level = 0;
         pattern = [];
       }
     }
     
var level = 0;
function nxtsequence(){
   userClicked = [];
    const c= Math.floor(Math.random()*4);
    
    const randomColor = buttoncolors[c];
    
        $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        audioplay(randomColor);
    
    pattern.push(randomColor);
    
    level++;
    $("#level-title").text("level "+level);

}
function start(){
   $("#level-title").text("level "+level);
    nxtsequence();
}

$(document).on("keypress",function(){
    if(pattern.length==0){
    start();
    }
});

