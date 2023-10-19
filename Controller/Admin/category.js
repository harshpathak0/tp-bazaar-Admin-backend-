const connection = require ("../../Model/dbconnect")

///////////post category////////////
const postCategory =  (req, res) => {
    
    let sqlQuery = "INSERT INTO tbl_admin_category SET ? ";
    let categoryData =  {
        PcategoryId: req.body.PcategoryId,
        category_name: req.body.category_name
    };
    connection.query(sqlQuery, categoryData, (err, result) => {
        if(err){
            console.log("error in posting category", err)
        }
        else{
            console.log("successfully category")
        }
    })

}


/////////get category/////////
const getCategory = (req, res) => {
    let sqlQuery = "select * from tbl_admin_category ";
    connection.query(sqlQuery, (error, result) => {
        if (error) {
            console.log("Error in gettin category ", error.sqlMessage)
          }
          else {
            res.send(result)
          }
    })
}

///////update category/////////
// const updateCategory = (req, res) => {
//     let ProductcategoryID = req.params.PcategoryId;
//     let categoryData =  {
//         PcategoryId: req.body.PcategoryId,
//         category_name: req.body.category_name
//     };

//     let sqlQuery = "UPDATE tbl_admin_category SET ? WHERE PcategoryId = ?";
// connection.query(sqlQuery, [ProductcategoryID, categoryData], (error, result) => {
//     if (error) {
//         console.log("Error in updating category ", error.sqlMessage)
//       }
//       else {
//         res.json(result)
//       }
// })
// }


const updateCategory = (req, res) => {
    let ProductcategoryID = req.params.PcategoryId;
    let categoryData = {
        category_name: req.body.category_name 
    };
    let sqlQuery = "UPDATE tbl_admin_category SET ? WHERE PcategoryId = ?";
    
    connection.query(sqlQuery, [categoryData, ProductcategoryID], (error, result) => {
        if (error) {
            console.log("Error in updating category ", error.sqlMessage);
            res.status(500).json({ error: "Error updating category" });
        } else {
            console.log("Category updated successfully");
            res.status(200).json({ message: "Category updated successfully" });
        }
    });
}
module.exports = { postCategory, getCategory, updateCategory }
