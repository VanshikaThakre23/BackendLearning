const express = require ('express');
const app = express();
const path = require('path');

//set view engine
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'))
app.use(express.static("./public"))

app.use((req,res,next)=>{
    console.log("middleware 1");
    next();
    
})

app.get("/",function(req,res){
 res.send("hello world");
});

app.get("/page",function(req,res){
 res.render('index',{modulars:'vanshika'});
});

app.get("/portfolio",function(req,res){
 res.render('portfolio');
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
