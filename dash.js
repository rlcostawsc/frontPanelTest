let canvas = document.getElementById('shape');
let ctx = canvas.getContext('2d');
ctx.lineWidth=10;
ctx.shadowColor = "red";
ctx.shadowBlur = 35;
let a = 0.036;
let b =1.5;
let c =0;
let d = 0
ctx.arc(100, 75, 50, 1.5 * Math.PI, 4.73);
ctx.stroke();


function mais () {
	ctx.beginPath();
	ctx.clearRect(0, 0, 300, 300);
	a = a + 0.01;
	c = b + a;
	d = c*Math.PI;

	ctx.arc(100, 75, 50, 1.5 * Math.PI, d);
	if(c>3.5) a =0.036;
	console.log(d)	
	ctx.stroke();
	
}

function menos () {
	ctx.beginPath();
	ctx.clearRect(0, 0, 300, 300);
	a = a - 0.01;
	c = b + a;
	d = c * Math.PI;
	if(a<0.01){
		d = 4.73;
	}

	ctx.arc(100, 75, 50, 1.5 * Math.PI, d);
	if(c>3.5) a =0.036;
	console.log(c)	
	ctx.stroke();
	
}