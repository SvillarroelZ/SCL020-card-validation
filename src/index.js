////index.html
const formulario = document.getElementById("formulario");   //porque la llamo en varias funciones, por lo tanto queda como constante
//Guardar nombre y apellido para utilizarlo en validacion.html
function guardarNombre() {
    let username = document.getElementById("username").value;
    let surname = document.getElementById("surname").value;
    alert(username + " " + surname);
}
// dar formato al rut con . y -
formulario.rut.addEventListener("blur", function () {
    let numRut = document.getElementById("rut").value;
    // console.log(numRut)
    if (numRut.length == 9) {
        let div1 = numRut.slice(0, 2);
        let div2 = numRut.slice(2, 5);
        let div3 = numRut.slice(5, 8);
        let div4 = numRut.slice(8, 9);
        let rutFormato = (div1 + "." + div2 + "." + div3 + "-" + div4);
        // console.log("rutFormato", rutFormato)
        document.getElementById("rut").value = rutFormato;
    }
    else {
        let div1 = numRut.slice(0, 1);
        let div2 = numRut.slice(1, 4);
        let div3 = numRut.slice(4, 7);
        let div4 = numRut.slice(7, 8);
        let rutFormato = (div1 + "." + div2 + "." + div3 + "-" + div4);
        document.getElementById("rut").value = rutFormato;
    }
});
// dar formato al celular
formulario.title.addEventListener("blur", function (){
    let numTel = document.getElementById("tel").value;
    if (numTel.length == 11){
        let div1 = numTel.slice(0, 3);
        let div2 = numTel.slice(3, 7);
        let div3 = numTel.slice(7, 11);
        let numTel = (div1 + div2 + div3);
        document.getElementById("tel").value = numTel;
    }
})
//Evitar que el botón de submit haga la funcion de guardar-enviar, luego guarde nombre y apellido y valide checkbox
formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    guardarNombre()
    validarCheckbox()
})
// Validar checkbox y redireccionar página a 2do validacion.html
function validarCheckbox() {
    var checked = document.getElementById("terms").checked;
    if (checked === false) {
        document.getElementById("errUnchecked").innerHTML = "Debes aceptar los términos y condiciones antes de proceder al pago";
    }
    else {
        document.getElementById("errUnchecked").innerHTML = checked;
        window.location.href = "./validacion.html"
    }
}