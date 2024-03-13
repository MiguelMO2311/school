const { connectionPromise } = require('../database.js');

// Inicializa la variable school como un objeto vacío
let school = {};

// Obtiene información de school
function getSchool(request, response) {
  if (school) {
    response.send(school);
  } else {
    response.status(404).send({ error: true, codigo: 404, message: 'No existe información de la escuela' });
  }
}

// Obtiene todos los estudiantes
async function getStudentsApi(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT * FROM students');
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: true, codigo: 500, message: 'Error al obtener los estudiantes' });
  }
}

// Obtiene un estudiante por su Id
async function getStudentByIdApi(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT * FROM students WHERE student_id = ?', [req.params.id]);
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).send({ error: true, codigo: 404, message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: true, codigo: 500, message: 'Error al obtener el estudiante' });
  }
}

// // Añade un estudiante
// async function addStudentApi(req, res) {
//   const connection = await connectionPromise;
//   try {
//     const sql = 'INSERT INTO students SET ?';
//     const studentObj = req.body;
//     await connection.query(sql, studentObj);
//     res.send('Estudiante agregado correctamente.');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: true, codigo: 500, message: 'Error al agregar el estudiante' });
//   }
// }
// Añade un estudiante
// Añade un estudiante
async function addStudentApi(req, res) {
  const connection = await connectionPromise;
  try {
    const sql = 'INSERT INTO students SET ?';
    const studentObj = req.body;

    // Formatea la fecha al formato de MySQL (YYYY-MM-DD)
    const formattedDate = new Date(studentObj.registration_date).toISOString().slice(0, 10);

    // Asigna la fecha formateada al objeto del estudiante
    studentObj.registration_date = formattedDate;

    await connection.query(sql, studentObj);
    res.send('Estudiante agregado correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: true, codigo: 500, message: 'Error al agregar el estudiante' });
  }
}



// Actualiza un estudiante
async function updateStudentApi(req, res) {
  const connection = await connectionPromise;
  const sql = 'UPDATE students SET ? WHERE student_id = ?';
  const studentObj = req.body;
  try {
    await connection.query(sql, [studentObj, req.params.id]);
    res.send('Estudiante actualizado correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: true, codigo: 500, message: 'Error al actualizar el estudiante' });
  }
}

// Eliminar estudiante
async function deleteStudentApi(req, res) {
  const connection = await connectionPromise;
  try {
    const studentId = req.params.id;
    await connection.query('DELETE FROM students WHERE student_id = ?', [studentId]);
    res.send('Estudiante eliminado exitosamente.');
  } catch (error) {
    console.error('Error al eliminar el estudiante:', error);
    res.status(500).send('Error al eliminar el estudiante.');
  }
}

// Obtener la nota media
async function getAverageMark(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT AVG(mark) as Media FROM marks WHERE student_id = ?', [req.params.id]);
    res.send(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la nota media.');
  }
}

// Obtener las asignaturas matriculadas
async function getEnrolledSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT subjects.title FROM subjects INNER JOIN marks ON subjects.subject_id = marks.subject_id WHERE marks.student_id = ?', [req.params.id]);
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las asignaturas matriculadas.');
  }
}

// Obtener todos los estudiantes y sus asignaturas
async function getAllStudentsAndSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT students.first_name, students.last_name, subjects.title FROM students INNER JOIN marks ON students.student_id = marks.student_id INNER JOIN subjects ON subjects.subject_id = marks.subject_id');
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener todos los estudiantes y sus asignaturas.');
  }
}

// Obtener las asignaturas impartidas
async function getTaughtSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT subjects.title FROM subjects WHERE teacher_id = ?', [req.params.id]);
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las asignaturas impartidas.');
  }
}


// Obtener todos los profesores y sus asignaturas
async function getAllTeachersAndSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const query = `
      SELECT teachers.first_name, teachers.last_name, subjects.title
      FROM teachers
      INNER JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
      INNER JOIN subjects ON subjects.subject_id = subject_teacher.subject_id
    `;
    const [results] = await connection.query(query);
    res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener todos los profesores y sus asignaturas.');
  }
};


module.exports = { getSchool, getStudentByIdApi, getStudentsApi, addStudentApi, updateStudentApi, deleteStudentApi, getAverageMark, getEnrolledSubjects, getAllStudentsAndSubjects, getTaughtSubjects, getAllTeachersAndSubjects }