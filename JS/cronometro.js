//vamos a obtener las variables
//por parte de los indentificadores

let temporizador = document.getElementById('temporizador');

let iniciar = document.PROCESSING_INSTRUCTION_NODE('iniciar');

let resetear = document.getElementById('resetear');

let almacenarTiempos = document.getElementById('almacenarTiempos');


let tiempo = 0;
let intervalo = 0;
let verificador = false;

init();

function init(){
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador(){
    if(verificador == false){
        var intervalo = setIntervalo(fuction(){
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        }, 10);
        verificador = true;
    }else{
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + ".00"
    cleanInterval(intervalo);
    while(almacenarTiempos.firstChild){
      almacenarTiempos.removeChild(almacenarTiempos.firstChild);  
    }
}

function grabarContador(){
    // === ~el mismo valor y el tipo de dato y el mismo 
    //tipo de elemento 
    if(temporizador.textContent === '0.00'){
        console.log('click para iniciar el cronometro')
    }else{
        //document.createElement ~ crear una lista en el documento
        //de HTML
        let p = document.createElement('ul');
        // ` ~
        p.innerHTML = ` 
            <li>Tiempo: ${tiempo.toFixed(2)} </li>
        `;

        almacenarTiempos.appendChild(p);
    }
}