// const Pool = require("pg").Pool;
const {Client} = require('pg');

const client=new Client({
    user:"postgres",
    password:"qwerty",
    database:"music",
    host:"localhost",
    port:5432
});

module.exports=client;

// console.log(client.connect());

// client.query(`select * from user_table`,(err,result)=>{
//     if(!err){
//         console.log(result.rows);
//     }else
//     {
//         console.log("error");
//     }
//     client.end();
// })