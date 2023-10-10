var color = [
  "red",
  "green",
  "cyan",
  "black",
  "voilet",
  "blue",
  "yellow",
  "purple",
  "orange",
  "lightgreen",
  "lemon",
  "LawnGreen",
  "Indigo",
  "Fuchsia",
  "FireBrick",
  "DodgerBlue",
];
let changeColor =document.getElementById("change-color")
changeColor.addEventListener("click",colorChange);
var index=0;
function colorChange(){
    // if(index < color.length){
       
    //     index++;
    //     // console.log(index);
    // }else{
    //     index=0;
    // }
    document.getElementById("circle").style.backgroundColor=color[(Math.floor(Math.random() * color.length))];
}
let changeShape=document.getElementById("change-shape")
changeShape.addEventListener("click",shapeChange);
var counti=1;
function shapeChange(){
    if(counti){
        var x=document.getElementsByClassName("triangle")[0];
        // console.log(x);
        x.className ="square";
        
        counti=0;
        
    }else{
        var x=document.getElementsByClassName("square")[0];
        x.className ="triangle";
        counti=1;
    }
}

