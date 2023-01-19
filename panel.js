function go (argument) {
	
	var ctn = document.getElementById("left");
	var btn_top = document.getElementById("btn_top");

	var s = ctn.className==="min" ? "max":"min";
	var b = btn_top.className==="btn_top_rec" ? "btn_top_ext" : "btn_top_rec";
	
	console.log(s +" "+b);
	ctn.className = s;
	btn_top.className= b;
}