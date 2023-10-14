import React from 'react'
import Link from 'next/link'
import { Instagram, Globe } from "lucide-react"

export default function FooterDosen() {
  return (
    <footer className='container mx-auto p-4 flex border-t items-center justify-between'>
      <div className='flex space-x-6'>
        <Link href="#"><Instagram className='h-4 w-4' /></Link>
        <Link href="#"><Globe className='h-4 w-4' /></Link>
      </div>
      <div className='text-sm text-gray-500'>Dosen</div>
    </footer>
  )
}
