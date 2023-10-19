const connection= require( "../../Model/dbconnect"); 

//////post api/////////
const postRoleData = (req,res)=> {
let data2 = req.body
let sqlQuery = "INSERT INTO tbl_admin_role SET ?" 
connection.query(sqlQuery, [data2], (error, result)=> {
    if(error){
        console.log("Error", error)
        
    }
    else{
        console.log("Register the role data")
        res.send("register role ho gaya he ");
    }
})
}

/////get api//////
const getRoleData = (req,res) => {
    let id = req.params.role_id;
    let sqlQuery= "select * from tbl_admin_role"
    connection.query(sqlQuery, [id], (error, result) => {
        if(error){
            console.log("error", error.sqlMessage)
        }
        else{
            res.send(result)
        }
    })
}


//////patch api///////
const UpdateRoleData = (req, res) => {
    let id = req.params.role_id;
    let data = req.body;
    let sqlQuery = "update  tbl_admin_role SET ? where role_id=?"
    connection.query(sqlQuery, [data, id], (error, result) => {
        if(error){
            console.log("Role Update error", error.sqlMessage)
        }
        else{
            res.json(result)
        }
    });
};

module.exports = {postRoleData, getRoleData, UpdateRoleData }