// CÓDIGO POO
// crear un Objeto Literal
'use strict';
const recordStudents = {
    // creo mi objeto constructor 

    students: [],

    // función que agrega estudiantes
    addStudent(name, pointTech, puntosHSE) {
        let student = {
            name: name,
            pointTech: pointTech,
            pointHse: pointHse
        }
        recordStudents.students.push(student);
        return student;
    },
    // función que muestra los estudiantes
    show(student) {
        let studentFile = `
            <div class = "estudiante">
                <h3 class="text-uppercase">${student.name}</h3>
                <strong>Tech Skills:</strong> ${student.pointTech}%<br>
                <strong>Life Skills:</strong> ${student.pointHse}%<br>
                <strong>Status:</strong> Active<br>
            </div>
        `
        return studentFile;
    },
    // función que muestra la lista de los estudiantes
    showList(students) {
        return students.map(recordStudents.mostrar);
    },
    // función que muestra los promedios de los estudiantes
    highPointStudents() {
        return recordStudents.students.filter(e => ((e.pointHse + e.pointHse) / 2) >= 70);
    },
    // función que reinicia los valores ingresados
    refresh() {
        $('#puntosTecnicos').val('');
        $('#puntosHSE').val('');
        $("#nombre").val('');
        $("#nombre").next().css('visibility', 'hidden');
        $('#range').html(50);
        $('#range2').html(50);
        $('#agregar').removeAttr('data-dismiss');
    },
    //muestra toda la lista de estudiantes
    eventShow() {
        $("#fichas").html(recordStudents.showList(recordStudents.students));
    },
    // muestra las estudiantes empleables
    eventEmployableStudents() {
        let employable = recordStudents.highPointStudents();
        $('#fichas').html(recordStudents.showList(employable));
    },
    // elimina a las estudiantes con promedio bajo
    eventRemove() {
        recordStudents.students = recordStudents.highPointStudents();
        $('#fichas').html(recordStudents.showList(recordStudents.students));
    },
    // agrega
    eventoAdd() {
        let name = $('#nombre').val();
        let pointTech = parseInt($("#puntosTecnicos").val());
        let pointHse = parseInt($("#puntosHSE").val());
        if (name == '') {
            $("#nombre").next().css('visibility', 'visible');
        } else {
            $('#agregar').attr('data-dismiss', "modal");
            let student = recordStudents.addStudent(name, pointTech, pointHse);
            $("#fichas").html(recordStudents.show(student));
        }
    },

    // crea los eventos//OJo aquí llamanos a los eventos con arrow function para evitar el this por defecto de una función
    // si usamos this de manera pura, Js va a considerar otro scope de this mas no el que queremos
    start() {
        $("#add").click(recordStudents.eventAdd());
        $('#refresh').click(recordStudents.refresh());
        $('#print').click(recordStudents.eventShow());
        $('#runEmployability').click(recordStudents.eventEmployableStudents());
        $('#updateDropout').click(recordStudents.eventRemove());
    }
}

$(document).ready(recordStudents.start);