import express from "express";
import userRoutes from "./routes/user.js"
import {config} from "dotenv";

export const app = express();

config({
    path:"./data/config.env",
});

// using middleware
app.use(express.json());

app.use("/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("Nice Working");
});





