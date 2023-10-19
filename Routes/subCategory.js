const express = require ( "express");
const { postsubCategory, getsubCategory, updatesubCategory } = require("../Controller/Admin/subcategory");
const subCategoryRoute = express.Router();
const upload = require("../multer/multer");


subCategoryRoute.post("/createSubcategory",upload.single("photo"), postsubCategory)
subCategoryRoute.get("/getSubcategory", getsubCategory)
subCategoryRoute.patch("/UpdateSubcategory/:subcategory_id	", updatesubCategory)

module.exports = subCategoryRoute;