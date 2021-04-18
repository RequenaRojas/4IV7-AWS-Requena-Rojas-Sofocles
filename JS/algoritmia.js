//Problema1
function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

    //tenemos que detectar el espacio, tendria que dividir 
    //la cadena y colocarla dentro de un array

    var p1_array = p1_input.split(' ').reverse();

    //dentro de un array
    //dentrodeunarray
    //alreves
    //separar

    var p1_res = '';

    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length)p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;s

}


//Problema2
function problema2(){
    // 1° obtener los valores por parte de los campo de html

    var p2_x1 = document.querySelector('#p2_x1').value;
    var p2_x2 = document.querySelector('#p2_x2').value;
    var p2_x3 = document.querySelector('#p2_x3').value;
    var p2_x4 = document.querySelector('#p2_x4').value;
    var p2_x5 = document.querySelector('#p2_x5').value;

    var p2_y1 = document.querySelector('#p2_y1').value;
    var p2_y2 = document.querySelector('#p2_y2').value;
    var p2_y3 = document.querySelector('#p2_y3').value;
    var p2_y4 = document.querySelector('#p2_y4').value;
    var p2_y5 = document.querySelector('#p2_y5').value;

    /*
    Para encontrar el minimo producto escalar entre dos vectores
    tenemos que realizar las operaciones correspondientes que son
    el máximo valor de un vector por el minimo valor del otro
    vector

    */
   
    //Construimos los vectores

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //Ordenamiento los vectores
    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    // Invertir el vector 2
    v2 = v2.reverse();

    //Producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){

        p2_producto += v1[i]  * v2[i];

    }

    //Mostrar el resultado
    document.querySelector('#p2-output').textContent = 'Producto escalar minimo :' + p2_producto;

    
}



//Problema3

function problema3(){
    var p3_input = document.querySelector('#p3-input').value;

    //verificamos si el input cumple con la siguiente expresión regular

    var patron = /[QWERTYUIOPASDFGHJKLÑZXCVBNM,]/g;

    
    if(patron.test(p3_input) == false || /[^QWERTYUIOPASDFGHJKLÑZXCVBNM,]/g.test(p3_input) == true){
        document.querySelector('#p3-output').textContent = "No escriba lo que no se le pedío (╯‵□′)╯︵┻━┻";
    }
    else{
        //tenemos que detectar la coma, tendria que dividir 
        //la cadena y colocarla dentro de un array

        var p3_array = p3_input.split(','); // p3_input.split(',') ~una lista con los digitos separados por ,

        var array_NumLetras = [];


        p3_array.forEach(function (palabra, index){
            var palabra_array = Array.from(palabra);
            var letras_array = [];
            
            palabra_array.forEach(function (letra, index){
                if(letras_array.includes(letra) == true){
                    //No hará nada
                }else{
                    letras_array.push(letra);
                    
                }
            });

            array_NumLetras.push(letras_array.length);

        });

    

        //Código Reutilizado del problema 8 OMG

        
        //El número más grande debera ser mayor (el tamaño de la lista - 1) veces si comparamos
        //cada elemento de la misma lista con ese número.

        var n = 0;
        var m = 0;

        array_NumLetras.forEach(function (num1, i){
            n = 0;
            m = 0;

            for (let j = 0; j <= array_NumLetras.length; j++) {
                
                if(num1 > array_NumLetras[j]){
                    n += 1;
                }
                if(num1 < array_NumLetras[j]){
                    
                }
                if(num1 == array_NumLetras[j]){
                    m += 1;
                }
                
            }

            //Caso deseado
            if (n  ==  array_NumLetras.length - 1){
                document.querySelector('#p3-output').textContent = p3_array[i];
            }
        
            //Caso que todos sean iguales
            if(m == array_NumLetras.length){
                document.querySelector('#p3-output').textContent = "Todos son iguales OMG";
            }


        });

        

    }
    
}


function validarEntrada(e){
    var teclado = (document.all)?e.keyCode:e.which;
    
   if(teclado == 8)return true; 
   var patron = /[QWERTYUIOPASDFGHJKLÑZXCVBNM,]/g;
   var prueba = String.fromCharCode(teclado);

   
    return patron.test(prueba);
}

