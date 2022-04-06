const validator = {
// no borrar de aqui para arriba

  isValid: function(validateCard){
    let arrValidateCard=[];
    for (let i=validateCard.length -1; i>=0; i--){
      let caracter=validateCard.charAt(i);
      let numero=parseInt(caracter);
      arrValidateCard.push(numero);
    }
    // let arrValidateCardNumber=[];
    // arrValidateCard.forEach(function (numero, posicion){
    //   if ((posicion +1) % 2 ===0)

    // })
  // }
}





// no borrar de aqui para abajo
};

export default validator;
