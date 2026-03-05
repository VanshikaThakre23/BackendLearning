const express = require ('express');
const app = express();



// function isloggedIn(req,res,next){
//     if(req.query.user ==='admin'){
//         next();
//     }
//     else{
//         res.status(401).send("you are not allowed");
//     }
// }

// function logger(req,res,next){
//     if(req.query.user === "admin"){
//         console.log(req.method , req.url)
//         next();
//     }
// }

// app.use(logger); // this line telling that logger middleware ko hmesha chalad sare req k liye 

app.use((req,res,next)=>{
    console.log("Time : " , Date.now());
    next();
    
}) 

app.get("/",(req,res)=>{
    res.send("hello you are logged in ");
})



app.listen(3000 , ()=>{
    console.log("Server are running on port 3000");
    
});