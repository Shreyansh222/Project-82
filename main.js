canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="Empty";
color="aqua";
with_of_the_line=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
radius=document.getElementById("radius").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mouseleave(e)
{
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown")
{
console.log("Last position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=with_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
ctx.stroke();
}
}
function Clear_area()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}