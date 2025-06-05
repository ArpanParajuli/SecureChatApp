import express from "express";
import dotenv from "dotenv/config";
import path from "path";
import cors from "cors"
import {connectDB} from "./config/connectDB.js"

import {UserRoutes} from "./routes/UserRoutes.js";
import {SearchRoutes} from "./routes/SearchRoutes.js";



const port = process.env.PORT || 8080;


connectDB();

const app = express();
app.use(express.json());
app.use(cors());





app.use("/" , UserRoutes);

app.use("/" , SearchRoutes);



app.get("/" ,(req,res)=>{
    console.log("Received request!");
    res.json( { message : "Message from backend!"});
});




app.listen(port, ()=>{
    console.log(`Sever running on ${port}`);
})