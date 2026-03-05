const express = require ('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index");
    console.log("server starting on port 3000");
    
});

app.post("/create",async (req,res)=>{
    let{name,email,image}=req.body;

    let createdUser = await userModel.create({
       name  , //name:name, jaha pr kuchbhi:kuchbhi done side same ho to ek hi likho to chlta 
       email , //email:email,
       image   //image:image
    }) 

    res.redirect("/read");
   
})

app.get("/read",async (req,res)=>{
    let allusers = await userModel.find();
    res.render("read",{allusers});   //allusers:allusers
})

app.get("/delete/:id", async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect("/read");
});


app.listen(4000);