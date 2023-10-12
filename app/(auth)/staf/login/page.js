import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Globe } from "lucide-react"

export default function Login() {
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
      </header>

      <main className='bg-gray-100 container min-h-screen flex items-center justify-center'>
        <div className='w-96 rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200'>
          <div className='space-y-2 text-center'>
            <div className='flex justify-center'>
              <Image
                src={logo}
                alt='Universitas Palangka Raya'
                priority
              />
            </div>
            <h1 className='text-2xl font-bold'>Login Staf</h1>
            <p className='text-gray-500'>Universitas Palangka Raya</p>
          </div>
          <form>
            <div className='space-y-4'>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Password</Label>
                <Input id="paswword" required type="password" />
              </div>
              <div className="space-y-2">
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Login</Button>
              </div>
            </div>
          </form>
        </div>  
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
