function go (argument) {
	
	let panel_left = document.getElementById("left");
	let btn_top = document.getElementById("btn_top");
	let btn_area = document.querySelectorAll('[id=btn-area]');
	const label = document.querySelectorAll('[data-label=label-menu]');

	// open and close the left panel side
	let panel_left_display = panel_left.classList.contains("min") ? 'max':'min';
	panel_left.className = panel_left_display;


	// define the display of button left panel side
	let btn_top_display = btn_top.className==="btn_top_rec" ? "btn_top_ext" : "btn_top_rec";
	btn_top.className= btn_top_display;
	
	
	// make configurations view of exibtion of buttons to left panel side
	btn_area.forEach((area)=>{
		area.classList.contains('btn-area-min') ? 
		area.classList.replace('btn-area-min', 'btn-area-max') :
		area.classList.replace('btn-area-max', 'btn-area-min')
	})

	// make the show or hide label button the left panel side
	label.forEach((label)=>{
		label.classList.contains('label-menu') ? label.classList.remove('label-menu')
		:label.classList.add('label-menu');
	})

	
	
}

function active (target) {
	let data_btn_icon = document.querySelectorAll("[data-btn=icon]");
	let label_menu = document.querySelectorAll('[data-label=label-menu');
	let btn_area = document.querySelectorAll('[id=btn-area]');
	let btn_icon = target.children[0];
	let chldren_label = target.children[0].children[0];



	// make the config of area button for active or no
	if(!target.classList.contains('btn-area-active')){

				btn_area.forEach((area)=>{
					area.classList.contains('btn-area-active')?
					area.classList.remove('btn-area-active'):'';
				})
				target.classList.add('btn-area-active');
	}
	
	// make the show active or no active button icon
	data_btn_icon.forEach((icon)=>{
		let c_name = icon.className;

		if(c_name.includes("-active")){
			let replace_c_name = c_name.replace("-active","");
			icon.className = replace_c_name;
		}
	});

	// make the show exibition label button left menu side
	label_menu.forEach((label_menu)=>{
		if(label_menu.classList.contains('btn-menu-active'))label_menu.classList.remove('btn-menu-active');
	})

	//config the area of icon
	btn_icon.className = btn_icon.className.concat('-active');

	// config the label of button icon
	chldren_label.classList.add('btn-menu-active')

	openAba(target);
	activePanelAba (target);
	}


	function openAba (btn) {
		// obtem o nome da btn menu e ativa a aba superior correpondente
		let btn_menu = btn.getAttribute("data-item");
		let aba = document.querySelector('li[data-id='+btn_menu+']')
		aba.classList.add('it-atctive');
	}
	function activePanelAba (btn) {
		// desativando abas ativas.
		const panels = document.querySelectorAll('div[data-name]');
		panels.forEach((c)=>{
			c.classList.remove('aba-active');
		});

		// ativando a panel aba target do evento
		const tgt = btn.getAttribute('data-item');
		const aba = document.querySelector('div[data-name='+tgt+']');
		// console.log('->'+tgt+" -->"+aba);
		aba.classList.add('aba-active');

	}
	function activelAba (btn) {
		// desativando abas ativas.
		const panels = document.querySelectorAll('div[data-name]');
		panels.forEach((c)=>{
			c.classList.remove('aba-active');
		});

		// ativando a aba target do evento
		const tgt = btn.getAttribute('data-id');
		const aba = document.querySelector('div[data-name='+tgt+']');
		aba.classList.add('aba-active');
		// console.log('->'+tgt+" -->"+aba);

	}
	function closeAba(e){
		e.parentElement.classList.remove('it-atctive');
	}
