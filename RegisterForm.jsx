"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";



export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }

        try {

           

            const res=await axios.post('https://api.dev2.constructn.ai/api/v1/users/register',{
                "firstName":name,
                "lastName":name,
                "email":email,
                "password":password,
            })
            if(res.data){
                console.log(res.data);
                        }
                        else{
                            console.log("error");
                        }

        } catch (error) {
            console.log("Error during registration", error);
        }
    };

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        {/* Replace the width and height values with the actual dimensions of your image */}
        <img src="https://app.constructn.ai/_next/static/media/Illustration.a0ccf67c.svg"/>
     
    
            <div className="grid place-items-center h-screen">
                <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                    <h1 className="text-xl font-bold my-4">Register</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name" />
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <button type="submit" className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
                        {error && (
                            <div className="bg-red-500 text-white wifit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                        )}
                        <Link href="/" className="text-sm mt-3 text-right">Already have an account<span className="underline">Login</span>
                        </Link>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}
