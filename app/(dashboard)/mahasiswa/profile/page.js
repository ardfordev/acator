"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Instagram, Globe, LogOut, AlignLeft } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function MahasiswaProfile() {
  
  const pathname = usePathname()

  return (
    <div className='flex bg-white h-screen w-full'>
      <div className="hidden md:flex md:flex-col w-72 bg-green-50 border-r">
        <div className="flex items-center p-4">
          <Link className="flex" href="/mahasiswa/profile">
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
                pathname === "/mahasiswa/profile" ? "bg-green-100" : ""
              )} href="/mahasiswa/profile">Profile</Link>
            <Link className={cn(
                "flex px-4 py-1 rounded-lg text-sm",
                pathname === "/mahasiswa/informasi-perkuliahan" ? "bg-green-100" : ""
              )} href="/mahasiswa/informasi-perkuliahan">Informasi Perkuliahan</Link>
            <Link className={cn(
                "flex px-4 py-1 rounded-lg text-sm",
                pathname === "/mahasiswa/registrasi-krs" ? "bg-green-100" : ""
              )} href="/mahasiswa/registrasi-krs">Registrasi KRS</Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between md:justify-end items-center h-16 px-6 border-b">
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost"><AlignLeft className='h-4 w-4' /></Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Acator Dashboard</SheetTitle>
                </SheetHeader>
                <Link className={cn(
                    "flex px-4 py-1 rounded-lg text-sm",
                    pathname === "/mahasiswa/profile" ? "bg-green-100" : ""
                  )} href="/mahasiswa/profile">Profile</Link>
                <Link className={cn(
                    "flex px-4 py-1 rounded-lg text-sm",
                    pathname === "/mahasiswa/informasi-perkuliahan" ? "bg-green-100" : ""
                  )} href="/mahasiswa/informasi-perkuliahan">Informasi Perkuliahan</Link>
                <Link className={cn(
                    "flex px-4 py-1 rounded-lg text-sm",
                    pathname === "/mahasiswa/registrasi-krs" ? "bg-green-100" : ""
                  )} href="/mahasiswa/registrasi-krs">Registrasi KRS</Link>
              </SheetContent>
            </Sheet>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>DT</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Diahadi Triwasti</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    diahaditriwasti@upr.ac.id
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link className='flex items-center' href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className='p-6'>
            <div className='mb-5'>
              <h1 className="text-base font-semibold text-gray-900">Informasi Mahasiswa</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Mahasiswa</Label>
                <Input className="w-1/2" id="name" value="Diahadi Triwasti" type="text" disabled/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nim">NIM</Label>
                <Input className="w-1/2" id="nim" value="213010601027" type="text" disabled/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fakultas">Fakultas/Jurusan</Label>
                <Input className="w-1/2" id="fakultas" value="Hukum/Ilmu Hukum" type="text" disabled/>
              </div>
            </div>
          </div>
        </div>
        <footer className='container mx-auto p-4 flex border-t items-center justify-between'>
          <div className='flex space-x-6'>
            <Link href="#"><Instagram className='h-4 w-4' /></Link>
            <Link href="#"><Globe className='h-4 w-4' /></Link>
          </div>
          <div className='text-sm text-gray-500'>Mahasiswa</div>
        </footer>
      </div>
    </div>
  )
}
