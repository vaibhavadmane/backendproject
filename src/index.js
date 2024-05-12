// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
// use try catch in code 
// database is in another contenent  async await
dotenv.config({ 
    path:'./env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running in server ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb coneection failed",err);
})








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