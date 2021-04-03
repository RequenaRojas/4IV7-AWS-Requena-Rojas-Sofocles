function validarNumInt(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d ]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}
function validarNumFloat(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var sueldo = parseFloat(document.formulario.sueldo.value);
    var años = parseFloat(document.formulario.años.value);
    var quincena = 0;
    if (años < 1){
        quincena = sueldo + ((1/20) * sueldo);
        document.formulario.resultado.value = "$"+quincena;
    }
    if (años >= 1 && años < 2 ){
        quincena = sueldo + ((7/100) * sueldo);
        document.formulario.resultado.value = "$"+quincena;
    }
    if (años >= 2 && años < 5){
        quincena = sueldo + ((1/10) * sueldo);
        document.formulario.resultado.value = "$"+quincena;
    }
    if (años >= 5 && años < 10){
        quincena = sueldo + ((3/20) * sueldo);
        document.formulario.resultado.value = "$"+quincena;
    }
    if (años > 10){
        quincena = sueldo + ((1/5) * sueldo);
        document.formulario.resultado.value = "$"+quincena;
    }
    
}


function borrar(){
    document.formulario.resultado.value = "";
    document.formulario.precio.value = "";
    document.formulario.horas.value = "";
    
}