// let excelcior = document.getElementById("excelcior");

// excelcior.addEventListener("click", ()=>{
// 	location.href = "subirExcel.html";
// 	excelcior.classList.remo
// })


// const data = JSON.parse(arraysPrincipales);

// console.log(data[4][0].colorPrincipalPagina);
// var arraysPrincipales  = localStorage.getItem("arrays11");

console.log(data[4][0].colorPrincipalPagina);

// ---------color de pagina inicio---
const style = document.documentElement.style;

style.setProperty("--color-primario", data[4][0].colorPrincipalPagina);
style.setProperty("--valor-portada", data[3].length+"00%");

// ---------color de pagina fin---

// -----------INICIO HEADER IMAGENES PORTADA Y LOGO
for (var i = 0; i < data[3].length; i++) {
	const slider123 = document.getElementById("slider123");
	slider123.innerHTML +=
						`<div class="slider-seccion" id="slider-seccion">
		 					<h2 id="titulos-portada">${data[3][i].frasePortada}</h2>
		 					<img src="img/${data[3][i].imagenNombrePortada}" id="slider-img">
		 				</div>`
}

const containerSlider = document.getElementById("container-slider");

containerSlider.innerHTML += `
			 		<div class="slider-boton slider-boton-derecha" id="slider-boton-derecha">&#62</div>
		 			<div class="slider-boton slider-boton-izquierda" id="slider-boton-izquierda">&#60</div>`;

const header = document.getElementById("header");

	header.innerHTML += `

		<div class="logo-principal">

		 	<div class="grid-item">
		 		<img src="img/${data[4][0].nombreImagenLogo}" id="logo">
		 	</div>

		 	<div class="grid-item" id="caja3">
		 		<h4 class="nombre-tienda">${data[4][0].nombreTienda}</h4>

		 		<div id="coñaso">
			 		<img src="img/${data[4][0].nombreImgSlogan}" id="what">
			 		<p class="bbb">${data[4][0].slogan}</p>	 				
		 		</div>
		 	</div>
		</div>	`	

// -----------fiN PORTADA LOGO HEADER

//----CATEGORIAS
var k = data[2].length;

for (var i = 0; i < k; i++) {
	const aside = document.getElementById("aside");
	aside.style.gridTemplateColumns = "repeat(k, 100px)";
	aside.innerHTML += 
	`<div class="">
			<img class="categoria ${data[2][i].categoria} ${i}" src="img/${data[2][i].nombreImagenCategoria}" id="categotia${i+1}">
			<h6>${data[2][i].categoria}</h6>
	</div>`
}
// -------------------categorias fiN------------------

//---------------producos iniciales------
console.log(data[2][0].categoria);
console.log(data[0].length);
let a = 1;
for (var i = 0; i < data[0].length; i++) {
	const main = document.getElementById("main");
	if (data[0][i].categoria === data[2][0].categoria) {
		main.innerHTML += 
			`<div class="hover ordenar-altura" value="producto${a}${i+1}" id="fotos">
				<div class="slider" id="fotos">
					<img class="${a-1}${i} redirect imgs ostia img/${data[0][i].imagen1}" src="img/${data[0][i].imagen1}" id="redirect">
						<div class="liga-descuento"></div>
				</div>	
				<p class="${a-1}${i} redirect pila ostia" id="redirect">${data[0][i].nombre}</p>
				<b class="flexito redirect" id="redirect">
					<h4 class="precio${i+1} redirect" id="redirect">S/. ${data[0][i].precio}.00</h4>
					<button class="boton111 0${i} img/${data[0][i].imagen1}" type="button${i+1}">Ver detalles</button>
				</b>	
			</div>`
	} else {
		null;
	}
	
}

//---------------producos iniciales fin------


//------------modal-----inicio----------------------
function scrollToTop(){
	window.scrollTo(0,0);
}

