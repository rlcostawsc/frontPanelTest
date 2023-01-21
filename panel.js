function go (argument) {
	
	var ctn = document.getElementById("left");
	var btn_top = document.getElementById("btn_top");
	var area = document.querySelectorAll('[id=btn-area]');
	const label = document.querySelectorAll('[id=label-menu]');

	var s = ctn.className==="min" ? "max":"min";
	var b = btn_top.className==="btn_top_rec" ? "btn_top_ext" : "btn_top_rec";
	
area.forEach((a)=>{
	var c = a.className === "btn-area-max" ? "btn-area-min":"btn-area-max";
	a.className = c;
})
label.forEach((a)=>{
	var c = a.className === "label-menu" ? "":"label-menu";
	a.className = c;
})


	console.log(s +" "+b);
	ctn.className = s;
	btn_top.className= b;
	console.log(area);
}
