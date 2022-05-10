var x = 0;
var y = 0;

 draw_circle= "";
draw_rect= "";


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    recognition.start();
}

recognition.onresult= function (event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech Has Been Recognized As : " + content;
    
    
    if(content=="circle")
    {
        x = Math.floor(Math.random()  * 850);
        y = Math.floor(Math.random() *550);
        document.getElementById("status").innerHTML = "Started Drawaing Circle";
        draw_circle = "set";

    }

    if(content=="rectangle")
    {
        x = Math.floor(Math.random()  * 850);
        y = Math.floor(Math.random() *550);
        document.getElementById("status").innerHTML = "Started Drawaing Circle";
        draw_rect = "set";
        
    }
}


function setup()
{
    canvas= createCanvas(900,600);
}

function draw()
{
  if(draw_circle=="set")
  {
      circle(x,y,40,);
      document.getElementById("status").innerHTML = "Circle Is Drawn";
      draw_circle="";

  }

  if(draw_rect=="set")
  {
      rect(x,y,70,50);
      document.getElementById("status").innerHTML = "Rectangle Is Drawn";
      draw_rect=""; 
  }
}    



