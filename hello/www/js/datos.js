function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;

}

function registro() {

    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("contrasenia").value;
    localStorage.fecha = document.getElementById("fecha").value;
    localStorage.sexo = document.getElementById("sexo").value;
    localStorage.peso = document.getElementById("peso").value;
    localStorage.edad = document.getElementById("edad").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.horas = document.getElementById("horas").value;
    localStorage.bebidas = document.getElementById("bebidas").value;
    localStorage.drogas = document.getElementById("drogas").value;
    localStorage.etapa = document.getElementById("etapa").value;
    localStorage.duracion = document.getElementById("duracion").value;
    localStorage.tomografia = document.getElementById("tomografia").value;
    localStorage.resonancia = document.getElementById("resonancia").value;
}

function recuperarDatos() {

    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = localStorage.nombre;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}

function recuperarDatosRegistro() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("dnombre").innerHTML = localStorage.nombre;
        document.getElementById("dfecha").innerHTML = localStorage.fecha;
        document.getElementById("dsexo").innerHTML = localStorage.sexo;
        document.getElementById("dpeso").innerHTML = localStorage.peso;
        document.getElementById("dedad").innerHTML = localStorage.edad;
        document.getElementById("demail").innerHTML = localStorage.email;
        document.getElementById("dhoras").innerHTML = localStorage.horas;
        document.getElementById("dbedidas").innerHTML = localStorage.bebidas;
        document.getElementById("ddrogas").innerHTML = localStorage.drogas;
        document.getElementById("detapa").innerHTML = localStorage.etapa;
        document.getElementById("dduracion").innerHTML = localStorage.duracion;
        document.getElementById("dtomografia").innerHTML = localStorage.tomografia;
        document.getElementById("dresonancia").innerHTML = localStorage.resonancia;

    } else {
        document.getElementById("nombre").innerHTML = localStorage.nombre;
        document.getElementById("contrasenia").innerHTML = localStorage.contrasenia;
        document.getElementById("fecha").innerHTML = localStorage.fecha;
        document.getElementById("sexo").innerHTML = localStorage.sexo;
        document.getElementById("peso").innerHTML = localStorage.peso;
        document.getElementById("edad").innerHTML = localStorage.edad;
        document.getElementById("email").innerHTML = localStorage.email;
        document.getElementById("horas").innerHTML = localStorage.horas;
        document.getElementById("bedidas").innerHTML = localStorage.bebidas;
        document.getElementById("drogas").innerHTML = localStorage.drogas;
        document.getElementById("etapa").innerHTML = localStorage.etapa;
        document.getElementById("duracion").innerHTML = localStorage.duracion;
        document.getElementById("tomografia").innerHTML = localStorage.tomografia;
        document.getElementById("resonancia").innerHTML = localStorage.resonancia;
    }
}