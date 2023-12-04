const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },{collection:"genre"});
  
const genre = mongoose.model("genre",genreSchema)
  
 module.exports = genre