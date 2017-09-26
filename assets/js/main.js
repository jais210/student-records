// CÓDIGO POO
// crear una clase(objeto constructor)
'use strict'
class RecordStudents {
    // creo mi objeto constructor 
    constructor() {
            this.students = [];
        }
        // función que agrega estudiantes
    addStudent(name, pointTech, puntosHSE) {
            let student = {
                name: name,
                pointTech: pointTech,
                pointHse: pointHse
            }
            this.students.push(student);
            return student;
        }
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
        }
        // función que muestra la lista de los estudiantes
    showList(students) {
            return students.map(this.mostrar);
        }
        // función que muestra los promedios de los estudiantes
    highPointStudents() {
            return this.students.filter(e => ((e.pointHse + e.pointHse) / 2) >= 70);
        }
        // función que reinicia los valores ingresados
    refresh() {
            $('#puntosTecnicos').val('');
            $('#puntosHSE').val('');
            $("#nombre").val('');
            $("#nombre").next().css('visibility', 'hidden');
            $('#range').html(50);
            $('#range2').html(50);
            $('#agregar').removeAttr('data-dismiss');
        }
        //muestra toda la lista de estudiantes
    eventShow() {
            $("#fichas").html(this.showList(this.students));
        }
        // muestra las estudiantes empleables
    eventEmployableStudents() {
            let employable = this.highPointStudents();
            $('#fichas').html(this.showList(employable));
        }
        // elimina a las estudiantes con promedio bajo
    eventRemove() {
            this.students = this.highPointStudents();
            $('#fichas').html(this.showList(this.students));
        }
        // agrega
    eventoAdd() {
        let name = $('#nombre').val();
        let pointTech = parseInt($("#puntosTecnicos").val());
        let pointHse = parseInt($("#puntosHSE").val());
        if (name == '') {
            $("#nombre").next().css('visibility', 'visible');
        } else {
            $('#agregar').attr('data-dismiss', "modal");
            let student = this.addStudent(name, pointTech, pointHse);
            $("#fichas").html(this.show(student));
        }
    }

    // crea los eventos//OJo aquí llamanos a los eventos con arrow function para evitar el this por defecto de una función
    // si usamos this de manera pura, Js va a considerar otro scope de this mas no el que queremos
    start() {
        $("#add").click(() => this.eventAdd());

        $('#refresh').click(() => this.refresh());
        $('#print').click(() => this.eventShow());
        $('#runEmployability').click(() => this.eventEmployableStudents());
        $('#updateDropout').click(() => this.eventRemove());
    }
}
$(document).ready(() => {

    var appStudents = new RecordStudents();
    RecordStudents.start();
})