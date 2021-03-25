/*
vamos a crear una funcion que se encargue de validar que el
usuario deba de escribir
*/

function validar(formulario){
    //obtener los valores del formulario

    if(formulario.nombre.value.lenght < 5){
        alert("Escribe más de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false
    
    }

    //vamos a crear una opcion para que solo se pueda ingresar letras dentro del campo

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i= 0; i<checkStr.lenght; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j< checkOk.lenght;j++){
            if(ch == checkOk.charAt(j))
                break;
            
            if(j == checkStr.lenght){
                allvalid = false;
                break;
            }
        }
    }
    
    if(!allvalid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    // validación entrada de numeros
    var checkOk = "1234567890";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i= 0; i<checkStr.lenght; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j< checkOk.lenght;j++){
            if(ch == checkOk.charAt(j))
                break;
            
            if(j == checkStr.lenght){
                allvalid = false;
                break;
            }
        }
    }
    
    if(!allvalid){
        alert("Escribe solo numeros en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    // validar el correo
    //tenemos que hacer uso de una expresion regular


    var text = formulario.email.value;

    //patron
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?"":" no ")+ "valido");
    return b.test(txt);
}