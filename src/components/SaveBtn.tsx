"use client"

import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"

export default function SaveBtn() {
  const [isSaved, setIsSaved] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="rounded-full p-2 text-xl"
      onClick={() => setIsSaved(!isSaved)}
    >
      {isSaved ? <FaStar className="text-primary" /> : <FaRegStar />}
    </button>
  )
}