window.addEventListener("click", function(e){
	console.log(e.target);
	let z = e.target;
	const v = z.classList.item(0);
	const tt = z.classList.item(1);
	const yy = z.classList.item(2);
	console.log(v);
	console.log(k);
	let cerrar = document.querySelectorAll(".cerrar-modal")[0];
let abrir = document.querySelectorAll(".boton")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let btnEnviar = document.getElementById("btn-enviar11");
console.log(btnEnviar);
	

	if (v === "boton111") {

		localStorage.setItem("imagenPrincipal", tt);
		localStorage.setItem("imagenPrincipal2", yy);

		location.href = "form.html";

	}

// 	if (v === "boton111") {
// 		const padre = z.parentElement;
// 		console.log(padre);
// 		const precio = z.previousElementSibling;
// 		console.log(precio);
// 		const textPrecio = precio.textContent;
// 		console.log(textPrecio);
// 		const abuelo = padre.parentElement;
// 		console.log(abuelo);

// 		const slider = abuelo.firstElementChild;
// 		const img = slider.firstElementChild;
// 		const classImg = img.classList.item(4);
// 		console.log(classImg);
// 		const nameProducto = slider.nextElementSibling;
// 		console.log(nameProducto);
// 		const textNameProducto = nameProducto.textContent;
// 		console.log(textNameProducto);

// 			const body = document.getElementById("body");
// 			const container = document.getElementById("container");
// 			const contenedor = document.querySelector(".contenedor");
// 			const html = document.querySelector("html");

// 			// const form = document.querySelector(".formulario");

// 			// 	contenedor.style.opacity = "0";
// 			// 	contenedor.style.transform = ("translateY(-900%)");

// 			// 	form.style.opacity = "1";
// 			// 	form.style.width = "fit-content";
// 			// 	form.style.height = "fit-content";
// 			// 	form.style.margin = "0 auto";
// 			// 	form.style.position = "absolute";
// 			// 	form.style.top = "0";
// 			// 	form.style.left = "0";
// 			// 	form.style.right = "0";
// 			// 	form.style.bottom = "0";
// 			// 	form.style.margin = "0 auto";
// 			// 	body.style.scrollTop = "0px";
// 			// 	html.style.scrollTop = "0px";
// 			// 	form.style.transition = "transform 0.4s";
// 			// 	form.style.transform = "translateY(2%)";
// 			// 	body.style.background = "#efefef";
// 			// 	scrollToTop();




// // abrir.addEventListener("click", function(e){
// 	e.preventDefault();
// 	modalC.style.opacity = "1";
// 	modalC.style.visibility = "visible";
// 	modal.classList.toggle("modal-close");
// // })




// 				//------------------validacion de formulario--------

// const resultado = document.querySelector(".resultado");
// 			const nombre = document.getElementById("nombre");
// 			const celular = document.getElementById("celular");
// 			const distrito = document.getElementById("distrito");
// 			const direccion = document.getElementById("direccion");
// 			const referencia = document.getElementById("referencia");

// btnEnviar.addEventListener("click",(e)=>{

// 	const validarCampos = ()=>{
// 				let error = [];
// 				if (nombre.value.length < 2) {
// 					error[0] = true;
// 					error[1] = "El nombre es invalido";
// 					return error;
// 				} else if (celular.value.length != 9 ||
// 			               celular.value[0] != 9){
// 					error[0] = true;
// 					error[1] = "El numero es invalido";
// 					return error;
// 				} else if (direccion.value.length < 3) {
// 					error[0] = true;
// 					error[1] = "La direccion es invalida";
// 					return error;
// 				} else if (distrito.value.length < 3) {
// 					error[0] = true;
// 					error[1] = "El distrito es invalido";
// 					return error;
// 				} else if (referencia.value.length < 3) {
// 					error[0] = true;
// 					error[1] = "La referencia es invalida";
// 					return error;
// 				}

// 			error[0] = false;
// 			return error;

// 			}
// 				e.preventDefault();
// 				console.log("btnEnviar")
// 				let error = validarCampos();
// 				if (error[0]) {
// 					resultado.innerHTML = error[1];
// 					resultado.classList.add("red");
// 					resultado.classList.remove("green");
					
// 				} else {
// 					resultado.classList.add("green");
// 					resultado.classList.remove("red");
					
//             // 	e.preventDefault();
            
//             	fetch("https://sheet.best/api/sheets/49477a9c-8881-439a-9df7-71a0abc79d78", {
//             		method: "POST",
//             		mode: "cors",
//             		headers: {"Content-Type": "application/json"},
//             		body: JSON.stringify({
//             			"Nombre": nombre.value,
//             			"Celular": celular.value,
//             			"Distrito": distrito.value,
//             			"Direccion": direccion.value,
//             			"Referencia": referencia.value,
//             			"Producto": textNombre11,
//             			"Precio": textHijoNextHermano.substr(3),
//             			"Estado": "NEW",
//             			"EstadoMedio": "NO ENVIADO"
//             		})
            
//             	});			
					
					
// 					setTimeout (function(){
// 						location.href = ("https://api.whatsapp.com/send?phone=+51992830820&text=Hola! 👋 %20Mi%20nombre%20es%20"+`${nombre.value}`+"%20Vivo%20en%20"+`${direccion.value}`+"%20quiero%20el%20siguiente%20producto:\n\n                                                     *                                                               "+"✅"+`${textNombre11}`+", precio: "+`${textHijoNextHermano}`+"                                                  *");
// 					}, 500);

// 					console.log("btnEnviar22");
// 					resultado.innerHTML = "Solicitud enviada correctamente"
					
					


// 				}
// 			})

			
// 			//---------------------------------------------------


// // ------------------------FORMULARIO ESTILOS Y APARICION FIN-------------------


// 				const name = document.querySelector(".name");
// 				name.innerHTML = textNameProducto;

// 				const monto = document.querySelector(".monto");
// 				monto.innerHTML = textPrecio;

// 				const subPrecio = document.querySelector(".sub-precio");
// 				subPrecio.innerHTML = textPrecio;

// 				const totalPrecio = document.querySelector(".total-precio");
// 				totalPrecio.innerHTML = textPrecio;

// 				const imagen = document.querySelector(".img");
// 				imagen.src = classImg;
				
// 				// console.log(form);

// 				//------------------validacion de formulario--------
// 	} else if (v === "modal-container" || v === "cerrar-modal") {

// 				e.preventDefault();
// 				modalC.style.opacity = "0";
// 				modalC.style.visibility = "hidden";
// 				modal.classList.toggle("modal-close");
// 		}  borré para que no llene formlario desde la pag principal sino desde el detalle del producto

})
const fragmento = document.createDocumentFragment();
const main = document.getElementById("main");
function Borrar(){
			const main = document.getElementById("main");
			const fragmento = document.createDocumentFragment();
			const hijos = main.children;

			let hijo="";
			for(hijo of hijos){
			console.log(hijo);
			hijo.remove();
			}

			for(hijo of hijos){
			console.log(hijo);
			hijo.remove();
			}

			for(hijo of hijos){
			console.log(hijo);
			hijo.remove();
			}

			for(hijo of hijos){
			console.log(hijo);
			hijo.remove();
			}

			for(hijo of hijos){
			console.log(hijo);
			hijo.remove();
			}

}

