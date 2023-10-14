import React from 'react'
import Link from 'next/link'
import { Instagram, Globe } from "lucide-react"

export default function FooterAuth() {
  return (
    <footer className='container mx-auto px-4 py-10 flex items-center justify-center'>
      <div className='flex space-x-6'>
        <Link href="#"><Instagram className='h-4 w-4' /></Link>
        <Link href="#"><Globe className='h-4 w-4' /></Link>
      </div>
    </footer>
  )
}
