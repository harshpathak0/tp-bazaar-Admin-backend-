// const Joi = require ("joi")

// const employeeSchema = Joi.object({
//     uid: Joi.string().min(1).max(5),
//     name: Joi.string().min(1).max(40).required(),
//     DOB: Joi.date().required(),
//     contact: Joi.string().min(1).max(10).required(),
//     email: Joi.string().min(3).max(30).required(),
//     aadhar: Joi.string().min(1).max(12).required(),
//     address: Joi.string().min(5).max(100).required(),
//     experience: Joi.string().min(1).max(200).required(),
//     qualification: Joi.string().min(1).max(200).required(),
//     specialiation: Joi.string().min(1).max(100).required(),
//     password: Joi.string().min(8).max(50).required(),
//     // status: Joi.string().min(1).max(10).required(),
//     photo: Joi.string().required(),
//     DOJ: Joi.date().required(),
//     state: Joi.string().min(1).max(20).required(),
//     city: Joi.string().min(1).max(20).required(),
//     pin: Joi.string().min(6).max(6).required(),
    
    
    
// })

// const user_data_validation = (req, res, next) => {
//     const value = employeeSchema.validate(req.body)
//     if(value.error){
//         res.send({error:value.error.details[0]})
//     }
//     else{
//         next()
//     }
// }

// module.exports = user_data_validation;