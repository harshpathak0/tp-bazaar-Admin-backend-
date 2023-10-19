const express = require ( "express");
const { rolePostAssign, getAssignRole, updateAssignRole, revokeAssignRole } = require("../Controller/Admin/roleAssign");
const assignRolesRoute = express.Router();

assignRolesRoute.post("/grantRole", rolePostAssign)
assignRolesRoute.get("/viewAssignRole/:uid", getAssignRole)
assignRolesRoute.patch("/updateAssignRole/:uid", updateAssignRole)
assignRolesRoute.delete("/deleteAssignRole", revokeAssignRole)

module.exports = assignRolesRoute;