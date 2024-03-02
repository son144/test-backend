// import { Express } from "express";
import express from "express"
const app = express()
import cors from 'cors';



app.use(cors());
app.get("/", (req, res) => {
    res.send("hii")
})
const port = process.env.PORT || 8000

// get a list of five jokes
const jokes=[{id:1,title:"a joke",content:"this is first joke"},
{id:2,title:"a joke",content:"this is second joke"},
{id:3,title:"a joke",content:"this is third joke"},
{id:4,title:"a joke",content:"this is fourth joke"},
{id:5,title:"a joke",content:"this is fifth joke"}]

app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})
app.listen(port, () => {
    console.log("port is listening to ", port);
})