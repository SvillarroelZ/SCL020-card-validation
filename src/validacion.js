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

  //mover datos de un input a otro con cada click
  /*id= banco
        numero de tarjeta
        fecha
        cvv
        nombre apellido */

    //Input numero de tarjeta

    document.getElementById("validateCard").addEventListener("keyup", (e) =>{//al levantar el dedo de la tecla se ejecuta el evento
        let valorInput= e.target.value; // guardo dentro de la variable el valor del input, mediante el evento, accedo al elemento y al valor

        document.getElementById("numberCard").value = valorInput.replace(/\s/g, "")//con la expresion elimina espacios en blanco
        
        .replace(/\D/g,"") //Con la expresion borra caracteres que no sean digitos
        .replace(/([0-9]{4})/g,"$1 ") //que busque numeros del 0 a 9 y agrupe al final de la entrada, pero que cada 4 caracteres separe el grupo, con $1 lo agrega (espaciado)despues de cada grupo.
        .trim();//quita el ultimo espaciado de una cadena de texto con trimm
    });