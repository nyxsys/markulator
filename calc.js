
var current = "";
var last = null;
var final = 0;
var sounds= {};
var lastOp = "";

var setup = function(){
    for(var i = 0; i <= 9; i++){
        var button = $("<button>"+ i + "</button>").addClass("number"+i);
        button.val(i)

        $(".buttons").append(button);

        if(i%3 == 0){
            $(".buttons").append("<br>");
        }
        

        
    }
    
    for(var n = 0; n <= 9; n++){
        var numAudio = document.createElement("audio");
        numAudio.setAttribute("src","clips/"+n+".ogg");
        sounds[n] = numAudio;
    }
    
    $(".buttons").append("<br>");
    
    var ops = ["plus", "minus"];
    for( var op in ops){
        var button = $("<button>"+ops[op]+"</button>").addClass(ops[op]);
        $(".buttons").append(button);
        
        var opAudio = document.createElement("audio");
        opAudio.setAttribute("src","clips/"+ops[op]+".ogg");
        sounds[ops[op]] = opAudio;
    }
    
    $(".buttons").append("<br>");
    var enter = $("<button>enter</button>").addClass("enter");
    $(".buttons").append(enter);
    
    var enterAudio = document.createElement("audio");//make this an array of the yays
    enterAudio.setAttribute('src','clips/yay2.ogg');
    
    
    //enterAudio.volume= 1;
    sounds["enter"] = enterAudio;
    
    var errAudio = document.createElement("audio");
    errAudio.setAttribute('src','clips/boo.ogg');
    sounds["err"] = errAudio;
}



var numTap = function(num){
    current = current + num
    console.log(current);
    
    $("#curValue").text(current);
}
var op = function(optype){
    calculate();
    last = current;
    current = "";
    lastOp = optype;
    $("#curValue").text(current);

}
var calculate = function(){

    if(last){
        if(final == 0){
            final = parseInt(last);
        }
        if(lastOp == "plus"){
            final +=  parseInt(current);
            console.log(final)
        }
        else if(lastOp == "minus"){
            final -=  parseInt(current);
        }
    }
}


var finish = function(){
    calculate();
    current = "";
    final = "" + final;
    
    var i=0;
    
    var loop = setInterval(function(){
        if(!isNaN(final[i])){
        
            console.log(final[i]);
            sounds[final[i]].currentTime=0;
            sounds[final[i]].play();
            i++;
            if(i>=final.length){
                clearInterval(loop);
            }
        }
        else{
            sounds["err"].currentTime=0;
            sounds["err"].play();
            clearInterval(loop);
        }
        
    },1500)
    
    
    
    

    $("#curValue").text(final);
}



function listeners(){
    $(".enter").on("click", function(){
        finish();
        //console.log("enter");
        sounds["enter"].currentTime = 0;
        sounds["enter"].play();
    });
    $(".plus").on("click", function(){
       op("plus");
       sounds["plus"].currentTime = 0;
       sounds["plus"].play();
        
    });
    $(".minus").on("click", function(){
        op("minus");
        sounds["minus"].currentTime = 0;
        sounds["minus"].play();
    })
}




function numlisteners(){
    $(".number1").on("click",function(){
            
            numTap(1);
            sounds["1"].currentTime = 0;
            sounds["1"].play();
    });
    $(".number2").on("click",function(){
            
            numTap(2);
            sounds["2"].currentTime = 0;
            sounds["2"].play();
            
    });
    $(".number3").on("click",function(){
            
            numTap(3);
            sounds["3"].currentTime = 0;
            sounds["3"].play();
    });  
    $(".number4").on("click",function(){
            
            numTap(4);
            sounds["4"].currentTime = 0;
            sounds["4"].play();
    });  
    $(".number5").on("click",function(){
            
            numTap(5);
            sounds["5"].currentTime = 0;
            sounds["5"].play();
    });  
    $(".number6").on("click",function(){
            
            numTap(6);
            sounds["6"].currentTime = 0;
            sounds["6"].play();
    });  
    $(".number7").on("click",function(){
            
            numTap(7);
            sounds["7"].currentTime = 0;
            sounds["7"].play();
    });  
    $(".number8").on("click",function(){
            
            numTap(8);
            sounds["8"].currentTime = 0;
            sounds["8"].play();
    });  
    $(".number9").on("click",function(){
            
            numTap(9);
            sounds["9"].currentTime = 0;
            sounds["9"].play();
    });  
}




$(document).ready(function(){
    setup(); 
    numlisteners();
    listeners();

});