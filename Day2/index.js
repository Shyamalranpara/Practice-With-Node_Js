const express = require("express")
const port = 1008;
const app = express();
const db = require("./config/db")
const firstSchema = require("./model/firstSchema");

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
    let data = await firstSchema.find({});
    res.render("index",{data});
})

app.post("/addData",async(req,res)=>{
    await firstSchema.create(req.body)
    .then(()=>{
         res.redirect("/")
     })
     })

app.get("/deleteData",async(req,res)=>{
    let data = await firstSchema.findByIdAndDelete(req.query.id);
    res.redirect("/")
})


app.get("/editData/:id", async (req, res) => {
    const data = await firstSchema.findById(req.params.id);
    res.render("edit", { data });
});

// Update data (post the updated data)
app.post("/updateData/:id", async (req, res) => {
    await firstSchema.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server is started on: ${port}`)
})