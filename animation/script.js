const el=document.getElementById('myCanvas');
const ctx=el.getContext('2d');
ctx.strokeStyle='#FFFF99';
ctx.fillStyle='#FFFF99';
// ctx.beginPath();
// ctx.arc(200,300,50,0,Math.PI*2);
// ctx.fill();

x = 200;
y1 = 300;
r1 = 50;
scale = 0.7;

drawSnowman(x,y1,r1,scale);

function drawSnowman(x,y1,r1,scale){
    ctx.beginPath();
    ctx.arc(x,y1,r1,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    const r2 = r1*scale, y2 = y1 - r1 - r2;
    ctx.arc(x,y2,r2,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    const r3 = r2*scale, y3 = y2 - r2 - r3;
    ctx.arc(x,y3,r3,0,Math.PI*2);
    ctx.fill();

    
}

