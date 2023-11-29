import express from "express";
import { PORT, mongoDBURL, mongoDBURLL } from "./config.js";
import mongoose, { SchemaType } from "mongoose";
import {MongoClient} from "mongodb";
import movie from "./product.cjs";
// const schemaa = require("./product.cjs")

const app = express();
app.use(express.json());
const client = new MongoClient(mongoDBURLL);

// app.get("/", async (request,response)=>{
//     mongoose.connect(mongoDBURL)
//     .then(
//         movie.find({}).limit(20)
//         .then(data => {
//         console.log('Retrieved movies:', data);
//         // Close the database connection after retrieving the data
//         response.send(data)
//         mongoose.connection.close();
//     }))
//     .catch((error) =>{
//         console.log(error);
//     })
// });
try {
    // Connect to the MongoDB database
    await client.connect();

    // Access the specific collection (replace 'your_collection_name' with your actual collection name)
    const collection = client.db('Web_system').collection('BD');

    // Fetch the first 20 documents from MongoDB
    const data = await collection.find().limit(1).toArray();
    console.log(data)
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });