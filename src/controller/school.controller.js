const { connectionPromise } = require('../database.js');


let school = null;


function getSchool(request, response) {
  let res;
  if (school != null)
    res = school;
  else
    res = { error: true, codigo: 200, message: 'Doesn´t Exist' }
  response.send(res);
}

// Conseguir todos los estudiantes

async function getStudents(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT * FROM students');
    res.send(results);
  } catch (error) {
    console.error(error);
  }
}

// Conseguir estudiante por su Id
async function getStudentById(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT * FROM students WHERE student_id = ?', [req.params.id]);
    res.send(results[0]);
  } catch (error) {
    console.error(error);
  }
}

// Añadir estudiante
async function addStudent(req, res) {
  let connection;
  try {
    connection = await connectionPromise;
    const sql = 'INSERT INTO students SET ?';
    const studentObj = req.body;
    await connection.query(sql, studentObj);
    res.send('Student Add.');
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      connection.end();
    }
  }
}

// Actualizar estudiante
async function updateStudent(req, res) {
  const connection = await connectionPromise;
  const sql = 'UPDATE students SET ? WHERE student_id = ?';
  const studentObj = req.body;
  try {
    await connection.query(sql, [studentObj, req.params.id]);
    res.send('Student Update.');
  } catch (error) {
    console.error(error);
  }
}

// Eliminar estudiante
async function deleteStudent(req, res) {
  const connection = await connectionPromise;
  try {
    await connection.query('DELETE FROM students WHERE student_id = ?', [req.params.id]);
    res.send('Student Delete.');
  } catch (error) {
    console.error(error);
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
  }
}

// Obtener las asignaturas impartidas
async function getTaughtSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT subjects.title FROM subjects INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id WHERE subject_teacher.teacher_id = ?', [req.params.id]);
    res.send(results);
  } catch (error) {
    console.error(error);
  }
}

// Obtener todos los profesores y sus asignaturas
async function getAllTeachersAndSubjects(req, res) {
  const connection = await connectionPromise;
  try {
    const [results] = await connection.query('SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers INNER JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id INNER JOIN subjects ON subjects.subject_id = subject_teacher.subject_id');
    res.send(results);
  } catch (error) {
    console.error(error);
  }
}




module.exports = { getSchool, getStudentById, getStudents, addStudent, updateStudent, deleteStudent, getAverageMark, getEnrolledSubjects, getAllStudentsAndSubjects, getTaughtSubjects, getAllTeachersAndSubjects }