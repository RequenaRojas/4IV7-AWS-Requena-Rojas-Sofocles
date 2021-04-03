
function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   
    return patron.test(prueba);
    
}

function operacionPrincipal(){
    var parcial = document.formulario.parciales.value;
    var examen = document.formulario.examen.value;
    var trabajo = document.formulario.trabajo.value;
    
    if(parcial > 10 | examen > 10| trabajo > 10){
        document.formulario.resultado.value= "No puedes sacar más de 10 en una calificación ._.";
    }
    else{
        var total = ((55*parcial) +(30*examen)+(15*trabajo))/100;
        document.formulario.resultado.value= total;
    }
    
}

function borrar(){
    document.formulario.parciales.value = ""
    document.formulario.examen.value = ""
    document.formulario.trabajo.value = ""
    document.formulario.resultado.value= "";
}