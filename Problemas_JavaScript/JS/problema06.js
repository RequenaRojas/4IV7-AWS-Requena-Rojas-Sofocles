function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d ]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var año = parseInt(document.formulario.fecha.value);
    var d = new Date();
    var n = parseInt(d.getFullYear());

    var edad = n - año ;

    if(n < año){
        document.formulario.años.value = "Todavia no existes ._.";
    }
    else{
        document.formulario.años.value = edad + " años";
    }
    

}

function borrar(){
    document.formulario.fecha.value = "";
    document.formulario.años.value = "";
    
}