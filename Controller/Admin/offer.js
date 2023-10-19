const connection = require ("../../Model/dbconnect")

///////////post category////////////
// const postOffer =  (req, res) => {
    
//     let offerData =  {
//         offer_id: req.body.offer_id ,
//         offer_name: req.body.offer_name,
//         percentagediscount: req.body.percentagediscount,
//         flatdiscount: req.body.flatdiscount,	
//         uptodiscount: req.body.uptodiscount,
//         validfrom: req.body.validfrom,
//         validto: req.body.validto,
//         termsandcondition: req.body.termsandcondition,
//         status: req.body.status
//     };
//     let sqlQuery = "INSERT INTO tbl_admin_offer SET ? ";
//     connection.query(sqlQuery, [offerData], (err, result) => {
//         if(err){
//             console.log("error in posting the offer", err)
//         }
//         else{
//             console.log("successfully offer posted")
//             res.send(result)
//         }
//     })

// }

const postOffer= (req, res) => {
    
        let data = req.body
        // console.log(data)
        let SqlQuery = "INSERT INTO tbl_admin_offer SET ?"
            connection.query(SqlQuery, data, (err, result) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.json(result)
                }
            })
      
    } 



/////////get Offer/////////
const getOffer = (req, res) => {
    let sqlQuery = "select * from tbl_admin_offer ";
    connection.query(sqlQuery, (error, result) => {
        if (error) {
            console.log("Error in gettin offer ", error.sqlMessage)
          }
          else {
            res.send(result)
          }
    })
}


const updateOffer = (req, res) => {
    let offer_id = req.params.offer_id;
    let offerData = req.body
    // let offerData = {
    //     offer_name: req.body.offer_name,
    //     percentagediscount: req.body.percentagediscount,
    //     flatdiscount: req.body.flatdiscount,	
    //     uptodiscount: req.body.uptodiscount,
    //     validfrom: req.body.validfrom,
    //     validto: req.body.validto,
    //     termsandcondition: req.body.termsandcondition,
    //     status: req.body.status
    // }
    let sqlQuery = "UPDATE tbl_admin_offer SET ? WHERE offer_id = ?";
    
    connection.query(sqlQuery, [offerData, offer_id], (error, result) => {
        if (error) {
            console.log("Error in updating offer ", error.sqlMessage);
            res.status(500).json({ error: "Error updating offer" });
        } else {
            console.log("Offer updated successfully");
            res.status(200).json({ message: "Offer updated successfully" });
        }
    });
}
module.exports = { postOffer, getOffer, updateOffer }