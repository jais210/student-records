// CÓDIGO POO
'use strict'
const  registro = {
    //mi array de estudiantes.Se inicia vacío
    estudiantes: [],
    inicio:()=>{
        $('#btnAgregar').click(registro.agregarEstudiante);
        $('#mostrar').click(registro.listarEstudiantes);
        $('#puntajeAlto').click(registro.mostrarBajosPuntajes);
        $('#empleables').click(registro.mostrarEmpleables);
    },
    
    agregarEstudiante:()=>{
        console.log("estudiantes")
        if ($('#nombre').val() != '' && $('#puntajeTecnico').val()!="" && $('#puntajeHse').val()!=""){
            let datos = {
            nombre: $('#nombre').val(),
            puntajeTecnico:$('#puntajeTecnico').val(),
            puntajeHse: $('#puntajeHse').val()
        };
        $('#resultado').html(registro.mostrarEstudianteHtml(datos));
        console.log(registro.mostrarEstudianteHtml(datos));
        registro.estudiantes.push(datos);}
        registro.limpiarInputs();
    },
    mostrarEstudianteHtml:(datos)=>{
        return (`
        <p>${datos.nombre}</p>
        <p>${datos.puntajeTecnico}</p>
        <p>${datos.puntajeHse}</p>`);
        
    },
    listarEstudiantes:()=>{
        let t = "";
        registro.estudiantes.map((estudiante)=>{
            t += registro.mostrarEstudianteHtml(estudiante);
        });
        $('#resultado').html(t);
    },
    limpiarInputs:()=>{
         $('#nombre').val(""),
         $('#puntajeTecnico').val(""),
         $('#puntajeHse').val("")
    },
    mostrarBajosPuntajes:()=>{
        let concatenar = "";
        registro.estudiantes.filter((estudiante)=>{
            return ((parseInt(estudiante.puntajeTecnico) + parseInt(estudiante.puntajeHse))/2 <= 70)? concatenar+= registro.mostrarEstudianteHtml(estudiante):"";
        });
        $('#resultado').html(concatenar);
    },
    mostrarEmpleables:()=>{
        let concatenar = "";
        registro.estudiantes.filter((estudiante)=>{
            return ((parseInt(estudiante.puntajeTecnico) + parseInt(estudiante.puntajeHse))/2 >= 70)? concatenar+= registro.mostrarEstudianteHtml(estudiante):"";
        });
        $('#resultado').html(concatenar);
    }
    


}

$(document).ready(registro.inicio);
