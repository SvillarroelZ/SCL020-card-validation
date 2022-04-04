import validator from './validator.js';


function validarCheckbox(){
var checked=document.getElementsByName("pago").checked;
if(checked === false){
    document.getElementById("demofalso").innerHTML= "Debes aceptar los términos y condiciones antes de proceder al pago";
}
    else{
        document.getElementById("demofalso").innerHTML = checked; 
    }
    
}


// Validar checkbox términos y condiciones // 
// var checkbox=document.querySelector(".terms");
//  console.log(checkbox)
//       checkbox.querySelector("change", validaCheckbox, false);
//       function validaCheckbox(){
//           var checked=checkbox.checked;
//           if(!checked){
//               alert("Por favor, acepte los términos y condiciones");
//           }
//       }

// ultimo intento antes de 2do OH con domi
// function comprobarChecks(event){
//     var checkbox=document.getElementsByName("terms");
//     var contador=0
//     for (var i=0; i<checkbox.length; i++){
//         if(checkbox[i].checked)
//         contador++
//     }
//     if(contador==0){
//         alert("Por favor, lee y acepta los términos y condiciones antes de proceder con el pago");
//         event.preventDefault
//     }
// }


// function valCheckbox(){
//     var validando=document.getElementById("terms");
//     validando.addEventListener("checked", ,false);

// }

// Intento 2/domi
//function pago(){
// boletaFactura=document.querySelector('input[id="pago"]:checked').value;
// // var boletaFactura=document.getElementById("pago").checked;
//         if(boletaFactura.checked==true){
//         alert("Por favor, marque una opción")
//     }
// }

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

