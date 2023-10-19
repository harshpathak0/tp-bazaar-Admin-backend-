const connection = require ("../../Model/dbconnect")

//////post api////

const postsubCategory = (req,res) => {
    let sqlQuery = "INSERT INTO tbl_admin_subcategory SET ? ";
    let subCategoryData = {
        PcategoryId: req.body.PcategoryId,
        subcategory_id:req.body.subcategory_id,
        subcategory_name: req.body.subcategory_name,
        photo:req.file.location
    }
    connection.query(sqlQuery, [subCategoryData], (err, result) => {
      if(err){
        console.log("err in posting subCategory",err)
      }
      else{
        res.send(result)
      }        
    })
}

const getsubCategory = (req, res) => {
    let sqlQuery = "select * from tbl_admin_subcategory ";
    let subcategoryid = req.params.subcategory_id;
    connection.query(sqlQuery,[subcategoryid], (error, result) => {
        if(error){
            console.log("err in getting subCategory", error)
        }
        else{
            res.send(result)
        }
    } )

}

// const updatesubCategory = (req, res) => {
//     let sqlQuery = "update tbl_admin_subcategory SET ? WHERE subcategory_id = ?";
//     let subcategoryid = req.params.subcategory_id;
//     connection.query(sqlQuery, [subcategoryid], (error, result) => {
//         if(error){
//             console.log("err in updating subCategory", error)
//         }
//         else{
//             res.send(result)
//         }
//     })
// }

const updatesubCategory = (req, res) => {
    let sqlQuery = "UPDATE tbl_admin_subcategory SET ? WHERE subcategory_id = ?";
    let updatedValues = {
        PcategoryId: req.body.PcategoryId,
        subcategory_id:req.body.subcategory_id,
        subcategory_name: req.body.subcategory_name,
        photo:req.file.location
    };
    
    let subcategoryid = req.params.subcategory_id;
    
    connection.query(sqlQuery, [updatedValues, subcategoryid], (error, result) => {
        if (error) {
            console.log("err in updating subCategory", error);
            res.status(500).json({ error: "Error updating subCategory" });
        } else {
            res.send(result);
        }
    });
};


module.exports = {postsubCategory, getsubCategory, updatesubCategory};