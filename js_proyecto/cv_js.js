/**document.getElementById("boton_edad").addEventListener("click", function(){
    console.log("edad actual");
    document.getElementById("informacion").innerHTML = "Actualmente tengo 28 años de edad";
})*/

function edad(){
    var divInfo = document.getElementById("reemplazar");
    divInfo.innerText = "Actualmente tengo 28 años de edad"
}
function email(){
    var divInfo = document.getElementById("reemplazar");
    divInfo.innerText = "Mi direccion de correo electronico es: deanmitchel5@gmail.com"
}
function locacion(){
    var divInfo = document.getElementById("reemplazar");
    divInfo.innerText = "Avenida San Martin 548 - Barrio los Alerces"
}
function telefono(){
    var divInfo = document.getElementById("reemplazar");
    divInfo.innerText = "Puede contactarse al siguiente número: 011-8739187"
}
function licencia(){
    var divInfo = document.getElementById("reemplazar");
    divInfo.innerText = "Tengo habilitacion 'B2' para conducir distintos tipos de vehiculos"
}