"use client";
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
    const {data: session,status } = useSession();
    console.log(session)
  return (
    <div>page</div>
  )
}

export default page
