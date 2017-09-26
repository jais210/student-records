// CÓDIGO POO
// crear un Objeto literal llamado studests
'user strict'
class App {
    // creo mi objeto constructor 
    constructor() {
            this.estudiantes = [];
        }
        // función que agrega estudiantes
    agregarEstudiante(nombre, puntosTecnicos, puntosHSE) {
            let estudiante = {
                nombre: nombre,
                puntosTecnicos: puntosTecnicos,
                puntosHSE: puntosHSE
            }
            this.estudiantes.push(estudiante);
            return estudiante;
        }
        // función que muestra los estudiantes
    mostrar(estudiante) {
            let fichaEstudiante = `
            <div class = "estudiante">
                <h3 class="text-uppercase">${estudiante.nombre}</h3>
                <strong>Tech Skills:</strong> ${estudiante.puntosTecnicos}%<br>
                <strong>Life Skills:</strong> ${estudiante.puntosHSE}%<br>
                <strong>Status:</strong> Active<br>
            </div>
        `
            return fichaEstudiante;
        }
        // función que muestra la lista de los estudiantes
    mostrarLista(estudiantes) {
            return estudiantes.map(this.mostrar);
        }
        // función que muestra los promedios de los estudiantes
    estudiantesPromedioalto() {
            return this.estudiantes.filter(a => ((a.puntosTecnicos + a.puntosHSE) / 2) >= 70);
        }
        // función que reinicia los valores ingresados
    reiniciar() {
            $('#puntosTecnicos').val('');
            $('#puntosHSE').val('');
            $("#nombre").val('');
            $("#nombre").next().css('visibility', 'hidden');
            $('#range').html(50);
            $('#range2').html(50);
            $('#agregar').removeAttr('data-dismiss');
        }
        //muestra toda la lista de estudiantes
    eventoMostrar() {
            $("#fichas").html(this.mostrarLista(this.estudiantes));
        }
        // muestra las estudiantes empleables
    eventoMostrarEmpleables() {
            let empleables = this.estudiantesPromedioalto();
            $('#fichas').html(this.mostrarLista(empleables));
        }
        // elimina a las estudiantes con promedio bajo
    eventoEliminar() {
            this.estudiantes = this.estudiantesPromedioalto();
            $('#fichas').html(this.mostrarLista(this.estudiantes));
        }
        // agrega
    eventoAgregar() {
        let nombre = $('#nombre').val();
        let puntosTecnicos = parseInt($("#puntosTecnicos").val());
        let puntosHSE = parseInt($("#puntosHSE").val());
        if (nombre == '') {
            $("#nombre").next().css('visibility', 'visible');
        } else {
            $('#agregar').attr('data-dismiss', "modal");
            let estudiante = this.agregarEstudiante(nombre, puntosTecnicos, puntosHSE);
            $("#fichas").html(this.mostrar(estudiante));
        }
    }

    // crea los eventos//OJo aquí llamanos a los eventos con arrow function para evitar el this por defecto de una función
    // si usamos this de manera pura, Js va a considerar otro scope de this mas no el que queremos
    iniciar() {
        $("#agregar").click(() => this.eventoAgregar());

        $('#agregando').click(() => this.reiniciar());
        $('#mostrar').click(() => this.eventoMostrar());
        $('#empleables').click(() => this.eventoMostrarEmpleables());
        $('#eliminadas').click(() => this.eventoEliminar());
    }
}
$(document).ready(() => {

    var app = new App();
    app.iniciar();
})

/// mio mio 
const students = {
    // método para validar los datos ingresados correctamente
    allStudents: [],

    nombre: prompt("Ingrese el nombre de la estudiante"),
    puntajeTecnico: prompt("Ingrese el Porcentaje Técnico"),
    puntajeHs: prompt("Ingrese el puntaje de Habilidades Socio-Emocionales"),

    objStudents: function() {
        // Objeto estudiante
        this.nombre = nombre;
        this.puntajeTecnico = porTec;
        this.puntajeHse = porHse;
    },

    dataCorrectStudents: () => {

        if (this.nombre === "" || this.puntajeTecnico === "" || this.puntajeHse === "") {
            sweetAlert("Registro invalido", "Mensaje del sistema", "error");
        } else {
            this.allStudents.push(this.objStudents);
            swal("Estudiante Registrado", "Mensaje del sistema", "success");
        }
        return this.allStudents;
    },
    // método que muestra los estudiantes
    showStudents: () => {
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
    btn: () => {
        var botonAgregar = document.getElementById("agregar").addEventListener("click", this.eventAdd);
        // botonMostrar = document.getElementById("mostrar").addEventListener("click", eventoMostrar);
        // botonBuscar = document.getElementById("buscar").addEventListener("click", eventoBuscar);
        // botonTopTecnico = document.getElementById("top-tecnico").addEventListener("click", eventoTopTecnico);
        // botonTopHSE = document.getElementById("top-hse").addEventListener("click", eventoTopHSE);
        // var resultado = document.getElementById("contenedor-estudiantes");

    },
    // evento para el botón agregar estudiante
    eventAdd: () => {
        document.getElementById("contenedor-estudiantes").innerHTML = this.dataCorrectStudents;
    },

}
$(document).ready(students.inicio);


/////////////////*********************** */
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

// /// DOM
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