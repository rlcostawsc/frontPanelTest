function go (argument) {
	
	var p = document.getElementById("left");
	var b = document.getElementById("btn");
	var s = p.className==="min" ? "max":"min";
	b.innerText==="extender"?b.innerText="recolher":b.innerText="extender";
	
	console.log(b.innerText);
	p.className = s;
}