"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export default function NavigationStaf() {

  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:flex-col w-72 bg-green-50 border-r">
      <div className="flex items-center p-4">
        <Link className="flex" href="/staf/profile">
          <Image
            src={logo}
            alt='Universitas Palangka Raya'
            width={24}
            height={24}
            priority
          />
          <h1 className="ml-2 text-lg text-gray-900 font-semibold">ACATOR Dashboard</h1>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          <Link className={cn(
              "flex px-4 py-1 rounded-lg text-sm",
              pathname === "/staf/profile" ? "bg-green-100" : ""
            )} href="/staf/profile">Profile</Link>
          <Link className={cn(
              "flex px-4 py-1 rounded-lg text-sm",
              pathname === "/staf/kemahasiswaan" ? "bg-green-100" : ""
            )} href="/staf/kemahasiswaan">Kemahasiswaan</Link>
        </nav>
      </div>
    </div>
  )
}
