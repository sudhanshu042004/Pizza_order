"use client";
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {signIn} from "next-auth/react";

const Page = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-80">
        <div className="text-lg font-medium text-center mb-4 text-gray-800">
          Continue with Google
        </div>
        <button onClick={()=>signIn('google',{redirect : true,callbackUrl:"/dashboard"})} className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <FcGoogle size={24} />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  )
}

export default Page;
