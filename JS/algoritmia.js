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