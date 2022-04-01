import validator from './validator.js';

//Guardar datos de formulario en botón//

var formulario=document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
    e.preventDefault()

    guardarNombre()
})

function guardarNombre(){
    var username=document.getElementById("username").value;
    // var surname=doctument.getElementByID("surname").value;

        alert(username);  
}


// var nextPage=document.getElementById("nextPage");
// nextPage.addEventListener("submit" function (){
//     siguientePagina()

// })

// function siguientePagina(){
//     var nextPage=document.getElementById("nextPage").location.href = 'validacion.html';