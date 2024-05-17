// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js"
// use try catch in code 
// database is in another contenent  async await
dotenv.config({ 
    path:'./env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at server: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb coneection failed",err);
})



// app.get("/hii",(req,res)=>{
//     console.log("gtrge");
//     res.send("gferoio")
// })







// import express from "express";
// const app=express();
// ;(async()=>{
//     try{
//  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//      app.on("error",(err)=>{
//         console.log("error",err);
//         throw err
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log(`app is lisning on port ${process.env.PORT}`);
//      })
//     }
//     catch(err){
//         console.log(err)
//     }
// })()