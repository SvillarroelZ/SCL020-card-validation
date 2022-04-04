import validator from './validator.js';

// var checkbox=document.querySelector(".terms");
//  console.log(checkbox)
//       checkbox.querySelector("change", validaCheckbox, false);
//       function validaCheckbox(){
//           var checked=checkbox.checked;
//           if(!checked){
//               alert("Por favor, acepte los términos y condiciones");
//           }
//       }

function pago(){
boletaFactura=document.querySelector('input[id="pago"]:checked').value;
// var boletaFactura=document.getElementById("pago").checked;
        if(boletaFactura.checked==true){
        alert("Por favor, marque una opción")
    }
}

// Intento 1 despues de la Domi
// var checkbox=document.getElementById("terms");
// console.log(checkbox)
//      checkbox.addEventListener("change", validaCheckbox, false);
//      function validaCheckbox(){
//          var checked=checkbox.checked;
//          if(!checked){
//              alert("Por favor, acepte los términos y condiciones");
//          }
//      }

    //intento con la domi
    //      if (checked){
    //          alert("Checkbox está seleccionado");
    //         break;
    //         }
    //      else (!checked)
    //         alert("Por favor, selecciona los términos y condiciones");
        
    //  }

//intento 4
// var terms=document.getElementById("terms").checked;
//     if(isChecked){
//         alert("el checkbox esta selecionado");
//     }
//validando checkbox//

//intento 1
// function terms(){
// var terms=document.getElementById("terms").checked;
//     if (terms==true)
//     alert("seleccionaste una alternativa")
// } 

//intento 2

// var isChecked=document.getElementById("terms").checked;
//     if (isChecked){
//         alert("seleccionaste una alternativa");
//     }
//     else (isChecked==false){
//         alert("Por favor acepte los términos y condiciones");

//     }

//Guardar datos de formulario en botón//

var formulario=document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
    e.preventDefault()

    guardarNombre()
})

function guardarNombre(){
    var username=document.getElementById("username").value;
    var surname=document.getElementById("surname").value;

        alert (username);  
        alert (surname);
    window.location.href="./validacion.html"    
}

