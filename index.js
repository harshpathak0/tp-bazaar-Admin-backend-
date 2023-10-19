const  express = require( "express");
const app = express();
app.use(express.json());

var cors = require("cors")
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    httpOnly: true
}));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

/////emp/////
const employeeRoute =require( "../Backend/Routes/employeeRoutes");
app.use('/', employeeRoute);

////roles////
const rolesRoute =require( "../Backend/Routes/rolesRoute");
app.use('/roles', rolesRoute);

////assign role////
const assignRolesRoute = require("../Backend/Routes/assignRole");
app.use('/assign', assignRolesRoute)

////category id////
const categoryRoute = require("../Backend/Routes/category");
app.use('/category', categoryRoute)

////sub category id////
const subCategoryRoute = require("../Backend/Routes/subCategory");
app.use('/subcategory', subCategoryRoute)

////offer id////
const offerRoute = require("../Backend/Routes/offerRoute");
app.use('/offer', offerRoute)

let port = 8081;
app.listen(port, ()=> {
    console.log(`server is running on ${port} port`)
})




