function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacionPrincipal(){
    var num1 = document.formulario.num1.value;
    var num2 = document.formulario.num2.value;
    var num3 = document.formulario.num3.value;
    var nums = [parseFloat(num1),parseFloat(num2),parseFloat(num3)];


    var n = 0;
    var m = 0;

    //El número más grande debera ser mayor (el tamaño de la lista - 1) veces si comparamos
    //cada elemento de la misma lista con ese número.
    for (i of nums) {
       n = 0;


        for (j of nums) {
            if(i > j){
                n += 1;
            }
            if(i < j){
                
            }
            if(i == j){
                m += 1;
            }
        }
        
        //Caso deseado
       if (n  ==  nums.length - 1){
            document.formulario.resultado.value = i;
            break;
       }
       
       //Caso que todos sean iguales
       if(m == nums.length){
        document.formulario.resultado.value = i
        break;;
       }
    }
}


function borrar(){
    document.formulario.resultado.value = "";
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    
}