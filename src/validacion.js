import validator from './validator.js';

 const btnValidar = document.getElementById("btnValidar");

  btnValidar.addEventListener("click", function(){ 
      let cardNumber = document.getElementById("validateCard").value; 
     //  console.log("prueba2", cardNumber) 
      let hiddenCard = validator.maskify(cardNumber);
      let validar = validator.isValid(cardNumber);
      if (validar){
          document.getElementById("validCard").innerHTML= "Su tarjeta " + hiddenCard + "es válida"
          //document.getElementById("validateCard").value = hiddenCard; //
          //btnEnviar.disabled=false;
          //btnValidar.disabled=true;
      } else{
          document.getElementById("validCard").innerHTML="La tarjeta ingresada es incorrecta";
          document.getElementById("validateCard").value = hiddenCard;
      }

  })
