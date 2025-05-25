"use client";
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const { data: session, status } = useSession();
  return (
    <div className="pt-60 px-4 mx-auto max-w-4xl h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome </h1>
        <p className="text-lg text-gray-600">
          Hello, <span className="font-medium text-black">{session?.user?.name}</span>
        </p>
      </div>
    </div>
  )
}

export default page
