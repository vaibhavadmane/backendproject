import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose";
const videoSchema= new Schema({

    videoFile:{
        type:String, //by cloudnary
        required:true,
       
    },
    thumbnall:{
        type:String, //by cloudnary
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number, //by cloudnary
        required:true,
    },
    views:{
        type:Number,
        default :0
    },
    isPublished:{
        type:Boolean,
        default :true
    },
    owner:{
        type:Schema.Types.ObjectId,
           ref:"User"
    }

},
{timestamp:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)