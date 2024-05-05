"use client"

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'


const RemoveBtn = ({id}) => {
  let router=useRouter()

  const remove=()=>{

   const confirmed= confirm(' Are you sure to delete')
   
   if(confirmed){
     
     fetch(`http://localhost:3000/api/topics?id=${id}`,{method:"DELETE"})
  
    router.refresh()

   }

  }


  return (
   <button onClick={remove} className='text-red-400'>
<HiOutlineTrash size={24}/>
   </button>
  )
}

export default RemoveBtn
