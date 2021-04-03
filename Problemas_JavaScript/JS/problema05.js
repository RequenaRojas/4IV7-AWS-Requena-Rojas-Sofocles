function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d ]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var mujeres = parseInt(document.formulario.mujeres.value);
    var hombres = parseInt(document.formulario.hombres.value);

    var total = mujeres + hombres;
    
    var porcentajeHom = (100*hombres)/total;
    var porcentajeMuj = (100*mujeres)/total;

    document.formulario.porcentajeHom.value = porcentajeHom+"%";
    document.formulario.porcentajeMuj.value = porcentajeMuj+"%";

}

function borrar(){
    document.formulario.porcentajeHom.value = ""
    document.formulario.porcentajeMuj.value = ""
    document.formulario.hombres.value = ""
    document.formulario.mujeres.value= "";
}