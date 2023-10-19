const connection = require ("../../Model/dbconnect")

////////////post the role to the emp/////////////
const rolePostAssign = (req, res) => {
    const sqlQuery = "INSERT INTO tbl_admin_assign_role set ?";
    // const values = [req.body.uid, req.body.role_id];
    const data = req.body

    connection.query(sqlQuery, [data], (error, result) => {
        if (error) {
            console.log("error in Assigning role", error);
        } else {
            console.log("Successfully assign role", result);
            res.send("Role Assigned");
        }
    });
};


/////////get api of assigned emp/////////
const getAssignRole = (req, res) => {
    const uid = req.params.uid;
    const sqlQuery = "SELECT rolename, role_id FROM tbl_admin_role WHERE role_id IN (SELECT role_id FROM tbl_admin_assign_role WHERE uid = ?)";
    
    connection.query(sqlQuery,[uid], (error, result) => {
        if(error){
            console.log("error in getting assign role")
            res.send(error)
        }
        else{
            res.json(result)
        }
    })
}


////////api to change the assign role/////////
const updateAssignRole = (req, res) => {
    const uid = req.params.uid;
    let data3 = req.body;
    const sqlQuery = "UPDATE tbl_admin_assign_role SET ? where uid=?";

    connection.query(sqlQuery, [data3, uid], (error, result) => {
        if(error){
            console.log("eror in update assign role", error)
        } 
        else{
            console.log("Successfully updated assigned role", result);
            res.json(result);
        }
    })
}

//////delete assign role///////
const revokeAssignRole = (req, res) => {
    const uid = req.query.uid;
    const role_id = req.query.role_id;

    // const uid = req.params.uid;
    // const role_id = req.params.role_id;


    // Specify the correct table name in the DELETE FROM statement.
    const sqlQuery = "DELETE FROM tbl_admin_assign_role WHERE uid = ? AND role_id = ?";
    
    connection.query(sqlQuery, [uid, role_id], (error, result) => {
        if (error) {
            console.log("Error in deleting assigned role", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            console.log("Successfully deleted assigned role", result);
            res.json(result);
        }
    });
}



module.exports = {rolePostAssign, getAssignRole, updateAssignRole, revokeAssignRole};