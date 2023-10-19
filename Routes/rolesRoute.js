const express = require ( "express");
const rolesRoute = express.Router();
const { postRoleData, getRoleData, UpdateRoleData } = require("../Controller/Admin/role");


rolesRoute.post("/createRole", postRoleData)
rolesRoute.get("/getRole", getRoleData)
rolesRoute.patch("/UpdateRole/:role_id", UpdateRoleData)

module.exports = rolesRoute;