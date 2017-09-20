// CÓDIGO POO
// crear un Objeto literal llamado studests
var students = {
    // método para validar los datos ingresados correctamente
    dataCorrectStudents: function(estudiantes, nombre, puntajeTecnico, puntajeHs) {
        estudiantes = [];
        nombre = prompt("Ingrese el nombre de la estudiante");
        puntajeTecnico = prompt("Ingrese el Porcentaje Técnico");
        puntajeHs = prompt("Ingrese el puntaje de Habilidades Socio-Emocionales");

        if (nombre === "" || puntajeTecnico === "" || puntajeHse === "") {
            sweetAlert("Registro invalido", "Mensaje del sistema", "error");
        } else {
            estudiantes.push(nombre, puntajeTecnico, puntajeHse);
            swal("Estudiante Registrado", "Mensaje del sistema", "success");
        }
    },
    // método que muestra los estudiantes
    showStudents: function(resultado) {
        resultado = "";
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + this.dataCorrectStudents.nombre + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + this.dataCorrectStudents.puntajeTecnico + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + this.dataCorrectStudents.puntajeHse + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";

    },

    // evento para el botón
    // método botones y eventos
    btn: function(botonAgregar, botonMostrar, botonBuscar, botonTopTecnico, botonTopHSE, resultado) {
        botonAgregar = document.getElementById("agregar").addEventListener("click", this.eventAdd);
        botonMostrar = document.getElementById("mostrar").addEventListener("click", eventoMostrar);
        botonBuscar = document.getElementById("buscar").addEventListener("click", eventoBuscar);
        botonTopTecnico = document.getElementById("top-tecnico").addEventListener("click", eventoTopTecnico);
        botonTopHSE = document.getElementById("top-hse").addEventListener("click", eventoTopHSE);
        resultado = document.getElementById("contenedor-estudiantes");

    },
    // evento para el botón agregar estudiante
    eventAdd: function(e) {
        e.preventDefault();
        this.btn.botonAgregar.innerHTML = this.dataCorrectStudents;
    },


}

/////////////////*********************** */
// +

// function() {
//     // Elementos
//     var botonAgregar = document.getElementById("agregar");
//     var botonMostrar = document.getElementById("mostrar");
//     var botonBuscar = document.getElementById("buscar");
//     var botonTopTecnico = document.getElementById("top-tecnico");
//     var botonTopHSE = document.getElementById("top-hse");
//     var resultado = document.getElementById("contenedor-estudiantes");

//     // Evento Click - Agregar
//     var eventoAgregar = function(e) {
//         e.preventDefault();
//         var estudiante = agregarEstudiante();
//         resultado.innerHTML = mostrar(estudiante);
//     };

//     var eventoMostrar = function(e) {
//         e.preventDefault();
//         var estudiantes = obtenerListaEstudiantes();
//         resultado.innerHTML = mostrarLista(estudiantes);
//     };

//     var eventoBuscar = function(e) {
//         e.preventDefault();
//         var estudiantes = obtenerListaEstudiantes();
//         var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
//         var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
//         resultado.innerHTML = mostrarLista(estudianteBuscado);
//     };

//     var eventoTopTecnico = function(e) {
//         e.preventDefault();
//         var estudiantes = obtenerListaEstudiantes();
//         var estudiantesTopTecnico = topTecnico(estudiantes);
//         resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
//     };

//     var eventoTopHSE = function(e) {
//         e.preventDefault();
//         var estudiantes = obtenerListaEstudiantes();
//         var estudiantesTopHSE = topHSE(estudiantes);
//         resultado.innerHTML = mostrarLista(estudiantesTopHSE);
//     };

//     // Manejadores de eventos
//     botonAgregar.addEventListener("click", eventoAgregar);
//     botonMostrar.addEventListener("click", eventoMostrar);
//     botonBuscar.addEventListener("click", eventoBuscar);
//     botonTopTecnico.addEventListener("click", eventoTopTecnico);
//     botonTopHSE.addEventListener("click", eventoTopHSE);
// }();
// ///-----------
// var estudiantes = [];

// function obtenerListaEstudiantes() {
//     // TO DO: Retornar la lista de estudiantes
//     return estudiantes; // Esta función genera la lista de estudiantes
// }

// function Estudiante(nombre, porTec, porHse) {
//     // Objeto estudiante
//     this.nombre = nombre;
//     this.puntajeTecnico = porTec;
//     this.puntajeHse = porHse;
// }

// function agregarEstudiante() {
//     // DONE
//     // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
//     // Hint: El estudiante debe ser agregado a la lista de estudiantes
//     // TO DO: Retornar el estudiante recientemente creado
//     var nombre = prompt("Ingrese el nombre de la estudiante");
//     var porTec = prompt("Ingrese el Prcentaje Técnio");
//     var porHse = prompt("Ingrese el puntaje de Habilidades Socio-Emocionales");

//     var _estudiante = new Estudiante(nombre, porTec, porHse);
//     if (_estudiante.nombre == "" || _estudiante.puntajeTecnico == "" || _estudiante.puntajeHse == "") {
//         sweetAlert("Registro invalido", "Mensaje del sistema", "error");
//     } else {
//         estudiantes.push(_estudiante);
//         swal("Estudiante Registrado", "Mensaje del sistema", "success");
//     }
//     return _estudiante;
// }

// function mostrar(estudiante) {
//     // DONE
//     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
//     var resultado = "";
//     resultado += "<div class='row'>";
//     resultado += "<div class='col m12'>";
//     resultado += "<div class='card blue-grey darken-1'>";
//     resultado += "<div class='card-content white-text'>";
//     resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
//     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
//     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
//     resultado += "</div>";
//     resultado += "</div>";
//     resultado += "</div>";
//     resultado += "</div>";
//     return resultado;
// }

// function mostrarLista(estudiantes) {
//     // TO DO: Iterar la lista de los estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
//     // Retornar el template de todos los estudiantes
//     // forEach y devolverlo en un arreglo como el ejemplo anterior
//     var resultado = "";
//     estudiantes.forEach(function addStudent(value) {
//         resultado += "<div class='row'>";
//         resultado += "<div class='col m12'>";
//         resultado += "<div class='card blue-grey darken-1'>";
//         resultado += "<div class='card-content white-text'>";
//         resultado += "<p><strong>Nombre:</strong> " + value.nombre + "</p>";
//         resultado +=
//             "<p><strong>Puntos Técnicos:</strong> " +
//             value.puntajeTecnico +
//             "</p>";
//         resultado +=
//             "<p><strong>Puntos HSE:</strong> " + value.puntajeHse + "</p>";
//         resultado += "</div>";
//         resultado += "</div>";
//         resultado += "</div>";
//         resultado += "</div>";
//     });
//     return resultado;
// }

// function buscar(nombre, estudiantes) {
//     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
//     // Retornar el objeto del estudiante buscado
//     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

//     return estudiantes.filter(function(estudiante) {
//         if (nombre.toLowerCase() == estudiante.nombre.toLowerCase()) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// function topTecnico(estudiantes) {
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
//     //
//     return estudiantes.sort(function(var1, var2) {
//         return var2.puntajeTecnico - var1.puntajeTecnico;
//     });
// }

// function topHSE(estudiantes) {
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
//     return estudiantes.sort(function(var1, var2) {
//         return var2.puntajeHse - var1.puntajeHse;
//     });
// }

///