/*console.log("Hola");
var n1=100;
var n2=2;
var n3=n1+n2;
console.log(n3);*/

var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;
var enviarDatos=0;

var formulario=document.getElementById("formulario");

formulario.addEventListener("submit",recibirDatos);

function recibirDatos(e){
    e.preventDefault();
    var nombre=document.getElementById("nombre").value;
    var celular=document.getElementById("celular").value;
    var correo=document.getElementById("correo").value;
    var mensajeNombre=document.getElementsByClassName("errorNombre")[0];
    var xmarkErrorNombre=document.getElementsByClassName("xmarkErrorNombre")[0];

    var mensajeCelular=document.getElementsByClassName("errorCelular")[0];
    var xmarkErrorCelular=document.getElementsByClassName("xmarkErrorCelular")[0];

    var mensajeCorreo=document.getElementsByClassName("errorCorreo")[0];
    var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

    var checkMarkNombre=document.getElementsByClassName("checkMarkNombre")[0];
    var checkMarkCelular=document.getElementsByClassName("checkMarkCelular")[0];
    var checkMarkCorreo=document.getElementsByClassName("checkMarkCorreo")[0];

    if (!regexNombre.test(nombre)){
        mensajeNombre.classList.remove("ocultar");
        var nombre=document.getElementById("nombre").classList.add("errorInput");
        xmarkErrorNombre.classList.remove("ocultar");
        checkMarkNombre.classList.add("ocultar");
    }else{
        mensajeNombre.classList.add("ocultar");
        var nombre=document.getElementById("nombre").classList.add("correctoInput");
        xmarkErrorNombre.classList.add("ocultar");
        checkMarkNombre.classList.remove("ocultar");
        enviarDatos ++;
    }
    if(!regexTelefonoNacional.test(celular)){
        mensajeCelular.classList.remove("ocultar");
        var celular=document.getElementById("celular").classList.add("errorInput");
        xmarkErrorCelular.classList.remove("ocultar");
        checkMarkCelular.classList.add("ocultar");
    }else{
        mensajeCelular.classList.add("ocultar");
        var celular=document.getElementById("celular").classList.add("correctoInput");
        xmarkErrorCelular.classList.add("ocultar");
        checkMarkCelular.classList.remove("ocultar");
        enviarDatos ++;
    }
    if(!regexCorreo.test(correo)){
        mensajeCorreo.classList.remove("ocultar");
        var correo=document.getElementById("correo").classList.add("errorInput");
        xmarkErrorCorreo.classList.remove("ocultar");
        checkMarkCorreo.classList.add("ocultar");
    }else{
        mensajeCorreo.classList.add("ocultar");
        var correo=document.getElementById("correo").classList.add("correctoInput");
        xmarkErrorCorreo.classList.add("ocultar");
        checkMarkCorreo.classList.remove("ocultar");
        enviarDatos ++;
    }
    if(enviarDatos==3){
    formulario.submit();
    }else{
        enviarDatos=0;
    }
}