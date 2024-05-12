import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MoongoDB connected !! DB host : ${connectionInstance.connection.host}`);   //read
    }
    catch(err){
        console.log("mongoDB connection error",err);
        process.exit(1);
    }
}

export default connectDB