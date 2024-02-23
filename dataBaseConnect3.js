// const mysql = require('mysql2/promise')

// const databaseConfigs = {
//     host: "localhost",
//     user: "root",
//     password: "Meneses23",
//     database: "school",
// };

// async function main(query) {
//     try {
//         const connection = await mysql.createConnection(databaseConfigs);
//         console.log('Connected');
//         const result = await connection.query(query);
//         console.log(result);
//         connection.end();
//     } catch (error) {
//         console.log(error);
//         await connection.end();
//     }
// }

// // Reto 1. • Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
// const query_nameAndSurnameStudentsAndMarks = 'SELECT students.first_name, students.last_name, subjects.title FROM students INNER JOIN marks ON students.student_id = marks.student_id INNER JOIN subjects ON marks.subject_id = subjects.subject_id INNER JOIN `groups` ON students.group_id = `groups`.group_id;'


// // Reto 2. • Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
// const query_nameAndSurnameTeachersAndMarks ='SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers LEFT JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id LEFT JOIN subjects ON subject_teacher.subject_id = subjects.subject_id LEFT JOIN `groups` ON subject_teacher.group_id = `groups`.group_id;'

// // Reto 3. • Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.
// const query_TotalStudentsbySubject= 'SELECT COUNT(students.student_id) AS total_students, subjects.title, teachers.first_name, teachers.last_name FROM students RIGHT JOIN marks ON students.student_id = marks.student_id RIGHT JOIN subjects ON marks.subject_id = subjects.subject_id RIGHT JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id RIGHT JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id RIGHT JOIN `groups` ON students.group_id = `groups`.group_id GROUP BY subjects.title, teachers.first_name, teachers.last_name;'

// const query = query;
// main(query);


// ******************************************* RETOS CON SENTENCIAS PREPARADAS ******************

const mysql = require('mysql2/promise');

async function main() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Meneses23',
        database: 'school'
    });

    // Reto 1. • Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
    let params1 = [];
    let sql1 = `SELECT students.first_name, students.last_name, subjects.title 
    FROM students 
    INNER JOIN marks ON students.student_id = marks.student_id 
    INNER JOIN subjects ON marks.subject_id = subjects.subject_id 
    INNER JOIN \`groups\` ON students.group_id = \`groups\`.group_id;`;
    let [result1] = await connection.query(sql1, params1);
    console.log('Datos obtenidos para el Reto 1:');
    console.log(result1);
    

    // Reto 2. • Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
    let params2 = [];
    let sql2 = `SELECT teachers.first_name, teachers.last_name, subjects.title 
    FROM teachers 
    LEFT JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id 
    LEFT JOIN subjects ON subject_teacher.subject_id = subjects.subject_id 
    LEFT JOIN \`groups\` ON subject_teacher.group_id = \`groups\`.group_id;`;
    let [result2] = await connection.query(sql2, params2);
    console.log('Datos obtenidos para el Reto 2:');
    console.log(result2);
    
    // Reto 3. • Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.
    let params3 = [];
    let sql3 = `SELECT COUNT(students.student_id) AS total_students, subjects.title, teachers.first_name, teachers.last_name 
    FROM students 
    RIGHT JOIN marks ON students.student_id = marks.student_id 
    RIGHT JOIN subjects ON marks.subject_id = subjects.subject_id 
    RIGHT JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id 
    RIGHT JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id 
    RIGHT JOIN \`groups\` ON students.group_id = \`groups\`.group_id 
    GROUP BY subjects.title, teachers.first_name, teachers.last_name;`;
    let [result3] = await connection.query(sql3, params3);
    console.log('Datos obtenidos para el Reto 3:');
    console.log(result3);
    
    // Cerrar la conexión
    await connection.end();
}


main();
