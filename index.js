const canvasPlot=document.getElementById("canvas_plot");
const ctx=canvasPlot.getContext("2D");

ctx.fillRect(0,0,100,100);
ctx.fillStyle="#0000ff";
ctx.fillRect(100,100,200,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(400,400);
ctx.stroke();

ctx.strokeStyle='#ff0000'
ctx.moveTo(320,300);
ctx.lineTo(420,400);
ctx.stroke();