// console.log(categorias[0]);

window.addEventListener("click", function(e){
	console.log(e.target);
	let x = e.target;
	const y = x.classList.item(0);
	console.log(x);
	console.log(y);
		const main = document.getElementById("main");
			var divs = main.getElementsByTagName("div");
			console.log(divs.length);
	if (y == "categoria") {
		const a = x.classList.item(1);
		const b = x.classList.item(2);
		console.log(a);
		console.log(b);

			Borrar();

			console.log(data[2][parseInt(b)].categoria);

			// if( a <= productos.length ) {

			
				for (var i = 0; i < data[0].length; i++) {				
						const item = document.createElement("P");
					if (data[0][i].categoria == a) {
						// prompt("hola");
						item.innerHTML += 
						`<div class="hover ordenar-altura" value="producto${a}${i+1}" id="fotos">
							<div class="slider" id="fotos">
								<img class="${b}${i} redirect imgs ostia img/${data[0][i].imagen1}" src="img/${data[0][i].imagen1}" id="redirect">
									<div class="liga-descuento"></div>
							</div>	
							<p class="${b}${i} redirect pila ostia" id="redirect">${data[0][i].nombre}</p>
							<b class="flexito redirect" id="redirect">
								<h4 class="precio${i+1} redirect" id="redirect">S/. ${data[0][i].precio}.00</h4>
								<button class="boton111 0${i} img/${data[0][i].imagen1}" type="button${i+1}">Ver detalles</button>
							</b>	
						</div>`;
					fragmento.appendChild(item);

					}
					main.appendChild(fragmento);
				}
			// } 
			// else {
			// 	return null;
			// }
	}
})


