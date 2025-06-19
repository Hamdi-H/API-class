const studentcontroller = require("../controller/studentcontroller")
const express = require("express");
const req = require("express/lib/request");

const res = require("express/lib/response");

const routes = express.Router();

// get a list of students from the database 
routes.get('/getstudents',studentcontroller.getAllstudent );
routes.get('/getstudent',studentcontroller.getStudent);
// add students to db
routes.post('/addstudent',studentcontroller.addstudent );
// update students in the db

routes.patch('/updatestudent/:id',studentcontroller.updatestudent );
// Delete a student from the database
routes.delete('/deletestudent/:id',studentcontroller.deletestudent );

module.exports = routes;