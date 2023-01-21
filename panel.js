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
	:a.classList.add('label-menu')

	console.log(label[0].classList);
})

	ctn.className = s;
	btn_top.className= b;
	
}
function active (target) {

	const c = target.children[0].children[0].id;
	console.log(c);
}
