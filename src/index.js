import validator from './validator.js';

////index.html 

//Guardar nombre y apellido para utilizarlo en validacion.html
function guardarNombre(){
    let username=document.getElementById("username").value;
    let surname=document.getElementById("surname").value;

        alert (username);  
        alert (surname);
}

//Evitar que el botón de submit haga la funcion de guardar-enviar, luego guarde nombre y apellido y valide checkbox  

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
    e.preventDefault()

    guardarNombre()
    validarCheckbox()
})

// mostrar los datos de formulario 1 en tarjeta de validacion.html
functio monstrarNombres 


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



////Validacion.html 

const btnEnviar = document.getElementById("btnEnviar");
const btnValidar = document.getElementById("btnValidar");

 btnValidar.addEventListener("click", function(){ 
     let cardNumber=document.getElementById("validateCard").value; 
     if (cardNumber.length < 16){ //si los numeros ingresados son menos que 16
         return
     }
 
     let hiddenCard=validator.maskify(cardNumber);
     let validar=validator.isValid(cardNumber);
     if (validar){
         document.getElementById("validCard").innerHTML="Tarjeta válida"
         document.getElementById("validateCard").value=hiddenCard; //donde se muestra esto??? ayura
         btnEnviar.disabled=false;
         btnValidar.disabled=true;
     } else{
         document.getElementById("validCard").innerHTML="La tarjeta ingresada es incorrecta";
     }

 })
 let enviarFormulario=document.getElementById("enviarFormulario");
enviarFormulario.addEventListener("submit", function(e){
    e.preventDefault()
    enviarFormulario();

})
