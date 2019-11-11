window.addEventListener("load", ()=>
{ const sounds=document.querySelectorAll(".sound");
const pads=document.querySelectorAll(".pads div");
  


//lets get going with the sound here


pads.forEach((pad,index) => {
    pad.addEventListener("click",function(){sounds[index].play();
    
     });
  });

});



