import express from "express";

import {register , login} from "../controllers/UserControllers.js"
const router = express.Router();



router.get("/register" ,async (req , res)=>{
   return res.json({
    message : "Register Page here"
   });
});

router.post("/register" , register);



router.get("/login" , async (req , res)=>{
return res.json({
    message : "login Page here"
   });
});

router.post("/login" ,login);



export const UserRoutes = router;


