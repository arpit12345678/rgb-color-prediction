numSquares=6;
var colors =generaterandom(numSquares);
//document.write("hello");
var squares = document.querySelectorAll(".square");
var p=pickedColor1();
var colordisplay=document.getElementById("color");
var messg=document.querySelector("#messg");
var h1=document.querySelector("h1");
var butt=document.querySelector("#reset");
var easy1=document.querySelector("#easy");
var hard1=document.querySelector("#hard");
colordisplay.textContent=p;

easy1.addEventListener("click",function(){
    //alert("easy");
    hard1.classList.remove("selected");
    easy1.classList.add("selected");
    numSquares=3;
    colors =generaterandom(numSquares);
    p=pickedColor1();
    colordisplay.textContent=p;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        squares[i].style.background=colors[i];
        else
        squares[i].style.display="none";
    }

});
hard1.addEventListener("click",function(){
    hard1.classList.add("selected");
    easy1.classList.remove("selected");

    numSquares=6;
    colors =generaterandom(numSquares);
    p=pickedColor1();
    colordisplay.textContent=p;
    for(var i=0;i<squares.length;i++)
    {
        //if(colors[i])
        squares[i].style.background=colors[i];
       // else
        squares[i].style.display="block";
    }
});
butt.addEventListener("click",function(){
    butt.textContent="New Colors";
    colors =generaterandom(numSquares);
    p=pickedColor1();
    colordisplay.textContent=p;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];
    }
    messg.textContent="";
    //colordisplay.textContent=p;
    h1.style.background="steelblue";
    //alert("reset button");
});
//alert(pickedColor);
for(var i = 0 ; i < squares.length; i++)
{
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
     
       var c = this.style.background;
       //var r=pickedColor;
       //alert(c);
       //alert(pickedColor);
       if(c === p)
       {
        messg.textContent="Correct!";
        changecolor(c);
        h1.style.background=c;
        butt.textContent="Play Again?";
       }
       else
       {
           this.style.background=("#232323");
           messg.textContent="Try Again";
           butt.textContent="New Colors";
         //  alert("wrong");
       }
   });
}
function changecolor(color){
for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=color;
}
}
function pickedColor1(){
    var random= Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generaterandom(num){
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return "rgb("+ r + ", "+ g +", " + b +")";
 }