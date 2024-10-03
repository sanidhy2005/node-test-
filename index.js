const express =require("express");
const myConnection=require("./src/Config")
var bodyParser = require('body-parser')
const router=require("./src/Route/Route")
const app = express();
(app.use(bodyParser.urlencoded({ extended: true })))
const port =7000;

app.use(express.json());
myConnection();
app.use(router)

app.listen(port,()=>{
    console.log(`Server Is Running At :${port}`);
    
})

