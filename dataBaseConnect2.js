const mysql = require('mysql2/promise')

const databaseConfigs = {
    host: "localhost",
    user: "root",
    password: "Meneses23",
    database: "school",
};

async function main(query) {
    try {
        const connection = await mysql.createConnection(databaseConfigs);
        console.log('Connected');
        const result = await connection.query(query);
        console.log(result);
        connection.end();
    } catch (error) {
        console.log(error);
        await connection.end();
    }
}

// ------------------------------------------------------> RETO 1<------------------------------------------------------

// . calcular la nota media de los alumnos de la asignatura 1.
const query_avg = 'SELECT AVG(subject_id) AS mark_Avg FROM subjects where subject_id=1;'
// • Calcular el número total de alumnos que hay en el bootcamp.
const query_count = 'SELECT COUNT(*) FROM school.students'
// • Listar todos los campos de la tabla “groups”.
const query_all = 'SELECT * FROM school.groups'
// • Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).
const query_deleteMarksMore5AndYear2023 = 'DELETE FROM marks WHERE mark > 5 AND date LIKE "2023%";'
// • Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (utiliza  BETWEEN).
const query_deleteMarksMore5AndYear2023Between= 'DELETE FROM marks WHERE mark > 5 AND date BETWEEN "2023-01-01" AND "2023-12-31";'


// • Obtén los datos de todos los estudiantes que estén en el bootcamp este año. 
// Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.
const query_modifyStudents = 'ALTER TABLE school.students ADD registration_date DATE;'

const updateRegist_date  ="UPDATE students SET registration_date = '2021-05-15' WHERE student_id = 1;"
const updateRegist_date1 ="UPDATE students SET registration_date = '2021-08-20' WHERE student_id = 2;"
const updateRegist_date2 ="UPDATE students SET registration_date = '2022-02-10' WHERE student_id = 3;"
const updateRegist_date3 ="UPDATE students SET registration_date = '2022-04-05' WHERE student_id = 4;"
const updateRegist_date4 ="UPDATE students SET registration_date = '2022-07-18' WHERE student_id = 5;"
const updateRegist_date5 ="UPDATE students SET registration_date = '2022-09-30' WHERE student_id = 6;"
const updateRegist_date6 ="UPDATE students SET registration_date = '2023-01-22' WHERE student_id = 7;"
const updateRegist_date7 ="UPDATE students SET registration_date = '2023-03-12' WHERE student_id = 8;"
const updateRegist_date8 ="UPDATE students SET registration_date = '2023-06-05' WHERE student_id = 9;"
const updateRegist_date9 ="UPDATE students SET registration_date = '2023-11-08' WHERE student_id = 10;"

const query_YearCurdate = 'SELECT * FROM students WHERE YEAR(registration_date) = "2024%";'

// Calcular el numero de profesores que hay por cada asignatura.
const query_numberTeachersForSubjects = 'SELECT subjects.title, COUNT(teachers.teacher_id) AS num_teachers FROM subjects JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id GROUP BY subjects.title;'

// ------------------------------------------------------> RETO 2 <------------------------------------------------------

// • Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

const query_IdOrMark = 'SELECT students.student_id, marks.mark FROM students JOIN marks ON students.student_id = marks.student_id WHERE (students.student_id BETWEEN 1 AND 20) OR (marks.mark > 8 AND YEAR(marks.date) = 2023);'

// • Obtén la media de las notas que se han dado en el último año por asignatura.

const query_AvgSubjects = 'SELECT subjects.title, AVG(marks.mark) AS average_mark FROM marks JOIN subjects ON marks.subject_id = subjects.subject_id WHERE YEAR(marks.date) = "2023%" GROUP BY subjects.title;'

// • Obtén la media aritmética de las notas que se han dado en el último año por alumno.

const query_AvgStudents ='SELECT students.first_name, AVG(marks.mark) AS average_mark FROM marks JOIN students ON marks.student_id = students.student_id WHERE YEAR(marks.date) = "2023%" GROUP BY students.first_name;'

// ------------------------------------------------------> RETO OPCIONAL 1 <------------------------------------------------------
const query_insertRelac = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "HTML"),(SELECT group_id FROM `groups` WHERE name = "1ºA"), (SELECT teacher_id FROM teachers WHERE first_name = "Jose"));'
const query_insertRelac1 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "TypeScript"),(SELECT group_id FROM `groups` WHERE name = "2ºB"), (SELECT teacher_id FROM teachers WHERE first_name = "Ruben"));'
const query_insertRelac2 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Lenguaje"),(SELECT group_id FROM `groups` WHERE name = "3ºC"), (SELECT teacher_id FROM teachers WHERE first_name = "Leonardo"));'
const query_insertRelac3 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Matematicas"),(SELECT group_id FROM `groups` WHERE name = "4ºA"), (SELECT teacher_id FROM teachers WHERE first_name = "Galileo"));'
const query_insertRelac4 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Historia"),(SELECT group_id FROM `groups` WHERE name = "1ºB"), (SELECT teacher_id FROM teachers WHERE first_name = "Marie"));'
const query_insertRelac5 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Educacion Física"),(SELECT group_id FROM `groups` WHERE name = "1ºC"), (SELECT teacher_id FROM teachers WHERE first_name = "Remus"));'
const query_insertRelac6 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Historia),(SELECT group_id FROM `groups` WHERE name = "2ºA"), (SELECT teacher_id FROM teachers WHERE first_name = "Minerva"));'
const query_insertRelac7 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "TypeScript"),(SELECT group_id FROM `groups` WHERE name = "3ºB"), (SELECT teacher_id FROM teachers WHERE first_name = "Ruben"));'
const query_insertRelac8 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "HTML"),(SELECT group_id FROM `groups` WHERE name = "3ºA"), (SELECT teacher_id FROM teachers WHERE first_name = "Jose"));'
const query_insertRelac9 = 'INSERT INTO subject_teacher (subject_id, group_id, teacher_id) VALUES ((SELECT subject_id FROM subjects WHERE title = "Derecho Mercantil"),(SELECT group_id FROM `groups` WHERE name = "2ºC"), (SELECT teacher_id FROM teachers WHERE first_name = "Peter"));'

// Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Jose.
// • ACLARACIÓN: El acceso a las asignaturas y a los profesores será a través de su id.

const query_HtmlTypesJose = 'SELECT students.first_name, COUNT(subjects.subject_id) AS total_subjects FROM students JOIN marks ON students.student_id = marks.student_id JOIN subjects ON marks.subject_id = subjects.subject_id JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id WHERE (subjects.title = "HTML" OR subjects.title = "TypeScript") AND teachers.first_name = "Jose"GROUP BY students.first_name;'
// *selecciona el nombre del estudiante y cuenta el número total de asignaturas para cada estudiante que cumpla con las condiciones que se piden.

// ------------------------------------------------------> RETO OPCIONAL 2 <------------------------------------------------------
// • Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Jose 
// o algún compañero que elijáis.  ACLARACIÓN: El acceso a las asignaturas y a los profesores será a través de su nombre.

const query_HtmlTypesJoseOrRuben = 'SELECT students.first_name, COUNT(subjects.subject_id) AS total_subjects FROM students JOIN marks ON students.student_id = marks.student_id JOIN subjects ON marks.subject_id = subjects.subject_id JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id WHERE (subjects.title = "HTML" OR subjects.title = "TypeScript") AND (teachers.first_name = "Jose" OR teachers.first_name = "Ruben") GROUP BY students.first_name;'
// *devuelve los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Jose o Ruben.


const query = query_HtmlTypesJoseOrRuben;
main(query);