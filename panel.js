function go (argument) {
	
	var ctn = document.getElementById("left");
	var btn_top = document.getElementById("btn_top");
	var area = document.querySelectorAll('[id=btn-area]');
	const label = document.querySelectorAll('[data-label=label-menu]');

	var s = ctn.className==="min" ? "max":"min";
	var b = btn_top.className==="btn_top_rec" ? "btn_top_ext" : "btn_top_rec";
	
area.forEach((a)=>{
	var c = a.className === "btn-area-max" ? "btn-area-min":"btn-area-max";
	a.className = c;
})
label.forEach((a)=>{
	a.classList.contains('label-menu') ? a.classList.remove('label-menu')
	:a.classList.add('label-menu');
})

	ctn.className = s;
	btn_top.className= b;
	
}

function active (target) {
	var btns = document.querySelectorAll("[data-btn=icon]");
	var e = target.children[0];
	btns.forEach((e)=>{
		var c = e.className;

		if(c.includes("-active")){
			console.log(c+" achei")
			var r = c.replace("-active","");
			e.className = r;
		}
	});
	e.className = e.className.concat('-active');
	target.classList.contains('btn-area-active') 
	? target.classList.remove('btn-area-active') 
	: target.classList.add('btn-area-active') 
}
