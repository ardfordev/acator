import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginStaf() {
  return (
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
              <Input id="email" required type="email" placeholder="kanigara@upr.ac.id"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Password</Label>
              <Input id="paswword" required type="password" placeholder="*****"/>
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" asChild>
                <Link href="/staf/profile">Login</Link>
              </Button>
            </div>
          </div>
        </form>
      </div>  
    </main>
  )
}
