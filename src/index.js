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
