// // CÓDIGO POO
// // crear un Objeto Literal
// 'use strict';
// const app = {
//     students: [],  // creo mi objeto constructor 
//     start:()=> {
//         $("#agregar").click(app.eventAdd);
//         // $('#refresh').click(app.refresh());
//         $('#print').click(app.eventShow);
//         $('#runEmployability').click(app.eventEmployableStudents);
//         $('#updateDropout').click(app.eventRemove);
//     },
//     eventAdd:() =>{
//         let name = prompt("escribe nombre");
//         let pointTech = prompt("escribe puntaje técnico");
//         let pointHse = prompt("escribe hse");
//         let student = app.addStudent(name, pointTech, pointHse);
//         console.log(student)
//         $("#fichas").html(student);

//     },
//     // función que agrega estudiantes

//     addStudent:(name, pointTech, pointHse)=> {
//         let student = {
//             name: name,
//             pointTech: pointTech,
//             pointHse: pointHse
//         }
//         app.students.push(student);
//         return app.show(student);
//     },
//     // función que muestra los estudiantes
//     show:(student) =>{
//         let studentFile = `
//             <div class = "estudiante">
//                 <h3 class="text-uppercase">${student.name}</h3>
//                 <strong>Tech Skills:</strong> ${student.pointTech}%<br>
//                 <strong>Life Skills:</strong> ${student.pointHse}%<br>
//                 <strong>Status:</strong> Active<br>
//             </div>
//         `
//         return studentFile;
//     },
//     // función que muestra la lista de los estudiantes
//     showList:()=> {
//         return app.students.map(app.show);
//     },
//     // función que muestra los promedios de los estudiantes
//     highPointStudents:()=> {
//         return app.students.filter((e) => {
//             return((parseInt(e.pointTech) + parseInt(e.pointHse)) / 2) >= 70});
//     },
//     // función que reinicia los valores ingresados
//     // refresh() {
//     //     $('#puntosTecnicos').val('');
//     //     $('#puntosHSE').val('');
//     //     $("#nombre").val('');
//     //     $("#nombre").next().css('visibility', 'hidden');
//     //     $('#range').html(50);
//     //     $('#range2').html(50);
//     //     $('#agregar').removeAttr('data-dismiss');
//     // },
//     //muestra toda la lista de estudiantes
//     eventShow:()=> {
//         $("#fichas").html(app.showList());
//     },
//     // muestra las estudiantes empleables
    
//     // elimina a las estudiantes con promedio bajo
//     // eventRemove() {
//     //     app.students = app.highPointStudents();
//     //     $('#fichas').html(app.showList(app.students));
//     // },
//     // agrega


//     // crea los eventos//OJo aquí llamanos a los eventos con arrow function para evitar el this por defecto de una función
//     // si usamos this de manera pura, Js va a considerar otro scope de this mas no el que queremos
    
// }

// $(document).ready(app.start);