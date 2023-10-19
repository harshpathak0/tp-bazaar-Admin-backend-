const express = require ( "express");
const { postCategory, getCategory, updateCategory } = require("../Controller/Admin/category");
const categoryRoute = express.Router();

categoryRoute.post("/createCategory", postCategory)
categoryRoute.get("/viewCategory", getCategory)
categoryRoute.patch("/updateCategory/:PcategoryId", updateCategory)


module.exports = categoryRoute;