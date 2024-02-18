# school
proyecto school sql bases de datos:


*** ¿Cuál sería una buena práctica para agilizar la velocidad de las consultas sobre tablas que sean excesivamente grandes (que tengan muchas filas)?:

. Indexación: Imagina que tienes un libro enorme y estás buscando una palabra específica. Sin un índice, tendrías que leer todo el libro. Pero con un índice, puedes ir directamente a la página correcta. En las bases de datos, los índices funcionan de la misma manera: te ayudan a encontrar los datos que necesitas mucho más rápido.
. Particionamiento de tablas: Esto es como dividir tu libro grande en varios libros más pequeños. Cada libro más pequeño es más fácil de manejar y buscar.
. Consultas eficientes: Esto es como saber exactamente qué estás buscando en tu libro. Cuanto más específico seas con tu consulta, menos datos tendrá que buscar la base de datos.
. Normalización: Esto es como organizar tu libro de manera que no haya información repetida. Esto puede hacer que tu base de datos sea más eficiente.
Caché de consultas: Esto es como tener una copia rápida de las páginas que lees con frecuencia. La próxima vez que necesites esa información, puedes obtenerla de la caché en lugar de buscarla en el libro.

. Optimización de consultas: Esto es como aprender a leer más rápido o a buscar información de manera más eficiente.

**** ¿Es posible obtener en una misma consulta el nombre de un alumno y las asignaturas que cursa? Si es así describe la forma en la que se haría.

. Para obtener el nombre de un alumno y las asignaturas que cursa en una misma consulta, necesitaríamos tener una base de datos que contenga
esta información. Esta información estaría distribuida en varias tablas.
Por ejemplo;
- podríamos tener una tabla students para los alumnos.
- una tabla subjects para las asignaturas,
- y una tabla enrollments para las matrículas que relaciona a los alumnos con las asignaturas que cursan.

SELECT students.name, subjects.subject_name
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN subjects ON enrollments.subject_id = subjects.subject_id
WHERE students.name = 'Nombre del Alumno';

. Esta consulta: Selecciona el nombre del estudiante y el nombre de la asignatura de las tablas students, enrollments y subjects donde el student_id en la tabla students coincide con el student_id en la tabla enrollments y el subject_id en la tabla enrollments coincide con el subject_id en la tabla subjects, y el nombre del estudiante es ‘Nombre del Alumno’”.