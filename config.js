const mongoose = require("mongoose");

const connectTODb = async ()=>{

    try{
      await  mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("connect to database");
    }catch(err)
    {
        console.log("Error in connecting to Db");
        console.log(err);
    }
}

model.exports = connectTODb;