const mysql = require( "mysql" );
const dotenv = require ("dotenv")
dotenv.config();
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce_schema",
    port:"3306"
})

connection.connect(function(err){
    if(err){
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("Connection Established...")
    }
})
 

module.exports = connection