canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
color = "Blue";

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 2;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();
color = "Yellow";

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
color = "Black";

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 2;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();
color = "Green";

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 2;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();
color = "Red";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

function clear_circle(){
   ctx.clearRect(0,0,canvas.width,canvas.height);
}
