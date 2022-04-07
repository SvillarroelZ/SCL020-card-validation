import validator from './validator.js';

// Validar checkbox y redireccionar página a 2do validacion.html
function validarCheckbox(){
    
var checked=document.getElementById("terms").checked;
if(checked === false){
    document.getElementById("errUnchecked").innerHTML= "Debes aceptar los términos y condiciones antes de proceder al pago";
}
else{
document.getElementById("errUnchecked").innerHTML = checked; 

window.location.href="./validacion.html"
 }
}

//Guardar nombre y apellido para utilizarlo en validacion.html
function guardarNombre(){
    let username=document.getElementById("username").value;
    let surname=document.getElementById("surname").value;

        alert (username);  
        alert (surname);
}

// Guardar datos de variables(username/surname y validación de checkbox del formulario) al momento de hacer clic en submit  

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
    e.preventDefault()

    validarCheckbox()
    guardarNombre()
})

//Validacion.html botones-funciones

btnValidar.addEventListener("click", function(){
    let cardNumber=document.getElementById("validateCard").Value;
    if (cardNumber.length < 16){
        return
    }
    let hiddenCard=validator.maskify(cardNumber);
    let validar=validator.isValid(cardNumber);
    if (validar){
        document.getElementById("validCard").innerHTML="Tarjeta válida"
        document.getElementById("validateCard").value=hiddenCard;
        btnEnviar.disabled=false;
        btnValidar.disabled=true;
    } else{
        document.getElementById("validCard").innerHTML="La tarjeta ingresada es incorrecta";
    }
})

formulario.addEventListener("submit", function(e){
    event.preventDefault();
    enviarFormulario();
})


