function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d ]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var horas = parseInt(document.formulario.horas.value);
    var precio = parseInt(document.formulario.precio.value);

    if (horas >= 0  && horas <= 40){
        var quincena = horas * precio;
        document.formulario.resultado.value = "$"+quincena;
    }
    if (horas > 40 && horas <= 48){
        var quincena = (precio * 40) + (2 * (horas - 40) * precio);
        document.formulario.resultado.value = "$"+quincena;
    }
    if (horas > 48){
        var quincena = (precio * 40) + (16 * precio) + (3 * (horas - 48) * precio);
        document.formulario.resultado.value = "$"+quincena;
    }
    
}


function borrar(){
    document.formulario.resultado.value = "";
    document.formulario.precio.value = "";
    document.formulario.horas.value = "";
    
}