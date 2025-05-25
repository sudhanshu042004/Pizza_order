"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const route = useRouter();
  return (
    <div className="flex h-screen justify-center items-center" >
      <div>
        <div className="mb-2">
          <h2 className="text-center font-medium text-4xl" >Order the pizza here</h2>
        </div>
        <div className="flex justify-center" >
        <button onClick={()=>route.push('/login')} className="py-3 px-4 bg-gray-500 rounded-lg text-white " >Get Started</button>
        </div>
      </div>
    </div>
  );
}
