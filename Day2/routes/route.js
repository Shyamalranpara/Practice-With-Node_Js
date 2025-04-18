const express = require("express")
const route = express.Router();

const multer = require("../middleweres/multer")
const ctl = require("../controllers/firstctl")

route.get("/", ctl.firstPage);

route.get("/addAdmin", ctl.addPage)

route.get("/viewAdmin", ctl.viewPage)


route.post("/addData",multer,ctl.addData)

route.get("/deleteData",ctl.deleteData)


route.get("/editData/:id", ctl.editData)

route.post("/updateData/:id",multer, ctl.updateData)

module.exports = route;