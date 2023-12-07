import express from "express";
import { PORT, mongoDBURL, mongoDBURLL } from "./config.js";
import mongoose, { SchemaType } from "mongoose";
import {MongoClient} from "mongodb";
import movie from "./product.cjs";
import genre from "./genre.cjs"
import cors from "cors";
// const schemaa = require("./product.cjs")

const app = express();
app.use(cors())
// app.use(express.json());
mongoose.connect(mongoDBURL)
const db = mongoose.connection;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/data", async (req,res)=>{
    try{
        var data = await movie.find({}).limit(20);
        // data = JSON.stringify(data,null,4)
        // console.log(data)
        res.json(data)
        // movie.find()
        // .then(data => res.json(data))
        // .catch(err => res.json(err))
    }
    catch (error){
        console.log(error);
        res.status(500).send("server side error"+error)
    }
})

app.get("/genre", async (req,res)=>{
    try{
        var data = await genre.find({});
        // data = JSON.stringify(data,null,4)
        // console.log(data)
        res.json(data)
        // movie.find()
        // .then(data => res.json(data))
        // .catch(err => res.json(err))
    }
    catch (error){
        console.log(error);
        res.status(500).send("server side error"+error)
    }
})

app.use("/movies/:ID", async(req,res)=>{
    try{
        var data = await movie.find({id:req.params.ID}).exec();
        res.json(data)
    }
    catch (err)
    {
        res.status(500).send("server error"+err)
    }
})

app.use("/search/:ID", async(req,res)=>{
    try{
        const ID = req.params.ID
        var data = await movie.find({ title: { $regex: ID, $options: 'i' } });
        res.json(data)
    }
    catch (err)
    {
        res.status(500).send("server error"+err)
    }
})