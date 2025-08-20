import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("Hello you are in home page");
});




mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("App connected to database");
    // console.log(`connected to ${mongoose.connection.host}`)
    app.listen(PORT,()=>{
    console.log(`App is listening to port:${PORT}`);
});
})
.catch((error)=> {
    console.log(error)
})