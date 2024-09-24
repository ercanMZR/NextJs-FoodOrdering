import Password from "@/pages/components/profile/Password";
import mongoose from "mongoose";
import { string } from "yup";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
    },
    address:{
        type:String,
    },
    job:{
        type:String,
    },
    Password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:string,
        required:true,
    },
    emailVerified:{
        type:String,
        default:null,
    }
},
{timestamps:true}

)

export default mongoose.models.User || mongoose.model("User",userSchema);