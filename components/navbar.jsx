import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-red-500 px-8 py-3">
    <Link className="text-white font-bold" href={"/"}>
      CRUD NEXT APP
    </Link>
    <Link className="bg-white p-2" href={"/addTopic"}>
      Add Topic
    </Link>
  </nav>
  )
}

export default navbar
