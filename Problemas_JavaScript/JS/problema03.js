
function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var subtotal = parseInt(document.formulario.subtotal.value);
    const porcentaje = 15;

    var total =  (1-(porcentaje/100)) * subtotal;

    document.formulario.total.value= "$"+total;
}

function borrar(){
    document.formulario.total.value ="";
    document.formulario.subtotal.value="";
}