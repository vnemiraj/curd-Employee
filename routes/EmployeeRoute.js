const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeControllers");

router.post('/addEmployee', EmployeeController.addEmployee);
router.get('/viewOneEmployee/:id', EmployeeController.viewOneEmployee);
router.get('/listAllEmployees', EmployeeController.listAllEmployees);
router.put('/updateEmployee', EmployeeController.updateEmployee);
router.delete('/deleteEmployee/:id', EmployeeController.deleteEmployee);
router.get('/searchEmployee', EmployeeController.searchEmployee);

module.exports = router;