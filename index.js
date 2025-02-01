const express = require("express");


app.use = express();

app.use(express.json());

app.listen(8080,()=>{
connectToDb();
    console.log("Server Started")
});
