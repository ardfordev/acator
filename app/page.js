import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Button } from "@/components/ui/button"
import { Instagram, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <section className='bg-white'>
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
        <div className='flex items-center justify-center mt-4 md:mt-0 space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-green-500">
                Login
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/mahasiswa/login">Login Mahasiswa</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dosen/login">Login Dosen</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/staf/login">Login Staff</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className='container bg-gray-50 h-screen mx-auto px-4 py-20 text-center'>
        <h2 className='text-4-xl font-extrabold tracking-tighter text-green-500 sm:text-6xl'>ACATOR</h2>
        <h2 className='text-4-xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl'>Academic</h2>
        <h2 className='text-4-xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl'>Navigator</h2>
        <p className='max-w-md mx-auto text-gray-500 text-base mt-10'>ACATOR adalah sebuah website untuk management Kartu Rencana Studi mahasiswa Fakultas Hukum Universitas Palangka Raya</p>
      </main>

      <footer className='container mx-auto px-4 py-10 flex items-center justify-center'>
        <div className='flex space-x-6'>
          <Link href="#"><Instagram className='h-4 w-4' /></Link>
          <Link href="#"><Globe className='h-4 w-4' /></Link>
        </div>
      </footer>
    </section>
  )
}
