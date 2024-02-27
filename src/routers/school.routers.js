const {Router} = require ('express')
const router = Router();
const schoolCtrl = require ('../controller/school.controller');



// reto 1. endPoints Students //
router.get('/students/:id', schoolCtrl.getStudentById);
router.get('/students', schoolCtrl.getStudents);
router.post('/students', schoolCtrl.addStudent);
router.put('/students/:id', schoolCtrl.updateStudent);
router.delete('/students/:id', schoolCtrl.deleteStudent);


// reto 2. endPoints Subjects and Marks//

router.get('/students/:id/average-mark', schoolCtrl.getAverageMark);
router.get('/students/:id/enrolled-subjects', schoolCtrl.getEnrolledSubjects);
router.get('/students-and-subjects', schoolCtrl.getAllStudentsAndSubjects);
router.get('/teachers/:id/taught-subjects', schoolCtrl.getTaughtSubjects);
router.get('/teachers-and-subjects', schoolCtrl.getAllTeachersAndSubjects);


module.exports = router;
