import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { error } from "console";

const app = express();

app.get("/", (request,response)=>{
    console.log(request);
    return response.status(234).send("Server is running");
});



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App connected to DB");
        app.listen(PORT,()=> {
        console.log('Runningshdee port: ${PORT}');
});
    })
    .catch((error) =>{
        console.log(error);
    })

