import NavigationDosen from "@/components/nav-dosen"

export const metadata = {
  title: 'Dashboard Dosen | ACATOR Dashboard',
  description: 'Academic Navigator Dashboard',
}

export default function DosenLayout({ children }) {
  return (
    <div className='flex bg-white h-screen w-full'>
      <NavigationDosen />
      {children}
    </div>
  )
}
