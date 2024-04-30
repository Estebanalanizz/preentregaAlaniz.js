alert("Estas por entrar a una encuesta para ver si puedes o no alquilar con nosotros.")

let hijos = parseInt(prompt("Ingresa cuantos hijos tienes"))

if (hijos <= 2) { 
    alert("Eres apto.");
} else {
    alert("No eres apto. Mejor alquila una casa.");
}




let intentos = 0;

function validarContraseña(contraseña) {
    if (contraseña === "holasabriojavi") {
        intentos = 0; 
        return true;
    } else {
        intentos++;
        return false;
    }
}

while (true) {
    let contraseña = prompt("Ingrese su contraseña");
    if (validarContraseña(contraseña)) {
        alert("Bienvenid@.");
        break;
    } else {
        alert("Contraseña incorrecta");
        if (intentos >= 3) {
            alert("Has excedido el número de intentos posibles.");
            break;
        }
    }
}



//SIMULADOR INTERACTIVO

function calcularPrecioTotal() {

    let producto = parseFloat(prompt("Ingresa el precio del producto"));

    let percepcion = producto * 0.0298;
    let precioTotal = producto + percepcion;

    alert("El precio total del producto con percepción es:" + precioTotal);
}  
calcularPrecioTotal();

let continuar = true;
while (continuar) {
    calcularPrecioTotal();
    continuar = confirm("¿Deseas calcular el precio total de otro producto?");
}