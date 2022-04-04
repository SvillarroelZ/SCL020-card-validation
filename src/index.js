import validator from './validator.js';

// Validar radio buttons de pago
// Validar radio buttons de medio

// Validar checkbox
function validarCheckbox(){
var checked=document.getElementById("terms").checked;
if(checked === false){
    document.getElementById("errUnchecked").innerHTML= "Debes aceptar los términos y condiciones antes de proceder al pago";
}
else{
document.getElementById("errUnchecked").innerHTML = checked; 
 }
    
}


// Guardar datos de formulario en botón y redireccionar //

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
    e.preventDefault()

    guardarNombre()
})

function guardarNombre(){
    let username=document.getElementById("username").value;
    let surname=document.getElementById("surname").value;

        alert (username);  
        alert (surname);
    window.location.href="./validacion.html"    
}

