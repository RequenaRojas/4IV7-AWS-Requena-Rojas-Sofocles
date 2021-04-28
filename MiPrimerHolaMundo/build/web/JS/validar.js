
function validar(formulario){
    var nom = formulario.nombre.value;
    var appat = formulario.appat.value;
    var apmat = formulario.appmat.value;
    var edad = formulario.edad.value;
    var correo = formulario.email.value;

    
    

    //Filtrado de campos vacíos
    if(nom == "" | appat == "" | apmat == "" | edad == "" | correo == ""){
        alert("Complete los campos vacíos");
        return false;
    }

    //filtro los nombres y  apellidos
    var expRegu = /\w{1,20}[^\d\s]/g

    
    if(expRegu.test(nom) == false | expRegu.test(appat) == false | expRegu.test(apmat) == false ){
        alert("Solo escriba letras en los campos Nombre, Apellido Paterno y Materno, No sobrepase los 20 caracteres\n"+array[i] );
        return false;
    }
    

    //Filtro edad
    var a = /\d{1,3}/;
    if(a.test(edad) == false){
        alert("Escriba un número válido en el campo edad");
        alert(edad);
        return false;
    }

    //Filtro el correo
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)$/;

    if(b.test(correo) == false){
        alert("Correp no válido");
        return false;
    }


}


function validarNum(formulario){
    ideliminar  = formulario.ideliminar.value;

    if(/\d+/.test(ideliminar) == false){
        alert("Inserte un número");
        return false;
    }


}


function validarConID(formulario){
    var nom = formulario.nombre.value;
    var appat = formulario.appat.value;
    var apmat = formulario.appmat.value;
    var edad = formulario.edad.value;
    var id = formulario.id.value;
    var correo = formulario.email.value;

    
    

    //Filtrado de campos vacíos
    if(nom == "" | appat == "" | apmat == "" | edad == "" | correo == "" | id == ""){
        alert("Complete los campos vacíos");
        return false;
    }

    //filtro los nombres y  apellidos
    var expRegu = /\w{1,20}[^\d\s]/g

    
    if(expRegu.test(nom) == false | expRegu.test(appat) == false | expRegu.test(apmat) == false ){
        alert("Solo escriba letras en los campos Nombre, Apellido Paterno y Materno, No sobrepase los 20 caracteres\n"+array[i] );
        return false;
    }
    

    //Filtro edad
    var a = /\d{1,3}/;
    if(a.test(edad) == false | a.test(id) == false){
        alert("Escriba un número válido en el campo ID o edad");
        alert(edad);
        return false;
    }

    //Filtro el correo
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)$/;

    if(b.test(correo) == false){
        alert("Correp no válido");
        return false;
    }


}


