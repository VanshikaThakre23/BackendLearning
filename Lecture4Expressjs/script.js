//intro to express and basic routing

const express = require ('express');
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello dear ");
})

app.get("/user",(req,res)=>{
    res.send("hello i am user ");
})

app.listen(3000);