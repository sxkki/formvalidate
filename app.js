function validarEntero(edad){
    //intento convertir a entero.
   //si era un entero no le afecta, si no lo era lo intenta convertir
   valor = parseInt(edad)

    //Compruebo si es un valor numérico
    if (isNaN(edad)) {
          //entonces (no es numero) devuelvo el valor cadena vacia
          return ""
    }else{
          //En caso contrario (Si era un número) devuelvo el valor
          return edad
    }
}

function validarEmail(correo) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    .test(correo)){
     alert("La dirección de email " + correo + " es correcta.") //si la direccion es correcta devuelve el valor ingresado.
     return correo;
    } else {
     alert("La dirección de email es incorrecta.")
     return ""; //en caso de que no sea correcta la devuelve vacia
    }
}

function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    }else{
        if (edad<18){
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    //valida el correo
    correo = document.fvalida.correo.value
    correo = validarEmail(correo)
    document.fvalida.correo.value=correo
    if (correo==""){
        alert("Tiene que introducir un correo valido.")
        document.fvalida.correo.focus()
        return 0;
    }

    //valida el interés
    if (document.fvalida.interes.selectedIndex==0){
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario.");
}   