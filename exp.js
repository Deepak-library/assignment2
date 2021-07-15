const {Pool} = require("pg")
const express = require ("express")
const app = express();
app.use(express.json())

//dbread role with SELECT 


const dbReadPool = new Pool({
    "user":"postgres",
    "password":"qwerty",
    "database":"music",
    "host":"localhost",
    "port":5432
})

// //dbdelete role with SELECT, DELETE
// const dbDeletePool = new Pool({
//     user:"postgres",
//     password:"qwerty",
//     database:"music",
//     host:"localhost",
//     port:5432
// })

//dbcreate role with INSERT

const dbCreatePool = new Pool({
    user:"postgres",
    password:"qwerty",
    database:"music",
    host:"localhost",
    port:5432
})

//app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))

app.get("/todos", async (req, res) => {
    const rows = await readTodos();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})
async function readTodos() {
    try {
        console.log("hi");
    const results = await dbReadPool.query("select * from list");
    console.log(results.rows);
    return results.rows;
    }
    catch(e){
        console.log("not getting...")
    }
}
app.get("/todos/user", async (req, res) => {
    const rows = await readuser();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

async function readuser() {
    try {
        console.log("hi");
    const results = await dbReadPool.query("select * from user_table");
    console.log(results.rows);
    return results.rows;
    }
    catch(e){
        console.log("not getting...")
    }
}

app.post("/todos", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        console.log(reqJson);
        result.success = await createTodo(reqJson)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})

async function createTodo(todoText){
    console.log(todoText);
    try {
        await dbCreatePool.query("insert into list values($1,$2,$3,$4,$5)",[todoText.uname,todoText.instrument,todoText.exercise,todoText.current,todoText.goal]);
        console.log("success!excer");
        return true
        }
        catch(e){
            return false;
        }
}

app.post("/todos/user", async (req, res) => {
    let result = {}
    try{
        console.log(req.body);
        const reqJson = req.body;
        result.success = await create_user(reqJson)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})

async function create_user(todoText){
console.log(todoText.uname);
    try {
        await dbCreatePool.query("insert into user_table values($1,$2)",[todoText.uname,todoText.password]);
        console.log("done query");
        return true
        }
        catch(e){
            console.log("failed to query");
            return false;
        }
}


app.delete("/todos", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        result.success = await deleteTodo(reqJson.id)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.listen(5000, () => console.log("Web server is listening.. on port 5000"))

start()

async function start() {
    await connect();
    /*
    const todos = await readTodos();
    console.log(todos)
    const successCreate = await createTodo("Go to trader joes")
    console.log(`Creating was ${successCreate}`)
    const successDelete = await deleteTodo(1)
    console.log(`Deleting was ${successDelete}`)
    */
}

async function connect() {
    try {
        await dbCreatePool.connect();
        //await dbDeletePool.connect();
         await dbReadPool.connect();
        console.log("connected");
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}







async function deleteTodo(id){

    try {
        await dbDeletePool.query("delete from todos where id = $1", [id]);
        return true
        }
        catch(e){
            return false;
        }
}