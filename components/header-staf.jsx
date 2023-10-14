"use client"

import React from 'react'
import Link from 'next/link'

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
import { LogOut, AlignLeft } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function HeaderStaf() {

  const pathname = usePathname()

  return (
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
                pathname === "/staf/profile" ? "bg-green-100" : ""
              )} href="/staf/profile">Profile</Link>
            <Link className={cn(
                "flex px-4 py-1 rounded-lg text-sm",
                pathname === "/staf/kemahasiswaan" ? "bg-green-100" : ""
              )} href="/staf/kemahasiswaan">Kemahasiswaan</Link>
          </SheetContent>
        </Sheet>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Kanigara, S.H.</p>
              <p className="text-xs leading-none text-muted-foreground">
                kanigara@upr.ac.id
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
  )
}
