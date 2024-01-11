
import User  from "@/models/user";
import {NextResponse} from "next/server";

import User from "@/models/user";
export async function POST(req){
    try{

        const {email} =await req.json();
        const user =await User.findOne({email}).select("_id");
        console.log("User: ",user)
        return NextResponse.json({user})



    }catch(error){
        console.log("Error during registration",error);

    }
}