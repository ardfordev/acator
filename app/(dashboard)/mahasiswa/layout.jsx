import NavigationMahasiswa from "@/components/nav-mahasiswa"

export const metadata = {
  title: 'Dashboard Mahasiswa | ACATOR Dashboard',
  description: 'Academic Navigator Dashboard',
}

export default function MahasiswaLayout({ children }) {
  return (
    <div className='flex bg-white h-screen w-full'>
      <NavigationMahasiswa />
      {children}
    </div>
  )
}
