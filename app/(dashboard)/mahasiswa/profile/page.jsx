import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import HeaderMahasiswa from '@/components/header-mahasiswa'
import FooterMahasiswa from '@/components/footer-mahasiswa'

export default function MahasiswaProfile() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">

      <HeaderMahasiswa />
      
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
      
      <FooterMahasiswa />

    </div>
  )
}
