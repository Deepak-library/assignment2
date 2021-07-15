let express = require('express');
const app=express();
const pool=require("./database.js");
app.use(express.json());//req.body

app.post("/music",async(req,res)=>{
    try{
        const {des}=req.body;
        const newtodo= await pool.query("insert into user values('abcdefg',$1) RETURNING *",[des]);
        res.json(newtodo);  
    }catch(err){
        console.log(err);
    }
});

app.listen(5000,()=>{
    console.log("server is listening");
});