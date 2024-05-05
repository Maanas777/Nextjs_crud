"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {

  const router=useRouter()

 const [title, settitle] = useState('')
 const [description, setdescription] = useState('')

 const handlesubmit= async(e)=>{
  e.preventDefault()
  if(!title|| !description){
    alert('Empty fields')
    return 
  }

  try {

    const res= await fetch("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({title, description})
    })

    if(res.ok){
      router.push('/')
      router.refresh()
    }
    else {
      throw new Error("Failed to create a topic");
    }
 
  } catch (error) {
    console.log(error)
    
  }

 }


  return (
    <form onSubmit={handlesubmit} className="flex flex-col gap-3">
      <input onChange={(e)=>settitle(e.target.value)}
      value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
      />

<input onChange={(e)=>setdescription(e.target.value)}
value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

<button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>

    </form>
  );
};

export default page;
