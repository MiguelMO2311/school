const mysql = require('mysql2/promise')
// const password = require('../school/password')

async function main() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Meneses23',
            database: 'school'
        });
        console.log('Connected');
        const result = await connection.query(numberTotalElementTable)
        console.log(result);
        connection.end()
    } catch (error) {
        console.log(error);
    }
}


// RETO 1:  
const insertDirection = 'INSERT INTO direccion (direction_id, street, number, floor, letter) VALUES (1, "Galicia", 22, 2,"C")';
const insertDirection1 = 'INSERT INTO direccion (direction_id, street, number, floor, letter) VALUES (2, "Cantabria", 8, 3, "B")';
const insertDirection2 = 'INSERT INTO direccion (direction_id, street, number, floor, letter) VALUES (3, "Andalucia", 31, 2, "izq.")';
const insertDirection3 = 'INSERT INTO direccion (direction_id, street, number, floor, letter) VALUES (4,"Castilla y Leon", 1, 0, "A")';
const insertDirection4 = 'INSERT INTO direccion (direction_id, street, number, floor, letter) VALUES (5, "Asturias", 108, 10, "dcha.")';

const insertGroups = 'INSERT INTO `groups` (group_id, name) VALUES (6, "1ºC")';
const insertGroups1 = 'INSERT INTO `groups` (group_id, name) VALUES (7, "2ºA")';
const insertGroups2 = 'INSERT INTO `groups` (group_id, name) VALUES (8, "3ºB")';
const insertGroups3 = 'INSERT INTO `groups` (group_id, name) VALUES (9, "3ºA")';
const insertGroups4 = 'INSERT INTO `groups` (group_id, name) VALUES (10, "2ºC")';

const insertMarks = 'INSERT INTO marks (date, mark) VALUES ("23-01-01", 4)';
const insertMarks1 = 'INSERT INTO marks (date, mark) VALUES ("04-10-12", 7)';
const insertMarks2 = 'INSERT INTO marks (date, mark) VALUES ("20-06-15", 8)';
const insertMarks3 = 'INSERT INTO marks (date, mark) VALUES ("21-02-07", 9)';
const insertMarks4 = 'INSERT INTO marks (date, mark) VALUES ("24-03-03", 10)';

const inserStudents = 'INSERT INTO students (student_id, first_name, last_name) VALUES (6,"Pepe", "Pérez")';
const inserStudents1 ='INSERT INTO students (student_id, first_name, last_name) VALUES (7,"Juan", "García")';
const inserStudents2 = 'INSERT INTO students (student_id, first_name, last_name) VALUES (8,"Antonio", "Gutierrez")';
const inserStudents3 = 'INSERT INTO students (student_id, first_name, last_name) VALUES (9,"David", "Dominguez")';
const inserStudents4 = 'INSERT INTO students (student_id, first_name, last_name) VALUES (10,"Marta", "Sanchez")';

const insertSubjects = 'INSERT INTO subjects (subject_id, title) VALUES (1, "Lengua")';
const insertSubjects1 = 'INSERT INTO subjects (subject_id, title) VALUES (2, "Matematicas")';
const insertSubjects2 = 'INSERT INTO subjects (subject_id, title) VALUES (3, "Historia")';
const insertSubjects3 = 'INSERT INTO subjects (subject_id, title) VALUES (4, "Educacion Física")';
const insertSubjects4 = 'INSERT INTO subjects (subject_id, title) VALUES (5, "Religión")';


const inserTeachers = 'INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (6, "Remus", "Lupin")';
const inserTeachers1 ='INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (7, "Rubeus", "Hagrid")';
const inserTeachers2 = 'INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (8, "Minerva", "McGonagall")';
const inserTeachers3 = 'INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (9, "Albus", "Percival")';
const inserTeachers4 = 'INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (10, "Peter", "Tabichi")';

const addCollumDirection = "ALTER TABLE direccion ADD COLUMN `postalCode` VARCHAR(6)";
const deleteCollumDirection = "ALTER TABLE direccion DROP COLUMN `letter`";
const deleteTableDirection = "DROP TABLE IF EXISTS direccion";
const setMarksToZero = "UPDATE marks SET mark = 0";
const selectNameAndSurname = "SELECT first_name, last_name FROM students";
const selectAlldataTeachers = "SELECT * FROM teachers";

// RETO 2:

const deleteMarksOld10Years = "DELETE FROM marks WHERE DATE(date) < DATE_SUB(NOW(), INTERVAL 10 YEAR)";
const UpdateMarksLess5to5 = "UPDATE marks SET mark = 5 WHERE mark < 5";
// RETO OPCIONAL:Obtener el número total de elementos de una tabla (informacion pegada en archivo README.md).
const numberTotalElementTable = "SELECT COUNT(*) AS total FROM students";
main();



/* ¿Cuál sería una buena práctica para agilizar la velocidad de las consultas sobre tablas que sean
excesivamente grandes (que tengan muchas filas)?:

Indexación: Imagina que tienes un libro enorme y estás buscando una palabra específica. Sin un índice, tendrías que leer todo el libro. Pero con un índice, puedes ir directamente a la página correcta. En las bases de datos, los índices funcionan de la misma manera: te ayudan a encontrar los datos que necesitas mucho más rápido.
Particionamiento de tablas: Esto es como dividir tu libro grande en varios libros más pequeños. Cada libro más pequeño es más fácil de manejar y buscar.
Consultas eficientes: Esto es como saber exactamente qué estás buscando en tu libro. Cuanto más específico seas con tu consulta, menos datos tendrá que buscar la base de datos.
Normalización: Esto es como organizar tu libro de manera que no haya información repetida. Esto puede hacer que tu base de datos sea más eficiente.
Caché de consultas: Esto es como tener una copia rápida de las páginas que lees con frecuencia. La próxima vez que necesites esa información, puedes obtenerla de la caché en lugar de buscarla en el libro.
Optimización de consultas: Esto es como aprender a leer más rápido o a buscar información de manera más eficiente. */

/*¿Es posible obtener en una misma consulta el nombre de un alumno y las asignaturas que cursa? Si
es así describe la forma en la que se haría.

Para obtener el nombre de un alumno y las asignaturas que cursa en una misma consulta, necesitaríamos tener una base de datos que contenga
esta información. Esta información estaría distribuida en varias tablas. Por ejemplo, podríamos tener una tabla students para los
alumnos, una tabla subjects para las asignaturas, y una tabla enrollments para las matrículas que relaciona a los alumnos con las asignaturas que
cursan.

SELECT students.name, subjects.subject_name
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN subjects ON enrollments.subject_id = subjects.subject_id
WHERE students.name = 'Nombre del Alumno';

Esta consulta: Selecciona el nombre del estudiante y el nombre de la asignatura de las tablas students, enrollments y subjects donde el student_id
en la tabla students coincide con el student_id en la tabla enrollments y el subject_id en la tabla enrollments coincide con el subject_id en la 
tabla subjects, y el nombre del estudiante es ‘Nombre del Alumno’”.
*/


