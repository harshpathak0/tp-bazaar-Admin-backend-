const connection = require("../../Model/dbconnect");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');



////////POST API///////
const postEmployee = (req, res) => {
  const data = {
    uid: req.body.uid,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    DOB: req.body.DOB,
    contact: req.body.contact,
    experience: req.body.experience,
    aadhar: req.body.aadhar,
    qualification: req.body.qualification,
    address: req.body.address,
    specialiation: req.body.specialiation,
    DOJ: req.body.DOJ,
    photo: req.file.location,
    state: req.body.state,
    city: req.body.city,
    pin: req.body.pin,
    // status:req.body.status
  };

  bcrypt.hash(req.body.password.toString(), 10, async (err, hash) => {
    if (err) {
      console.error("Error in hashing password:", err);
      return res.status(500).json({ error: "Error in hashing password" });
    }

    data.password = hash; // Update the password with the hashed password

    try {
      const sql = "INSERT INTO tbl_admin_user SET ?";
      await connection.query(sql, [data]);

      // Send registration email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pathakharsh9644@gmail.com",
          pass: "dkyjjmtrdtjmcwka"
        }
      });

      const mailOptions = {
        from: "pathakharsh9644@gmail.com",
        to: req.body.email,
        subject: "Successfully Registered",
        text: `You have successfully registered. Your Id :- ${data.uid} and Your Password : ${data.password} `
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({ message: "Registration successful! Check your email for confirmation." });
        }
      });
    } catch (err) {
      console.error("Error in registration:", err);
      res.status(500).json({ error: "Unable to register" });
    }
  });
}

/////////GET////////
const getEmployee = (req, res) => {

  let sqlQuery = "SELECT uid, name, email, contact, DOB, experience, aadhar, qualification, address, specialiation, photo, state, city, pin, status  FROM tbl_admin_user";
  connection.query(sqlQuery, function (error, result) {
    if (error) {
      console.log("Error ", error.sqlMessage)
    }
    else {
      res.send(result)
    }
  })
}


////////getbyid//////////
const getById = function (req, res) {
  let id = req.params.uid;
  let sqlQuery = "select * from tbl_admin_user where uid=?";
  connection.query(sqlQuery, [id], (error, result) => {
    if (error) {
      console.log("error", error.sqlMessagemessage)
    }
    else {
      res.send(result)
    }
  })
}


////////patch///////
const updateEmployee = function (req, res) {

  let eid = req.params.uid;
  let userData = req.body;
  let sqlQuery = "update tbl_admin_user set ?  where uid=?"
  connection.query(sqlQuery, [userData, eid], function (error, result) {
    if (error) {
      console.log("Error ", error.sqlMessage)
    }
    else {
      res.json(result)
    }
  })

}


//////api for status active and deactive////////

const deactiveStatus = async (req, res) => {
  let uid = req.query.uid
  let sqlQuery = "update tbl_admin_user set status='deactive' where uid=? ";
  await connection.query(sqlQuery, uid, function(error, result) {
    if (error) {
      console.log(error)
    }
    else {
      res.send(result)
    }
  })

}


const activeStatus = async (req, res) => {
  let uid = req.query.uid
  let sqlQuery = "update tbl_admin_user set status='active' where uid=?";
  await connection.query(sqlQuery, uid, function (error, result) {
    if (error) {
      console.log(error)
    }
    else {
      res.send(result)
    }
  })
}


//////searchByName api////////
const findByName = async (req, res) => {
  let userName = req.params.name
  let sqlQuery = "select * from tbl_admin_user where name LIKE ? ";
  connection.query(sqlQuery, [userName + "%"], (error, result) => {
    if (error) {
      console.log("error", error.sqlMessagemessage)
    }
    else {
      res.send(result)
    }
  })
}





module.exports = { postEmployee, getEmployee, updateEmployee, deactiveStatus, activeStatus, getById, findByName };
