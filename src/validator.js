const validator = {
// No borrar de aquí para arriba

isValid: function (validateCard) { 
  let arrayValidateCard = []; // Crea un array vacío para guardar los numeros invertidos y parseados

  for (let i = validateCard.length - 1; i >= 0; i--) {   // for recorre cada componente del string -> lenght -1 llama al ultimo digito del string, y con i-- lo recorro al reves 
    let caracter = validateCard.charAt(i); // Se posiciona en el indice (en el primer numero del string ya invertido)
    let numero = parseInt(caracter); // Guardamos cada uno de los caracteres "parseados" como variable "numero" (desde la primera posición)
    arrayValidateCard.push(numero);// Agrega la variable numero al array que creamos arriba (linea 5) mediante push
  }
  
  let numeroMultiplicadoYSumado = []; // Crea un nuevo array para guardar los numeros de la multiplicacion y la suma
  
  arrayValidateCard.forEach(function (numero, posicion) { // Recorro el array con el forEach (posiciona cada elemento del array), poniendo el numero a multiplicar[elemento del array], y la posicion[array]
    
    if ((posicion + 1) % 2 === 0) { // si la posicion es multiplo de 2 
      let numeroMultiplicado = (numero * 2); //agrega el numero multiplicado por 2 a la variable numeroMultiplicado.
      
      if (numeroMultiplicado >= 10) { // si el numero multiplicado es mayor o igual a 10 (hay que sumar ambos digitos)
        let posicionPrimerDigito = numeroMultiplicado.toString().charAt(0, 1); // Pasa el número a String. Corto el primer digito
        let posicionSegundoDigito = numeroMultiplicado.toString().charAt(1, 2); // Pasa el número a String. Corto el segundo digito
        let numeroSumado = parseInt(posicionPrimerDigito) + parseInt(posicionSegundoDigito); // Parsea ambos digitos y los suma en la variable numeroSumado
        // console.log(posicionPrimerDigito);
        // console.log(posicionSegundoDigito);
        numeroMultiplicadoYSumado.push(numeroSumado); // Toma el resultado y lo pone en el array (de la linea 13)
      } else {
        numeroMultiplicadoYSumado.push(numeroMultiplicado); // si el numero no es >=10 lo pone directo en al array de la línea 13
      }
    
    } else { // si el número no es multiplo de 2, agrega el numero sin multiplicar 
      numeroMultiplicadoYSumado.push(numero); // y lo pone en el array de la linea 13
    }
  })
// pensar y preguntar a Nadia
  let suma=0; //estoy nombrando una nueva variable
  for (let i=0; i < numeroMultiplicadoYSumado.length; i++) { 
    suma += numeroMultiplicadoYSumado[i];
  } if (suma % 10 === 0) {
    return true;
  } else {
    return false;
  }
},


//Función para enmascarar el numero de la tarjeta dejando los ultimos 4 dígitos libres
  
  maskify: function(validateCard){
    var punto= "•"; // Símbolo con el que se ocultan los numeros de la tarjeta.
    var hiddenCard=validateCard.slice(-4) // Se cortan los ultimos 4 digitos de la tarjeta
    if (validateCard.length > 4 ){ //Condición= si el largo de los numeros ingresados es mayor a 4, 
        hiddenCard=punto.repeat(validateCard.length-4) + validateCard.slice(-4); // Repite los numeros de la tarjeta con puntos, menos los ultiomos 4
    }
    //console.log(hiddenCard);
    return hiddenCard;
 }
 

// no borrar de aqui para abajo
};

export default validator;
