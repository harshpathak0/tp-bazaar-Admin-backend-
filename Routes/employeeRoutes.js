const express = require ( "express");
const {postEmployee, getEmployee, updateEmployee, activeStatus, deactiveStatus, getById, findByName} = require ("../../Backend/Controller/Admin/employee");
const employeeRoute = express.Router();
const user_data_validation = require("../validateData/validate_user_data")
const upload = require("../multer/multer");

/////for employee data apis/////
employeeRoute.post("/addemp", upload.single('photo'), postEmployee)
// employeeRoute.post("/addemp", upload.single('photo'), user_data_validation, postEmployee)
employeeRoute.get("/getemp", getEmployee)
employeeRoute.patch("/updateemp/:uid", updateEmployee)
employeeRoute.get("/getempData/:uid", getById)
employeeRoute.get("/findbyName/:name",findByName )

////for status apis//// 
employeeRoute.patch("/active",activeStatus)
employeeRoute.patch("/deactive",deactiveStatus)

module.exports = employeeRoute;