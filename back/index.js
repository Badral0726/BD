import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { SchemaType } from "mongoose";
import { error } from "console";
import schemaa from "./product.cjs"
// const schemaa = require("./product.cjs")

const app = express();
app.use(express.json());

try{
    let data = schemaa.find().limit(1);
    console.log(data)
}
catch{
    console.log("Aldaa!")
}










// app.get("/", async (request,response)=>{
//     let data = await schemaa.find();
//     response.send(data);
// });



// mongoose.connect(mongoDBURL)
//     .then(() => {
//         console.log("App connected to DB");
//         app.listen(PORT,()=> {
//         console.log("Runningshdee port: ",PORT);
//     });
//     })
//     .catch((error) =>{
//         console.log(error);
//     })