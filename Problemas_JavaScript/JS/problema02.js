

// El parametro es un EVENTO y en este caso (input text) será en onkeypress porque 
//hací lo establecimos en el HTML
function validarNum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    /*  document.all ~ Dame todo el documento todo lo que venga de la entrada del documento(HTML),
                       Da acceso a todos los elementos del documento. Es una interfaz no estándar 
                       y no se debería utilizar. （︶^︶）


        e.keyCode ~ Devuelve el valor Unicode de una tecla que no es caracter en un evento 
                    keypress o cualquier tecla en cualquier otro tipo de evento de teclado.


        e.which ~ Devuelve el valor Unicode de la tecla en un evento del teclado, 
                  sin importar el tipo de tecla que se presionó.

        Unicode: 
        Unicode es un conjunto de caracteres estándar que numera y 
        define caracteres de diferentes idiomas, sistemas de escritura y símbolos. 
        Al asignar un número a cada caracter, los programadores pueden crear codificaciones de
        caracteres, para permitir que las computadoras almacenen, procesen y transmitan cualquier
        combinación de idiomas en el mismo archivo o programa.   
        
        Document:
        La interfaz Document representa cualquer página web cargada en el navegador y sirve como 
        punto de entrada al contenido de la página (El árbol DOM). El DOM incluye elementos como 
        <body> y <table>), entre muchos otros, y proporciona funcionalidad que es global al documento, 
        como obtener la URL de la página y crear nuevos elementos en el documento.
    */
   if(teclado == 8)return true; //Si el usuario aprieta el BackSpace tendrá que aceptar el cambio el documento

   var patron = /[0-9\d .]/;
   var prueba = String.fromCharCode(teclado);

   return patron.test(prueba);
}

function operacion(){
    var ventas = parseInt(document.formulario.cantVentas.value);
    var sueldoBase = parseInt(document.formulario.sueldoBase.value);
    const porcentaje = 10;

    var conceptoComisiones =   ventas * parseFloat(porcentaje/100) * sueldoBase;

    var total = conceptoComisiones+sueldoBase

    document.formulario.total.value= "$"+total;
    document.formulario.comisiones.value= "$"+conceptoComisiones;
}

function borrar(){
    document.formulario.total.value ="";
    document.formulario.comisiones.value="";
    document.formulario.sueldoBase.value ="";
    document.formulario.cantVentas.value="";
}