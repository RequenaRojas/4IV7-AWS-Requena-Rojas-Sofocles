function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var num1 = document.formulario.num1.value;
    var num2 = document.formulario.num2.value
    if (num1 == num2){
        document.formulario.resultado.value = parseFloat(num1) * parseFloat(num2);
    }
    if(num1 < num2){
        document.formulario.resultado.value =  parseFloat(num1) + parseFloat(num2);
    }
    if(num1 > num2){
        document.formulario.resultado.value = parseFloat(num1) - parseFloat(num2);
    }
}

function borrar(){
    document.formulario.resultado.value = "";
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    
}