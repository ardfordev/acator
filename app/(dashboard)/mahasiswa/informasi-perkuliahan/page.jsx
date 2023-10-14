import React from 'react'
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import FooterMahasiswa from '@/components/footer-mahasiswa'
import HeaderMahasiswa from '@/components/header-mahasiswa'

export default function InformasiPerkuliahan() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">

      <HeaderMahasiswa />

      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Perkuliahan</h1>
          </div>
          <div className="w-full">
            <Table>
              <TableHeader className="bg-green-100">
                <TableRow>
                  <TableHead><span className='text-gray-900'>Batch</span></TableHead>
                  <TableHead><span className='text-gray-900'>Status</span></TableHead>
                  <TableHead><span className='text-gray-900'>Total SKS</span></TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2021/2022 Ganjil</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      Aktif
                    </span>
                  </TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <Button className="bg-green-500" size="sm"><FileDown className='mr-2 h-4 w-4' />Cetak KRS</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2021/2022 Genap</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      Aktif
                    </span>
                  </TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <Button className="bg-green-500" size="sm"><FileDown className='mr-2 h-4 w-4' />Cetak KRS</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2022/2023 Ganjil</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      Aktif
                    </span>
                  </TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <Button className="bg-green-500" size="sm"><FileDown className='mr-2 h-4 w-4' />Cetak KRS</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2022/2023 Genap</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      Aktif
                    </span>
                  </TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <Button className="bg-green-500" size="sm"><FileDown className='mr-2 h-4 w-4' />Cetak KRS</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023/2024 Ganjil</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                      Aktif
                    </span>
                  </TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <Button className="bg-green-500" size="sm"><FileDown className='mr-2 h-4 w-4' />Cetak KRS</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      <FooterMahasiswa />

    </div>
  )
}
