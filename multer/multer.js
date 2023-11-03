const multer = require ("multer");
const multerS3 = require("multer-s3");
const {S3Client} = require ("@aws-sdk/client-s3")

let bucketName = "";

const s3 = new S3Client({

    region:"",
    credentials:{
        accessKeyId:"",
        secretAccessKey:""
       
    }
})

////////Storage Configuration for AWS s3 bucket///////
let storage = multerS3({
 s3 : s3,
 bucket: bucketName ,
 acl: 'public-read',

 metadata: (req, file, cb) => {
    cb(null, {fieldname: file.fieldname})
 },
 contentType: multerS3.AUTO_CONTENT_TYPE,
 key: (req, file, cb) => {
    cb(null, file.originalname)
 }

})

let upload = multer({storage: storage});

module.exports = upload;
