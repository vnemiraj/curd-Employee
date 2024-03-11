const express 	= require('express');
const router 	= express.Router();
const employeeRouter = require('./EmployeeRoute');

router.use('/employee', employeeRouter)


module.exports = router;