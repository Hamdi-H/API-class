const usercontroller = require("../controller/usercontroller");
const express = require("express");
const routes = express.Router();


routes.post('/register',usercontroller.registeruser );
module.exports = routes;