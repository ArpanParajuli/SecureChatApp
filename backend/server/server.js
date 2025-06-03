import express from "express";
import dotenv from "dotenv/config";
import path from "path";
import cors from "cors"


const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/" ,(req,res)=>{
    console.log("Received request!");
    res.json( { message : "Hello bro"});
});




app.listen(port, ()=>{
    console.log(`Sever running on ${port}`);
})