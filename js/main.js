// CÓDIGO POO

// crear un Objeto literal llamado studests
// Se necesita sus principales métodos
// método1: estudiantes en un arreglo vacío
// método2: agregar estudiantes
// método3: mostrar estudiantes
var students = {
    // propiedades de los estudiantes
    nombre: prompt("Ingrese el nombre de la estudiante"),
    puntajeTecnico: prompt("Ingrese el Prcentaje Técnico"),
    puntajeHs: prompt("Ingrese el puntaje de Habilidades Socio-Emocionales"),
    // método para validar los datos ingresados correctamente
    DataCorrectStudents: function(estudiantes) {
        var estudiantes = [];

        if (this.nombre == "" || this.puntajeTecnico == "" || this.puntajeHse == "") {
            sweetAlert("Registro invalido", "Mensaje del sistema", "error");
        } else {
            estudiantes.push(this.nombre, this.puntajeTecnico, this.puntajeHs);
            swal("Estudiante Registrado", "Mensaje del sistema", "success");
        }
        return
    }
}

/////////////////*********************** */
+ function() {
    // Elementos
    var botonAgregar = document.getElementById("agregar");
    var botonMostrar = document.getElementById("mostrar");
    var botonBuscar = document.getElementById("buscar");
    var botonTopTecnico = document.getElementById("top-tecnico");
    var botonTopHSE = document.getElementById("top-hse");
    var resultado = document.getElementById("contenedor-estudiantes");

    // Evento Click - Agregar
    var eventoAgregar = function(e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };

    var eventoMostrar = function(e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };

    var eventoBuscar = function(e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
        var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
        resultado.innerHTML = mostrarLista(estudianteBuscado);
    };

    var eventoTopTecnico = function(e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopTecnico = topTecnico(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
    };

    var eventoTopHSE = function(e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopHSE = topHSE(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopHSE);
    };

    // Manejadores de eventos
    botonAgregar.addEventListener("click", eventoAgregar);
    botonMostrar.addEventListener("click", eventoMostrar);
    botonBuscar.addEventListener("click", eventoBuscar);
    botonTopTecnico.addEventListener("click", eventoTopTecnico);
    botonTopHSE.addEventListener("click", eventoTopHSE);
}();
///-----------
var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes; // Esta función genera la lista de estudiantes
}

function Estudiante(nombre, porTec, porHse) {
    // Objeto estudiante
    this.nombre = nombre;
    this.puntajeTecnico = porTec;
    this.puntajeHse = porHse;
}

function agregarEstudiante() {
    // DONE
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingrese el nombre de la estudiante");
    var porTec = prompt("Ingrese el Prcentaje Técnio");
    var porHse = prompt("Ingrese el puntaje de Habilidades Socio-Emocionales");

    var _estudiante = new Estudiante(nombre, porTec, porHse);
    if (_estudiante.nombre == "" || _estudiante.puntajeTecnico == "" || _estudiante.puntajeHse == "") {
        sweetAlert("Registro invalido", "Mensaje del sistema", "error");
    } else {
        estudiantes.push(_estudiante);
        swal("Estudiante Registrado", "Mensaje del sistema", "success");
    }
    return _estudiante;
}

function mostrar(estudiante) {
    // DONE
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista de los estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    // forEach y devolverlo en un arreglo como el ejemplo anterior
    var resultado = "";
    estudiantes.forEach(function addStudent(value) {
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + value.nombre + "</p>";
        resultado +=
            "<p><strong>Puntos Técnicos:</strong> " +
            value.puntajeTecnico +
            "</p>";
        resultado +=
            "<p><strong>Puntos HSE:</strong> " + value.puntajeHse + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
    });
    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    return estudiantes.filter(function(estudiante) {
        if (nombre.toLowerCase() == estudiante.nombre.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    //
    return estudiantes.sort(function(var1, var2) {
        return var2.puntajeTecnico - var1.puntajeTecnico;
    });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(var1, var2) {
        return var2.puntajeHse - var1.puntajeHse;
    });
}

///