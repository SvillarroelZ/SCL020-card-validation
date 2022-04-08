const validator = {
// no borrar de aqui para arriba

isValid: function (validateCard) { 
  let arrayValidateCard = []; // crea el array  

  for (let i = validateCard.length - 1; i >= 0; i--) {   // lenght -1 llama al ultimo digito del array, y con i-- lo recorro al reves 
    let caracter = validateCard.charAt(i); // Devuelve el caracter de una posicion dada mediante char.At
    let numero = parseInt(caracter); // Guardamos cada uno de los caracteres "parseados" como variable "numero"
    arrayValidateCard.push(numero);// Agrega la variable numero al array que creamos arriba mediante push
  }
  
  let numeroMultiplicadoYSumado = []; // Crea un nuevo array para guardar los numeros de la multiplicacion y la suma
  
  arrayValidateCard.forEach(function (numero, posicion) { // Recorro el array con el forEach, poniendo el numero a multiplicar[elemento del array], y la posicion[array]
    
    if ((posicion + 1) % 2 === 0) { // si la posicion es multiplo de 2, agrega el numero multiplicado por 2 al array.
      let numeroMultiplicado = (numero * 2);
      
      if (numeroMultiplicado >= 10) { // si el numero multiplicado es mayor o igual a 10
        let posicionPrimerDigito = numeroMultiplicado.toString().charAt(0, 1);
        let posicionSegundoDigito = numeroMultiplicado.toString().charAt(1, 2);
        let numeroSumado = parseInt(posicionPrimerDigito) + parseInt(posicionSegundoDigito);
        // console.log(posicionPrimerDigito);
        // console.log(posicionSegundoDigito);
        numeroMultiplicadoYSumado.push(numeroSumado);
      } else {
        numeroMultiplicadoYSumado.push(numeroMultiplicado);
      }
    
    } else { // si no, agrega el numero sin multiplicar 
      numeroMultiplicadoYSumado.push(numero);
    }
  })

  let suma=0;
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
    console.log(hiddenCard);
    return hiddenCard;
 }
 

// no borrar de aqui para abajo
};

export default validator;
