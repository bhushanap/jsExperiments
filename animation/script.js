const el=document.getElementById('myCanvas');
const ctx=el.getContext('2d');
ctx.strokeStyle='#FFFF99';
ctx.fillStyle='#FFFF99';
ctx.beginPath();
ctx.arc(200,300,50,0,Math.PI*2);
ctx.fill();

