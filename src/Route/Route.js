const express=require('express')
const { multer, getImage } = require('../Config/Controller/Controller')
const upload = require('../Uteils/Multer')
// const { eventEmitter } = require('../Events/Events')
const router = express.Router()
// router.post("/adduser",insert)
// router.post("/login",login)
// router.post("/somemiddleware",someMiddleware)
// router.post("/logout",logout)
router.post("/multer",upload.array("file") ,multer )
router.get("/viewdata",getImage)
// router.get("/SeeData",eventEmitter)

// { name: 'video',  maxCount: 1 },
// { name: 'music',  maxCount: 1 },
// { name: 'exel' ,  maxCount: 1 },
// { name: 'Audio',  maxCount: 1 },
// router.post("/multer",upload.single("file") ,multer )
// router.post("/User",User) 
// router.post("/Admin",Admin)
// router.get("/login",login)

module.exports=router
