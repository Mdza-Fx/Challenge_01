function encriptar() {  
    
    let mensaje = document.getElementById("input_text").value;
    let lowercasewithoutMayusandAccent = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
    if(lowercasewithoutMayusandAccent.test(mensaje)){

        mensaje = mensaje.replace(/e/img,"enter");
        mensaje = mensaje.replace(/i/img,"imes");
        mensaje = mensaje.replace(/a/img,"ai");
        mensaje = mensaje.replace(/o/img,"ober");
        mensaje = mensaje.replace(/u/img,"ufat");

        document.getElementById("mensaje_encriptado").innerHTML = mensaje;
        document.getElementById("input_text").value = "";

    let displayObjetos = document.getElementById("display_esperandoMensaje");
        displayObjetos.style.display = "none";	

    let copiarBoton = document.getElementById("copiar_boton");
    copiarBoton.style.display = "block";
} else {
    alert("Escriba solo minusculas y sin acentos");
}
}
var encriptarButon = document.getElementById("encriptar_boton");
encriptarButon.addEventListener("click", encriptar);

//COMPLETA LA ENCRIPTACION EN EL BOTON

function desencriptar() {
    
    let mensaje = document.getElementById("input_text").value;
    let lowercasewithoutMayusandAccent = /^[^ÁÍÓÚÑáéíóúA-Z]/;
    if(lowercasewithoutMayusandAccent.test(mensaje)){

        mensaje = mensaje.replace(/enter/img,"e");
        mensaje = mensaje.replace(/imes/img,"i");
        mensaje = mensaje.replace(/ai/img,"a");
        mensaje = mensaje.replace(/ober/img,"o");
        mensaje = mensaje.replace(/ufat/img,"u");

        document.getElementById("mensaje_encriptado").innerHTML = mensaje;
        document.getElementById("input_text").value = "";

    let displayObjetos = document.getElementById("display_esperandoMensaje");
        displayObjetos.style.display = "none";	

    let copiarBoton = document.getElementById("copiar_boton");
    copiarBoton.style.display = "block";
} else {
    alert("Escriba Texto solo minusculas y sin acentos");
}
}

var desencriptarButon = document.getElementById("desencriptar_boton");
desencriptarButon.addEventListener("click", desencriptar);

//COMPLETA LA DESENCRIPTACION EN EL BOTON

function copiar(){

    let copiarTexto = document.getElementById("mensaje_encriptado").innerText;
    navigator.clipboard.writeText(copiarTexto);
    document.getElementById("mensaje_encriptado").textContent = "";

}

var copiarBoton = document.getElementById("copiar_boton"); 
copiarBoton.addEventListener("click",copiar);

