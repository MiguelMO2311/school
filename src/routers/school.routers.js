const {Router} = require ('express')
const router = Router();
const schoolCtrl = require ('../controller/school.controller');



// reto 1. endPoints Students //
router.get('/students/:id', schoolCtrl.getStudentByIdApi);
router.get('/students', schoolCtrl.getStudentsApi);
router.post('/students', schoolCtrl.addStudentApi);
router.put('/students/:id', schoolCtrl.updateStudentApi);
router.delete('/students/:id', schoolCtrl.deleteStudentApi);


// reto 2. endPoints Subjects and Marks//

router.get('/students/:id/average-mark', schoolCtrl.getAverageMark);
router.get('/students/:id/enrolled-subjects', schoolCtrl.getEnrolledSubjects);
router.get('/students-and-subjects', schoolCtrl.getAllStudentsAndSubjects);
router.get('/teachers/:id/taught-subjects', schoolCtrl.getTaughtSubjects);
router.get('/teachers-and-subjects', schoolCtrl.getAllTeachersAndSubjects);


module.exports = router;
