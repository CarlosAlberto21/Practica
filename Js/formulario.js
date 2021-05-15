
let input1 = document.querySelector(".content-input:nth-child(2)");
let boton1 = document.querySelector(".boton:nth-child(1)");
let input2 = document.querySelector(".content-input:nth-child(4)");
let boton2 = document.querySelector(".boton:nth-child(3)");
let input3 = document.querySelector(".content-input:nth-child(6)");
let boton3 = document.querySelector(".boton:nth-child(5)");
		
		input1.addEventListener("click", ()=>{
			boton1.style.background = 'green';
			boton1.style.transition = 'all 1s';
			boton2.style.background = 'white';
			boton3.style.background = 'white';

		})

		input2.addEventListener("click", ()=>{
			boton2.style.background = 'green';
			boton2.style.transition = 'all 1s';
			boton1.style.background = 'white';
			boton3.style.background = 'white';
		

		})

		input3.addEventListener("click", ()=>{
			boton3.style.background = 'green';
			boton3.style.transition = 'all 1s';
			boton2.style.background = 'white';
			boton1.style.background = 'white';
			

		})