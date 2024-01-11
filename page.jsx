"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import {setCookie} from "nookies";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      const res = await axios.post('https://api.dev2.constructn.ai/api/v1/users/signin', {
        "email": email,
        "password": password,
      })
      if (res.data) {
        console.log("login");
        console.log(res.data);
        const token=res.data.result.token;
        setCookie(null,'authToken',token,{path:'/'})
        window.location.href = '/dashboard';
      }
      else {
        console.log("error");
      }

    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (<>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Replace the width and height values with the actual dimensions of your image */}
      <img src="https://app.constructn.ai/_next/static/media/Illustration.a0ccf67c.svg" />

      <div className="grid place-items-center h-screen">Login Form
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 ">
          <h1 className="text-xl font-bold my-4">Login</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>

            <Link className="text-sm mt-3 text-right" href={'/register'} >Don't have an account<span className="underline">Register</span> </Link>
          </form>
        </div>
      </div>
    </div>
  </>)
}