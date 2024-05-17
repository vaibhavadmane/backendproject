import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponce } from '../utils/ApiResponce.js'


const registerUser =asyncHandler(async (req,res)=>{
//get user detail from front end 
//validation - not entry
//check if user alrady exist : username ,email
//check for images ;check for avatar 

// upload them to cloudnary, avatar
//creat user object - create entry in db
//remove password and refrace token feild from responce 
//check for user creation
//return res

const {fullname,email,username,password}=req.body
console.log(("email:",email));
if(
    [fullname,email,username,password].some((field)=>
       field?.trim()==="")
){
throw new ApiError(400,"all field are  required")
}
const existedUser=User.findOne({
    $or:[{username},{email}]})
if(existedUser){
    throw new ApiError(409,"user with email or username alredy exist ")

}

const avatarLocalPath=req.files?.avatar[0]?.path;
const coverImageLocalPath=req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required")

}

const avatar=await uploadOnCloudinary(avatarLocalPath)
const coverImage=await uploadOnCloudinary(coverImageLocalPath)

if(!avatar){
    throw new ApiError(400,"Avatar file is required");
}

const user=await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage.url || "",
     email,
     password,
     username: username.toLowerCase()
})

const createdUser= await User.findById(user._id).select(
    "-password -refreshtoken"
)
if(!createdUser){
    throw new ApiError(500,"somthing went wrong  while registring a user")
}

return res.status(201).json(
    new ApiResponce(20, createdUser,"user registered sucessfully")
)
})

export {registerUser}