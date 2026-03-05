const express = require ('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/" ,function(req,res){
     fs.readdir(`./files` , function(err,files){//read hore files k name
        res.render("index",{files:files})//index.ejs me files name se jo files folder me files bnegi uska data bheja ja rha hai 
    })  
     console.log("server started on port 3000");
});

app.get("/file/:filename" , function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){//without utf data buffer me show hoga  utf lgane se data english me show hoga readable form me 
        res.render('show',{filename:req.params.filename , filedata:filedata});
    })
})

app.get("/edit/:filename" , function(req,res){
res.render("edit",{filename:req.params.filename})
})

app.post("/edit",function(req,res){
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}` , `./files/${req.body.newname}`,function(err){
        res.redirect("/")
    })

})

app.post("/create" , function(req,res){
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, function(err){
        res.redirect('/');
    })
})




app.listen(3000);