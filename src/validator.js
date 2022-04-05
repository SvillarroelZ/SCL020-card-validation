const validator = {
// no borrar de aqui para arriba

  // pasar el string del input a array

  

  //Intento 1
  // const: btnValidar=document.querySelector("#validar");
  // const: validateCard=document.querySelector("#validateCard");
  // let arrayNumbers = [];
  // btnValidar.addEvenListener("click", fuction(){
  //   arrayNumbers.push(validateCard.value);
  //   alert(numeros a validar)
  // })
// let arrayInput=[];
// for (let i=this.arrayInput.length - 1; i>=0; i--){
// }



  //invertir el array
function invertirArray(numerodelimput){
  arrayInverso=0;

  while(numerodelimput>0){
    residuo=numerodelimput%10;
    arrayInverso=arrayInverso*10+residuo;
    numerodelimput=parseInt(numerodelimput/10);
  }

  return arrayInverso;
}





// no borrar de aqui para abajo
};

export default validator;
