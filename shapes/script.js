const el=document.getElementById('myCanvas');
const ctx=el.getContext('2d');
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,200);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();