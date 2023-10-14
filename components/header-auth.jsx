import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'

export default function HeaderAuth() {
  return (
    <header className='container bg-white mx-auto border-b p-4 md:flex md:items-center md:justify-between sticky top-0'>
      <div className='flex items-center justify-between'>
        <Image
          src={logo}
          alt='Universitas Palangka Raya'
          width={24}
          priority
        />
        <span className='sr-only'>Universitas Palangka Raya</span>
        <nav className='md:ml-10 md:pr-4 md:space-x-8'>
          <Link className='text-base font-medium text-gray-500 hover:text-gray-900 ' href="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}
