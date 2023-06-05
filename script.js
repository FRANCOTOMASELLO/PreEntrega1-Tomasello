let nombre = prompt("Ingrese su nombre y apellido aqui");  

    if (nombre == ""){
    alert("No ingresaste tu nombre y apellido")
}

let text = ("Hola, bienvenido ")
alert(text + nombre)

let edad = prompt("Ingrese su edad aqui")
    if(edad > 17){
    alert("Adelante, Eres mayor de edad")
}   else{
    alert("Eres menor de edad, lo siento.")
}


function elegiOpcion(opcion) {
    switch (opcion) {
        case "vodka":
            return "El vodka tiene un valor de 40$"
        case "fernet":
            return "El fernet tiene un valor de 100$"
        case "gin":
            return "El gin tiene un valor de 80$"
        case "ron":
            return "El ron tiene un valor de 120$"
    }
}
let respuesta
    while (true) {
    respuesta = prompt("Ingrese el producto que usted quiere: \nvodka\nfernet\ngin\nron\nSi usted no esta interesado en ningun producto ingrese: salir")

    if (respuesta.toLowerCase() === "salir"){
    break
    }

    alert(elegiOpcion(respuesta.toLowerCase()))
}
