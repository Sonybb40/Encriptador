
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var sabueso = document.querySelector(".posicion-sabueso");
var h3 = document.querySelector(".posicion-h3");
var parrafo = document.querySelector(".posicion-parrafo");
var resultado= document.querySelector(".mensaje-resultado");
var botonCopiar = document.querySelector(".boton-copiar");



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar(){

	ocultarFrente();
	var area = recuperarTexto();
	resultado.textContent = encriptarTexto(area);
}

function desencriptar(){

	ocultarFrente();
	var area = recuperarTexto();
	resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){

	var area = document.querySelector(".area");
	return area.value;
}

function ocultarFrente(){

	sabueso.classList.add("ocultar");
	h3.classList.add("ocultar");
	parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
	var texto = mensaje; 
	var textoFinal = "";

	for(var i = 0; i < texto.length; i++){
		if(texto[i] == "a"){
			textoFinal = textoFinal + "ai"
		}
		else if(texto[i] == "e"){
			textoFinal = textoFinal + "enter"
		}
		else if(texto[i] == "i"){
			textoFinal = textoFinal + "imes"
		}
		else if(texto[i] =="o"){
			textoFinal = textoFinal + "ober"
		}
		else if(texto[i] =="u"){
			textoFinal = textoFinal + "ufat"
		}
		else{

			textoFinal = textoFinal + texto[i];
		}
	}

	return textoFinal;
}

function desencriptarTexto(mensaje){
	var texto = mensaje; 
	var textoFinal = "";

	for(var i = 0; i < texto.length; i++){
		if(texto[i] == "a"){
			textoFinal = textoFinal + "a"
			i = i+1;
		}
		else if(texto[i] == "e"){
			textoFinal = textoFinal + "e"
			i = i+4;
		}
		else if(texto[i] == "i"){
			textoFinal = textoFinal + "i"
			i = i+3;
		}
		else if(texto[i] =="o"){
			textoFinal = textoFinal + "o"
			i = i+3;
		}
		else if(texto[i] =="u"){
			textoFinal = textoFinal + "u"
            i = i+3;
		}
		else{

			textoFinal = textoFinal + texto[i];
		}
	}
	
	return textoFinal;
}
 
function copiar(){

      var mensaje = document.querySelector(".mensaje-resultado");
      navigator.clipboard.writeText(mensaje.innerHTML);
}
	


    