window.addEventListener("click", function(e){
		console.log(e.target);
		let select = e.target;
		const classSelect1 = select.classList.item(1);
		console.log(classSelect1);

		const classSelect2 = select.classList.item(2);
		console.log(classSelect2);

		const classSelect3 = select.classList.item(0);
		console.log(classSelect3);

		const classSelect4 = select.classList.item(4);
		console.log(classSelect4);

		if (classSelect1 == "redirect") {

			if (classSelect2 == "pila") {
				var nextHermano = select.nextElementSibling;
				var hijoNextHermano = nextHermano.firstElementChild;
localStorage.setItem("imagenPrincipal", classSelect3);
localStorage.setItem("imagenPrincipal2", classSelect4);
				localStorage.setItem("producto", select.textContent);
				localStorage.setItem("precio", hijoNextHermano.textContent);

// console.log(hijoNextHermano.textContent.substr(3));
				location.href = "form.html";
			} 
			else if(classSelect2 == "imgs"){    
				var padreSelect = select.parentElement;
				var hermanoPadreSelect = padreSelect.nextElementSibling;
				var hermano2HermanoPadreSelect = hermanoPadreSelect.nextElementSibling;
				var hijoHermano2HermanoPadreSelect = hermano2HermanoPadreSelect.firstElementChild;
localStorage.setItem("imagenPrincipal", classSelect3);
localStorage.setItem("imagenPrincipal2", classSelect4);
				localStorage.setItem("producto", hermanoPadreSelect.textContent);
				localStorage.setItem("precio", hijoHermano2HermanoPadreSelect.textContent);

// console.log(hijoHermano2HermanoPadreSelect.textContent.substr(3));
				location.href = "form.html";
			}
		}
		
})
// console.log(textHijoNextHermano.substr(3));

// const imagenWhatsapp = document.querySelector(".imagen-para-whats")

// imagenWhatsapp.addEventListener("click", function(){
// 	window.location = "https://api.whatsapp.com/send?phone=+51992830820&text=Hola!%20Mi%20nombre%20es%20"+encodeURIComponent('https://i.blogs.es/bcc089/solounavez/1366_2000');
// })
// -------iNICIO SLIDER PORTADA-----

const slider123 = document.querySelector("#slider123");
let sliderSection = document.querySelectorAll(".slider-seccion");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnIzquierda = document.querySelector("#slider-boton-izquierda");
const btnDerecha = document.querySelector("#slider-boton-derecha");

slider123.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
	let sliderSectionFirts = document.querySelectorAll(".slider-seccion")[0];
	slider123.style.marginLeft = "-200%";
	slider123.style.transition = "all 0.5s";
	setTimeout(function(){
		slider123.style.transition = "none";
		slider123.insertAdjacentElement("beforeend", sliderSectionFirts);
		slider123.style.marginLeft = "-100%";
	}, 500);
}

function Prev() {
	let sliderSection = document.querySelectorAll(".slider-seccion");
	let sliderSectionLast = sliderSection[sliderSection.length-1];
	slider123.style.marginLeft = "0";
	slider123.style.transition = "all 0.5s";
	setTimeout(function(){
		slider123.style.transition = "none";
		slider123.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider123.style.marginLeft = "-100%";
	}, 500);
}

btnDerecha.addEventListener("click", function(){
	Next();
})

btnIzquierda.addEventListener("click", function(){
	Prev();
})

setInterval(function(){
	Prev();
}, 6000);

// console.log(data[0].length);


// -------FIN SLIDER PORTADA-----


// for (var i = 0; i < data[0].length; i++) {

// 		const liga = document.querySelectorAll(".liga-descuento");
// 	if (data[0][i].descuento != "") {
// 		liga.forEach(thum => {

		

// 				thum.classList.toggle("liga-descuento2");
			
// 		})
// 		// liga.style.transform = "translateY(0%)";
// 		}
	
// }

// import {exportado} from './codigo3.js';
// console.log(JSON.parse(exportado));
